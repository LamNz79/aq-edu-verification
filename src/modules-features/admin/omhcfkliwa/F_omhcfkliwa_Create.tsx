'use client';

import { Checkbox, Grid, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import baseAxios from "@/api/baseAxios";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconCalendar } from "@tabler/icons-react";
import { F_omhcfkliwa_Read } from "./F_omhcfkliwa_Read";







export default function F_omhcfkliwa_Create() {
    const disc = useDisclosure(false)
    const currentYear = new Date().getFullYear();

    const form = useForm<F_omhcfkliwa_Read>({
        mode: "controlled",
        initialValues: {
            code: "",
            name: "",
            startDate: new Date(Date.UTC(currentYear, 0, 1)),
            endDate: new Date(Date.UTC(currentYear, 11, 31)),
            startDateHC: new Date(Date.UTC(currentYear, 0, 1)),
            endDateHC: new Date(Date.UTC(currentYear, 11, 31)),
            isEnabled: true,
            isCurrent: false,
            note: "",
        },
        validate: {
            name: (value) => value?.trim().length === 0 ? "Tên năm học không được để trống" : undefined,
            code: (value) => {
                if (!value) return "Mã năm học không được để trống";
                if (value.length > 4) return "Mã năm học tối đa 4 ký tự";
                return null;
            },
            endDate: (value, values) => {
                const year = 2000 + parseInt(values.code?.slice(-2) || "", 10); // Lấy 2 số cuối và chuyển thành năm
                if (isNaN(year)) return "Mã năm học không hợp lệ"; // Nếu không phải số, báo lỗi
                if (value && values.startDate && value < values.startDate) {
                    return "Ngày kết thúc NH phải lớn hơn ngày bắt đầu NH"
                }
                return null;
            },

            startDateHC: (value, values) => {
                const year = 2000 + parseInt(values.code?.slice(-2) || "", 10); // Lấy 2 số cuối và chuyển thành năm
                if (isNaN(year)) return "Mã năm học không hợp lệ";
                const expectedStartDate = new Date(year, 0, 1);
                return value?.toDateString() !== expectedStartDate.toDateString()
                    ? `Ngày bắt đầu HC phải là 01/01/${year}`
                    : null;
            },

            endDateHC: (value, values) => {
                const year = 2000 + parseInt(values.code?.slice(-2) || "", 10); // Lấy 2 số cuối và chuyển thành năm
                if (isNaN(year)) return "Mã năm học không hợp lệ";

                const expectedEndDate = new Date(year, 11, 31);
                if (value?.toDateString() !== expectedEndDate.toDateString()) {
                    return `Ngày kết thúc HC phải là 31/12/${year}`
                }
                if (value < values.startDateHC!) {
                    return "Ngày kết thúc HC phải lớn hơn ngày bắt đầu HC"
                }
                return null;
            },
        }
    });



    async function handleSubmit(value: F_omhcfkliwa_Read) {
        const response = await baseAxios.post("/COESchoolYear/Create", form.getValues());
        if (response.data.isSuccess === 0 && response.data.data.Code === "Mã đã tồn tại") {

            notifications.show({
                title: "Lỗi",
                message: 'Mã đã tồn tại',
                color: "red"
            })
            throw Error("Mã đã tồn tại")
        }
        const errorMessage = Object.values(response.data?.data || {})[0];

        if (response.data.isSuccess === 0 && errorMessage === "Mã năm học không đúng định dạng, vui lòng nhập 4 ký tự số") {

            notifications.show({
                title: "Lỗi",
                message: 'Vui lòng nhập đúng định dạng mã (4 chữ số)',
                color: "red"
            })
            throw Error("Vui lòng nhập đúng định dạng mã (4 chữ số)")
        }

        return response
    }



    return (
        <MyButtonCreate
            label="Thêm"
            modalSize={"60%"}
            form={form}
            title="Chi tiết năm học"
            onSubmit={handleSubmit}

        >
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }} py={0}>
                    <Group pb={10}>
                        <MyTextInput label="Mã Năm học" flex={1}
                            {...form.getInputProps("code")}
                        />
                    </Group>
                    <Group pb={10}>
                        <DateInput label="Ngày bắt đầu NH" flex={1} rightSection={<IconCalendar></IconCalendar>}
                            value={form.values.startDate}
                            {...form.getInputProps("startDate")}
                        />
                    </Group>
                    <Group pb={10}>
                        <MyDateInput label="Ngày bắt đầu HC" flex={1} rightSection={<IconCalendar></IconCalendar>}
                            value={form.values.startDateHC}

                            {...form.getInputProps("startDateHC")}
                        // onChange={(date)=>console.log(date?.toISOString())}
                        />
                    </Group>
                </Grid.Col >
                <Grid.Col span={{ base: 12, md: 6 }} py={0}>
                    <Group pb={10}>
                        <MyTextInput label="Tên năm học" flex={1}
                            {...form.getInputProps("name")}

                        />
                    </Group>
                    <Group pb={10}>
                        <DateInput label="Ngày kết thúc NH" flex={1} rightSection={<IconCalendar></IconCalendar>}
                            value={form.values.endDate}
                            onChange={(date) => date && form.setFieldValue("endDate", new Date(date))}

                        />
                    </Group>
                    <Group pb={10}>
                        <DateInput
                            label="Ngày kết thúc HC"
                            flex={1}
                            rightSection={<IconCalendar></IconCalendar>}
                            value={form.values.endDateHC}
                            {...form.getInputProps("endDateHC")}

                        />
                    </Group>
                </Grid.Col>
                <Grid.Col span={12} py={0}>
                    <Group pb={10}>
                        <MyTextArea
                            label="Ghi chú"
                            flex={1}
                            {...form.getInputProps("note")}
                        />
                    </Group>
                </Grid.Col>
                <Grid.Col span={12} py={0}>
                    <Group pb={10}>
                        <Checkbox label="Hiện hành"
                            checked={form.values.isCurrent}
                            onChange={(event) => form.setFieldValue("isCurrent", event.currentTarget.checked)} ></Checkbox>
                    </Group>
                </Grid.Col>
            </Grid>
        </MyButtonCreate >
    );
}


