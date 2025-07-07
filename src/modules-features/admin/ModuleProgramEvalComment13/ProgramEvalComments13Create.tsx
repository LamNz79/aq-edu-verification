import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MySelect,
  MyTextInput,
  MyTextArea,
  MyDateInput,
  MyFileInput,
} from "aq-fe-framework/components";
import { I_EvaluationCommentTable } from "./ProgramEvalComments13Table";

export default function ProgramEvalComments13Create() {
  const form = useForm<I_EvaluationCommentTable>({
    initialValues: {
      id: 0,
      curriculumName: "",
      phase: "",
      reviewer: "",
      note: "",
    },
  });
  return (
    <MyButtonCreate
      onSubmit={() => { }}
      form={form}
      modalSize={"60%"}
      title="Chi tiết Nhận xét về Hồ sơ Thẩm định Kết quả Đánh giá"
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MySelect
            data={["Kỹ thuật phần mềm", "Kế toán", "Công nghệ thông tin"]}
            label="Chương trình Đào tạo"
            {...form.getInputProps("curriculumName")}
          />
          <MyTextInput
            label="Tên Tổ chức kiểm định"
            {...form.getInputProps("assessmentOrg")}
          />
          <MyTextInput
            label="Giai đoạn đánh giá"
            {...form.getInputProps("phase")}
          />
        </Stack>
        <Stack>
          <MyDateInput
            label="Ngày nhận xét"
            {...form.getInputProps("commentDate")}
          />
          <MyTextInput
            label="Người nhận xét"
            {...form.getInputProps("reviewer")}
          />
          <MyFileInput
            label="File nhận xét hồ sơ"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
      <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
    </MyButtonCreate>
  );
}
