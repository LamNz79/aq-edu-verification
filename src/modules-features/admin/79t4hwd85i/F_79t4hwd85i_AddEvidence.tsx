import MyTextArea from "@/components/Inputs/TextArea/MyTextArea";
import { useForm } from "@mantine/form";
import { MyButtonCreate, MyTextInput } from "aq-fe-framework/components";

interface F_79t4hwd85i_AddEvidence {
  maMinhChung?: string;
  tenMinhChung?: string;
  ghiChu?: string;
}

export default function F_79t4hwd85i_AddEvidence() {
  const form = useForm<F_79t4hwd85i_AddEvidence>({
    initialValues: {
      maMinhChung: "",
      tenMinhChung: "",
      ghiChu: "",
    },
    validate: {
      maMinhChung: (value) => (value ? null : "Không được để trống"),
      tenMinhChung: (value) => (value ? null : "Không được để trống"),
    },
  });

  return (
    <MyButtonCreate
      label="Thêm minh chứng"
      title="Chi tiết minh chứng"
      onSubmit={() => {}}
      form={form}
    >
      <MyTextInput label="Mã minh chứng" {...form.getInputProps("maMinhChung")} />
      <MyTextInput label="Tên minh chứng" {...form.getInputProps("tenMinhChung")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
    </MyButtonCreate>
  );
}
