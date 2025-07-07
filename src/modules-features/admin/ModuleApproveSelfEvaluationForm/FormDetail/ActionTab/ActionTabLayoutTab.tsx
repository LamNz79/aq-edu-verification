import { Stack, Text } from "@mantine/core";
import { MyFlexColumn } from "aq-fe-framework/components";
import CurrentReport from "./CurrentReport";
import FormHistory from "./FormHistory";

export default function ActionTabLayoutTab() {

  return (
    <MyFlexColumn gap={16} ml={20}>
      <Stack gap={2}>
        <Text fw={600}>4. Kế hoạch hành động:</Text>
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
