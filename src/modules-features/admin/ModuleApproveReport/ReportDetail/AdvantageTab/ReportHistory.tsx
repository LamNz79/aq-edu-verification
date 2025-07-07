import { Accordion, Box, Card, Grid, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn, MyHtmlWrapper } from "aq-fe-framework/components";


export interface IReportEvidence {
  id: number;
  code: string;
  name: string;
  status: string;
  used: boolean;
}

export interface IReportHistoryItem {
  id: number;
  type: string;
  updatedAt: string;
  updatedBy: string;
  selfAssessment: string;
  content: string;
  evidences: IReportEvidence[];
}

export default function ReportHistory() {

  return (
    <MyFlexColumn gap={16}>
      <MyFieldset title="Lịch sử soạn thảo">
        <Box h={"452px"} style={{ maxHeight: "500px", overflowY: "scroll", overflowX: "hidden" }}>
          <Accordion w={"100%"} defaultValue={mockHistory.length ? `item-0` : undefined}>
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
                  <Card shadow="xs" pl={16} pr={4}>
                    <MyHtmlWrapper
                      style={{
                        height: "280px",
                        overflowY: "auto",
                      }}
                      html={item.content}
                    />
                  </Card>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockHistory: IReportHistoryItem[] = [
  {
    id: 1,
    type: "Báo cáo định kỳ",
    updatedAt: "21/02/2025 15:25:30",
    updatedBy: "Tô Ngọc Lan",
    selfAssessment: "Đạt",
    content: `
  <p ">
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.  
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
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.  
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
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.  
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
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.  
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
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.  
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
