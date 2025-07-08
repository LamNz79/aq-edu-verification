"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MyTextInput, MyNumberInput, MySelect, MyTextArea, MyDateInput } from "aq-fe-framework/components";
import { AccreditationCycle } from "./SetUpPeriodicReportTable";


export default function SetUpPeriodicReportUpdateButton({ values }: { values: AccreditationCycle }) {

    const form = useForm<AccreditationCycle>({
        initialValues: values,
    });

    return (
        <MyActionIconUpdate
            title="Chi tiết chu kỳ"
            modalSize="70%"
            form={form}
            onSubmit={() => { }}
        >
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
                <Stack>
                    <MySelect
                        label="Chương trình đào tạo"
                        data={[
                            { value: "CNTT", label: "CNTT - Công nghệ Thông tin" },
                            { value: "QTKD", label: "QTKD - Quản trị Kinh doanh" },
                        ]}
                        {...form.getInputProps("programCode")}
                    />
                    <MyTextInput label="Mã Chu kỳ kiểm định" {...form.getInputProps("cycleCode")} />
                    <MyTextInput label="Tên Chu kỳ kiểm định" {...form.getInputProps("cycleName")} />
                </Stack>
                <Stack>
                    <MySelect
                        label="Trạng thái chu kỳ"
                        data={[
                            { value: "Đang thực hiện", label: "Đang thực hiện" },
                            { value: "Đã hoàn thành", label: "Đã hoàn thành" },
                            { value: "Chưa bắt đầu", label: "Chưa bắt đầu" },
                            { value: "Đã hủy", label: "Đã hủy" },
                        ]}
                        {...form.getInputProps("status")}
                    />
                    <MyDateInput label="Ngày bắt đầu chu kỳ" {...form.getInputProps("startDate")} />
                    <MyDateInput label="Ngày kết thúc chu kỳ" {...form.getInputProps("endDate")} />
                </Stack>
            </SimpleGrid>
            <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </MyActionIconUpdate>
    );
}