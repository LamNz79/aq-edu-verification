import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyTextInput,
  MySelect,
  MyTextArea,
  MyDateInput,
  MyFileInput,
  MyActionIconUpdate,
} from "aq-fe-framework/components";
import { I_ExternalAssessmentPlanTable } from "./ProgramExternalEvalPlanTable";

export default function ProgramExternalEvalPlanUpdate({data}: {data: I_ExternalAssessmentPlanTable}) {
  const form = useForm<I_ExternalAssessmentPlanTable>({
    initialValues: data,
  });

  return (
    <MyActionIconUpdate
      onSubmit={() => {}}
      form={form}
      modalSize={"60%"}
      title="Chi tiết Kế hoạch Đánh giá ngoài CTĐT"
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MyTextInput
            label="Số Kế hoạch:"
            {...form.getInputProps("planNumber")}
          />
          <MySelect
            data={["KTPM", "KT", "CNTT"]}
            label="Chương trình Đào tạo:"
            {...form.getInputProps("curriculum")}
          />
          <MyTextInput
            label="Tên Tổ chức kiểm định:"
            {...form.getInputProps("assessmentOrg")}
          />
          <MyTextInput
            label="Giai đoạn đánh giá:"
            {...form.getInputProps("phase")}
          />
          <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </Stack>
        <Stack>
          <MyDateInput
            label="Ngày Kế hoạch:"
            {...form.getInputProps("planDate")}
          />
          <MyTextInput
            label="Giám đốc Tổ chức:"
            {...form.getInputProps("director")}
          />
          <MyTextInput label="Trưởng đoàn:" {...form.getInputProps("leader")} />
          <MyFileInput
            label="File kế hoạch đánh giá ngoài"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
