import { Group, Radio, Stack, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import { useState } from "react";

export default function AssessmentTab() {
  const [value, setValue] = useState("Đạt");

  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          d. Đánh giá mức đạt
        </Text>
      </Stack>
      <MyFieldset title="Nội dung đánh giá" mt={8}>
        <Radio.Group
          name="selfAssessment1"
          label="Tự đánh giá"
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Group gap="xl" mt={4}>
            <Radio value="Đạt" label="Đạt" />
            <Radio value="Không đạt" label="Không đạt" />
          </Group>
        </Radio.Group>
      </MyFieldset>
    </MyFlexColumn>
  );
}
