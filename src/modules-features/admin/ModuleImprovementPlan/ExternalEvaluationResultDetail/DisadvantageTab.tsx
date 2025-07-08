import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";

interface IFormUpdateForm {
  content: string;
}

export default function DisadvantageTab() {
  const form = useForm<IFormUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          2. Điểm tồn tại
        </Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá" mt={8}>
        <MyTextEditor
          value={form.values.content}
          contentHeight={"220px"}
          error={form.errors.content as string | undefined}
          onChange={() => {}}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockContent: IFormUpdateForm = {
  content: `
  <p>
   Cơ chế thu thập và phân tích phản hồi từ doanh nghiệp (đặc biệt là các startup công nghệ) để cập nhật mục tiêu CTĐT chưa thực sự thường xuyên và hệ thống.
  </p>
  <p>
Việc theo dõi, đánh giá mức độ đạt được chuẩn đầu ra của sinh viên tốt nghiệp chưa được lượng hóa một cách đầy đủ
  </p>
`,
};
