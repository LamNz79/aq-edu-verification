'use client'
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MySelect from '@/components/Combobox/Select/MySelect';
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { FileInput, Flex, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface I_t2razyofo9 {
    id?: number;
    maBoTieuChuan?: string;
    tenBoTieuChuan?: string;
    tenBoTieuChuanEg?: string;
    toChucKiemDinh?: string;
    phienBan?: string;
    namBanHanh?: string;
    fileTieuChuan?: string;
    ghiChu?: string;
}
export default function F_t2razyofo9_Create() {
    const form = useForm<I_t2razyofo9>({
        initialValues: {
            maBoTieuChuan: "",
            tenBoTieuChuan: "",
            tenBoTieuChuanEg: "",
            toChucKiemDinh: "",
            phienBan: "",
            namBanHanh: "",
            fileTieuChuan: "",
            ghiChu: "",
        },
        validate: {
            maBoTieuChuan: (value) => (value ? null : 'Mã bộ tiêu chuẩn là bắt buộc'),
            tenBoTieuChuan: (value) => (value ? null : 'Tên bộ tiêu chuẩn là bắt buộc'),
            tenBoTieuChuanEg: (value) => (value ? null : 'Tên bộ tiêu chuẩn Eg là bắt buộc'),
            toChucKiemDinh: (value) => (value ? null : 'Tổ chức kiểm định là bắt buộc'),
            phienBan: (value) => (value ? null : 'Phiên bản là bắt buộc'),
            namBanHanh: (value) => (value ? null : 'Năm ban hành là bắt buộc'),
            fileTieuChuan: (value) => (value ? null : 'File tiêu chuẩn là bắt buộc'),
        },
    });

    return (
        <MyButtonCreate form={form} onSubmit={() => { }} title='Chi tiết bộ tiêu chuẩn'>
            <MyTextInput
                label='Mã bộ tiêu chuẩn'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("maBoTieuChuan")}
            />
            <MyTextInput
                label='Tên bộ tiêu chuẩn'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("tenBoTieuChuan")}
            />
            <MyTextInput
                label='Tên bộ tiêu chuẩn Eg'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("tenBoTieuChuanEg")}
            />
            <MyTextInput
                label='Tổ chức kiểm định'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("toChucKiemDinh")}
            />
            <MyTextInput
                label='Phiên bản'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("phienBan")}
            />
            <MyTextInput
                label='Năm ban hành'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("namBanHanh")}
            />
            <FileInput label="File tiêu chuẩn" w={'100%'} placeholder={"abc.xlsx"} />
            <MyTextArea
                label='Ghi chú'
                w={"100%"}
                placeholder="..."
                {...form.getInputProps("ghiChu")}
            />
        </MyButtonCreate>
    );
}
