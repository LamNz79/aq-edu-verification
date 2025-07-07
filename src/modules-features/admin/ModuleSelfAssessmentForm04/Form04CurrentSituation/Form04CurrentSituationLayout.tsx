import { Accordion, Flex, Text } from "@mantine/core";
import { MyFieldset } from "aq-fe-framework/components";
import Form04CurrentSituationContent from "./Form04CurrentSituationContent";
import Form04CurrentSituationRowHistory from "./Form04CurrentSituationRowHistory";
import { IForm04CurrentSituationRowHistory } from "./interface";

export default function Form04CurrentSituationLayout() {
  return (
    <Flex direction={"column"} h={"75vh"} w={"100%"}>
      <Text size="md" fw={500}>
        1. Mô tả hiện trạng
      </Text>
      <Text mb="md" size="sm">
        (Căn cứ yêu cầu của tiêu chí, mô tả hoạt động của cơ sở đào tạo có CTĐT
        được đnash giá kèm theo các thông tin minh chứng để chứng minh mức độ
        đạt được của tiêu chí)
      </Text>
      <Flex
        direction={"column"}
        style={{ flex: 1, minHeight: 0, overflow: "auto", w: "100%" }}
      >
        <MyFieldset
          title={`Lịch sử soạn thảo`}
          style={{
            minHeight: "400px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Accordion style={{ overflow: "auto" }} defaultValue="1">
            {mockDataHistory.map((item) => (
              <Form04CurrentSituationRowHistory key={item.id} data={item} />
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
          <Form04CurrentSituationContent />
        </MyFieldset>
      </Flex>
    </Flex>
  );
}

const mockDataHistory: IForm04CurrentSituationRowHistory[] = [
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
