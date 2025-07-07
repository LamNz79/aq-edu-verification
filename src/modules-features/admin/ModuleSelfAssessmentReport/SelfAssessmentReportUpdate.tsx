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
import { I_SelfAssessmentReportTable } from "./SelfAssessmentReportTable";

export default function SelfAssessmentReportUpdate({
  data,
}: {
  data: I_SelfAssessmentReportTable;
}) {
  const form = useForm<I_SelfAssessmentReportTable>({
    initialValues: data,
  });
  return (
    <MyActionIconUpdate
      onSubmit={() => {}}
      form={form}
      modalSize={"60%"}
      title="Chi tiết báo cáo tự đánh giá"
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MySelect
            data={[
              "Kỹ thuật phần mềm",
              "Kế toán",
              "Công nghệ thông tin",
              "Quản lí văn hóa",
            ]}
            label="Chương trình đào tạo"
            {...form.getInputProps("curriculumName")}
          />
          <MyTextInput
            label="Giai đoạn đánh giá"
            {...form.getInputProps("phase")}
          />
          <MyTextInput label="Người ký" {...form.getInputProps("signer")} />
          <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </Stack>
        <Stack>
          <MySelect
            data={["KTPM_K20", "KT_K21", "CNTT_K19", "QLDV_K22"]}
            label="Khóa:"
            {...form.getInputProps("course")}
          />
          <MyDateInput
            label="Ngày báo cáo"
            {...form.getInputProps("reportDate")}
          />
          <MyFileInput
            label="File báo cáo tự đánh giá"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
