import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyButtonCreate,
  MyDateInput,
  MyFileInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { IStandardManagementViewModel } from "./interface";
import { Grid } from "@mantine/core";

interface I extends IStandardManagementViewModel {
  file: File;
}

export default function StandardsManagementUpdate({
  data,
}: {
  data: IStandardManagementViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...data,
      file: new File([], data.filePath?.split("/")[data.filePath.split("/").length - 1]!),
    },
  });

  return (
    <MyActionIconUpdate
      modalSize={"xl"}
      form={form}
      title="Chi tiết bộ tiêu chuẩn"
      onSubmit={() => {}}
    >
      <Grid gutter="md" columns={12}>
        <Grid.Col span={6}>
          <MyTextInput
            label="Mã bộ tiêu chuẩn"
            {...form.getInputProps("code")}
          />
          <MyTextInput
            label="Tên bộ tiêu chuẩn"
            {...form.getInputProps("name")}
          />
          <MyTextArea
            label="File bộ tiêu chuẩn"
            {...form.getInputProps("description")}
          />
          <MyFileInput
            label="File đính kèm"
            placeholder="Nhập file đính kèm"
            {...form.getInputProps("file")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label="Ngày ban hành gốc"
            {...form.getInputProps("date")}
          />
          <MyTextInput
            label="Tên phiên bản"
            {...form.getInputProps("nameVersion")}
          />
          <MyTextArea
            label="Mô tả phiên bản"
            {...form.getInputProps("descriptionVersion")}
          />
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
