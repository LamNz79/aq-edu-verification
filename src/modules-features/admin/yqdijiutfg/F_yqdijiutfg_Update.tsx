"use client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { I_yqdijiutfg_Read } from "./F_yqdijiutfg_Read";
import { MyActionIconUpdate, MyTextArea, MyTextInput } from "aq-fe-framework/components";

export default function F_yqdijiutfg_Update({ value }: { value: I_yqdijiutfg_Read }) {
  const disc = useDisclosure();

  const form = useForm<I_yqdijiutfg_Read>({
    initialValues: {
      ...value,
    },
    validate: {
      maTieuchuan: (value) => (!value ? "Vui lòng nhập mã tiêu chuẩn" : null),
      tenTieuChuan: (value) => (!value ? "Vui lòng nhập tên tiêu chuẩn" : null),
    },
  });

  return (
    <MyActionIconUpdate disclosure={disc} form={form} onSubmit={() => {}}>
      <MyTextInput
        label="Mã tiêu chuẩn"
        disabled
        required
        {...form.getInputProps("maTieuchuan")}
      />
      <MyTextInput
        label="Tên tiêu chuẩn"
        required
        {...form.getInputProps("tenTieuChuan")}
      />
      <MyTextInput
        label="Tên tiêu chuẩn Eg"
        {...form.getInputProps("tenTieuChuanEg")}
      />
      <MyTextArea
        label="Ghi chú"
        {...form.getInputProps("ghiChu")}
      />
    </MyActionIconUpdate>
  );
}