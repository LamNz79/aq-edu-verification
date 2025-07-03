import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyFileInput,
  MyTextArea,
  MyTextInput
} from "aq-fe-framework/components";
import IQualityInspectionCertificateViewModel from "./interfaces/IQualityInspectionCertificateViewModel";

export default function QualityInspectionCertificateCreateButton() {
  const form = useForm<IQualityInspectionCertificateViewModel>({
    initialValues: {
      code: "",
      issuer: "",
      issueDate: undefined,
      expiryDate: undefined,
      inspectionBatch: "",
      isActive: false,
      file: new File([], ""),
    },
  });
  return (
    <MyButtonCreate
      form={form}
      modalSize={"70vw"}
      onSubmit={() => {}}
      objectName="Giấy chứng nhận"
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
        <Stack>
          <MyTextInput label="Số Giấy chứng nhận" {...form.getInputProps("code")} />
          <MyTextInput label="Đơn vị cấp" {...form.getInputProps("issuer")} />
          <MyTextInput label="Đợt Kiểm định" {...form.getInputProps("inspectionBatch")} />
          <MyFileInput label="File Giấy chứng nhận" {...form.getInputProps("file")} />
        </Stack>
        <Stack>
          <MyDateInput label="Ngày cấp" {...form.getInputProps("issueDate")} clearable={false} />
          <MyDateInput
            label="Ngày hết hiệu lực"
            {...form.getInputProps("expiryDate")}
            clearable={false}
          />
          <MyTextArea minRows={4} label="Ghi chú" {...form.getInputProps("note")} />
        </Stack>
      </SimpleGrid>
    </MyButtonCreate>
  );
}
