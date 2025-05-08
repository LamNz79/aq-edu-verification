'use client'
import { useForm } from '@mantine/form';
import { MyButtonCreate, MyDateInput, MyFileInput, MyTextInput } from 'aq-fe-framework/components';

export interface I_x19IQVXguk {
    id?: number; // STT
    code: string; // Mã
    name: string; // Tên
    effect_date?: Date;
    end_date?: Date;
    viewfile?: File;
    filelink?: string;
}

export default function F_x19IQVXguk_Upload() {
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
