import { Accordion, Box, Stack, Text } from "@mantine/core";
import {
  MyFieldset,
  MyFlexColumn,
  MyTextEditor,
} from "aq-fe-framework/components";
import TrackSelfAssessmentProgressStrengthsRow from "./TrackSelfAssessmentProgressWeaknessesRow";
import { ITrackSelfAssessmentProgressWeaknessesRowHistory } from "./interface";

export default function TrackSelfAssessmentProgressWeaknessesLayout() {
  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          3. Điểm tồn tại và khuyến nghị
        </Text>
        <Text mb="md" size="sm">
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu
          chí và các khuyến nghị cải tiến cần thiết)
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
              <TrackSelfAssessmentProgressStrengthsRow key={item.id} data={item} />
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
      <MyFieldset title={`Nội dung báo cáo hiện tại`}>
        <MyTextEditor
          value={`
              <p>Khuôn viên chưa có nhiều cây xanh thiếu không gian sinh hoạt chung</p>
              `}
          contentHeight={"220px"}
          onChange={() => {}}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockData: ITrackSelfAssessmentProgressWeaknessesRowHistory[] = [
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
