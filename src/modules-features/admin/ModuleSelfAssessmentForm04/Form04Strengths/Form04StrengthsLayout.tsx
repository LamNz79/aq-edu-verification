import { Accordion, Box, Stack, Text } from "@mantine/core";
import {
  MyFieldset,
  MyFlexColumn,
  MyTextEditor,
} from "aq-fe-framework/components";
import Form04StrengthsRow from "./Form04StrengthsRow";
import { IForm04StrengthsRowHistory } from "./interface";

export default function Form04StrengthsLayout() {
  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          2. Điểm mạnh
        </Text>
        <Text mb="md" size="sm">
          (Phân tích, so sánh, lý giải và rút ra những điểm mạnh nổi bật của
          CTĐT trong việc đáp ứng các yêu cầu tiêu chí)
        </Text>
      </Stack>
      <MyFieldset title={`Lịch sử soạn thảo`}>
        <Box
          h={"400px"}
          style={{
            maxHeight: "240px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Accordion style={{ overflow: "auto" }} defaultValue="1">
            {mockData.map((item) => (
              <Form04StrengthsRow key={item.id} data={item} />
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
      <MyFieldset title={`Nội dung báo cáo hiện tại`}>
        <MyTextEditor
          value={`
              <p>Trường đã xây dựng môi trường sư phạm hiện tại, năng động, mở phạm, thân thiện, 
            sạch đẹp và an toàn tạo không khí và tâm lý thoản mái, phục vụ hiệu quả cho hoạt động dạy học </p>
                      
             <p>Khuôn viên trường có đầy đủ các bảng nội quy, hướng dẫn, các thông điệp mang ý nghĩa tích cực giúp 
            nguời học thêm năng động, sáng tạoh trong học tập và rèn luyện
            </p>
              `}
          contentHeight={"220px"}
          onChange={() => {}}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockData: IForm04StrengthsRowHistory[] = [
  {
    id: "1",
    name: "Báo cáo định kỳ",
    ngayCapNhat: "2025-02-21T15:25:30",
    nguoiCapNhat: "Tô Ngọc Lan",
    status: true,
  },
  {
    id: "2",
    name: "Báo cáo định kỳ",
    ngayCapNhat: "2024-02-21T15:25:30",
    nguoiCapNhat: "Tô Ngọc Lan",
    status: true,
  },
  {
    id: "3",
    name: "Báo cáo định kỳ",
    ngayCapNhat: "2023-02-21T15:25:30",
    nguoiCapNhat: "Tô Ngọc Anh",
    status: true,
  },
  {
    id: "4",
    name: "Báo cáo định kỳ",
    ngayCapNhat: "2022-02-22T15:25:30",
    nguoiCapNhat: "Tô Ngọc Lanh",
    status: true,
  },
  {
    id: "5",
    name: "Báo cáo Tự đánh giá",
    ngayCapNhat: "2021-02-21T15:25:30",
    nguoiCapNhat: "Tô Ngọc Linh",
    status: false,
  },
];
