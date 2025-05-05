"use client";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput";
import MyFileInput from "@/components/Inputs/FileInput/MyFileInput";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export interface I_nxiyjlnrik_Create {
  maMinhChung?: string; // Mã minh chứng
  tenMinhChung?: string; // Tên minh chứng
  moTa?: string; // Mô tả
  fileMinhChung?: string; // File minh chứng
  loaiMinhChung?: string; // Loại minh chứng
  dinhDang?: string; // Định dạng
  donViBanHanh?: string; //  Đơn vị ban hành
  ngayBanHanh?: Date; // Ngày ban hành
  ngayHetHan?: Date; // Ngày hết hạn
  ghiChu?: string; // Ghi chú
}

export default function F_nxiyjlnrik_Create() {
  const disc = useDisclosure();

  const form = useForm<I_nxiyjlnrik_Create>({
    initialValues: {
      maMinhChung: "",
      tenMinhChung: "",
      moTa: "",
      fileMinhChung: "",
      loaiMinhChung: "Báo cáo",
      donViBanHanh: "",
      ngayBanHanh: new Date(),
      ngayHetHan: new Date(),
      ghiChu: "",
    },
    validate: {
      maMinhChung: (value) => (!value ? "Vui lòng nhập mã minh chứng" : null),
      tenMinhChung: (value) => (!value ? "Vui lòng nhập tên minh chứng" : null),
      fileMinhChung: (value) =>
        !value ? "Vui lòng chọn file minh chứng" : null,
      loaiMinhChung: (value) =>
        !value ? "Vui lòng chọn loại minh chứng" : null,
      donViBanHanh: (value) =>
        !value ? "Vui lòng nhập đơn vị ban hành" : null,
      ngayBanHanh: (value, allValues) => {
        if (!value) {
          return "Vui lòng chọn ngày ban hành";
        }
        if (allValues.ngayHetHan && new Date(value) >= new Date(allValues.ngayHetHan)) {
          return "Ngày ban hành phải nhỏ hơn ngày hết hạn";
        }
        return null;
      },
      ngayHetHan: (value) => (!value ? "Vui lòng chọn ngày hết hạn" : null),
    },
  });

  return (
    <MyButtonCreate
      disclosure={disc}
      form={form}
      modalSize={"xl"}
      onSubmit={() => {}}
      objectName="Minh chứng"
    >
      <MyTextInput
        label="Mã minh chứng"
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
      <MySelect
        label="Loại minh chứng"
        placeholder="Chọn loại minh chứng"
        data={[
          { value: "Báo cáo", label: "Báo cáo" },
          { value: "Kế hoạch", label: "Kế hoạch" },
          { value: "Biên bản", label: "Biên bản" },
          { value: "Giấy chứng nhận", label: "Giấy chứng nhận" },
          { value: "Quyết định", label: "Quyết định" },
        ]}
        required
        {...form.getInputProps("loaiMinhChung")}
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
      <MyTextArea
        label="Ghi chú"
        placeholder="Nhập ghi chú"
        {...form.getInputProps("ghiChu")}
      />
    </MyButtonCreate>
  );
}
