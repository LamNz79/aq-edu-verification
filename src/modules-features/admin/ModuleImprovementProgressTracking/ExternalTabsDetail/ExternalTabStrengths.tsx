import { Flex, Stack, Text } from "@mantine/core";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

export default function TabStrengths() {
  const value = `
    <p>Chương trình đào tạo có mục tiêu rõ rằng, định hướng cụ thể cho người học.</p>
    <p>Mục tiêu và chuẩn đầu ra được xây dựng bám sát tử mệnh, tầm nhìn của Trưởng và nhu cầu xã hội.</p>
    <p>Thông tin về mục tiêu và chuẩn đầu ra được công bố công khai, rộng rãi trên website Trường, cẩm nang sinh viên và trong buổi định hướng nhập học.</p>
    `;

  return (
    <Flex direction={"column"} h={"100%"}>
      <Stack>
        <Text fw={500}>a. Điểm mạnh</Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá">
        <MyTextEditor value={value} onChange={() => {}} />
      </MyFieldset>
    </Flex>
  );
}
