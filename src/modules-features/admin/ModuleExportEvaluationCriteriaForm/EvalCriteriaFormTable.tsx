import { Center } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import EvalCriteriaFormPrint from "./EvalCriteriaFormPrint";

export default function EvalCriteriaFormTable() {
  const query = useQuery({
    queryKey: ["EvalCriteriaFormQuery"],
    queryFn: async () => {
      return evalCriteriaMockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_EvalCriteriaTable>[]>(
    () => [
      { header: "Mã Kế hoạch TDG", accessorKey: "code" },
      { header: "Mã CTĐT", accessorKey: "curriculum" },
      { header: "Mã Giai đoạn", accessorKey: "phase" },
      { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
      { header: "Mã Tiêu chí", accessorKey: "criterionCode" },
      { header: "Tên Tiêu chí", accessorKey: "criterionName" },
      { header: "Nhóm công tác chuyên trách", accessorKey: "workGroup" },
      { header: "Thành viên phụ trách", accessorKey: "manager" },
      { header: "Tự đánh giá", accessorKey: "selfAssessment" },
      { header: "Trạng thái kiểm tra", accessorKey: "status" },
      { header: "Nhận xét", accessorKey: "note" },
    ],
    []
  );

  return (
    <MyFieldset title={"Danh sách tiêu chí"}>
      <MyDataTable
        isError={query.isError}
        isLoading={query.isLoading}
        columns={columns}
        data={query.data || []}
        enableRowSelection
        enableColumnFilters
        enableRowNumbers
        renderRowActions={({ row }) => (
          <Center>
            <EvalCriteriaFormPrint/>
          </Center>
        )}
      />
    </MyFieldset>
  );
}

export interface I_EvalCriteriaTable {
  code: string; // Mã Kế hoạch TDG
  curriculum: string; // Mã CTĐT
  phase: string; // Mã Khóa
  standardCode: string; // Mã Tiêu chuẩn
  criterionCode: string; // Mã Tiêu chí
  criterionName: string; // Tên Tiêu chí
  workGroup: string; // Nhóm công tác chuyên trách
  manager: string; // Thành viên phụ trách
  selfAssessment: string; // Tự đánh giá
  status: string; // Trạng thái kiểm tra
  note: string; // Nhận xét
}

const evalCriteriaMockData: I_EvalCriteriaTable[] = [
  {
    code: "KH-KTPM-2024",
    curriculum: "KTPM",
    phase: "2021-2026",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    criterionName:
      "Đảm bảo tính thống nhất; công khai của quy định về đào tạo và các quy định khác có liên quan",
    workGroup: "NCT_TC5-7",
    manager: "ThS. Hoàng Thị E",
    selfAssessment: "Đạt",
    status: "Đạt yêu cầu",
    note: "",
  },
  {
    code: "KH-KTPM-2024",
    curriculum: "KTPM",
    phase: "2021-2026",
    standardCode: "TC_01",
    criterionCode: "TC_01.01",
    criterionName:
      "Đảm bảo tính công khai; minh bạch của mục tiêu và chuẩn đầu ra",
    workGroup: "NCT_TC1-3",
    manager: "TS. Trần Văn C",
    selfAssessment: "Không đạt",
    status: "Cần hiệu chỉnh",
    note: "",
  },
  {
    code: "KH-KTPM-2024",
    curriculum: "KTPM",
    phase: "2021-2026",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    criterionName:
      "Đảm bảo tính thống nhất; công khai của quy định về đào tạo và các quy định khác có liên quan",
    workGroup: "NCT_TC5-7",
    manager: "ThS. Hoàng Thị E",
    selfAssessment: "Chưa đánh giá",
    status: "Chưa kiểm tra",
    note: "",
  },
  {
    code: "KH-KTPM-2024",
    curriculum: "KTPM",
    phase: "2021-2026",
    standardCode: "TC_03",
    criterionCode: "TC_03.02",
    criterionName:
      "Đảm bảo chất lượng đội ngũ giảng viên; đáp ứng yêu cầu của chương trình đào tạo",
    workGroup: "NCT_TC3-4",
    manager: "CN. Bùi Thị L",
    selfAssessment: "Đạt",
    status: "Đạt yêu cầu",
    note: "",
  },
  {
    code: "KH-KTPM-2024",
    curriculum: "KTPM",
    phase: "2021-2026",
    standardCode: "TC_06",
    criterionCode: "TC_06.01",
    criterionName:
      "Đảm bảo hoạt động nghiên cứu khoa học và chuyển giao công nghệ phù hợp với định hướng phát triển",
    workGroup: "NCT_TC6-7",
    manager: "ThS. Lê Thị M",
    selfAssessment: "Chưa đánh giá",
    status: "Chưa kiểm tra",
    note: "",
  },
];
