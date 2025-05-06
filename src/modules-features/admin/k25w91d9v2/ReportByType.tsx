import { MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

interface IReportByType {
  id: number;
  standardCode: string;
  code: string;
  benchmarkCode: string;
  name: string;
}

export function ReportByType() {
  const columns: MRT_ColumnDef<IReportByType>[] = [
    { header: "Mã tiêu chuẩn", accessorKey: "standardCode", size: 40 },
    { header: "Mã tiêu chí", accessorKey: "code", size: 40 },
    { header: "Mã yêu cầu / mốc chuẩn", accessorKey: "benchmarkCode", size: 40 },
    { header: "Tên yêu cầu / mốc chuẩn", accessorKey: "name" },
  ];

  return <MyDataTable columns={columns} data={mockData} />;
}

const mockData: IReportByType[] = [
  {
    id: 1,
    standardCode: "TC01",
    code: "TC1.1",
    benchmarkCode: "M001",
    name: "Chuẩn đầu ra của CTDT được xây dựng; rà soát và điều chỉnh theo quy trình định trước; trong đó có sự tham gia của các BLQ",
  },
  {
    id: 2,
    standardCode: "TC02",
    code: "TC1.2",
    benchmarkCode: "M001",
    name: "CDR của các CTDT được phát triển rõ ràng; phù hợp với mục tiêu của CTDT; sử dụng; tầm nhìn và chiến lược của CSDT",
  },
  {
    id: 3,
    standardCode: "TC03",
    code: "TC1.3",
    benchmarkCode: "M001",
    name: "CDT của CTDT được phổ biến đến các BLQ; giảng viên và NH hiểu rõ CDT của CTDT",
  },
];
