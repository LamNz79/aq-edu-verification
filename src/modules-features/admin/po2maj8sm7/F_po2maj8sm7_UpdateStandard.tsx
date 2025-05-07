"use client";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { I_po2maj8sm7_TabStandard } from "./F_po2maj8sm7_TabStandard";

export default function F_po2maj8sm7_UpdateStandard({ value }: { value: I_po2maj8sm7_TabStandard }) {

  const form = useForm<I_po2maj8sm7_TabStandard>({
    initialValues: {
      ...value,
    },
    validate: {
      maTieuChuan: (value) => (!value ? "Vui lòng nhập mã tiêu chuẩn" : null),
      tenTieuChuan: (value) => (!value ? "Vui lòng nhập tên tiêu chuẩn" : null),
    },
  });

  return (
    <MyActionIconUpdate
      form={form}
      onSubmit={() => { }}
      title="Chi tiết danh sách tiêu chuẩn"
      modalSize="40%"
    >
      <MyTextInput label="Mã tiêu chuẩn" {...form.getInputProps("maTieuChuan")} />
      <MyTextInput label="Tên tiêu chuẩn" {...form.getInputProps("tenTieuChuan")} />
      <MyTextInput label="Tên tiêu chuẩn Eg" {...form.getInputProps("tenTieuChuanEg")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
    </MyActionIconUpdate>
  );
}