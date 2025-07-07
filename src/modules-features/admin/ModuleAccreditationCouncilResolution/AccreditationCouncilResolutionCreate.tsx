import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyTextInput,
  MySelect,
  MyTextArea,
  MyDateInput,
  MyFileInput,
} from "aq-fe-framework/components";
import { I_ResolutionTable } from "./AccreditationCouncilResolutionTable";

export default function AccreditationCouncilResolutionCreate() {
  const form = useForm<I_ResolutionTable>({
    initialValues: {
      id: 0,
      resolutionNumber: "",
      resolutionName: "",
      curriculumName: "",
      assessmentOrg: "",
      phase: "",
      signer: "",
      note: "",
    },
  });
  return (
    <MyButtonCreate
      onSubmit={() => { }}
      form={form}
      title="Chi tiết Nghị quyết của Hội đồng"
      modalSize={"60%"}
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MyTextInput
            label="Số nghị quyết"
            {...form.getInputProps("resolutionNumber")}
          />
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
          <MyTextInput
            label="Tên Nghị quyết"
            {...form.getInputProps("resolutionName")}
          />
          <MyDateInput
            label="Ngày ban hành"
            {...form.getInputProps("issueDate")}
          />
          <MyTextInput label="Người ký" {...form.getInputProps("signer")} />
          <MyFileInput
            label="File Nghị quyết"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
      <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
    </MyButtonCreate>
  );
}
