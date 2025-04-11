"use client";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { I_yqdijiutfg_Read } from "./F_yqdijiutfg_Read";

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
    </MyActionIconUpdate>
  );
}