"use client";

import { Checkbox, Stack, Grid, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  MyButton,
  MyButtonModal,
  MyTextInput,
  MyTextArea,
  MyFileInput,
} from "aq-fe-framework/components";
import { IEvaluationFormData } from "./interfaces/EvaluationFormViewModel";

export default function EvaluationFormUpdate({ values }: { values: IEvaluationFormData }) {
  const [opened, { open, close }] = useDisclosure(false);

  // const query = useQuery({
  //   queryKey: [""],
  //   queryFn: () => { return mockData; },
  // });

  const updateForm = useForm<IEvaluationFormData>({
    initialValues: {
      ...values,
      evidenceFile: null,
    },
    validate: {
      code: (value) => (!value ? "Vui lòng nhập mã tiêu chí" : null),
    },
  });

  const handleSubmit = async (values: IEvaluationFormData) => {
    console.log(values);
    close();
  };

  return (
    <MyButtonModal
      crudType="update"
      variant="transparent"
      title={`Cập nhật đánh giá tiêu chí ${values.code}`}
      label="Cập nhật"
      modalSize="xl"
      disclosure={[opened, { open, close, toggle: () => open() }]}
    >
      <form onSubmit={updateForm.onSubmit(handleSubmit)}>
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <MyTextInput
                label="Đợt đánh giá ngoài"
                {...updateForm.getInputProps("externalEvaluationRound")}
                readOnly
                variant="filled"
              />

              <MyTextInput
                label="Khóa đào tạo"
                {...updateForm.getInputProps("trainingCourse")}
                readOnly
                variant="filled"
              />

              <MyTextInput
                label="Mã Tiêu chí"
                {...updateForm.getInputProps("code")}
                readOnly
                variant="filled"
              />

              <MyTextInput
                label="Tên Tiêu chí"
                {...updateForm.getInputProps("name")}
                readOnly
                variant="filled"
              />

              <MyTextArea
                label="Điểm tồn tại"
                placeholder="Nhập các hạn chế, yếu kém cần khắc phục theo tiêu chí"
                {...updateForm.getInputProps("weaknesses")}
                rows={4}
                required
              />

              <Checkbox
                label="Đánh giá (Đạt)"
                {...updateForm.getInputProps("evaluation", { type: "checkbox" })}
              />

              <MyFileInput
                label="File minh chứng"
                placeholder="Chọn file minh chứng..."
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                {...updateForm.getInputProps("evidenceFile")}
              />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <MyTextInput
                label="Chương trình Đào tạo"
                {...updateForm.getInputProps("trainingProgram")}
                readOnly
                variant="filled"
              />

              <MyTextInput
                label="Người đánh giá"
                placeholder="Nhập tên người đánh giá"
                {...updateForm.getInputProps("evaluator")}
                required
              />

              <MyTextArea
                label="Mô tả hiện trạng"
                placeholder="Nhập mô tả thực trạng của CTĐT liên quan đến tiêu chí này"
                {...updateForm.getInputProps("currentSituationDescription")}
                rows={4}
                required
              />

              <MyTextArea
                label="Điểm mạnh"
                placeholder="Nhập các ưu điểm nổi bật mà CTĐT đạt được theo tiêu chí"
                {...updateForm.getInputProps("strengths")}
                rows={4}
                required
              />

              <MyTextArea
                label="Khuyến nghị"
                placeholder="Nhập các đề xuất hành động cụ thể để cải thiện điểm tồn tại và phát huy điểm mạnh"
                {...updateForm.getInputProps("recommendations")}
                rows={4}
                required
              />
            </Stack>
          </Grid.Col>
        </Grid>
        <Group grow mt="md">
          <MyButton type="submit">Lưu</MyButton>
        </Group>
      </form>
    </MyButtonModal>
  );
}
