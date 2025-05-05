'use client';

import {MyActionIconUpdate, MySelect, MyTextInput} from "aq-fe-framework/components";
import { Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";

interface I6j8jkftgnc_UpdateProps {
    maBoDem: string; // mã bộ đếm
    tenBoDem: string; // tên bộ đếm
    loaiNghiepVu: string; // loại nghiệp vụ
    loadiDoiTuong: string; // loại đối tượng
    chuKyLapLai: string; // Chu kỳ lặp lại
    tienTo: string; // Tiền tố
    hauTo: string; // Hậu tố
    chieuDai: string; // Chiều dài
    coDungSo0: boolean; // Có dùng số 0
}

interface I6j8jkftgnc_InputUpdateProps {
    maBoDem: string; // mã bộ đếm
    tenBoDem: string; // tên bộ đếm
    loaiNghiepVu: string; // loại nghiệp vụ
    loaiDoiTuong: string; // loại đối tượng
}

interface selectBoxProps{
    label: string;
    value: string;
}

const loaiNghiepVuSelectOption: selectBoxProps[] = [
    {
        label: "Mã minh chứng",
        value: "Mã minh chứng",
    },
    {
        label: "Mã báo cáo tự đánh giá",
        value: "Mã báo cáo tự đánh giá",
    }
]

const loaiDoiTuongSelectOption: selectBoxProps[] = [
    {
        label: "Toàn đơn vị",
        value: "Toàn đơn vị",
    },
    {
        label: "vài đơn vị",
        value: "vài đơn vị",
    }
]

const chuKyLapLaiSelectOption: selectBoxProps[] = [
    {
        label: "Không lặp lại",
        value: "Không lặp lại",
    },
    {
        label: "Lặp lại",
        value: "Lặp lại",
    }
]

export default function F_6j8jkftgnc_Update({data}: {data: I6j8jkftgnc_InputUpdateProps}) {
    const modalName = "Chi tiết bộ đếm";

    //===pseudo data===
    const loaiNghiepVuQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiNghiepVu_UpdateQuery'],
        queryFn: async () => loaiNghiepVuSelectOption
    });

    const loaiDoiTuongQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiDoiTuong_UpdateQuery'],
        queryFn: async () => loaiDoiTuongSelectOption
    });

    const chuKyLapLaiQuery = useQuery({
        queryKey: ['F6j8jkftgnc_chuKyLapLai_UpdateQuery'],
        queryFn: async () => chuKyLapLaiSelectOption
    });

    const form = useForm<I6j8jkftgnc_UpdateProps>({
        initialValues: {
            maBoDem: data.maBoDem,
            tenBoDem: data.tenBoDem,
            loaiNghiepVu: data.loaiNghiepVu,
            loadiDoiTuong: data.loaiDoiTuong,
            chuKyLapLai: "",
            tienTo: "",
            hauTo: "",
            chieuDai: "",
            coDungSo0: false
        },
        validate: {
            maBoDem: (value) => value ? null : 'Không được để trống',
            tenBoDem: (value) => value ? null : 'Không được để trống',
            tienTo: (value) => value ? null : 'Không được để trống',
            hauTo: (value) => value ? null : 'Không được để trống',
            chieuDai: (value) => value ? null : 'Không được để trống',
        }
    });

    //===handlers===
    if (loaiNghiepVuQuery.isLoading) return "Đang tải...";
    if (loaiNghiepVuQuery.isError) return "Có lỗi xảy ra!";

    if (loaiDoiTuongQuery.isLoading) return "Đang tải...";
    if (loaiDoiTuongQuery.isError) return "Có lỗi xảy ra!";

    if (chuKyLapLaiQuery.isLoading) return "Đang tải...";
    if (chuKyLapLaiQuery.isError) return "Có lỗi xảy ra!";


    return (
        <MyActionIconUpdate crudType='update' title={modalName} form={form} onSubmit={() => {}}> 
            <MyTextInput label="Mã bộ đếm" {...form.getInputProps("maBoDem")}/>
            <MyTextInput label="Tên bộ đếm" {...form.getInputProps("tenBoDem")}/>
            <MySelect data={loaiNghiepVuQuery.data!} label="Loại nghiệp vụ" {...form.getInputProps("loaiNghiepVu")}/>
            <MySelect data={loaiDoiTuongQuery.data!} label="Loại đối tượng" {...form.getInputProps("loaiDoiTuong")}/>
            <MySelect data={chuKyLapLaiQuery.data!} label="Chu ký lặp lại" {...form.getInputProps("chuKyLapLai")}/>
            <MyTextInput label="Tiền tố" {...form.getInputProps("tienTo")}/>
            <MyTextInput label="Hậu tố" {...form.getInputProps("hauTo")}/>
            <MyTextInput label="Chiều dài" {...form.getInputProps("chieuDai")}/>
            <Checkbox label="Có dùng số 0" {...form.getInputProps("coDungSo0", { type: 'checkbox' })} />
        </MyActionIconUpdate>
    )
}