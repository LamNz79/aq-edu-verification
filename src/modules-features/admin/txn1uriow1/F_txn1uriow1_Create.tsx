'use client';

import {MyButtonCreate, MySelect, MyDateInput, MyTextInput, MyTextArea } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";

interface Itxn1uriow1_CreateProps {
    tieuChuan: string; // tiêu chuẩn
    maTieuChiChiSo: string; // mã tiêu chí/ chỉ số
    maMocChuan: string; // mã mốc chuẩn
    tenMocChuan: string; // tên mốc chuẩn
    moTa: string; // mô tả
    chuKy: string; // chu kỳ 
    ngayBatDauChuKy: Date; // ngày bắt đầu chu kỳ
    ghiChu: string; // ghi chú
}

interface selectBoxProps{
    label: string;
    value: string;
}

const tieuChuanSelectOption: selectBoxProps[] = [
    {
        label: "TC01 - tổ chức và quản trị",
        value: "1",
    },
    {
        label: "TC02 - ......",
        value: "2",
    }
]

const maTieuChiChiSoSelectOption: selectBoxProps[] = [
    {
        label: "TC1.1 - tiêu chuẩn pla pla",
        value: "1",
    },
    {
        label: "TC1.2 - tiêu chuẩn plua plua",
        value: "2",
    }
]

const chuKySelectOption: selectBoxProps[] = [
    {
        label: "3 tháng",
        value: "1",
    },
    {
        label: "6 tháng",
        value: "2",
    },
    {
        label: "12 tháng",
        value: "3",
    },
    {
        label: "Không chu kỳ",
        value: "4",
    }
]

export default function F_txn1uriow1_Create() {
    //===initiate===
    const disclosure = useDisclosure();
    const modalName = "Chi tiết mốc chuẩn";
    
    //===pseudo data===
    const tieuChuanQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiNghiepVu_CreateQuery'],
        queryFn: async () => tieuChuanSelectOption
    });

    const maTieuChiChiSoQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiDoiTuong_CreateQuery'],
        queryFn: async () => maTieuChiChiSoSelectOption
    });

    const chuKyQuery = useQuery({
        queryKey: ['F6j8jkftgnc_chuKyLapLai_CreateQuery'],
        queryFn: async () => chuKySelectOption
    });

    const form = useForm<Itxn1uriow1_CreateProps>({
        initialValues: {
            tieuChuan: "1",
            maTieuChiChiSo: "1",
            maMocChuan: "",
            tenMocChuan: "",
            moTa: "",
            chuKy: "2",
            ngayBatDauChuKy: new Date(),
            ghiChu: "",
        },
        validate: {
            maMocChuan: (value) => value ? null : 'Không được để trống',
            tenMocChuan: (value) => value ? null : 'Không được để trống',
        }
    });

    //===handlers===
    if (tieuChuanQuery.isLoading) return "Đang tải...";
    if (tieuChuanQuery.isError) return "Có lỗi xảy ra!";

    if (maTieuChiChiSoQuery.isLoading) return "Đang tải...";
    if (maTieuChiChiSoQuery.isError) return "Có lỗi xảy ra!";

    if (chuKyQuery.isLoading) return "Đang tải...";
    if (chuKyQuery.isError) return "Có lỗi xảy ra!";

    return(
        <MyButtonCreate form={form} disclosure={disclosure} crudType='create' title={modalName} onSubmit={() => { }}>
            <MySelect data={tieuChuanQuery.data!} label="Tiêu chuẩn" {...form.getInputProps("tieuChuan")}/>
            <MySelect data={maTieuChiChiSoQuery.data!} label="Mã tiêu chí/ chỉ số" {...form.getInputProps("maTieuChiChiSo")}/>
            <MyTextInput label="Mã mốc chuẩn" {...form.getInputProps("maMocChuan")}/>
            <MyTextInput label="Tên mốc chuẩn" {...form.getInputProps("tenMocChuan")}/>
            <MyTextArea label="Mô tả" {...form.getInputProps("moTa")}/>
            <MySelect data={chuKyQuery.data!} label="Chu kỳ" {...form.getInputProps("chuKy")}/>
            <MyDateInput label="Ngày bắt đầu chu kỳ" {...form.getInputProps("ngayBatDauChuKy")}></MyDateInput>
            <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")}/>
        </MyButtonCreate>
    );
}