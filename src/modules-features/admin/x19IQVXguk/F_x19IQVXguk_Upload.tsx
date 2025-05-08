'use client'
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MyButtonViewPDF from '@/components/Buttons/ButtonViewPDF/MyButtonViewPDF';
import MyDateInput from '@/components/Inputs/DateInput/MyDateInput'; // Giả sử có component nhập ngày
import MyFileInput from '@/components/Inputs/FileInput/MyFileInput';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { Button, Checkbox, FileButton } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface I_x19IQVXguk {
    id?: number; // STT
    code: string; // Mã
    name: string; // Tên
    effect_date?: Date;
    end_date?: Date;
    viewfile?: File;
    filelink?: string;
}

export default function F_x19IQVXguk_Create() {
    const form = useForm<I_x19IQVXguk>({
        initialValues: {
          code: "", 
          name: "", 
          effect_date: new Date(), 
          end_date: new Date(),
          viewfile: undefined,
          filelink: "",
        },
        validate: {
            effect_date: (value: Date | undefined) => {
                if (value !== undefined && form.values.end_date !== undefined && value > form.values.end_date) {
                  return 'Ngày hiệu lực phải nhỏ hơn ngày hết hạn';
                }
                return null;
              }
          },
      });

   
    function setUploadedFile(file: File[]): void {
        throw new Error('Function not implemented.');
    }

    return (
        <MyButtonCreate label='Upload' form={form} onSubmit={() => {}} objectName='Danh sách minh chứng'>
            <MyTextInput label='Mã file' {...form.getInputProps("code")} />
            <MyTextInput label='Tên file' {...form.getInputProps("name")} />
            <MyDateInput label='Ngày hiệu lực' {...form.getInputProps("effect_date")} />
            <MyDateInput label='Ngày hết hạn' {...form.getInputProps("end_date")} />
            <MyFileInput label='Upload' {...form.getInputProps("viewfile")} />
            <MyTextInput label='Link' {...form.getInputProps("filelink")} />
        </MyButtonCreate>
    );
}
