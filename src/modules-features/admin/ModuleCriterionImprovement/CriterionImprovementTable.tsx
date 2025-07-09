"use client";
import { MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { CriterionImprovementViewModel } from "./interface";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { Center } from "@mantine/core";
import CriterionImprovementExternal from "./CriterionImprovementExternal";
import CriterionImprovementUpdate from "./CriterionImprovementUpdate";

export default function CriterionImprovementTable() {
  const ExternalReviewInputData = useQuery({
    queryKey: ["criterion-improvement"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<CriterionImprovementViewModel>[]>(
    () => [
      {
        header: "Tên chương trình đào tạo",
        accessorKey: "programName",
      },
      {
        header: "Giai đoạn",
        accessorKey: "period",
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "criterionCode",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "criterionName",
        size: 300,
      },
      {
        header: "Kết quả đánh giá ngoài",
        accessorKey: "statusExternal",
        accessorFn(originalRow) {
          if (originalRow.statusExternal === undefined) {
            return "Chưa đánh giá";
          }
          return originalRow.statusExternal
            ? "Đạt (Có khuyến nghị)"
            : "Không đạt";
        },
      },
      {
        header: "Nội dung đánh giá ngoài",
        accessorFn(originalRow) {
          return <CriterionImprovementExternal data={originalRow} />;
        },
      },
      {
        header: "Ngày báo cáo giữa kỳ",
        accessorKey: "reportDate",
      },
      {
        header: "Ngày hoàn thành báo cáo giữa kỳ",
        accessorKey: "finishDate",
      },
      {
        header: "Mã nhân sự phụ trách",
        accessorKey: "reporterCode",
      },
      {
        header: "Họ tên",
        accessorKey: "reporterName",
      },
      {
        header: "Tự đánh giá cải tiến",
        accessorKey: "status",
        accessorFn(originalRow) {
          if (originalRow.status === undefined) {
            return "Chưa đánh giá";
          }
          return originalRow.status ? "Đạt" : "Không đạt";
        },
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách tiêu chí`}>
      <MyDataTable
        data={ExternalReviewInputData.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        enableRowActions={true}
        renderRowActions={({ row }) => (
          <Center>
            <CriterionImprovementUpdate data={row.original} />
          </Center>
        )}
      />
    </MyFieldset>
  );
}

const mockData: CriterionImprovementViewModel[] = [
  {
    id: 1,
    programName: "Kỹ thuật phần mềm",
    period: "2020-2024",
    standardCode: "TC_03",
    criterionCode: "TC_03.02",
    criterionName: "Đảm bảo chất lượng đội ngũ giảng viên",
    statusExternal: false,
    reportDate: "2025-10-15",
    finishDate: "2025-10-10",
    reporterCode: "NV005",
    reporterName: "Phạm Văn F",
    status: true,
  },
  {
    id: 2,
    programName: "Kế toán",
    period: "2021-2025",
    standardCode: "TC_02",
    criterionCode: "TC_02.01",
    criterionName: "Cấu trúc chương trình đào tạo",
    statusExternal: false,
    reportDate: "2025-09-01",
    finishDate: "2025-08-28",
    reporterCode: "NV008",
    reporterName: "Lê Thị H",
    status: true,
  },
  {
    id: 3,
    programName: "Công nghệ thông tin",
    period: "Định kỳ 5 năm (2025)",
    standardCode: "TC_04",
    criterionCode: "TC_04.03",
    criterionName: "Hoạt động NCKH của người học",
    statusExternal: false,
    reporterCode: "NV0010",
    reporterName: "Trần Văn K",
    status: true,
  },
  {
    id: 4,
    programName: "Kỹ thuật phần mềm",
    period: "2020-2024",
    standardCode: "TC_01",
    criterionCode: "TC_01.01",
    criterionName: "Mục tiêu và chuẩn đầu ra",
    statusExternal: true,
    reporterCode: "NV005",
    reporterName: "Phạm Văn F",
    status: true,
  },
];
