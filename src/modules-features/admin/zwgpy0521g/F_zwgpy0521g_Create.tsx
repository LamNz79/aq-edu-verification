'use client'

import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
interface I_zwgpy0521g {
    phanHe?: string;
    hostMailServer?: string;
    outgoingPort?: number;
    incomingPort?: number;
    SSL?: boolean;
    userName?: string;
    password?: string;
}
export default function F_zwgpy0521g_Create({ values }: { values?: any }) {
    const form = useForm<I_zwgpy0521g>({
        initialValues: {
            phanHe: '',
            hostMailServer: '',
            outgoingPort: undefined,
            incomingPort: undefined,
            SSL: undefined,
            userName: '',
            password: '',
        },
        validate: {
            phanHe: (value) => (value ? null : "Phân hệ không được để trống"),
            hostMailServer: (value) => (value ? null : "Host mail server không được để trống"),
            outgoingPort: (value) => (value ? null : "Outgoing port không được để trống"),
            incomingPort: (value) => (value ? null : "Incoming port không được để trống"),
            SSL: (value) => (value !== undefined ? null : "SSL không được để trống"),
            userName: (value) => (value ? null : "Username không được để trống"),
            password: (value) => (value ? null : "Password không được để trống"),
        },
    });

    return (
        <MyButtonCreate<I_zwgpy0521g> title="Danh mục cấu hình mail" form={form} onSubmit={() => { }}>
            <MyFlexColumn>
                <MySelect label="Phân hệ" searchable
                    data={
                        [
                            { value: "Toàn hệ thống", label: "Toàn hệ thống" },
                            { value: "Tuyển sinh", label: "Tuyển sinh" },
                            { value: "Sinh viên", label: "Sinh viên" },
                            { value: "Khảo thí", label: "Khảo thí" },
                        ]

                    }
                >
                </MySelect>
                <MyTextInput name="hostMailServer" label="Host mail server" required />
                <MyTextInput name="outgoingPort" label="Outgoing port" required />
                <MyTextInput name="incomingPort" label="Incoming port" required />
                <MyTextInput name="SSL" label="SSL" required />
                <MyTextInput name="userName" label="Username" required />
                <PasswordInput name="password" label="Password" required />
            </MyFlexColumn>
        </MyButtonCreate>
    );
}