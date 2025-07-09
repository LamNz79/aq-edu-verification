import { Accordion, Box, Grid, Text } from "@mantine/core";
import { MyDataTable, MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

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
  targetTable: ITarget[];
}

interface ITarget {
  stt: number;
  goal: string;
  content: string;
  unit: string;
  time: string;
  note: string;
}

const mockTargetTable: ITarget[] = [
  {
    stt: 1,
    goal: "Khắc phục điểm tồn tại",
    content:
      "Nhà trường tăng cường một số chậu cây cảnh tạo thêm không gian xanh. Bố trí thêm không gian/r sinh hoạt chung và không gian riêng yên tĩnh phục vụ cho nhu cầu nghiên cứu/r dựa trên khảo sát nhu cầu sử dụng của CB-GV-NV.",
    unit: "Trường Đại học Đồng Nai",
    time: "Năm học 2022–2024",
    note: "",
  },
  {
    stt: 2,
    goal: "Phát huy điểm mạnh",
    content:
      "Nhà trường tiến hành bố trí thêm các phòng làm việc để các GV có môi/r trường làm việc thuận lợi; nâng cao hiệu quả hoạt động tư vấn; hỗ trợ NH.",
    unit: "Trường Đại học Đồng Nai",
    time: "Hằng năm",
    note: "",
  },
];

const targetTableColumns: MRT_ColumnDef<ITarget>[] = [
  { header: "Mục tiêu", accessorKey: "goal", size: 120 },
  { header: "Nội dung", accessorKey: "content", size: 350 },
  { header: "Đơn vị; Người thực hiện", accessorKey: "unit" },
  { header: "Thời gian thực hiện hoặc hoàn thành", accessorKey: "time" },
  { header: "Ghi chú", accessorKey: "note", size: 120 },
];

export default function FormHistory() {
  return (
    <MyFlexColumn gap={16}>
      <MyFieldset title="Lịch sử soạn thảo">
        <Box h={"452px"} style={{ maxHeight: "500px", overflowY: "scroll", overflowX: "hidden" }}>
          <Accordion w={"100%"} defaultValue={mockHistory.length ? `item-0` : undefined}>
            {mockHistory.map((item, idx) => (
              <Accordion.Item value={`item-${idx}`} key={idx}>
                <Accordion.Control>
                  <Grid>
                    <Grid.Col span={3}>
                      <Text size="sm" c="green" fw={500}>
                        {item.type}
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <Text fw={500} size="sm">Ngày cập nhật: {item.updatedAt}</Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <Text fw={500} size="sm">Người cập nhật: {item.updatedBy}</Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <Text fw={500} size="sm" span>
                        Tự đánh giá:{" "}
                        <Text span c={item.selfAssessment === "Đạt" ? "green" : "red"} fw={500}>
                          {item.selfAssessment}
                        </Text>
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Accordion.Control>
                <Accordion.Panel>
                  <MyDataTable
                    data={item.targetTable}
                    columns={targetTableColumns}
                    initialState={{
                      columnSizing: {
                        "mrt-row-numbers": 60, 
                      }
                    }}
                    enableRowSelection={false}
                    mantineTableContainerProps={{ style: { height: "180px", overflowY: "auto" } }}
                  />
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
    targetTable: mockTargetTable,
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
    targetTable: mockTargetTable,
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
    targetTable: mockTargetTable,
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
    targetTable: mockTargetTable,
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
    targetTable: mockTargetTable,
  },
];
