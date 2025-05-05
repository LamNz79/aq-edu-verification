'use client';

import { MyButton } from '@/components/Buttons/Button/MyButton';
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea';
import { FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import baseAxios from '@/api/baseAxios';

export interface IStandardSetForm {
    maBoTieuChuan: string;
    tenBoTieuChuan: string;
    tenBoTieuChuanEg: string;
    toChucKiemDinh: string;
    phienBan: string;
    namBanHanh: number;
    fileTieuChuan: File | null;
    chuKyDanhGiaLai: number;
    ghiChu: string;
}

export default function F_mc1b1zpbg6_Create() {
    const form = useForm<IStandardSetForm>({
        initialValues: {
            maBoTieuChuan: "",
            tenBoTieuChuan: "",
            tenBoTieuChuanEg: "",
            toChucKiemDinh: "",
            phienBan: "",
            namBanHanh: new Date().getFullYear(),
            fileTieuChuan: null,
            chuKyDanhGiaLai: 5,
            ghiChu: "",
        }
    });

    const handleSubmit = async (values: IStandardSetForm) => {
        try {
            // In a real application, handle file upload and form submission
            // await baseAxios.post('/Standards/Create', formData);
            console.log('Form submitted:', values);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <MyButtonCreate
            form={form}
            title="Chi tiết bộ tiêu chuẩn"
            onSubmit={handleSubmit}
            objectName='Bộ tiêu chuẩn'
            modalSize='lg'
        >
            <MyTextInput required label='Mã bộ tiêu chuẩn' {...form.getInputProps("maBoTieuChuan")} />
            <MyTextInput required label='Tên bộ tiêu chuẩn' {...form.getInputProps("tenBoTieuChuan")} />
            <MyTextInput required label='Tên bộ tiêu chuẩn Eg' {...form.getInputProps("tenBoTieuChuanEg")} />
            <MyTextInput required label='Tổ chức kiểm định' {...form.getInputProps("toChucKiemDinh")} />
            <MyTextInput required label='Phiên bản' {...form.getInputProps("phienBan")} />
            <MyNumberInput required label='Năm ban hành' {...form.getInputProps("namBanHanh")} />
            <FileInput label='File tiêu chuẩn' {...form.getInputProps("fileTieuChuan")} />
            <MyNumberInput required label='Chu kỳ đánh giá lại (năm)' {...form.getInputProps("chuKyDanhGiaLai")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("ghiChu")} />
        </MyButtonCreate>
    );
}