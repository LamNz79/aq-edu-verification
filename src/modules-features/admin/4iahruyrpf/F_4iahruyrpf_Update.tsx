"use client"

import baseAxios from "@/api/baseAxios";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export interface IUpdateUnit{
    maLoai: string;
    tenLoai: string;
    ghiChu: string;
}


export default function F_4iahruyrpf_Update() {
    const form = useForm<IUpdateUnit>({
        initialValues: {
            maLoai: "",
            tenLoai: "",
            ghiChu: "",
        }
    })
    const {data : units, isLoading, isError} = useQuery<IUpdateUnit[]>({
        queryKey: ["F_4iahruyrpf_Update"],
        queryFn: async () => {
            const response = await baseAxios.get("/COEUnit/Getall");
            return response.data.data || [];
        },
    });

useEffect (() => {
    form.setValues({
        maLoai: "",
        tenLoai: "",
        ghiChu: "",
    })
}, [units])

  return (

<Group>
    <MyActionIconUpdate form={form} title="Chi tiết loại minh chứng" onSubmit={async (values) => await baseAxios.post("/DocumentAttribute/Update", values)}>
        <MyTextInput label="Mã loại minh chứng" {...form.getInputProps("maLoai")} /> 
        <MyTextInput label="Tên loại minh chứng " {...form.getInputProps("tenLoai")} />
        <MyTextInput   label="Ghi chú" {...form.getInputProps("ghiChu")} />
    </MyActionIconUpdate>
</Group>

  )
}
