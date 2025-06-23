import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyTextArea,
  MyTextInput
} from "aq-fe-framework/components";
import {
  IExpectedEvidenceViewModel
} from "../../interface";

export default function ExpectedEvidenceCreate() {
  const form = useForm<IExpectedEvidenceViewModel>({});

  return (
    <MyButtonCreate
      label="Thêm"
      form={form}
      modalSize={"lg"}
      title="Chi tiết minh chứng dự kiến"
      onSubmit={() => {}}
    >
      <MyTextInput
        label="Mã minh chứng dự kiến"
        {...form.getInputProps("code")}
      />
      <MyTextArea label="Tên minh chứng" {...form.getInputProps("name")} />
      <MyTextInput
        label="Số minh chứng"
        {...form.getInputProps("issuanceNumber")}
      />
      <MyDateInput label="Ngày ban hành" {...form.getInputProps("date")} />
      <MyTextInput label="Nơi ban hành" {...form.getInputProps("location")} />
    </MyButtonCreate>
  );
}
