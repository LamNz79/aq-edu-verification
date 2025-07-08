import { Accordion, Box, Stack, Text } from "@mantine/core";
import {
  MyFieldset,
  MyFlexColumn
} from "aq-fe-framework/components";
import TrackSelfAssessmentProgressActionPlanContent from "./TrackSelfAssessmentProgressActionPlanContent";
import TrackSelfAssessmentProgressActionPlanRow from "./TrackSelfAssessmentProgressActionPlanRow";
import { ITrackSelfAssessmentProgressActionPlanRowHistory } from "./interface";

export default function TrackSelfAssessmentProgressActionPlanLayout() {
  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          4. Kế hoạch hành động
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
              <TrackSelfAssessmentProgressActionPlanRow key={item.id} data={item} />
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
      <MyFieldset title={`Nội dung báo cáo hiện tại`}>
        <TrackSelfAssessmentProgressActionPlanContent />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockData: ITrackSelfAssessmentProgressActionPlanRowHistory[] = [
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
