import {
  MyButtonCreate,
  MyNumberInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { ITrainingCourseListViewModel } from "./interface";
import { Grid } from "@mantine/core";

export default function TrainingCourseListCreate() {
  const form = useForm<ITrainingCourseListViewModel>({});
  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={"xl"}
      form={form}
      title="Chi tiết khóa đào tạo"
      onSubmit={() => {}}
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
              { label: "2024-HK1", value: "2024-HK1" },
              { label: "2023-HK1", value: "2023-HK1" },
              { label: "2020-HK1", value: "2020-HK1" },
              { label: "2022-HK2", value: "2022-HK2" },
            ]}
            {...form.getInputProps("semesterGraduation")}
          />
          <MyNumberInput
            label="Số lượng sinh viên"
            {...form.getInputProps("numberOfStudents")}
          />
        </Grid.Col>
      </Grid>
    </MyButtonCreate>
  );
}
