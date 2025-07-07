import { Box, Checkbox, Grid, Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import {
  MyActionIcon,
  MyDataTable,
  MyFieldset,
  MyTextEditor,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import Form04CurrentSituationDetail from "./Form04CurrentSituationDetail";
import { IForm04CurrentSituationRowHistoryProof } from "./interface";

export default function Form04CurrentSituationContent() {
  const [value, setValue] =
    useState(`<p>   Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 4 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hỏa, tỉnh Đồng Nai. Trên diện tích 86.908,8 m2, cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trưởng, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phỏng đọc, phỏng máy tính tra cứu thông tin <u>(_H5.05.02.01_) </u>.<p> </hr>
    <p>     Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV, giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường <u> (_H5.05.02.02_). </u></p> </hr>
 <p>    Công đoàn Trường phối kết hợp với các phòng ban trong Trường tổ chức các hoạt động hỗ trợ, thiện nguyện như hỗ trợ | sinh viên, GV có hoàn cảnh khó khăn, các hoạt động về tinh thần cho NV, GV luôn lấy con người làm trung tâm truyền giáo dục, sự đoàn ngũ nhân NV, GV Trường Công đoàn Khoa còn tổ chức vận động và Ban chủ nhiệm Khoa cải thiện điều kiện | việc làm, chăm lo đời sống cho NV, GV trong Khoa. Thu hút NV GV tham gia các hoạt động do Công đoàn Trường phát động<u> (H5.05.02.03) </u></p> </hr>`);

  const columns = useMemo<
    MRT_ColumnDef<IForm04CurrentSituationRowHistoryProof>[]
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
        header: "Trạng thái hiệu lực",
        accessorKey: "status",
      },
      {
        header: "Đã sử dụng",
        accessorKey: "isUsed",
        accessorFn: (row) => {
          return <Checkbox checked={row.isUsed} readOnly />;
        },
      },
      {
        header: "Thao tác",
        accessorKey: "action",
        accessorFn: (row) => {
          return (
            <Group gap="4">
              <Form04CurrentSituationDetail data={row} />

              <MyActionIcon
                onClick={() => handleUse(row.code, row.content || "")}
              >
                <IconCheck />
              </MyActionIcon>
            </Group>
          );
        },
        size: 100,
      },
    ],
    []
  );

  const handleUse = (code: string, content: string) => {
    setValue(value + `<p> ${content} <u>(_${code}_) </u></p> </hr>`);
  };

  return (
    <Grid columns={12}>
      <Grid.Col span={6}>
        <Box>
          <MyTextEditor value={value} onChange={() => {}} />
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <MyFieldset title={`Danh sách minh chứng`}>
          <MyDataTable
            columns={columns}
            data={mockData}
            enableRowNumbers={false}
            initialState={{
              columnPinning: { right: ["action"] },
              columnSizing: {
                "mrt-row-numbers": 60,
              },
            }}
            mantineTableContainerProps={{
              style: { height: "320px", overflowY: "auto" },
            }}
          />
        </MyFieldset>
      </Grid.Col>
    </Grid>
  );
}

const mockData: IForm04CurrentSituationRowHistoryProof[] = [
  {
    id: "1",
    code: "H5.05.02.01",
    name: "Quyết định ban hành Quy chế đào tạo trình độ DH của trường",
    content:
      "Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 4 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hỏa, tỉnh Đồng Nai. Trên diện tích 86.908,8 m2, cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trưởng, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phỏng đọc, phỏng máy tính tra cứu thông tin ",
    status: "Còn hạn",
    isUsed: true,
  },
  {
    id: "2",
    code: "H5.05.02.02",
    name: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
    content:
      "Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV, giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường",
    status: "Hết hạn",
    isUsed: true,
  },
  {
    id: "2",
    code: "H1.01.01.01",
    name: "Quyết định về mục tiêu và chuẩn đầu ra của CTDT KTPM",
    content:
      "Khoa Sư phạm Khoa học Tự nhiên có môi trường tâm lý, xã hội, môi trường làm việc thân thiện, tạo không khí thoải mái để GV, NV và NH thực hiện hoạt động giảng dạy, học tập và nghiên cứu. Cơ sở đào tạo của Khoa Sư phạm Khoa học Tự nhiên được bố trí tại cơ sở 1 Trường ĐH Đồng Nai, Số 4 đường Lê Quý Đôn, phường Tân Hiệp, Thành phố Biên Hỏa, tỉnh Đồng Nai. Trên diện tích 86.908,8 m2, cơ sở 1 trường ĐH Đồng Nai được tổ chức với cơ sở hạ tầng khang trang, hiện đại gồm: hội trưởng, thư viện với nhiều đầu sách, khu vực hỗ trợ phòng làm việc nhóm, phỏng đọc, phỏng máy tính tra cứu thông tin ",
    status: "Còn hạn",
    isUsed: true,
  },
  {
    id: "3",
    code: "H1.01.01.01.01",
    name: "Biên bản họp Hội đồng Khoa học về sửa đổi CDR",
    content:
      "Trường và Khoa đã ban hành bộ Quy tắc ứng xử cho SV, trong đó nhấn mạnh đến quy tắc ứng xử đối với GV, NV và trong thực tế, quy định được mọi người thực hiện nghiêm túc và nề nếp, triệt để, quy định trong Trường. Thông qua góc giao tiếp lịch sự, tôn trọng của cán bộ nhiệm Khoa, GV, giáo vụ Khoa với SV tạo ra môi trường thân thiện, gần gũi với SV khiến SV thêm yêu và tự hào về Khoa, Trường",
    status: "Hết hạn",
    isUsed: true,
  },
];
