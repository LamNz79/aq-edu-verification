"use client";
import { useForm } from "@mantine/form";
import { MyButtonCreate, MySelect, MyTextArea, MyTextInput } from "aq-fe-framework/components";

export default function F_po2maj8sm7_CreateCriteria() {

  const form = useForm<I_po2maj8sm7_CreateCriteria>({
    initialValues: {
      maTieuChuan: "TC001",
      maTieuChi: "",
      tenTieuChi: "",
      tenTieuChiEg: "",
      minhChungGoiY: "",
      ghiChu: "",
    },
    validate: {
      maTieuChuan: (value) => (!value ? "Vui lòng chọn mã tiêu chuẩn" : null),
      maTieuChi: (value) => (!value ? "Vui lòng chọn mã tiêu chí" : null),
      tenTieuChi: (value) => (!value ? "Vui lòng nhập tên tiêu chí" : null),
    },
  });

  return (
    <MyButtonCreate
      form={form}
      onSubmit={() => { }}
      objectName="Tiêu chí"
      modalSize="40%"
    >
      <MySelect data={dataSelectTieuChuan} label="Tiêu chuẩn" {...form.getInputProps("maTieuChuan")} />
      <MyTextInput label="Mã tiêu chí/ chỉ số" {...form.getInputProps("maTieuChi")} />
      <MyTextInput label="Tên tiêu chí/ chỉ số" {...form.getInputProps("tenTieuChi")} />
      <MyTextInput label="Tên tiêu chí Eg" {...form.getInputProps("tenTieuChiEg")} />
      <MyTextArea label="Minh chứng gợi ý" {...form.getInputProps("minhChungGoiY")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
    </MyButtonCreate>
  );
}











export interface I_po2maj8sm7_CreateCriteria {
  maTieuChuan: string;
  maTieuChi: string;
  tenTieuChi: string;
  tenTieuChiEg?: string;
  minhChungGoiY?: string;
  ghiChu?: string;
}


const dataSelectTieuChuan = [
  {
    value: "TC001",
    label: "TC001 - Tổ chức và quản trị",
  },
  {
    value: "TC002",
    label: "TC002 - Phân loại và sắp xếp",
  },
];