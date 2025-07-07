import { MyButton } from "@/components/Buttons/Button/MyButton";
import { Checkbox, Stack } from "@mantine/core";
import { MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

export interface IReportEvidence {
  id: number;
  code: string;
  name: string;
  status: string;
  used: boolean;
}

const mockEvidence: IReportEvidence[] = [
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
  {
    id: 3,
    code: "H1.01.01.01",
    name: "Quyết định về mục tiêu và chuẩn đầu ra của CTĐT KTPM",
    status: "Còn hạn",
    used: false,
  },
  {
    id: 4,
    code: "H1.01.01.01.01",
    name: "Biên bản học Hội đồng Khoa học về sửa đổi CDR",
    status: "Còn hạn",
    used: false,
  },
];

export default function EvidenceListTable() {
  const columns: MRT_ColumnDef<IReportEvidence>[] = [
    { header: "Mã minh chứng", accessorKey: "code", size: 140 },
    { header: "Tên minh chứng", accessorKey: "name", size: 300 },
    { header: "Trạng thái hiệu lực", accessorKey: "status", size: 210 },
    {
      header: "Đã sử dụng",
      accessorKey: "used",
      accessorFn: (row) => (
        <MyCenterFull>
          <Checkbox checked={row.used} readOnly />
        </MyCenterFull>
      ),
      size: 160,
    },
  ];
  return (
    <MyDataTable
      data={mockEvidence}
      columns={columns}
      enableRowSelection={false}
      enableRowNumbers={false}
      mantineTableContainerProps={{ style: { height: "335px", overflowY: "scroll" } }}
      renderRowActions={({ row }) => {
        return (
          <MyCenterFull>
            <Stack gap={4}>
              <MyButton variant="transparent" crudType="default">
                Xem chi tiết
              </MyButton>
              <MyButton variant="transparent" crudType="default">
                Sử dụng
              </MyButton>
            </Stack>
          </MyCenterFull>
        );
      }}
    />
  );
}
