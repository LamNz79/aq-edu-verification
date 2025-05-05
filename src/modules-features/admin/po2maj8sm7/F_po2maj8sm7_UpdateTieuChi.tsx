"use client";

import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MySelect, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { I_po2maj8sm7_TabTieuChi } from "./F_po2maj8sm7_TabTieuChi";

export default function F_po2maj8sm7_UpdateTieuChi({ value }: { value: I_po2maj8sm7_TabTieuChi }) {

  const form = useForm<I_po2maj8sm7_TabTieuChi>({
    initialValues: {
      ...value,
    },
    validate: {
      maTieuChuan: (value) => (!value ? "Vui lòng chọn mã tiêu chuẩn" : null),
      maTieuChi: (value) => (!value ? "Vui lòng chọn mã tiêu chí" : null),
      tenTieuChi: (value) => (!value ? "Vui lòng nhập tên tiêu chí" : null),
    },
  });

  return (
    <MyActionIconUpdate
      form={form}
      onSubmit={() => { }}
      modalSize="40%"
      title="Chi tiết danh sách tiêu chí"
    >
      <MySelect data={dataSelectTieuChuan} label="Tiêu chuẩn" {...form.getInputProps("maTieuChuan")} />
      <MyTextInput label="Mã tiêu chí/ chỉ số" {...form.getInputProps("maTieuChi")} />
      <MyTextInput label="Tên tiêu chí/ chỉ số" {...form.getInputProps("tenTieuChi")} />
      <MyTextInput label="Tên tiêu chí Eg" {...form.getInputProps("tenTieuChiEg")} />
      <MyTextArea label="Minh chứng gợi ý" {...form.getInputProps("minhChungGoiY")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
    </MyActionIconUpdate>
  );
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