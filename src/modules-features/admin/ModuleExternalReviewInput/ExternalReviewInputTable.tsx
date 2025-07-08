"use client";
import { Center } from "@mantine/core";
import { MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IExternalReviewInputViewModel } from "./interface";
import { useQuery } from "@tanstack/react-query";
import ExternalReviewInputUpdate from "./ExternalReviewInputUpdate";

export default function ExternalReviewInputTable() {
  const ExternalReviewInputData = useQuery({
    queryKey: ["external-review-input"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IExternalReviewInputViewModel>[]>(
    () => [
      {
        header: "Số kế hoạch ĐGN",
        accessorKey: "planNumber",
      },
      {
        header: "Mã CTĐT",
        accessorKey: "programCode",
      },
      {
        header: "Mã Khóa",
        accessorKey: "courseCode",
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "code",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Đánh giá",
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
            <ExternalReviewInputUpdate data={row.original} />
          </Center>
        )}
      />
    </MyFieldset>
  );
}

const mockData: IExternalReviewInputViewModel[] = [
  {
    id: 1,
    planNumber: "123/KH-KDCLGD",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_01",
    code: "TC_01.01",
    name: "Đảm bảo tính công khai, minh bạch của mục tiêu và chuẩn đầu ra",
    status: true,
  },
  {
    id: 2,
    planNumber: "123/KH-KDCLGD",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_02",
    code: "TC_02.03",
    name: "Đảm bảo cấu trúc và nội dung chương trình đào tạo phù hợp với mục tiêu và chuẩn đầu ra",
    status: true,
  },
  {
    id: 3,
    planNumber: "123/KH-KDCLGD",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_03",
    code: "TC_03.02",
    name: "Đảm bảo chất lượng đội ngũ giảng viên, đáp ứng yêu cầu của chương trình đào tạo",
    status: false,
  },
  {
    id: 4,
    planNumber: "123/KH-KDCLGD",
    programCode: "KTPM",
    courseCode: "KTPM_K20",
    standardCode: "TC_05",
    code: "TC_05.02",
    name: "Đảm bảo tính thống nhất; công khai của quy định về đào tạo và các quy định khác có liên quan",
    status: true,
  },
  {
    id: 5,
    planNumber: "050/KH-KDCL",
    programCode: "KT",
    courseCode: "KT_K21",
    standardCode: "TC_01",
    code: "TC_01.01",
    name: "Đảm bảo tính công khai, minh bạch của mục tiêu và chuẩn đầu ra",
  },
];
