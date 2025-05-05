'use client';

import { MyButtonCreate, MySelect, MyTextInput, } from "aq-fe-framework/components";
import { Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";

interface I6j8jkftgnc_CreateProps {
    maBoDem: string; // mã bộ đếm
    tenBoDem: string; // tên bộ đếm
    loaiNghiepVu: string; // loại nghiệp vụ
    loaiDoiTuong: string; // loại đối tượng
    chuKyLapLai: string; // Chu kỳ lặp lại
    tienTo: string; // Tiền tố
    hauTo: string; // Hậu tố
    chieuDai: string; // Chiều dài
    coDungSo0: boolean; // Có dùng số 0
}

interface selectBoxProps {
    label: string;
    value: string;
}

const loaiNghiepVuSelectOption: selectBoxProps[] = [
    {
        label: "Mã minh chứng",
        value: "1",
    },
    {
        label: "Mã báo cáo tự đánh giá",
        value: "2",
    }
]

const loaiDoiTuongSelectOption: selectBoxProps[] = [
    {
        label: "Toàn đơn vị",
        value: "1",
    },
    {
        label: "vài đơn vị",
        value: "2",
    }
]

const chuKyLapLaiSelectOption: selectBoxProps[] = [
    {
        label: "Không lặp lại",
        value: "1",
    },
    {
        label: "Lặp lại",
        value: "2",
    }
]

export default function F_6j8jkftgnc_Create() {
    //===initiate===
    const disclosure = useDisclosure();
    const modalName = "Chi tiết bộ đếm";

    //===pseudo data===
    const loaiNghiepVuQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiNghiepVu_CreateQuery'],
        queryFn: async () => loaiNghiepVuSelectOption
    });

    const loaiDoiTuongQuery = useQuery({
        queryKey: ['F6j8jkftgnc_loaiDoiTuong_CreateQuery'],
        queryFn: async () => loaiDoiTuongSelectOption
    });

    const chuKyLapLaiQuery = useQuery({
        queryKey: ['F6j8jkftgnc_chuKyLapLai_CreateQuery'],
        queryFn: async () => chuKyLapLaiSelectOption
    });

    const form = useForm<I6j8jkftgnc_CreateProps>({
        initialValues: {
            maBoDem: "",
            tenBoDem: "",
            loaiNghiepVu: "",
            loaiDoiTuong: "",
            chuKyLapLai: "",
            tienTo: "",
            hauTo: "",
            chieuDai: "",
            coDungSo0: false,
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
        <>
            <MyButtonCreate form={form} disclosure={disclosure} crudType='create' title={modalName} onSubmit={() => { }}>
                <MyTextInput label="Mã bộ đếm" {...form.getInputProps("maBoDem")} />
                <MyTextInput label="Tên bộ đếm" {...form.getInputProps("tenBoDem")} />
                <MySelect data={loaiNghiepVuQuery.data!} label="Loại nghiệp vụ" {...form.getInputProps("loaiNghiepVu")} />
                <MySelect data={loaiDoiTuongQuery.data!} label="Loại đối tượng" {...form.getInputProps("loaiDoiTuong")} />
                <MySelect data={chuKyLapLaiQuery.data!} label="Chu kỳ lặp lại" {...form.getInputProps("chuKyLapLai")} />
                <MyTextInput label="Tiền tố" {...form.getInputProps("tienTo")} />
                <MyTextInput label="Hậu tố" {...form.getInputProps("hauTo")} />
                <MyTextInput label="Chiều dài" {...form.getInputProps("chieuDai")} />
                <Checkbox label="Có dùng số 0" {...form.getInputProps("coDungSo0", { type: 'checkbox' })} />
            </MyButtonCreate>
        </>
    );
}