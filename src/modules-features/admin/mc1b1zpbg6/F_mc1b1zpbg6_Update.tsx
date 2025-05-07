"use client"

import baseAxios from "@/api/baseAxios";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import MyNumberInput from "@/components/Inputs/NumberInput/MyNumberInput";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import { FileInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export interface IStandardSet {
    id: number;
    maBoTieuChuan: string;
    tenBoTieuChuan: string;
    tenBoTieuChuanEg: string;
    toChucKiemDinh: string;
    phienBan: string;
    namBanHanh: number;
    fileTieuChuan: string;
    chuKyDanhGiaLai: string;
    ghiChu: string;
}

export default function F_mc1b1zpbg6_Update({ values }: { values: IStandardSet }) {
    const form = useForm({
        initialValues: {
            id: values.id,
            maBoTieuChuan: values.maBoTieuChuan,
            tenBoTieuChuan: values.tenBoTieuChuan,
            tenBoTieuChuanEg: values.tenBoTieuChuanEg || "",
            toChucKiemDinh: values.toChucKiemDinh,
            phienBan: values.phienBan,
            namBanHanh: values.namBanHanh,
            fileTieuChuan: null,
            currentFile: values.fileTieuChuan,
            chuKyDanhGiaLai: values.chuKyDanhGiaLai,
            ghiChu: values.ghiChu,
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

    const handleSubmit = async (formValues: any) => {
        try {
            // In a real application, handle file upload if changed and form submission
            // await baseAxios.post('/Standards/Update', formData);
            console.log('Update form submitted:', formValues);
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    return (
        <MyActionIconUpdate
            form={form}
            title="Chi tiết bộ tiêu chuẩn"
            onSubmit={handleSubmit}
            modalSize='lg'
        >
            <MyTextInput required label="Mã bộ tiêu chuẩn" {...form.getInputProps("maBoTieuChuan")} />
            <MyTextInput required label="Tên bộ tiêu chuẩn" {...form.getInputProps("tenBoTieuChuan")} />
            <MyTextInput required label="Tên bộ tiêu chuẩn Eg" {...form.getInputProps("tenBoTieuChuanEg")} />
            <MyTextInput required label="Tổ chức kiểm định" {...form.getInputProps("toChucKiemDinh")} />
            <MyTextInput required label="Phiên bản" {...form.getInputProps("phienBan")} />
            <MyTextInput required label="Năm ban hành" {...form.getInputProps("namBanHanh")} />
            <FileInput
                label="File tiêu chuẩn"
                placeholder={form.values.currentFile || "Chọn file"}
                {...form.getInputProps("fileTieuChuan")}
            />
            <MyTextInput required label="Chu kỳ đánh giá lại" {...form.getInputProps("chuKyDanhGiaLai")} />
            <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
        </MyActionIconUpdate>
    );
}