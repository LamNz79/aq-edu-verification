"use client";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Center } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ISelfAssessmentForm04ViewModel } from "./interface";
import SelfAssessmentForm04Evaluate from "./SelfAssessmentForm04Evaluate";
import SelfAssessmentForm04Update from "./SelfAssessmentForm04Update";

export default function SelfAssessmentForm04Table() {
  const selfAssessmentForm04List = useQuery({
    queryKey: ["selfAssessmentForm04List"],
    queryFn: () => mockData,
  });

  const columns = useMemo<MRT_ColumnDef<ISelfAssessmentForm04ViewModel>[]>(
    () => [
      { header: "Mã Kế hoạch TDG", accessorKey: "planCode" },
      { header: "Chương trình đào tạo", accessorKey: "program" },
      { header: "Mã giai đoạn", accessorKey: "courseCode" },
      { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
      { header: "Mã tiêu chí", accessorKey: "code" },
      { header: "Tên tiêu chí", accessorKey: "name" },
      { header: "Nhóm công tác chuyên trách", accessorKey: "groupCode" },
      { header: "Thành viên phụ trách", accessorKey: "evaluator" },
      { header: "Tự đánh giá", accessorKey: "selfAssessmentStatus" },
      { header: "Trạng thái kiểm tra", accessorKey: "checkStatus" },
      { header: "Nhận xét chung", accessorKey: "note" },
      {
        header: "Nhận xét chi tiết",
        accessorKey: "noteDetail",
        accessorFn: (row) => <SelfAssessmentForm04Evaluate data={row} />,
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách tiêu chí`}>
      <MyDataTable
        data={selfAssessmentForm04List.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        enableRowActions={true}
        renderRowActions={({ row }) => (
          <Center>
            <SelfAssessmentForm04Update data={row.original} />
          </Center>
        )}
      />
    </MyFieldset>
  );
}

const mockData: ISelfAssessmentForm04ViewModel[] = [
  {
    id: 1,
    code: "TC_05.02",
    name: "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
    planCode: "KH-KTPM-2024",
    program: "Kỹ thuật phần mềm",
    courseCode: "2021-2026",
    standardCode: "TC_05",
    groupCode: "NCT_TC5-7",
    evaluator: "ThS. Hoàng Thị E",
    selfAssessmentStatus: "Đạt yêu cầu",
    checkStatus: "Đã kiểm tra",
  },
  {
    id: 2,
    code: "TC_01.01",
    name: "Đảm bảo tính công khai, minh bạch của mục tiêu và chuẩn đầu ra",
    planCode: "KH-KTPM-2024",
    program: "Kỹ thuật phần mềm",
    courseCode: "2021-2026",
    standardCode: "TC_01",
    groupCode: "NCT_TC1-3",
    evaluator: "TS. Trần Văn C",
    selfAssessmentStatus: "Không đạt",
    checkStatus: "Cần hiệu chính",
  },
  {
    id: 3,
    code: "TC_05.02",
    name: "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
    planCode: "KH-KTPM-2024",
    program: "Kỹ thuật phần mềm",
    courseCode: "KTPM_K21",
    standardCode: "TC_05",
    groupCode: "NCT_TC5-7",
    evaluator: "ThS. Hoàng Thị E",
    selfAssessmentStatus: "Chưa đánh giá",
    checkStatus: "Chưa kiểm tra",
  },
  {
    id: 4,
    code: "TC_03.02",
    name: "Đảm bảo chất lượng đội ngũ giảng viên; đáp ứng yêu cầu của chương trình đào tạo",
    planCode: "KH-KTPM-2024",
    program: "Kỹ thuật phần mềm",
    courseCode: "2021-2026",
    standardCode: "TC_03",
    groupCode: "NCT_TC3-4",
    evaluator: "CN. Bùi Thị L",
    selfAssessmentStatus: "Đạt yêu cầu",
    checkStatus: "Đã kiểm tra",
  },
  {
    id: 5,
    code: "TC_06.01",
    name: "Đảm bảo hoạt động nghiên cứu khoa học và chuyển giao công nghệ phù hợp với định hướng phát triển",
    planCode: "KH-KTPM-2024",
    program: "Kỹ thuật phần mềm",
    courseCode: "2021-2026",
    standardCode: "TC_06",
    groupCode: "NCT_TC6-7",
    evaluator: "ThS. Lê Thị M",
    selfAssessmentStatus: "Chưa đánh giá",
    checkStatus: "Chưa kiểm tra",
  },
];
