
'use client'
import baseAxios from "@/api/baseAxios"
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate"
import MyCheckbox from "@/components/Checkbox/MyCheckbox"
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput"
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput"
import { U0MyValidateEmpty } from "@/utils/validateForm"
import { Group, Select } from '@mantine/core'
import { useForm, UseFormReturnType } from "@mantine/form"
import { notifications } from "@mantine/notifications"
import { IconCalendar } from "@tabler/icons-react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

interface ICreateUserViewModel {
    id?: number; // STT
    code?: string; // Mã năm học - học kì
    name?: string; // Tên năm học - học kì
    note?: string; // Ghi chú
    isEnabled?: boolean; // Cho phép hiện
    concurrencyStamp?: string; // ID thay đổi
    coeSchoolYearId?: number; // Mã năm học
    numberWeek?: number; // Số tuần
    isCurrent?: boolean; // Hiện hành
    startDate?: Date | undefined; // Ngày bắt đầu
    endDate?: Date | undefined; // Ngày kết thúc
    semesters?: Array<any>; // Semesters
    coeSchoolYears?: Array<any>; // Năm học
}

export default function F_cw38zkpvg4_Update(
    { values }: { values: ICreateUserViewModel }
) {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["combinedData"],

        queryFn: async () => {
            const [semestersResponse, yearResponse] = await Promise.all([
                baseAxios.get("/COESemester/GetAll", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }),
                baseAxios.get("/COESchoolYear/GetAll", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }),
            ]);

            return {
                semesters: semestersResponse.data.data,
                coeSchoolYears: yearResponse.data.data
            };
        },
    });

    const validateDate = (message: string) => {
        return (value: any) => {
            if (!value) {
                return message;
            }
            const date = new Date(value);
            if (isNaN(date.getTime())) {
                return message;
            }
            return null;
        };
    };

    const form = useForm<ICreateUserViewModel>({
        initialValues: {
            ...values,
            startDate: new Date(values.startDate!),
            endDate: new Date(values.endDate!),
        },
        validate: {
            name: U0MyValidateEmpty("Tên không được để trống") as any,
            startDate: validateDate("Ngày bắt đầu không được để trống") as any,
            endDate: (value, values) => {
                if (!value) {
                    return 'Ngày kết thúc không được để trống';
                }

                if (new Date(value) <= new Date(values.startDate!)) {
                    return 'Ngày kết thúc phải lớn hơn ngày bắt đầu';
                }
            },
            numberWeek: (value) => {
                if (value === undefined || value === null) {
                    return "Số tuần không được để trống"
                }

                if (value <= 0) {
                    return "Số tuần phải lớn hơn 0"
                }
                return null
            },
            coeSchoolYearId: U0MyValidateEmpty("Năm học không được để trống") as any,
        }

    })

    useEffect(() => {
        if (form.values.startDate && form.values.endDate) {
            const start = new Date(form.values.startDate);
            const end = new Date(form.values.endDate);

            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                const diffInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
                const weeks = Math.ceil(diffInDays / 7); // Chia số ngày cho 7 để lấy số tuần

                form.setFieldValue("numberWeek", weeks);
            }
        }
    }, [form.values.startDate, form.values.endDate]);

    const handleSubmit = async () => {
        const validationResult = form.validate();
        if (validationResult.hasErrors) {
            return;
        }

        // Gửi dữ liệu lên server
        try {
            const formData = {
                id: form.values.id,
                code: form.values.code,
                name: form.values.name,
                note: form.values.note,
                concurrencyStamp: form.values.concurrencyStamp,
                isEnabled: true,
                startDate: new Date(form.values.startDate!),
                endDate: new Date(form.values.endDate!),
                numberWeek: form.values.numberWeek,
                isCurrent: form.values.isCurrent,
                coeSchoolYearId: form.values.coeSchoolYearId
            };

            await baseAxios.post("/COESemester/Update", formData);

            queryClient.invalidateQueries({ queryKey: ["F_cw38zkpvg4_Read"] })

        } catch (error) {
            notifications.show({
                message: "Có lỗi xảy ra khi sửa dữ liệu.",
                color: "red",
            });
        }
    };

    return (
        <MyActionIconUpdate
            modalSize={"40%"}
            onSubmit={handleSubmit}
            form={form as unknown as UseFormReturnType<Record<string, any>>}
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <MyTextInput
                    disabled
                    label="Mã học kỳ"
                    withAsterisk
                    {...form.getInputProps("code")}
                    error={form.errors.code}


                />
                <MyTextInput
                    label="Tên học kỳ"
                    withAsterisk
                    {...form.getInputProps("name")}
                    error={form.errors.name}
                />
                <Group>
                    <MyDateInput label="Ngày bắt đầu"
                        {...form.getInputProps("startDate")}
                        onChange={(value) => {
                            if (value) {
                                form.setFieldValue("startDate", new Date(value));
                            }
                        }}
                        rightSection={<IconCalendar></IconCalendar>}
                        flex={1}
                    />

                </Group>
                <Group>
                    <MyDateInput label="Ngày kết thúc" placeholder="DD/MM/YYYY"
                        {...form.getInputProps("endDate")}
                        onChange={(value) => {
                            if (value) {
                                form.setFieldValue("endDate", new Date(value));
                            }
                        }}
                        rightSection={<IconCalendar></IconCalendar>}
                        flex={1}
                    />

                </Group>
                <Select w={"100%"}
                    label="Năm học"
                    value={form.values.coeSchoolYearId?.toString()}
                    error={form.errors.coeSchoolYearId}
                    data={data?.coeSchoolYears?.map((schoolYear: any) => ({
                        value: schoolYear.id.toString(),
                        label: schoolYear.name
                    }))}
                    onChange={(value) => {
                        if (value) {
                            form.setFieldValue("coeSchoolYearId", Number(value));
                        }
                    }}
                />
                <MyTextInput
                    label="Số tuần học"
                    {...form.getInputProps("numberWeek")}
                    disabled
                />

            </div>
            <MyCheckbox label='Hiện hành' {...form.getInputProps("isCurrent", { type: 'checkbox' })} />

            <MyTextInput
                label="Ghi chú"
                {...form.getInputProps("note")}
                onChange={(event) => form.setFieldValue("note", event.target.value)}
            />
        </MyActionIconUpdate>
    )
}

