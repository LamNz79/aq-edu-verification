'use client';

import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

interface I6j8jkftgnc_CreateProps {
    maBoDem: string; // mã bộ đếm
    tenBoDem: string; // tên bộ đếm
    loaiNghiepVu: string; // loại nghiệp vụ
    loadiDoiTuong: string; // loại đối tượng
    chuKyLapLai: string; // Chu kỳ lập lại
    tienTo: string; // Tiền tố
    hauTo: string; // Hậu tố
    chieuDai: string; // Chiều dài
    coDungSo0: boolean; // Có dùng số 0
}

interface selectBoxProps{
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
        label: "Không lập lại",
        value: "1",
    },
    {
        label: "Lập lại",
        value: "2",
    }
]

export default function F_6j8jkftgnc_Create() {
    //===initiate===
    const disclosure = useDisclosure();
    const modalName = "Chi tiết bộ đếm";

    const form = useForm<I6j8jkftgnc_CreateProps>({
        initialValues: {
            maBoDem: "",
            tenBoDem: "",
            loaiNghiepVu: "",
            loadiDoiTuong: "",
            chuKyLapLai: "",
            tienTo: "",
            hauTo: "",
            chieuDai: "",
            coDungSo0: false,
        },
        validate: {
            maBoDem: (value) => value ? null : 'Không được để trống',
            tenBoDem: (value) => value ? null : 'Không được để trống',
            loaiNghiepVu: (value) => value ? null : 'Không được để trống',
            loadiDoiTuong: (value) => value ? null : 'Không được để trống',
            chuKyLapLai: (value) => value ? null : 'Không được để trống',
            tienTo: (value) => value ? null : 'Không được để trống',
            hauTo: (value) => value ? null : 'Không được để trống',
            chieuDai: (value) => value ? null : 'Không được để trống',
        }
    });

    return (
    <>
        <MyButtonModal disclosure={disclosure} crudType='create' title={modalName}>
            <MyTextInput label="Tên bộ đếm" {...form.getInputProps("tenBoDem")}/>
            <MyTextInput label="Mã bộ đếm" {...form.getInputProps("maBoDem")}/>
            <MySelect data={loaiNghiepVuSelectOption} label="Loại nghiệp vụ" {...form.getInputProps("loaiNghiepVu")}/>
            <MySelect data={loaiDoiTuongSelectOption} label="Loại đối tượng" {...form.getInputProps("loaiDoiTuong")}/>
            <MySelect data={chuKyLapLaiSelectOption} label="Chu ký lập lại" {...form.getInputProps("chuKyLapLai")}/>
            <MyTextInput label="Tiền tố" {...form.getInputProps("tienTo")}/>
            <MyTextInput label="Hậu tố" {...form.getInputProps("hauTo")}/>
            <MyTextInput label="Chiều dài" {...form.getInputProps("chieuDai")}/>
            <Checkbox label="Có dùng số 0" {...form.getInputProps("coDungSo0", { type: 'checkbox' })} />
        </MyButtonModal>
    </>
    );
}