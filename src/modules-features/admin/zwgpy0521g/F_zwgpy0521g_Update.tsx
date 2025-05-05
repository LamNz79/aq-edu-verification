'use client'

import {MyActionIconUpdate,MySelect,MyTextInput,MyFlexColumn} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { PasswordInput } from "@mantine/core";
interface I_zwgpy0521g {
    phanHe?: string;
    hostMailServer?: string;
    outgoingPort?: number;
    incomingPort?: number;
    SSL?: boolean;
    userName?: string;
    password?: string;
}
export default function F_zwgpy0521g_Update({values}: {values?: any}) {
    const form = useForm<I_zwgpy0521g>({
        initialValues: values,
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

    return (
        <MyActionIconUpdate<I_zwgpy0521g> title="Danh mục cấu hình mail" form={form} onSubmit={() => {}}>
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
                {...form.getInputProps("phanHe")}
                >
                </MySelect>
                <MyTextInput name="hostMailServer" label="Host mail server" required {...form.getInputProps("hostMailServer")}/>
                <MyTextInput name="outgoingPort" label="Outgoing port" required {...form.getInputProps("outgoingPort")}/>
                <MyTextInput name="incomingPort" label="Incoming port" required {...form.getInputProps("incomingPort")}/>
                <MyTextInput name="SSL" label="SSL" required {...form.getInputProps("SSL")}/>
                <MyTextInput name="userName" label="Username" required {...form.getInputProps("userName")}/>
                <PasswordInput name="password" label="Password" required {...form.getInputProps("password")}/>
            </MyFlexColumn>
        </MyActionIconUpdate>
    );
}