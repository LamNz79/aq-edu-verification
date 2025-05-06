'use client'
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MyButtonViewPDF from '@/components/Buttons/ButtonViewPDF/MyButtonViewPDF';
import MyDateInput from '@/components/Inputs/DateInput/MyDateInput'; // Giả sử có component nhập ngày
import MyFileInput from '@/components/Inputs/FileInput/MyFileInput';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { Button, Checkbox, FileButton } from '@mantine/core';
import { useForm } from '@mantine/form';

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

   
    function setUploadedFile(file: File[]): void {
        throw new Error('Function not implemented.');
    }

    return (
        <MyButtonCreate form={form} onSubmit={() => {}} objectName='Danh mục giấy chứng nhận'>
            <MyTextInput label='Mã minh chứng' {...form.getInputProps("code")} />
            <MyTextInput label='Tên minh chứng' {...form.getInputProps("name")} />
            <MyTextInput label='Ghi chú' {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}
