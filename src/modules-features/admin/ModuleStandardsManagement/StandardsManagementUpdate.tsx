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
import { MySelect } from "aq-fe-framework/core";

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
          <MyFileInput
            label="File bộ tiêu chuẩn"
            placeholder="Nhập file đính kèm"
            {...form.getInputProps("file")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label="Ngày ban hành"
            {...form.getInputProps("date")}
          />
          <MyTextInput
            label="Tên phiên bản"
            {...form.getInputProps("nameVersion")}
          />
          <MySelect
            label="Loại kiểm định"
            data={['Chuơng trình đào tạo', "Cơ sở giáo dục"]}
            {...form.getInputProps("inspectionType")}
          />
        </Grid.Col>
      </Grid>
      <MyTextArea
        label="Mô tả bộ tiêu chuẩn"
        {...form.getInputProps("description")}
      />
    </MyActionIconUpdate>
  );
}
