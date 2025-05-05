'use client';

import {MyActionIconUpdate, MySelect, MyDateInput, MyTextInput, MyTextArea } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";

interface Itxn1uriow1_UpdateProps {
    tieuChuan: string; // tiêu chuẩn
    maTieuChiChiSo: string; // mã tiêu chí/ chỉ số
    maMocChuan: string; // mã mốc chuẩn
    tenMocChuan: string; // tên mốc chuẩn
    moTa: string; // mô tả
    chuKy: string; // chu kỳ 
    ngayBatDauChuKy: Date; // ngày bắt đầu chu kỳ
    ghiChu: string; // ghi chú
}

interface Itxn1uriow1_InputUpdateProps {
    maTieuChuan: string; // mã tiêu chuẩn
    maTieuChi: string; // mã tiêu chí
    tenTieuChi: string; // tên tiêu chí
    maMocChuan: string; // mã mốc chuẩn
    tenMocChuan: string; // tên mốc chuẩn
    moTa: string; // mô tả
    ghiChu: string // Ghi chú
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

export default function F_txn1uriow1_Update({data}:{data:Itxn1uriow1_InputUpdateProps}) {
    //===initiate===
    const modalName = "Chi tiết mốc chuẩn";

    //===pseudo data===
    const tieuChuanQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiNghiepVu_UpdateQuery'],
        queryFn: async () => tieuChuanSelectOption
    });

    const maTieuChiChiSoQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiDoiTuong_UpdateQuery'],
        queryFn: async () => maTieuChiChiSoSelectOption
    });

    const chuKyQuery = useQuery({
        queryKey: ['F6j8jkftgnc_chuKyLapLai_UpdateQuery'],
        queryFn: async () => chuKySelectOption
    });

    const form = useForm<Itxn1uriow1_UpdateProps>({
        initialValues: {
            tieuChuan: "1",
            maTieuChiChiSo: "1",
            maMocChuan: data.maMocChuan,
            tenMocChuan: data.tenMocChuan,
            moTa: data.moTa,
            chuKy: "2",
            ngayBatDauChuKy: new Date(),
            ghiChu: data.ghiChu,
        },
        validate: {
            maMocChuan: (value) => value ? null : 'Không được để trống',
            tenMocChuan: (value) => value ? null : 'Không được để trống',
        }
    });


    return(
        <MyActionIconUpdate crudType='update' title={modalName} form={form} onSubmit={() => {}}>
            <MySelect data={tieuChuanQuery.data!} label="Tiêu chuẩn" {...form.getInputProps("tieuChuan")}/>
            <MySelect data={maTieuChiChiSoQuery.data!} label="Mã tiêu chí/ chỉ số" {...form.getInputProps("maTieuChiChiSo")}/>
            <MyTextInput label="Mã mốc chuẩn" {...form.getInputProps("maMocChuan")}/>
            <MyTextInput label="Tên mốc chuẩn" {...form.getInputProps("tenMocChuan")}/>
            <MyTextArea label="Mô tả" {...form.getInputProps("moTa")}/>
            <MySelect data={chuKyQuery.data!} label="Chu kỳ" {...form.getInputProps("chuKy")}/>
            <MyDateInput label="Ngày bắt đầu chu kỳ" {...form.getInputProps("ngayBatDauChuKy")}></MyDateInput>
            <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")}/>
        </MyActionIconUpdate>
    );
}