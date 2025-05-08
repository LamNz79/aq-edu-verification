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
    code: "TC1.1",
    name: "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng phù hợp với định hướng phát triến và được công bố công khai.",
  },
  {
    id: 2,
    standardCode: "TC02",
    code: "TC1.2",
    name: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên, người học.",
  },
  {
    id: 3,
    standardCode: "TC03",
    code: "TC1.3",
    name: "Cơ sở giáo dục có các chính sách và biện pháp cụ thể để thúc đẩy và duy trì văn hóa chất lượng trong toàn bộ hoạt động.",
  },
  {
    id: 4,
    standardCode: "TC04",
    code: "TC1.4",
    name: "Cơ sở giáo dục thường xuyên đánh giá và cải tiến tầm nhìn, sứ mạng và văn hóa chất lượng để đáp ứng yêu cầu phát triển và hội nhập.",
  },
  {
    id: 5,
    standardCode: "TC05",
    code: "TC1.5",
    name: "Cơ sở giáo dục có cơ chế thu thập và phân hồi ý kiến từ các bên liên quan về tầm nhìn, sứ mạng và văn hóa chất lượng.",
  },
];
