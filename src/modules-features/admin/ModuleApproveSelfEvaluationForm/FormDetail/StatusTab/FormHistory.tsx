import { Accordion, Box, Card, Grid, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn, MyHtmlWrapper } from "aq-fe-framework/components";
import { IFormEvidence } from "./EvidenceListTable";
import FileEvidenceListTable from "./FileEvidenceListTable";

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
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                      <Card shadow="xs" pl={16} pr={4}>
                        <MyHtmlWrapper
                          style={{
                            height: "280px",
                            overflowY: "auto",
                          }}
                          html={item.content}
                        />
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                      <FileEvidenceListTable data={item.evidences} />
                    </Grid.Col>
                  </Grid>
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
    Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
    Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
    Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
     <a href="#"">H5.05.02.01</a>.
  </p>
  <p ">
    Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
    Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
    <a href="#"">H5.05.02.02</a>.
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
    Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
    Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
    Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
     <a href="#"">H5.05.02.01</a>.
  </p>
  <p ">
    Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
    Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
    <a href="#"">H5.05.02.02</a>.
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
    Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
    Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
    Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
     <a href="#"">H5.05.02.01</a>.
  </p>
  <p ">
    Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
    Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
    <a href="#"">H5.05.02.02</a>.
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
    Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
    Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
    Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
     <a href="#"">H5.05.02.01</a>.
  </p>
  <p ">
    Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
    Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
    <a href="#"">H5.05.02.02</a>.
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
    Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. 
    Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 9 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hòa, tỉnh Đồng Nai. 
    Trên diện tích 86.908,8 m ^ 2 cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trường, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phòng đọc, phòng máy tính tra cứu thông tin 
     <a href="#"">H5.05.02.01</a>.
  </p>
  <p ">
    Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. 
    Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường 
    <a href="#"">H5.05.02.02</a>.
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
