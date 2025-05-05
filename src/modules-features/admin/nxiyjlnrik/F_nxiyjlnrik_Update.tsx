"use client";
import baseAxios from "@/api/baseAxios";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput";
import MyFileInput from "@/components/Inputs/FileInput/MyFileInput";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import { I_nxiyjlnrik_Create } from "./F_nxiyjlnrik_Create";
import { I_nxiyjlnrik_Read } from "./F_nxiyjlnrik_Read";
import { Stack } from "@mantine/core";

export default function F_nxiyjlnrik_Update({
  value,
}: {
  value: I_nxiyjlnrik_Read;
}) {
  const disc = useDisclosure();

  const form = useForm<I_nxiyjlnrik_Read>({
    initialValues: {
      ...value,
    },
    validate: {
      maMinhChung: (value) => (!value ? "Vui lòng nhập mã minh chứng" : null),
      tenMinhChung: (value) => (!value ? "Vui lòng nhập tên minh chứng" : null),
      fileMinhChung: (value) =>
        !value ? "Vui lòng chọn file minh chứng" : null,
      dinhDang: (value) => (!value ? "Vui lòng chọn định dạng" : null),
      donViBanHanh: (value) =>
        !value ? "Vui lòng nhập đơn vị ban hành" : null,
      ngayBanHanh: (value, allValues) => {
        if (!value) {
          return "Vui lòng chọn ngày ban hành";
        }
        if (
          allValues.ngayHetHan &&
          new Date(value) >= new Date(allValues.ngayHetHan)
        ) {
          return "Ngày ban hành phải nhỏ hơn ngày hết hạn";
        }
        return null;
      },
      ngayHetHan: (value) => (!value ? "Vui lòng chọn ngày hết hạn" : null),
    },
  });

  return (
    <MyActionIconUpdate disclosure={disc} modalSize={"xl"} form={form} onSubmit={() => {}}>
      <Stack>
        <MyTextInput
          label="Mã minh chứng"
          disabled
          placeholder="Nhập mã minh chứng"
          required
          {...form.getInputProps("maMinhChung")}
        />
        <MyTextInput
          label="Tên minh chứng"
          placeholder="Nhập tên minh chứng"
          required
          {...form.getInputProps("tenMinhChung")}
        />
        <MyTextArea
          label="Mô tả"
          placeholder="Nhập mô tả"
          {...form.getInputProps("moTa")}
        />
        <MyFileInput
          label="File minh chứng"
          placeholder="Chọn file minh chứng"
          required
          {...form.getInputProps("fileMinhChung")}
        />
        <MyTextInput
          label="Định dạng"
          disabled
          {...form.getInputProps("dinhDang")}
        />
        <MyTextInput
          label="Người tải"
          disabled
          placeholder="Nhập người tải"
          {...form.getInputProps("nguoiTai")}
        />
        <MyDateInput
          disabled
          label="Ngày tải"
          placeholder="Chọn ngày tải"
          {...form.getInputProps("ngayTai")}
        />
        <MyTextInput
          label="Đơn vị ban hành"
          placeholder="Nhập đơn vị ban hành"
          required
          {...form.getInputProps("donViBanHanh")}
        />
        <MyDateInput
          label="Ngày ban hành"
          placeholder="Chọn ngày ban hành"
          required
          {...form.getInputProps("ngayBanHanh")}
        />
        <MyDateInput
          label="Ngày hết hạn"
          placeholder="Chọn ngày hết hạn"
          required
          {...form.getInputProps("ngayHetHan")}
        />
        <MySelect
          label="Trạng thái"
          placeholder="Chọn trạng thái"
          data={[
            { value: "Hoạt động", label: "Hoạt động" },
            { value: "Không hoạt động", label: "Không hoạt động" },
            { value: "Hết hạn", label: "Hết hạn" },
          ]}
          {...form.getInputProps("trangThai")}
        />
        <MyTextArea
          label="Ghi chú"
          placeholder="Nhập ghi chú"
          {...form.getInputProps("ghiChu")}
        />
      </Stack>
    </MyActionIconUpdate>
  );
}
