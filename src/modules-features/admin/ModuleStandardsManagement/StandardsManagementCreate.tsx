import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyFileInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { IStandardManagementViewModel } from "./interface";
import { Grid } from "@mantine/core";

export default function StandardsManagementCreate() {
  const form = useForm<IStandardManagementViewModel>({});
  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={"xl"}
      form={form}
      title={"Chi tiết bộ tiêu chuẩn"}
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
    </MyButtonCreate>
  );
}
