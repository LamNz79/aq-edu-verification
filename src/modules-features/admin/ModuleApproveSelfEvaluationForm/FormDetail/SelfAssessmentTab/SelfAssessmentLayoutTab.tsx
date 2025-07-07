import { Group, Radio, Stack, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import { useState } from "react";
import FormHistory from "./FormHistory";

export default function SelfAssessmentLayoutTab() {
  const [value, setValue] = useState("Đạt");

  return (
    <MyFlexColumn gap={16} ml={12}>
      <Stack gap={2}>
        <Text fw={600}>5. Tự đánh giá:</Text>
        <Text>
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu chí và các khuyến
          nghị cải tiến cần thiết)
        </Text>
      </Stack>
      <FormHistory />
      <MyFieldset title="Nội dung báo cáo hiện tại">
        <Radio.Group name="selfAssessment1" label="Tự đánh giá" value={value} onChange={(value) => setValue(value)}>
          <Group gap="xl" mt={4}>
            <Radio value="Đạt" label="Đạt" />
            <Radio value="Không đạt" label="Không đạt" />
          </Group>
        </Radio.Group>
      </MyFieldset>
    </MyFlexColumn>
  );
}
