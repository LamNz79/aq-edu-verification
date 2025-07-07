import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";
import ReportHistory from "./ReportHistory";

interface IReportUpdateForm {
  content: string;
}

export default function DisadvantageLayoutTab() {
  const form = useForm<IReportUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFlexColumn gap={16} ml={12}>
      <Stack gap={2}>
        <Text fw={600}>3. Điểm tồn tại và khuyết nghị:</Text>
        <Text>
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu chí và các khuyến
          nghị cải tiến cần thiết)
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
    Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung
  </p>
`,
};
