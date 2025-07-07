import { SimpleGrid, Stack } from "@mantine/core";
import {
  MyTextInput,
  MySelect,
  MyTextArea,
  MyDateInput,
  MyFileInput,
  MyActionIconUpdate,
} from "aq-fe-framework/components";
import { I_ResolutionTable } from "./AccreditationCouncilResolutionTable";
import { useForm } from "@mantine/form";

export default function AccreditationCouncilResolutionUpdate({
  data,
}: {
  data: I_ResolutionTable;
}) {
  const form = useForm<I_ResolutionTable>({
    initialValues: data,
  });
  return (
    <MyActionIconUpdate
      onSubmit={() => {}}
      form={form}
      title="Chi tiết Nghị quyết của Hội đồng"
      modalSize={"60%"}
    >
      <SimpleGrid cols={2} spacing="md">
        <Stack>
          <MyTextInput
            label="Số nghị quyết:"
            {...form.getInputProps("resolutionNumber")}
          />
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
          <MyTextInput
            label="Tên Nghị quyết:"
            {...form.getInputProps("resolutionName")}
          />
          <MyDateInput
            label="Ngày ban hành:"
            {...form.getInputProps("issueDate")}
          />
          <MyTextInput label="Người ký:" {...form.getInputProps("signer")} />
          <MyFileInput
            label="File Nghị quyết"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
