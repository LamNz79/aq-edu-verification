'use client'

import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { useForm } from "@mantine/form";
export interface I_zwgpy0521g {
    phanHe?: string;
    hostMailServer?: string;
    outgoingPort?: number;
    incomingPort?: number;
    SSL?: boolean;
    userName?: string;
    password?: string;
}
export default function F_zwgpy0521g_Update({values}: {values?: any}) {
    const form_multiple = useForm<I_zwgpy0521g>({
        initialValues: {
            phanHe: values?.phanHe,
            hostMailServer: values?.hostMailServer,
            outgoingPort: values?.outgoingPort,
            incomingPort: values?.incomingPort,
            SSL: values?.SSL,
            userName: values?.userName,
            password: values?.password,
        },
        validate: {
            phanHe: (value) => (value ? null : "Phân hệ không được để trống"),
            hostMailServer: (value) => (value ? null : "Host mail server không được để trống"),
            outgoingPort: (value) => (value ? null : "Outgoing port không được để trống"),
            incomingPort: (value) => (value ? null : "Incoming port không được để trống"),
            SSL: (value) => (value!==undefined ? null : "SSL không được để trống"),
            userName: (value) => (value ? null : "Username không được để trống"),
            password: (value) => (value ? null : "Password không được để trống"),
        },
    });
    if (values){
    return (
        <MyActionIconUpdate<I_zwgpy0521g> title="Danh mục cấu hình mail" form={form_multiple} onSubmit={() => {}}>
            <MyFlexColumn>
                <MySelect label="Phân hệ" searchable 
                data = {
                    [
                        {value: "Toàn hệ thống", label: "Toàn hệ thống"},
                        {value: "Tuyển sinh", label: "Tuyển sinh"},
                        {value: "Sinh viên", label: "Sinh viên"},
                        {value: "Khảo thí", label: "Khảo thí"},
                    ]

                }
                >
                </MySelect>
                <MyTextInput name="hostMailServer" label="Host mail server" required />
                <MyTextInput name="outgoingPort" label="Outgoing port" required />
                <MyTextInput name="incomingPort" label="Incoming port" required />
                <MyTextInput name="SSL" label="SSL" required />
                <MyTextInput name="userName" label="Username" required />
                <MyTextInput name="password" label="Password" required />
            </MyFlexColumn>
        </MyActionIconUpdate>
    );
    }
    return (
        <MyButtonCreate<I_zwgpy0521g> title="Danh mục cấu hình mail" form={form_multiple} onSubmit={() => {}}>
            <MyFlexColumn>
                <MySelect label="Phân hệ" searchable 
                data = {
                    [
                        {value: "Toàn hệ thống", label: "Toàn hệ thống"},
                        {value: "Tuyển sinh", label: "Tuyển sinh"},
                        {value: "Sinh viên", label: "Sinh viên"},
                        {value: "Khảo thí", label: "Khảo thí"},
                    ]

                }
                >
                </MySelect>
                <MyTextInput name="hostMailServer" label="Host mail server" required />
                <MyTextInput name="outgoingPort" label="Outgoing port" required />
                <MyTextInput name="incomingPort" label="Incoming port" required />
                <MyTextInput name="SSL" label="SSL" required />
                <MyTextInput name="userName" label="Username" required />
                <MyTextInput name="password" label="Password" required />
            </MyFlexColumn>
        </MyButtonCreate>
    );
}