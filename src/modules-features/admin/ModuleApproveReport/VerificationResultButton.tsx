import { Button, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { MyButtonModal, MyCheckbox, MySelect, MyTextArea } from "aq-fe-framework/components";
import { IApproveReport } from "./ApproveReportTable";

const statusOptions = [
    { value: "Đạt yêu cầu", label: "Đạt yêu cầu" },
    { value: "Cần hiệu chỉnh", label: "Cần hiệu chỉnh" },
    { value: "Chưa kiểm tra", label: "Chưa kiểm tra" },
];

export default function VerificationResultButton({data}: {data: IApproveReport}) {
    const disclosure = useDisclosure();
    const form = useForm<IApproveReport>({
        initialValues: {
           ...data
        },
    });

    const handleSave = () => {
        disclosure[1].close();
    };

    return (
        <MyButtonModal
            label="Kiểm tra"
            title="Chi tiết kết quả kiểm tra"
            disclosure={disclosure}
            crudType="default"
            modalSize="md"
            variant="transparent"
        >
            <Stack gap="md">
                <MySelect
                    label="Trạng thái kiểm tra:"
                    data={statusOptions}
                    placeholder="Chọn trạng thái"
                    {...form.getInputProps("trangThaiKiemTra")}
                />
                <MyTextArea
                    label="Nhận xét:"
                    minRows={4}
                    placeholder="Nhập nhận xét..."
                    {...form.getInputProps("nhanXet")}
                />
                <Group justify="space-between" align="center">
                    <MyCheckbox
                        label="Gửi thông báo"
                        {...form.getInputProps("guiThongBao", { type: "checkbox" })}
                    />
                    <Button onClick={handleSave} color="green">Lưu</Button>
                </Group>
            </Stack>
        </MyButtonModal>
    );
}
