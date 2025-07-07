import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";
import FormHistory from "./FormHistory";
import CurrentReport from "./CurrentReport";

export default function AdvantageLayoutTab() {
 
  return (
    <MyFlexColumn gap={16} ml={12}>
      <Stack gap={2}>
        <Text fw={600}>2. Điểm mạnh:</Text>
        <Text>
          (Phân tích, so sánh, lý giải và rút ra những điểm mạnh nổi bật của CTĐT trong việc đáp ứng
          các yêu cầu của tiêu chí)
        </Text>
      </Stack>
      <FormHistory />
      <CurrentReport />
    </MyFlexColumn>
  );
}
