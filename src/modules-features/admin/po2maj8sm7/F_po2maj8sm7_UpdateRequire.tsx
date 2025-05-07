"use client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MySelect, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { I_po2maj8sm7_TabRequire } from "./F_po2maj8sm7_TabRequire";

export default function F_po2maj8sm7_UpdateRequire({ value }: { value: I_po2maj8sm7_TabRequire }) {
  const disc = useDisclosure();

  const form = useForm<I_po2maj8sm7_TabRequire>({
    initialValues: {
      ...value,
    },
    validate: {
      maTieuChuan: (value) => (!value ? "Vui lòng chọn mã tiêu chuẩn" : null),
      maTieuChi: (value) => (!value ? "Vui lòng chọn mã tiêu chí" : null),
      maYeuCau: (value) => (!value ? "Vui lòng nhập mã yêu cầu" : null),
      tenYeuCau: (value) => (!value ? "Vui lòng nhập tên yêu cầu" : null),
    },
  });

  return (
    <MyActionIconUpdate
      form={form}
      onSubmit={() => { }}
      modalSize="40%"
      title="Chi tiết yêu cầu/ mốc chuẩn"
    >
      <MySelect data={dataSelectTieuChuan} label="Tiêu chuẩn" {...form.getInputProps("maTieuChuan")} />
      <MySelect data={dataSelectTieuChi} label="Mã tiêu chí/ chỉ số" {...form.getInputProps("maTieuChi")} />
      <MyTextInput label="Mã yêu cầu/mốc chuẩn" {...form.getInputProps("maYeuCau")} />
      <MyTextInput label="Tên yêu cầu/mốc chuẩn" {...form.getInputProps("tenYeuCau")} />
      <MyTextArea label="Mô tả" {...form.getInputProps("moTa")} />
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


const dataSelectTieuChi = [
  {
    value: "TC1.1",
    label: "TC1.1 - Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng. phù hợp với định hướng phát triển và được công bố công khai.",
  },
  {
    value: "TC1.2",
    label: "TC1.2 - Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên và người học",
  },
];