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
import { I_SurveyMemo08Table } from "./ProgramSurveyMemo08Table";

export default function ProgramSurveyMemo08Create() {
  const form = useForm<I_SurveyMemo08Table>({
    initialValues: {
      id: 0,
      curriculumName: "",
      phase: "",
      leader: "",
      deputy: "",
      note: "",
    },
  });
  return (
    <MyButtonCreate
      onSubmit={() => {}}
      form={form}
      modalSize={"60%"}
      title="Chi tiết Biên bản Ghi nhớ sau Khảo sát Sơ bộ CTĐT"
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MySelect
            data={["Kỹ thuật phần mềm", "Kế toán", "Công nghệ thông tin"]}
            label="Chương trình Đào tạo:"
            {...form.getInputProps("curriculumName")}
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
            label="Ngày lập biên bản:"
            {...form.getInputProps("minutesDate")}
          />
          <MyTextInput
            label="Thủ trưởng đơn vị:"
            {...form.getInputProps("deputy")}
          />
          <MyTextInput label="Trưởng đoàn:" {...form.getInputProps("leader")} />
          <MyFileInput
            label="File biên bản ghi nhớ"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
    </MyButtonCreate>
  );
}
