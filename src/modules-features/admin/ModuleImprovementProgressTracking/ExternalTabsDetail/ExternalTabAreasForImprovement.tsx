import { Flex, Stack, Text } from "@mantine/core";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

export default function TabAreasForImprovement() {
  const value = `
   <p> Thiết lập quy trình thu thập và phân tích phản hồi từ cộng đồng doanh nghiệp (bao gồm cả các doanh nghiệp khởi nghiệp) để đảm bảo mục tiêu CTĐT luôn cập nhật với xu hướng thị trường lao động. </p>
<p>Xây dựng và áp dụng các công cụ, phương pháp lượng hóa việc theo dõi và đánh giá mức độ đạt được chuẩn đầu ra của người học sau khi tốt nghiệp.</p>
<p>Đẩy mạnh các hoạt động tư vấn, định hướng nghề nghiệp dựa trên chuẩn đầu ra cho sinh viên từ sớm.</p>
    `;
  return (
    <Flex direction={"column"} h={"100%"}>
      <Stack>
        <Text fw={500}>c. Lĩnh vực cần cải tiến</Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá">
        <MyTextEditor value={value} onChange={() => {}} />
      </MyFieldset>
    </Flex>
  );
}
