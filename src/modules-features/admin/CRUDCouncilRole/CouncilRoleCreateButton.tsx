"use client";

import { useForm } from "@mantine/form";
import { MyButtonCreate, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { ICouncilRole } from "./CouncilRoleTable";

export default function CouncilRoleCreateButton() {

    const form = useForm<ICouncilRole>({
        mode: "uncontrolled",
        initialValues: {
            note: "",
            code: "",
            name: ""
        },
        validate: {
            code: (value) => value?.trim() ? null : "Mã vai trò là bắt buộc",
            name: (value) => value?.trim() ? null : "Tên vai trò là bắt buộc",
        }
    });

    return (
        <MyButtonCreate
            title="Chi tiết vai trò trong hội đồng"
            modalSize="50%"
            form={form}
            onSubmit={() => {}}
        >
            <MyTextInput label="Mã vai trò" {...form.getInputProps("code")} withAsterisk/>
            <MyTextInput label="Tên vai trò" {...form.getInputProps("name")} withAsterisk/>
            <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}
