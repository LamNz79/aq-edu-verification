import { Flex, Stack, Text } from "@mantine/core";
import { MyCheckbox, MyFieldset } from "aq-fe-framework/components";
import { useState } from "react";

export default function TabAchievementLevel({
  status,
}: {
  status: boolean | null;
}) {
  const [selfEvaluation, setSelfEvaluation] = useState<boolean | null>(status);
  return (
    <Flex direction={"column"} h={"100%"}>
      <Stack>
        <Text fw={500}>d. Đánh giá mức đạt</Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá">
        <Text fw={500}>Tự đánh giá</Text>
        <Flex gap={10} mih={100}>
          <MyCheckbox
            label="Đạt"
            checked={selfEvaluation === true}
            onChange={() => setSelfEvaluation(true)}
          />
          <MyCheckbox
            label="Không đạt"
            checked={selfEvaluation === false}
            onChange={() => setSelfEvaluation(false)}
          />
        </Flex>
      </MyFieldset>
    </Flex>
  );
}
