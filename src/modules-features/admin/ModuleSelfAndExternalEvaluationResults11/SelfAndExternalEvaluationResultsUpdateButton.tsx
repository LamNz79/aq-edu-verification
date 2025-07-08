import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyFileInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { ISelfAndExternalEvaluationResultInfoViewModel } from "./interfaces/ISelfAndExternalEvaluationResultInfoViewModel";

const programOptions = [
  { value: "Kỹ thuật phần mềm", label: "Kỹ thuật phần mềm" },
  { value: "Kế toán", label: "Kế toán" },
  { value: "Công nghệ thông tin", label: "Công nghệ thông tin" },
];

interface I extends ISelfAndExternalEvaluationResultInfoViewModel {
  file: File;
}

export default function SelfAndExternalEvaluationResultsUpdateButton({
  values,
}: {
  values: ISelfAndExternalEvaluationResultInfoViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...values,
      file: new File([], values.fileDetail?.fileName!),
    },
  });

  return (
    <MyActionIconUpdate
      title="Chi tiết Bảng Tổng hợp Kết quả Tự đánh giá và Đánh giá ngoài (Biểu 11)"
      modalSize="70vw"
      form={form}
      onSubmit={() => {}}
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
          <MyFileInput label="File nhận xét hồ sơ" {...form.getInputProps("file")} />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
