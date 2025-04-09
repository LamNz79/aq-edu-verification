'use client'
import MyActionIconUpdate from '@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import MySelect from '@/components/Combobox/Select/MySelect';

interface I_F_o4e65ewrwy_Update {
    id?: number; // STT
    agentCode?: string //Mã đơn vị
    agentName?: string //Tên đơn vị
    agentType?: string //Loại đơn vị
    affiliatedOf?:string //Trực thuộc
    ghiChu?:string // ghi chú
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

export default function F_o4e65ewrwy_Update({ data }: { data: I_F_o4e65ewrwy_Update }) {
    const [value, setValue] = useState(new Date());

    const form = useForm<I_F_o4e65ewrwy_Update>({
        initialValues: data
    });



    console.log(data.affiliatedOf)
    return (
        <MyActionIconUpdate form={form} onSubmit={() => { }} title="Chi tiết danh mục đơn vị" >
            <MyTextInput label='Mã đơn vị *' disabled={true} {...form.getInputProps("agentCode")} />
            <MyTextInput label='Tên đơn vị *' {...form.getInputProps("agentName")} />
            <MySelect data={['Khoa', 'Bộ môn', 'Phòng', 'Trung tâm']} defaultValue="Khoa" label="Loại đơn vị" {...form.getInputProps("agentType")}/>
            <MySelect data={['Khoa Công nghệ thông tin', 'Bộ môn cơ sở dữ liệu']} defaultValue="Khoa Công nghệ thông tin" label="Trực thuộc" {...form.getInputProps("affiliatedOf")}/>
            <MyTextInput label='Ghi chú' {...form.getInputProps("ghiChu")} />
        </MyActionIconUpdate>
    );
}
