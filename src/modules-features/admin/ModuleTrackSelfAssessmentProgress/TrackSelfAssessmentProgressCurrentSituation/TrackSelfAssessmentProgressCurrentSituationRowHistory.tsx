import { Accordion, Box, Checkbox, Flex, Grid, Group, Text } from "@mantine/core";
import { MyCenterFull, MyDataTable, MyTextArea } from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import TrackSelfAssessmentProgressCurrentSituationDetail from "./TrackSelfAssessmentProgressCurrentSituationDetail";
import {
  ITrackSelfAssessmentProgressCurrentSituationRowHistory,
  ITrackSelfAssessmentProgressCurrentSituationRowHistoryProof,
} from "./interface";

export default function TrackSelfAssessmentProgressCurrentSituationRowHistory({
  data,
}: {
  data?: ITrackSelfAssessmentProgressCurrentSituationRowHistory;
}) {
  const columns = useMemo<
    MRT_ColumnDef<ITrackSelfAssessmentProgressCurrentSituationRowHistoryProof>[]
  >(
    () => [
      {
        header: "Mã minh chứng",
        accessorKey: "code",
      },
      {
        header: "Tên minh chứng",
        accessorKey: "name",
      },
      {
        header: "Trạng thái",
        accessorKey: "status",
      },
      {
        header: "Đã sử dụng",
        accessorKey: "isUsed",
        accessorFn: (row) => {
          return (
            <MyCenterFull>
              <Checkbox checked={row.isUsed} readOnly />
            </MyCenterFull>
          );
        },
      },
      {
        header: "Thao tác",
        accessorKey: "action",
        accessorFn: (row) => {
          return (
            <MyCenterFull>
              <TrackSelfAssessmentProgressCurrentSituationDetail data={row} />
            </MyCenterFull>
          );
        },
        size: 100,
      },
    ],
    []
  );

  return (
    <Accordion.Item value={data?.id ?? "1"}>
      <Accordion.Control>
        <Group gap="md" grow>
          <Text size="sm" fw={500} color={"green"}>
            {data?.name}
          </Text>
          <Text size="sm" fw={500}>
            Ngày cập nhật: {utils_date_dateToDDMMYYYString(new Date(data?.ngayCapNhat ?? ""))}
          </Text>
          <Text size="sm" fw={500}>
            Người cập nhật: {data?.nguoiCapNhat}
          </Text>
          <Flex gap="xs" fw={500}>
            <Text size="sm" fw={500}>
              Tự đánh giá:
            </Text>
            <Text size="sm" fw={500} color={data?.status ? "green" : "red"}>
              {data?.status ? "Đạt" : "Không đạt"}
            </Text>
          </Flex>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Grid columns={12}>
          <Grid.Col span={6}>
            <Box h={360} style={{ overflow: "auto" }}>
              <MyTextArea
                rows={10}
                minRows={15}
                maxRows={15}
                value={
                  `Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 4 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hỏa, tỉnh Đồng Nai. Trên diện tích 86.908,8 m2, cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trưởng, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phỏng đọc, phỏng máy tính tra cứu thông tin (H5.05.02.01).` +
                  `

Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV, giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường (H5.05.02.02)`
                }
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <MyDataTable
              renderTopToolbarCustomActions={() => {
                return (
                  <Text size="sm" p={12}>
                    File minh chứng
                  </Text>
                );
              }}
              columns={columns}
              data={mockData}
              enableRowNumbers={false}
              initialState={{
                columnSizing: {
                  "mrt-row-numbers": 60,
                },
              }}
              mantineTableContainerProps={{
                style: { height: "230px", overflowY: "auto" },
              }}
            />
          </Grid.Col>
        </Grid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

const mockData: ITrackSelfAssessmentProgressCurrentSituationRowHistoryProof[] = [
  {
    id: "1",
    code: "H5.05.02.01",
    name: "Quyết định ban hành Quy chế đào tạo trình độ DH của trường",
    status: "Còn hạn",
    isUsed: true,
  },
  {
    id: "2",
    code: "H5.05.02.02",
    name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
    status: "Hết hạn",
    isUsed: true,
  },
];
