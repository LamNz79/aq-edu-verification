import { Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyNumberInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { ITrainingCourseListViewModel } from "./interface";

export default function TrainingCourseListUpdate({
  values,
}: {
  values: ITrainingCourseListViewModel;
}) {
  const form = useForm<ITrainingCourseListViewModel>({
    initialValues: values,
  });

  return (
    <MyActionIconUpdate
      form={form}
      modalSize={"xl"}
      onSubmit={() => {}}
      title="Chi tiết khóa đào tạo"
    >
      <Grid columns={12}>
        <Grid.Col span={6}>
          <MyTextInput
            label="Mã khóa đào tạo"
            {...form.getInputProps("code")}
          />
          <MyTextInput
            label="Tên khóa đào tạo"
            {...form.getInputProps("name")}
          />
          <MySelect
            label="Trạng thái khóa"
            data={[
              { label: "Đang học", value: "1" },
              { label: "Đã tốt nghiệp", value: "2" },
            ]}
            {...form.getInputProps("status")}
          />
          <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </Grid.Col>
        <Grid.Col span={6}>
          <MySelect
            label="Năm học - Học kỳ vào"
            data={[
              { label: "2024-HK1", value: "2024-HK1" },
              { label: "2023-HK1", value: "2023-HK1" },
              { label: "2020-HK1", value: "2020-HK1" },
              { label: "2022-HK2", value: "2022-HK2" },
            ]}
            {...form.getInputProps("semester")}
          />
          <MySelect
            label="Năm học - Học kỳ tốt nghiệp"
            data={[
              { label: "2024-HK2", value: "2024-HK2" },
              { label: "2025-HK1", value: "2025-HK1" },
              { label: "2026-HK1", value: "2026-HK1" },
              { label: "2027-HK2", value: "2027-HK2" },
              { label: "2028-HK2", value: "2028-HK2" },
            ]}
            {...form.getInputProps("semesterGraduation")}
          />
          <MyNumberInput
            label="Số lượng sinh viên"
            {...form.getInputProps("numberOfStudents")}
          />
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
