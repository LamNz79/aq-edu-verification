import { Accordion, Flex, Text } from "@mantine/core";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";
import { IForm04WeaknessesRowHistory } from "./interface";
import Form04StrengthsRow from "./Form04WeaknessesRow";

export default function Form04WeaknessesLayout() { 
  return (
    <Flex direction={"column"} h={"75vh"} w={"100%"}>
      <Text size="md" fw={500}>
        3. Điểm tồn tại và khuyến nghị
      </Text>
      <Text mb="md" size="sm">
        (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu chí và các khuyến nghị cải tiến cần thiết)
      </Text>
      <Flex
        direction={"column"}
        style={{ flex: 1, minHeight: 0, overflow: "auto", width: "100%" }}
      >
        <MyFieldset
          title={`Lịch sử soạn thảo`}
          style={{
            minHeight: "300px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Accordion style={{ overflow: "auto" }} defaultValue="1">
            {mockData.map((item) => (
              <Form04StrengthsRow key={item.id} data={item} />
            ))}
          </Accordion>
        </MyFieldset>
        <MyFieldset
          title={`Nội dung báo cáo hiện tại`}
          style={{
            height: "600px",
            display: "flex",
          }}
        >
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
      </Flex>
    </Flex>
  );
}

const mockData: IForm04WeaknessesRowHistory[] = [
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
