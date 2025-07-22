import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyDateInput, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { MyButtonCreateUpdate, MySelect } from "aq-fe-framework/core";

export default function AccreditationPhaseCreateOrUpdate({ data }: { data?: any }) {
    const form = useForm({
        initialValues: data ?? {},
    });

    return (
        <MyButtonCreateUpdate
            onSubmit={() => { return false }}
            form={form} isUpdate={!!data}
            modalProps={{ size: "70%" }}
            scrollAreaAutosizeProps={{ h: "auto" }}
        >
            <SimpleGrid cols={2} spacing="md">
                <Stack>
                    <MySelect
                        label="Chương trình đào tạo"
                        data={mockProgramList}
                        {...form.getInputProps("programCode")}
                    />
                    <MyTextInput
                        label="Mã giai đoạn Kiểm định"
                        {...form.getInputProps("cycleCode")}
                    />
                    <MyTextInput
                        label="Tên giai đoạn Kiểm định"
                        {...form.getInputProps("cycleName")}
                    />
                </Stack>
                <Stack>
                    <MySelect
                        label="Trạng thái giai đoạn"
                        data={mockStatusList}
                        {...form.getInputProps("status")}
                    />
                    <MyDateInput
                        label="Ngày Bắt đầu giai đoạn"
                        {...form.getInputProps("startDate")}
                    />
                    <MyDateInput
                        label="Ngày Kết thúc giai đoạn"
                        {...form.getInputProps("endDate")}
                    />

                </Stack>
            </SimpleGrid>
            <MyTextArea
                label="Ghi chú"
                {...form.getInputProps("note")}
                minRows={2}
            />
        </MyButtonCreateUpdate>
    )
}

// Mock cho select chương trình đào tạo
export const mockProgramList = [
    { value: "CNTT", label: "Công nghệ Thông tin" },
    { value: "QTKD", label: "Quản trị Kinh doanh" }
];

// Mock cho select trạng thái giai đoạn
export const mockStatusList = [
    "Đang thực hiện",
    "Chưa bắt đầu",
    "Hoàn thành"
];