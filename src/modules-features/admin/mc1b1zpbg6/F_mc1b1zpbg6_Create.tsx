'use client';

import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea';
import { FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface IStandardSetForm {
    maBoTieuChuan: string;
    tenBoTieuChuan: string;
    tenBoTieuChuanEg: string;
    toChucKiemDinh: string;
    phienBan: string;
    namBanHanh: number;
    fileTieuChuan: File | null;
    chuKyDanhGiaLai: string;
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
            chuKyDanhGiaLai: "5 năm",
            ghiChu: "",
        },
        validate: {
            maBoTieuChuan: (value) => value ? null : 'Vui lòng nhập mã bộ tiêu chuẩn',
            tenBoTieuChuan: (value) => value ? null : 'Vui lòng nhập tên bộ tiêu chuẩn',
            tenBoTieuChuanEg: (value) => value ? null : 'Vui lòng nhập tên tiếng Anh',
            toChucKiemDinh: (value) => value ? null : 'Vui lòng nhập tổ chức kiểm định',
            phienBan: (value) => value ? null : 'Vui lòng nhập phiên bản',
            namBanHanh: (value) => value ? null : 'Vui lòng nhập năm ban hành',
            chuKyDanhGiaLai: (value) => value ? null : 'Vui lòng nhập chu kỳ đánh giá lại',
        },
        validateInputOnBlur: false,
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
            <MyTextInput required label='Năm ban hành' {...form.getInputProps("namBanHanh")} />
            <FileInput label='File tiêu chuẩn' {...form.getInputProps("fileTieuChuan")} />
            <MyTextInput required label='Chu kỳ đánh giá lại' {...form.getInputProps("chuKyDanhGiaLai")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("ghiChu")} />
        </MyButtonCreate>
    );
}