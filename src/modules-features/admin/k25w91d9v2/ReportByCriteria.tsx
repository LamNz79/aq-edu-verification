import { MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

interface IReportByCriteria {
  id: number;
  standardCode: string;
  code: string;
  name: string;
}

export function ReportByCriteria() {
  const columns: MRT_ColumnDef<IReportByCriteria>[] = [
    { header: "Mã tiêu chuẩn", accessorKey: "standardCode" },
    { header: "Mã tiêu chí", accessorKey: "code" },
    { header: "Tên tiêu chí", accessorKey: "name" },
  ];

  return <MyDataTable columns={columns} data={mockData} />;
}

const mockData: IReportByCriteria[] = [
  {
    id: 1,
    standardCode: "TC01",
    code: "TC01.01",
    name: "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng phù hợp",
  },
  {
    id: 2,
    standardCode: "TC01",
    code: "TC01.02",
    name: "Văn hóa chất lượng được xác định rõ ràng",
  },
  {
    id: 3,
    standardCode: "TC01",
    code: "TC01.03",
    name: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các chỉ tiêu và kế hoạch vì mục tiêu đã đăng ký",
  },
  {
    id: 4,
    standardCode: "TC01",
    code: "TC01.04",
    name: "Áp dụng tri thức chất lượng trong hoạt động hợp đồng",
  },
  {
    id: 5,
    standardCode: "TC01",
    code: "TC01.05",
    name: "Cơ sở giáo dục thường xuyên rà soát các tiêu chuẩn đảm bảo chất lượng",
  },
  {
    id: 6,
    standardCode: "TC01",
    code: "TC01.06",
    name: "Cơ sở giáo dục có cơ chế thu thập và phân hồi ý kiến từ các bên liên quan",
  },
];
