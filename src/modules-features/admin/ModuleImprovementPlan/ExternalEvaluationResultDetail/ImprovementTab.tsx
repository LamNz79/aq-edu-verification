import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";

interface IFormUpdateForm {
  content: string;
}

export default function ImprovementTab() {
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
          3. Lĩnh vực cần cải tiến
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
    Thiết lập quy trình thu thập và phân tích phản hồi từ cộng đồng doanh nghiệp (bao gồm cả các doanh nghiệp khởi nghiệp) để đảm bảo mục tiêu CTĐT luôn cập nhật với xu hướng thị trường lao động.
  </p>
   <p>
Xây dựng và áp dụng các công cụ, phương pháp lượng hóa việc theo dõi và đánh giá mức độ đạt được chuẩn đầu ra của người học sau khi tốt nghiệp.
  </p>
   <p>
Đẩy mạnh các hoạt động tư vấn, định hướng nghề nghiệp dựa trên chuẩn đầu ra cho sinh viên từ sớm.
  </p>
`,
};
