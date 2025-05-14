'use client';

import { MyButtonCreate, MyTextInput, MyTextArea } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";

interface F_5lrwp21o3u_Create {
    code: string; // Mã chu kỳ
    name: string; // Tên chu kỳ
    note?: string; // Ghi chú
}


export default function F_5lrwp21o3u_Create() {
    const form = useForm<F_5lrwp21o3u_Create>({
        initialValues: {
            code: '', // Mã chu kỳ
            name: '', // Tên chu kỳ
            note: '', // Ghi chú
        },
        validate: {
            code: code => code ? null : 'Không được để trống',
            name: name => name ? null : 'Không được để trống',
        }
    });

    return (
        <MyButtonCreate
            form={form}
            onSubmit={() => { }}
            objectName='chu kỳ kiểm định'
        >
            <MyTextInput label='Mã chu kỳ' {...form.getInputProps("code")} />
            <MyTextInput label='Tên chu kỳ' {...form.getInputProps("name")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}