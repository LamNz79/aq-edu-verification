import { Accordion, Box, Grid, Group, Radio, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import { useState } from "react";

export interface IFormEvidence {
  id: number;
  code: string;
  name: string;
  status: string;
  used: boolean;
}

export interface IFormHistoryItem {
  id: number;
  type: string;
  updatedAt: string;
  updatedBy: string;
  selfAssessment: string;
  content: string;
  evidences: IFormEvidence[];
}

export default function FormHistory() {
  const [value, setValue] = useState("Đạt");
  return (
    <MyFlexColumn gap={16}>
      <MyFieldset title="Lịch sử soạn thảo">
        <Box h={"452px"} style={{ maxHeight: "500px", overflowY: "scroll", overflowX: "hidden" }}>
          <Accordion w={"100%"} defaultValue={mockHistory.length ? `item-0` : undefined} >
            {mockHistory.map((item, idx) => (
              <Accordion.Item value={`item-${idx}`} key={idx}>
                <Accordion.Control>
                  <Grid>
                    <Grid.Col span={2}>
                      <Text size="sm" c="green" fw={600}>
                        {item.type}
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <Text size="sm">Ngày cập nhật: {item.updatedAt}</Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <Text size="sm">Người cập nhật: {item.updatedBy}</Text>
                    </Grid.Col>
                    <Grid.Col span={2}>
                      <Text size="sm" span>
                        Tự đánh giá:{" "}
                        <Text span c={item.selfAssessment === "Đạt" ? "green" : "red"} fw={600}>
                          {item.selfAssessment}
                        </Text>
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Accordion.Control>
                <Accordion.Panel>
                    <Radio.Group
                      name={`selfAssessmentForm${idx}`}
                      label="Tự đánh giá"
                      value={item.selfAssessment}
                      onChange={(value) => setValue(value)}
                    >
                      <Group gap="xl" mt={4}>
                        <Radio value="Đạt" label="Đạt" />
                        <Radio value="Không đạt" label="Không đạt" />
                      </Group>
                    </Radio.Group>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockHistory: IFormHistoryItem[] = [
  {
    id: 1,
    type: "Báo cáo định kỳ",
    updatedAt: "21/02/2025 15:25:30",
    updatedBy: "Tô Ngọc Lan",
    selfAssessment: "Đạt",
    content: `
  <p ">
   Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mở đôi khi tạo ra sự bất tiện trong công việc (không tập trung, ồn, do...).
  </p>
 
`,
    evidences: [
      {
        id: 1,
        code: "H5.05.02.01",
        name: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
        status: "Còn hạn",
        used: true,
      },
      {
        id: 2,
        code: "H5.05.02.02",
        name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
        status: "Hết hạn",
        used: true,
      },
    ],
  },
  {
    id: 2,
    type: "Báo cáo định kỳ",
    updatedAt: "21/02/2024 15:25:30",
    updatedBy: "Tô Ngọc Lan",
    selfAssessment: "Đạt",
    content: `
  <p ">
   Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mở đôi khi tạo ra sự bất tiện trong công việc (không tập trung, ồn, do...).
  </p>
`,
    evidences: [
      {
        id: 1,
        code: "H5.05.02.01",
        name: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
        status: "Còn hạn",
        used: true,
      },
      {
        id: 2,
        code: "H5.05.02.02",
        name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
        status: "Hết hạn",
        used: true,
      },
    ],
  },
  {
    id: 3,
    type: "Báo cáo định kỳ",
    updatedAt: "21/02/2023 15:25:30",
    updatedBy: "Tô Ngọc Anh",
    selfAssessment: "Đạt",
    content: `
   <p ">
   Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mở đôi khi tạo ra sự bất tiện trong công việc (không tập trung, ồn, do...).
  </p>
`,
    evidences: [
      {
        id: 1,
        code: "H5.05.02.01",
        name: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
        status: "Còn hạn",
        used: true,
      },
      {
        id: 2,
        code: "H5.05.02.02",
        name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
        status: "Hết hạn",
        used: true,
      },
    ],
  },
  {
    id: 3,
    type: "Báo cáo định kỳ",
    updatedAt: "22/02/2022 15:25:30",
    updatedBy: "Tô Ngọc Lanh",
    selfAssessment: "Đạt",
    content: `
   <p ">
   Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mở đôi khi tạo ra sự bất tiện trong công việc (không tập trung, ồn, do...).
  </p>
`,
    evidences: [
      {
        id: 1,
        code: "H5.05.02.01",
        name: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
        status: "Còn hạn",
        used: true,
      },
      {
        id: 2,
        code: "H5.05.02.02",
        name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
        status: "Hết hạn",
        used: true,
      },
    ],
  },
  {
    id: 3,
    type: "Báo cáo Tự đánh giá",
    updatedAt: "21/02/2021 15:25:30",
    updatedBy: "Tô Ngọc Linh",
    selfAssessment: "Không đạt",
    content: `
   <p ">
   Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mở đôi khi tạo ra sự bất tiện trong công việc (không tập trung, ồn, do...).
  </p>
`,
    evidences: [
      {
        id: 1,
        code: "H5.05.02.01",
        name: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
        status: "Còn hạn",
        used: true,
      },
      {
        id: 2,
        code: "H5.05.02.02",
        name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
        status: "Hết hạn",
        used: true,
      },
    ],
  },
];
