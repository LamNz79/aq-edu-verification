import { MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import F_k25w91d9v2_PrintPDF from "./F_k25w91d9v2_PrintPDF";

interface IStandardReport {
  id: number;
  code: string;
  name: string;
  nameEg?: string;
  note?: string;
}

export function F_k25w91d9v2_StandardReport() {
  const columns: MRT_ColumnDef<IStandardReport>[] = [
    { header: "Mã tiêu chuẩn", accessorKey: "code" },
    { header: "Tên tiêu chuẩn", accessorKey: "name" },
    { header: "Tên tiêu chuẩn Eg", accessorKey: "nameEg" },
    { header: "Ghi chú", accessorKey: "note" },
  ];

  return (
    <MyFieldset title="Cấu trúc bộ tiêu chuẩn">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData}
        renderTopToolbarCustomActions={() =>
          <>
            <F_k25w91d9v2_PrintPDF />
          </>
        }
      />
    </MyFieldset>
  );
}

const mockData: IStandardReport[] = [
  {
    id: 1,
    code: "TC01",
    name: "Tầm nhìn, sứ mạng và văn hóa",
  },
  {
    id: 2,
    code: "TC02",
    name: "Quản trị và quản lý",
  },
  {
    id: 3,
    code: "TC03",
    name: "Đào tạo",
  },
  {
    id: 4,
    code: "TC04",
    name: "Nghiên cứu khoa học",
  },
  {
    id: 5,
    code: "TC05",
    name: "Đội ngũ giảng viên và nhân viên",
  },
  {
    id: 6,
    code: "TC06",
    name: "Người học và hoạt động hỗ trợ người học",
  },
  {
    id: 7,
    code: "TC07",
    name: "Cơ sở vật chất và trang thiết bị",
  },
  {
    id: 8,
    code: "TC08",
    name: "Tài chính và quản lý tài chính",
  },
  {
    id: 9,
    code: "TC09",
    name: "Hoạt động nghiên cứu khoa học và công nghệ",
  },
  {
    id: 10,
    code: "TC10",
    name: "Hợp tác quốc tế",
  },
];
