"use client";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { ICouncilRole } from "./CouncilRoleTable";

export default function CouncilRoleUpdateButton({ values }: { values?: ICouncilRole }) {

    const form = useForm<ICouncilRole>({
        mode: "uncontrolled",
        initialValues: values,
        validate: {
            code: (value) => value?.trim() ? null : "Mã vai trò là bắt buộc",
            name: (value) => value?.trim() ? null : "Tên vai trò là bắt buộc",
        }
    });

    return (
        <MyActionIconUpdate
            title="Chi tiết vai trò trong hội đồng"
            modalSize="50%"
            form={form}
            onSubmit={() => { }}
        >
            <MyTextInput label="Mã vai trò" {...form.getInputProps("code")} disabled={!!values} withAsterisk />
            <MyTextInput label="Tên vai trò" {...form.getInputProps("name")} withAsterisk />
            <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </MyActionIconUpdate>
    );
}
