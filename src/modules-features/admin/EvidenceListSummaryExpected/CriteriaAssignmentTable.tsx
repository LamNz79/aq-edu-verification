"use client";

import { MRT_ColumnDef } from "mantine-react-table";
import { Center, Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import {
  MyButtonViewPDF,
  MyFieldset,
  MyFlexColumn,
  MyDataTable,
  AQButtonExportData,
} from "aq-fe-framework/components";
import {
  utils_date_dateToDDMMYYYString,
} from "aq-fe-framework/utils";
import { useMemo } from "react";

export interface I_Criteria {
  id?: number;
  planCode?: string; // Mã kế hoạch TDG
  groupCode?: string; // Mã nhóm CT
  standardCode?: string; // Mã Tiêu chuẩn
  criteriaCode?: string; // Mã Tiêu chí
  criteriaName?: string; // Tên Tiêu chí
  expectedEvidenceCode?: string; // Mã minh chứng dự kiến
  expectedEvidenceName?: string; // Tên minh chứng dự kiến
  expectedIssuedNumberAndDate?: string; // Số - Ngày ban hành (dự kiến)
  expectedIssuedBy?: string; // Đơn vị ban hành
  responsibleMember?: string; // Thành viên phụ trách
  startDate?: string; // Ngày bắt đầu nhiệm vụ
  endDate?: string; // Ngày kết thúc nhiệm vụ
}

export default function CriteriaAssignmentTable() {
  // Query to fetch mock data
  const query = useQuery<I_Criteria[]>({
    queryKey: ["AppraisalCouncilRead"],
    queryFn: async () => mockData,
  });

  const columns = useMemo<MRT_ColumnDef<I_Criteria>[]> (
    () => [
    { header: "Mã kế hoạch TDG", accessorKey: "planCode" },
    { header: "Mã nhóm CT", accessorKey: "groupCode" },
    { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
    { header: "Mã Tiêu chí", accessorKey: "criteriaCode" },
    { header: "Tên Tiêu chí", accessorKey: "criteriaName", size: 300 },
    { header: "Mã MC dự kiến", accessorKey: "expectedEvidenceCode" },
    { 
      header: "Tên MC dự kiến",
      accessorKey: "expectedEvidenceName",
      size: 250,
    },
    {
      header: "Số - Ngày ban hành (dự kiến)", accessorKey: "expectedIssuedNumberAndDate",
    },
    { header: "Đơn vị ban hành (dự kiến)", accessorKey: "expectedIssuedBy" },
    { header: "Thành viên phụ trách", accessorKey: "responsibleMember" },
    {
      header: "Ngày bắt đầu nhiệm vụ",
      id: "startDate",
      accessorFn: (row) =>
        row.startDate
          ? utils_date_dateToDDMMYYYString(new Date(row.startDate))
          : "",
    },
    {
      header: "Ngày kết thúc nhiệm vụ",
      id: "endDate",
      accessorFn: (row) =>
        row.endDate
          ? utils_date_dateToDDMMYYYString(new Date(row.endDate))
          : "",
    },
  ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "planCode", header: "Mã kế hoạch TDG" },
      { fieldName: "groupCode", header: "Mã nhóm CT" },
      { fieldName: "standardCode", header: "Mã Tiêu chuẩn" },
      { fieldName: "criteriaCode", header: "Mã Tiêu chí" },
      { fieldName: "criteriaName", header: "Tên Tiêu chí" },
      { fieldName: "expectedEvidenceCode", header: "Mã MC dự kiến" },
      { fieldName: "expectedEvidenceName", header: "Tên MC dự kiến" },
      { fieldName: "expectedIssuedNumberAndDate", header: "Ngày ban hành dự kiến" },
      { fieldName: "expectedIssuedBy", header: "Đơn vị ban hành" },
      { fieldName: "responsibleMember", header: "Thành viên phụ trách" },
      { fieldName: "startDate", header: "Ngày bắt đầu" },
      { fieldName: "endDate", header: "Ngày kết thúc" },
    ],
  };

  return (
    <MyFieldset title={"Danh sách phân công tiêu chí"}>
      <MyFlexColumn>
        <MyDataTable
          isLoading={query.isLoading}
          isError={query.isError}
          enableRowSelection={true}
          enableRowNumbers={true}
          renderTopToolbarCustomActions={({ table }) => (
            <Group>
              <AQButtonExportData
                isAllData={true}
                objectName="dsUnit"
                data={query.data || []}
                exportConfig={exportConfig}
              />
            </Group>
          )}
          initialState={{
            columnVisibility: {
              modifiedBy: false,
              modifiedAt: false,
            },
          }}
          columns={columns}
          data={query.data || []}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}

const mockData: I_Criteria[] = [
  {
    planCode: "KH-KTPM-2024",
    groupCode: "NCT_TC5-7",
    standardCode: "TC_05",
    criteriaCode: "TC_05.02",
    criteriaName:
      '"Đảm bảo tính thống nhất công khai của quy định về đào tạo và các quy định khác có liên quan"',
    expectedEvidenceCode: "H5.05.02.01",
    expectedEvidenceName:
      '"Quyết định ban hành Quy chế đào tạo trình độ đại học"',
    expectedIssuedNumberAndDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    expectedIssuedBy: "Trường Đại học Đồng Nai",
    responsibleMember: "ThS. Hoàng Thị E",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
  },
  {
    planCode: "KH-KTPM-2024",
    groupCode: "NCT_TC5-7",
    standardCode: "TC_05",
    criteriaCode: "TC_05.02",
    criteriaName:
      '"Đảm bảo tính thống nhất công khai của quy định về đào tạo và các quy định khác có liên quan"',
    expectedEvidenceCode: "H5.05.02.02",
    expectedEvidenceName:
      '"Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo"',
    expectedIssuedNumberAndDate: "Ngày 10/12/2024",
    expectedIssuedBy: "Phòng Đảm bảo Chất lượng",
    responsibleMember: "ThS. Hoàng Thị E",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
  },
  {
    planCode: "KH-KTPM-2024",
    groupCode: "NCT_TC1-3",
    standardCode: "TC_01",
    criteriaCode: "TC_01.01",
    criteriaName:
      "Đảm bảo tính công khai minh bạch của mục tiêu và chuẩn đầu ra",
    expectedEvidenceCode: "H1.01.01.01",
    expectedEvidenceName:
      '"Quyết định về mục tiêu và chuẩn đầu ra của CTĐT KTPM"',
    expectedIssuedNumberAndDate: "Số 123/QĐ-KHMT Ngày 15/05/2024",
    expectedIssuedBy: "Khoa Khoa học Máy tính",
    responsibleMember: "TS. Trần Văn C",
    startDate: "2025-02-15",
    endDate: "2025-04-15",
  },
  {
    planCode: "KH-KTPM-2024",
    groupCode: "NCT_TC3-4",
    standardCode: "TC_03",
    criteriaCode: "TC_03.02",
    criteriaName:
      '"Đảm bảo chất lượng đội ngũ giảng viên đáp ứng yêu cầu của chương trình đào tạo"',
    expectedEvidenceCode: "H3.03.02.05",
    expectedEvidenceName: '"Danh sách cán bộ giảng viên cơ hữu và thỉnh giảng"',
    expectedIssuedNumberAndDate: undefined,
    expectedIssuedBy: "Phòng Tổ chức Cán bộ",
    responsibleMember: "CN. Bùi Thị L",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
  },
  {
    planCode: "KH-KTPM-2024",
    groupCode: "NCT_TC6-7",
    standardCode: "TC_06",
    criteriaCode: "TC_06.01",
    criteriaName:
      '"Đảm bảo hoạt động nghiên cứu khoa học và chuyển giao công nghệ phù hợp với định hướng phát triển"',
    expectedEvidenceCode: "H6.06.01.03",
    expectedEvidenceName: '"Báo cáo tình hình hoạt động KHCN của Trường"',
    expectedIssuedNumberAndDate: undefined,
    expectedIssuedBy: "Phòng Khoa học Công nghệ",
    responsibleMember: "ThS. Lê Thị M",
    startDate: "2025-04-01",
    endDate: "2025-05-31",
  },
];
