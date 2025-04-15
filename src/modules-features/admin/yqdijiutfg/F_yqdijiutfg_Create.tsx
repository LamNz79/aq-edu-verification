"use client";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export interface I_yqdijiutfg_Create {
  maTieuchuan?: string; // Mã tiêu chuẩn
  tenTieuChuan?: string; // Tên tiêu chuẩn
  tenTieuChuanEg?: string; // Tên tiêu chuẩn tiếng Anh
  ghiChu?: string; // Ghi chú
}

export default function F_yqdijiutfg_Create() {
  const disc = useDisclosure();

  const form = useForm<I_yqdijiutfg_Create>({
    initialValues: {
      maTieuchuan: "",
      tenTieuChuan: "",
      tenTieuChuanEg: "",
      ghiChu: "",
    },
    validate: {
      maTieuchuan: (value) => (!value ? "Vui lòng nhập mã tiêu chuẩn" : null),
      tenTieuChuan: (value) => (!value ? "Vui lòng nhập tên tiêu chuẩn" : null),
    },
  });

  return (
    <MyButtonCreate
      disclosure={disc}
      form={form}
      onSubmit={() => {}}
      objectName="Tiêu chuẩn"
    >
      <MyTextInput
        label="Mã tiêu chuẩn"
        placeholder="Nhập mã tiêu chuẩn"
        required
        {...form.getInputProps("maTieuchuan")}
      />
      <MyTextInput
        label="Tên tiêu chuẩn"
        placeholder="Nhập tên tiêu chuẩn"
        required
        {...form.getInputProps("tenTieuChuan")}
      />
      <MyTextInput
        label="Tên tiêu chuẩn (English)"
        placeholder="Nhập tên tiêu chuẩn tiếng Anh"
        {...form.getInputProps("tenTieuChuanEg")}
      />
      <MyTextArea
        label="Ghi chú"
        placeholder="Nhập ghi chú"
        {...form.getInputProps("ghiChu")}
      />
    </MyButtonCreate>
  );
}