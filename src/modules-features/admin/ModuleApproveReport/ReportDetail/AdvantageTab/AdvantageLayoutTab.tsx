import { Grid, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";
import ReportHistory from "./ReportHistory";

interface IReportUpdateForm {
  content: string;
}

export default function AdvantageLayoutTab() {
  const form = useForm<IReportUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFlexColumn gap={16} ml={12}>
      <Stack gap={2}>
        <Text fw={600}>2. Điểm mạnh:</Text>
        <Text>
          (Phân tích, so sánh, lý giải và rút ra những điểm mạnh nổi bật của CTĐT trong việc đáp ứng
          các yêu cầu của tiêu chí)
        </Text>
      </Stack>
      <ReportHistory />
      <MyFieldset title="Nội dung báo cáo hiện tại">
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

const mockContent: IReportUpdateForm = {
  content: `
  <p>
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.
  </p>
   <p>
   Khuôn viên Trường có đầy đủ các bảng nội quy, hướng dẫn, các thông điệp mang ý nghĩa tích cực giúp người học thêm năng động, sáng tạo trong học tập và rèn luyện
   </p>
`,
};
