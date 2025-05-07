"use client";
import { useForm } from "@mantine/form";
import { MyButtonCreate, MyTextArea, MyTextInput } from "aq-fe-framework/components";

export interface I_po2maj8sm7_CreateStandard {
  maTieuChuan?: string;
  tenTieuChuan?: string;
  tenTieuChuanEg?: string;
  ghiChu?: string;
}

export default function F_po2maj8sm7_CreateStandard() {
  const form = useForm<I_po2maj8sm7_CreateStandard>({
    initialValues: {
      maTieuChuan: "",
      tenTieuChuan: "",
      tenTieuChuanEg: "",
      ghiChu: "",
    },
    validate: {
      maTieuChuan: (value) => (!value ? "Vui lòng nhập mã tiêu chuẩn" : null),
      tenTieuChuan: (value) => (!value ? "Vui lòng nhập tên tiêu chuẩn" : null),
    },
  });

  return (
    <MyButtonCreate
      form={form}
      onSubmit={() => { }}
      objectName="Tiêu chuẩn"
      modalSize="40%"
    >
      <MyTextInput label="Mã tiêu chuẩn" {...form.getInputProps("maTieuChuan")} />
      <MyTextInput label="Tên tiêu chuẩn" {...form.getInputProps("tenTieuChuan")} />
      <MyTextInput label="Tên tiêu chuẩn Eg" {...form.getInputProps("tenTieuChuanEg")} />
      <MyTextArea label="Ghi chú" placeholder="Nhập ghi chú" {...form.getInputProps("ghiChu")} />
    </MyButtonCreate>
  );
}