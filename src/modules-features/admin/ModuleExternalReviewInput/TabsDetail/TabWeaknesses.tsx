import { Flex, Stack, Text } from "@mantine/core";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

export default function TabWeaknesses() {
  const value = `
    <p>Cơ chế thu thập và phân tích phản hồi từ doanh nghiệp (đặc biệt là các startup công nghệ) để cập nhật mục tiêu CTĐT chưa thực sự thường xuyên và hệ thống</p>
    <p>Việc theo dõi, đánh giá mức độ đạt được chuẩn đầu ra của sinh viên tốt nghiệp chưa được lượng hóa một cách đầy đủ</p>
    `;
  return (
    <Flex direction={"column"} h={"100%"}>
      <Stack>
        <Text fw={500}>b. Điểm tồn tại</Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá">
        <MyTextEditor value={value} onChange={() => {}} />
      </MyFieldset>
    </Flex>
  );
}
