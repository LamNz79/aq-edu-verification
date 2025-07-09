import { Accordion, Box, Stack, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import TrackSelfAssessmentProgressCurrentSituationContent from "./TrackSelfAssessmentProgressCurrentSituationContent";
import TrackSelfAssessmentProgressCurrentSituationRowHistory from "./TrackSelfAssessmentProgressCurrentSituationRowHistory";
import { ITrackSelfAssessmentProgressCurrentSituationRowHistory } from "./interface";

export default function TrackSelfAssessmentProgressCurrentSituationLayout() {
  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          1. Mô tả hiện trạng
        </Text>
        <Text mb="md" size="sm">
          (Căn cứ yêu cầu của tiêu chí, mô tả hoạt động của cơ sở đào tạo có
          CTĐT được đnash giá kèm theo các thông tin minh chứng để chứng minh
          mức độ đạt được của tiêu chí)
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
            {mockDataHistory.map((item) => (
              <TrackSelfAssessmentProgressCurrentSituationRowHistory key={item.id} data={item} />
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
      <MyFieldset title={`Nội dung báo cáo hiện tại`}>
        <TrackSelfAssessmentProgressCurrentSituationContent />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockDataHistory: ITrackSelfAssessmentProgressCurrentSituationRowHistory[] = [
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
