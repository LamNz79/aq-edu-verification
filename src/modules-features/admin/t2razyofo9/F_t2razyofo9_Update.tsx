'use client';
import MyActionIconUpdate from '@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate';
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

interface I_t2razyofo9_Send {
    id?: number;
    maBoTieuChuan?: string;
    tenBoTieuChuan?: string;
    toChucKiemDinh?: string;
    phienBan?: string;
    namBanHanh?: string;
    fileTieuChuan?: string;
    ghiChu?: string;
}

export default function F_t2razyofo9_Update({ data }: { data: I_t2razyofo9_Send }) {
    const form = useForm<I_t2razyofo9>({
        initialValues: {
            maBoTieuChuan: data?.maBoTieuChuan || "",
            tenBoTieuChuan: data?.tenBoTieuChuan || "",
            tenBoTieuChuanEg: data?.tenBoTieuChuan || "",
            toChucKiemDinh: data?.toChucKiemDinh || "",
            phienBan: data?.phienBan || "",
            namBanHanh: data?.namBanHanh || "",
            fileTieuChuan: data?.fileTieuChuan || "",
            ghiChu: data?.ghiChu || "",
        },
        validate: {},
    });

    return (
        <MyActionIconUpdate title="Chi tiết bộ tiêu chuổn" form={form} onSubmit={() => { }}>
            <MyTextInput
                label='Mã bộ tiêu chuổn'
                disabled
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("maBoTieuChuan")}
            />
            <MyTextInput
                label='Tên bộ tiêu chuổn'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("tenBoTieuChuan")}
            />
            <MyTextInput
                label='Tên bộ tiêu chuổn Eg'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("tenBoTieuChuanEg")}
            />
            <MyTextInput
                label='Tổ chức kiểm định'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("toChucKiemDinh")}
            />
            <MyTextInput
                label='Phiên bản'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("phienBan")}
            />
            <MyTextInput
                label='Năm ban hành'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("namBanHanh")}
            />
            <FileInput label="File tiêu chuổn" w={'100%'} placeholder={"abc.xlsx"} />
            <MyTextArea
                label='Ghi chú'
                w={"100%"}
                placeholder="0"
                {...form.getInputProps("ghiChu")}
            />
        </MyActionIconUpdate>
    );
}