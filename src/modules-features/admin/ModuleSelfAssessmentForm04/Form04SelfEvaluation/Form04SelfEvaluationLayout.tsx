import { Accordion, Box, Flex, Stack, Text } from "@mantine/core";
import {
  MyCheckbox,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import Form04ActionPlanRow from "./Form04SelfEvaluationRow";
import { IForm04SelfEvaluationRowHistory } from "./interface";

export default function Form04SelfEvaluationLayout() {
  return (
    <MyFlexColumn gap={4} style={{ minHeight: "75vh" }}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          5. Tự đánh giá
        </Text>
        <Text mb="md" size="sm">
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu
          chí và các khuyến nghị cải tiến cần thiết)
        </Text>
      </Stack>
      <MyFieldset title={`Lịch sử soạn thảo`}>
        <Box
          h={"452px"}
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Accordion style={{ overflow: "auto" }} defaultValue="1">
            {mockData.map((item) => (
              <Form04ActionPlanRow key={item.id} data={item} />
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
      <MyFieldset title={`Nội dung báo cáo hiện tại`}>
        <Box>
          <Text fw={500}>Tự đánh giá</Text>
          <Flex gap={10}>
            <MyCheckbox label="Đạt" checked readOnly />
            <MyCheckbox label="Không đạt" readOnly />
          </Flex>
        </Box>
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockData: IForm04SelfEvaluationRowHistory[] = [
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
