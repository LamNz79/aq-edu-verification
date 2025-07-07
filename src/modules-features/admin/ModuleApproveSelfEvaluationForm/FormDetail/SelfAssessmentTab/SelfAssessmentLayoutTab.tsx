import { Stack, Text } from "@mantine/core";
import { MyFlexColumn } from "aq-fe-framework/components";
import FormHistory from "./FormHistory";
import CurrentReport from "./CurrentReport";

export default function SelfAssessmentLayoutTab() {
  return (
    <MyFlexColumn gap={16} ml={20}>
      <Stack gap={2}>
        <Text fw={600}>5. Tự đánh giá:</Text>
        <Text>
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu chí và các khuyến
          nghị cải tiến cần thiết)
        </Text>
      </Stack>
      <FormHistory />
      <CurrentReport />
    </MyFlexColumn>
  );
}
