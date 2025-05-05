"use client";
import baseAxios from '@/api/baseAxios';
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MySelect from '@/components/Combobox/Select/MySelect';
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface ICreateUserViewModel {
    id: number;
    code: string;
    name: string;
    concurrencyStamp: string;
    isEnabled: boolean;
    nameEg: string;
    numberPeriod: number;
    numberCredits: number;
    note: string;
    coeUnitId: number | null;
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

interface IOption {
    value: string;
    label: string;
}

export default function F_rdrmqcfvux_Create() {
    // Fetch danh sách khoa từ API
    const { data: coeUnits, isLoading } = useQuery<ICreateUserViewModel[]>({
        queryKey: ["COEUnit_Read"], // Đổi lại tên query key cho đúng với API gọi đến
        queryFn: async () => {
            const response = await baseAxios.get("/COEUnit/GetAll");
            return response.data.data || [];
        },
    });

    const form = useForm<ICreateUserViewModel>({
        mode: "uncontrolled",
        initialValues: {
            id: 0,
            code: "",
            name: "",
            concurrencyStamp: "",
            isEnabled: true,
            nameEg: "",
            numberPeriod: 0,
            numberCredits: 0,
            note: "",
            coeUnitId: null,
        },
        validate: {
            code: (value) => (value.trim().length > 0 ? null : "không được để trống"),
            name: (value) => (value.trim().length > 0 ? null : "không được để trống"),
            coeUnitId: (value) => (value ? null : "Vui lòng chọn khoa"),
            numberPeriod: (value) => (value > 0 ? null : "Số tiết phải lớn hơn 0"),
            numberCredits: (value) => (value > 0 ? null : "Số tiết phải lớn hơn 0"),
        },  
    });

    // Chuyển dữ liệu API thành danh sách { value, label }
    const COEUnitOptions: IOption[] = coeUnits
        ? coeUnits.map(unit => ({
            value: unit.id.toString(),
            label: unit.name
        }))
        : [];
        

    return (
        <MyButtonCreate
        form={form}
        onSubmit={async (values) => {
            const formattedValues = {
                ...values,
                numberPeriod: values.numberPeriod.toString(), 
                numberCredits: values.numberCredits.toString(), 
            };
    
            return await baseAxios.post("/COESubject/Create", formattedValues);
        }}
        >
            <MyTextInput label="Mã môn học" {...form.getInputProps("code")} />
            <MyTextInput label="Tên môn học" {...form.getInputProps("name")} />
            <MyTextInput label="Tên môn học Eg" {...form.getInputProps("nameEg")} />
            <MyNumberInput min={0} label="Số tiết" {...form.getInputProps("numberPeriod")} error={form.errors.numberPeriod} />
            <MyNumberInput min={0} label="Số tín chỉ" {...form.getInputProps("numberCredits")} error={form.errors.numberCredits} />

            <MySelect
                label="Khoa"
                data={COEUnitOptions}
                {...form.getInputProps("coeUnitId")}
                defaultValue={form.values.coeUnitId ? form.values.coeUnitId.toString() : ""}
                // onChange={(value) => {
                //     const numberValue = value ? parseInt(value, 10) : null;
                //     form.setFieldValue("coeUnitId", numberValue); 
                //     {form.getInputProps("coeUnitId")}
                // }}
            />



            <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}

