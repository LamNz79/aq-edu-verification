'use client'
import { useForm } from '@mantine/form';
import { MyButtonCreate, MyTextInput, MyTextArea } from 'aq-fe-framework/components';

export interface I_wydbz2a5ff {
    id?: number; // STT
    code: string; // Mã
    name: string; // Tên
    note?: string;
}

export default function F_wydbz2a5ff_Create() {
    const form = useForm<I_wydbz2a5ff>({
        initialValues: {
            code: "", 
            name: "",
            note: "",
        },
        validate: {
        },
    });

    return (
        <MyButtonCreate label='Thêm minh chứng' form={form} onSubmit={() => {}} objectName='Minh chứng'>
            <MyTextInput label='Mã minh chứng' {...form.getInputProps("code")} />
            <MyTextInput label='Tên minh chứng' {...form.getInputProps("name")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}
