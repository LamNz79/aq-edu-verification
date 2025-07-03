import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyFileInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import IQualityInspectionCertificateInfoViewModel from "./interfaces/IQualityInspectionCertificateInfoViewModel";

interface I extends IQualityInspectionCertificateInfoViewModel {
  file: File;
}

export default function QualityInspectionCertificateUpdateButton({
  values,
}: {
  values: IQualityInspectionCertificateInfoViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...values,
      file: new File([], values.fileDetail?.fileName!),
    },
  });
  return (
    <MyActionIconUpdate
      title="Chi tiết Giấy chứng nhận"
      modalSize="70vw"
      form={form}
      onSubmit={() => {}}
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
    </MyActionIconUpdate>
  );
}
