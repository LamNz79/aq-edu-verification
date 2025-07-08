import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyFileInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { ISelfAndExternalEvaluationResultViewModel } from "./interfaces/ISelfAndExternalEvaluationResultViewModel";

const programOptions = [
  { value: "Kỹ thuật phần mềm", label: "Kỹ thuật phần mềm" },
  { value: "Kế toán", label: "Kế toán" },
  { value: "Công nghệ thông tin", label: "Công nghệ thông tin" },
];

export default function SelfAndExternalEvaluationResultsCreateButton() {
  const form = useForm<ISelfAndExternalEvaluationResultViewModel>({
    initialValues: {
      programName: "",
      evaluationPeriod: "",
      organizationName: "",
      summaryDate: undefined,
      signer: "",
      fileSummary: undefined,
      note: "",
    },
  });
  return (
    <MyButtonCreate
      form={form}
      modalSize={"70vw"}
      onSubmit={() => {}}
      objectName="Bảng Tổng hợp Kết quả Tự đánh giá và Đánh giá ngoài (Biểu 11)"
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
        <Stack>
          <MySelect
            label="Chương trình Đào tạo"
            data={programOptions}
            placeholder="Chọn chương trình"
            {...form.getInputProps("programName")}
          />
          <MyTextInput label="Tên Tổ chức kiểm định" {...form.getInputProps("organizationName")} />
          <MyTextInput label="Giai đoạn đánh giá" {...form.getInputProps("evaluationPeriod")} />
          <MyTextArea label="Ghi chú" minRows={4} {...form.getInputProps("note")} />
        </Stack>
        <Stack>
          <MyDateInput
            label="Ngày tổng hợp"
            {...form.getInputProps("summaryDate")}
            clearable={false}
          />
          <MyTextInput label="Người ký" {...form.getInputProps("signer")} />
          <MyFileInput label="File nhận xét hồ sơ" {...form.getInputProps("fileSummary")} />
        </Stack>
      </SimpleGrid>
    </MyButtonCreate>
  );
}
