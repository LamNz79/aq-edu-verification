import { Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyButtonCreate,
  MyCheckbox,
  MyFileInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { IStandardManagementViewModel } from "./interface";

export default function StandardsManagementVersionCreate() {
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
            label="Tên phiên bản"
            {...form.getInputProps("nameVersion")}
          />
          <MyFileInput
            label="File đính kèm"
            placeholder="Nhập file đính kèm"
            {...form.getInputProps("file")}
          />
          <MyCheckbox
            mt={"md"}
            label="Trạng thái hiệu lực"
            {...form.getInputProps("status", { type: "checkbox" })}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea
            label="Mô tả phiên bản"
            {...form.getInputProps("descriptionVersion")}
          />
        </Grid.Col>
      </Grid>
    </MyButtonCreate>
  );
}
