'use client'
import { MyButton } from '@/components/Buttons/Button/MyButton';
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MySelect from '@/components/Combobox/Select/MySelect';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { useForm } from '@mantine/form';
import { IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';

interface I_F_o4e65ewrwy_Create {
    id?: number; // STT
    agentCode?: string //Mã đơn vị
    agentName?: string //Tên đơn vị
    agentType?: string //Loại đơn vị
    affiliatedOf?:string //Trực thuộc
    ghiChu?:string // ghi chú
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

interface F_o4e65ewrwy_CreateProps {
    onSubmit: (values: I_F_o4e65ewrwy_Create) => void;
}

export default function F_o4e65ewrwy_Create({ onSubmit }: F_o4e65ewrwy_CreateProps) {
    // const [value, setValue] = useState(new Date());

    const form = useForm<I_F_o4e65ewrwy_Create>({
        initialValues: {
            agentCode:"",
            agentName:"",
            ghiChu: '',
            nguoiCapNhat: "Quản trị viên",
            ngayCapNhat: new Date("2024-12-23")
        },
        validate: {
            agentCode: (value) => (value ? null : 'Mã đơn vị là bắt buộc'),
            agentName: (value) => (value ? null : 'Tên đơn vị là bắt buộc'),
            
        },
    });

    return (
        <MyButtonCreate title='Chi tiết danh mục đơn vị' form={form} onSubmit={() => onSubmit(form.values)} objectName='Chi tiết danh mục đơn vị' >
            <MyTextInput label='Mã đơn vị ' withAsterisk {...form.getInputProps("agentCode")} />
            <MyTextInput label='Tên đơn vị ' withAsterisk {...form.getInputProps("agentName")} />
            <MySelect data={['Khoa', 'Bộ môn', 'Phòng', 'Trung tâm']} withAsterisk defaultValue="Khoa" label="Loại đơn vị" {...form.getInputProps("agentType")}/>
            <MySelect data={['Khoa Công nghệ thông tin', 'Bộ môn cơ sở dữ liệu']} withAsterisk defaultValue="Khoa Công nghệ thông tin" label="Trực thuộc" {...form.getInputProps("affiliatedOf")}/>
            <MyTextInput label='Ghi chú'  {...form.getInputProps("ghiChu")} />
        </MyButtonCreate>
    );
}
