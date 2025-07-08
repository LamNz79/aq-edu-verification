import { Stack, Text } from "@mantine/core";
import { MyFlexColumn } from "aq-fe-framework/components";
import CurrentReport from "./CurrentReport";
import FormHistory from "./FormHistory";

export default function AdvantageLayoutTab() {
  return (
    <MyFlexColumn gap={16}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          2. Điểm mạnh:
        </Text>
        <Text size="sm">
          (Phân tích, so sánh, lý giải và rút ra những điểm mạnh nổi bật của CTĐT trong việc đáp ứng
          các yêu cầu của tiêu chí)
        </Text>
      </Stack>
      <FormHistory />
      <CurrentReport />
    </MyFlexColumn>
  );
}
