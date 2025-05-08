'use client';

import { Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import baseAxios from "@/api/baseAxios";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyCheckbox from "@/components/Checkbox/MyCheckbox";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { U0MyValidateEmpty } from "@/utils/validateForm";
import { notifications } from "@mantine/notifications";
import { IconCalendar } from "@tabler/icons-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export interface I_cw38zkpvg4_Create {
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


export default function F_cw38zkpvg4_Create() {
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

    useEffect(() => {
        if (data?.coeSchoolYears?.length > 0) {
            form.setFieldValue("coeSchoolYearId", data?.coeSchoolYears[0].id);
        }
    }, [data]);

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

    const form = useForm<I_cw38zkpvg4_Create>({
        initialValues: {
            code: '',
            name: '',
            note: '',
            coeSchoolYearId: data?.semesters[0]?.coeSchoolYearId,
            numberWeek: 0,
            isCurrent: false,
            startDate: new Date(),
            endDate: new Date(2025, 11, 31),
        },
        validate: {
            code: (value) => {
                if (!value) {
                    return 'Mã không được để trống';
                }

                if (data?.semesters && data.semesters.some((grade: any) => grade.code === value)) {
                    return 'Mã đã tồn tại';
                }
            },
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
    });

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
                id: 0,
                code: form.values.code,
                name: form.values.name,
                note: form.values.note,
                concurrencyStamp: 'string',
                isEnabled: true,
                startDate: new Date(form.values.startDate!),
                endDate: new Date(form.values.endDate!),
                numberWeek: form.values.numberWeek,
                isCurrent: form.values.isCurrent,
                coeSchoolYearId: form.values.coeSchoolYearId
            };

            console.log(formData);

            await baseAxios.post("/COESemester/Create", formData);

            queryClient.invalidateQueries({ queryKey: ["F_cw38zkpvg4_Read"] })

            form.reset();

        } catch (error) {
            console.log(error);
            notifications.show({
                message: "Có lỗi xảy ra khi thêm dữ liệu.",
                color: "red",
            });
        }
    };

    return (
        <MyButtonCreate
            label="Thêm"
            modalSize={"40%"}
            title="Chi tiết Danh mục Học kì"
            onSubmit={handleSubmit}
            form={form}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <MyTextInput
                    label="Mã học kì"
                    withAsterisk
                    {...form.getInputProps("code")}
                    error={form.errors.code}
                    maxLength={5}
                />
                <MyTextInput
                    label="Tên học kì"
                    withAsterisk
                    {...form.getInputProps("name")}
                    error={form.errors.name}
                />
                {/* <Select w={"100%"} label="Khoa quản lý:" data={["Ngoại ngữ"]} defaultValue="Ngoại ngữ" /> */}

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
                <MySelect w={"100%"}
                    label="Năm học"
                    value={form.values.coeSchoolYearId?.toString() || ""}
                    error={form.errors.coeSchoolYearId}
                    data={data?.coeSchoolYears?.map((schoolYear: any) => ({
                        value: schoolYear.id.toString(),
                        label: schoolYear.name
                    })) || []}
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
                label="Ghi chú:"
                {...form.getInputProps("note")} />

        </MyButtonCreate>
    );
}