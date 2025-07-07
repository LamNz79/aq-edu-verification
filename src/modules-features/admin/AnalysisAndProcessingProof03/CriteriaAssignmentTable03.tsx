"use client";

import { Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonExportData,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { mockData, mockRequirementData, mockEvidenceForecastData } from "./mockData";
import CriteriaAssignmentDetailModal from "./CriteriaAssignmentTable03Detail/CriteriaAssignmentDetailModal";
import { I_CriteriaAssignment } from "./interfaces";
import UpdateModal from "./CriteriaAssignmentTable03Update/UpdateModal";

export default function CriteriaAssignmentTable03() {
  const query = useQuery<I_CriteriaAssignment[]>({
    queryKey: ["CriteriaAssignmentRead"],
    queryFn: async () => mockData,
  });

  const columns = useMemo<MRT_ColumnDef<I_CriteriaAssignment>[]>(
    () => [
      { header: "Mã kế hoạch TDG", accessorKey: "planCode" },
      { header: "Nhóm công tác", accessorKey: "groupCode" },
      { header: "Thành viên phụ trách", accessorKey: "responsibleMember" },
      { header: "Mã Tiêu chí", accessorKey: "criteriaCode" },
      { header: "Tên Tiêu chí", accessorKey: "criteriaName", size: 300 },
      { header: "Trạng thái phân tích", accessorKey: "status" },
      {
        header: "Ngày tạo",
        accessorFn: (row) =>
          row.createdAt
            ? utils_date_dateToDDMMYYYString(new Date(row.createdAt))
            : "",
        accessorKey: "createdAt",
      },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "planCode", header: "Mã kế hoạch TDG" },
      { fieldName: "groupCode", header: "Nhóm công tác" },
      { fieldName: "responsibleMember", header: "Thành viên phụ trách" },
      { fieldName: "criteriaCode", header: "Mã Tiêu chí" },
      { fieldName: "criteriaName", header: "Tên Tiêu chí" },
      { fieldName: "status", header: "Trạng thái phân tích" },
      { fieldName: "createdAt", header: "Ngày tạo" },
    ],
  };

  return (
    <MyFieldset title="Danh danh phân công tiêu chí">
      <MyFlexColumn>
        <MyDataTable
          enableRowSelection
          enableRowNumbers
          isLoading={query.isLoading}
          isError={query.isError}
          data={query.data || []}
          initialState={{ 
            columnPinning: { right: ["mrt-row-actions"] },
            columnVisibility: {
              createdAt: false,
              createdBy: false,
            },
          }}
          columns={columns}
          renderRowActions={({ row }) => (
            <MyCenterFull>
              <CriteriaAssignmentDetailModal
                mockRequirementData={mockRequirementData}
                mockEvidenceForecastData={mockEvidenceForecastData}
              />
              <UpdateModal
                mockRequirementData={mockRequirementData}
                mockEvidenceForecastData={mockEvidenceForecastData}
              />
            </MyCenterFull>
          )}
          renderTopToolbarCustomActions={() => (
            <Group>
              <AQButtonExportData
                isAllData
                objectName="criteriaAssignments"
                data={query.data || []}
                exportConfig={exportConfig}
              />
            </Group>
          )}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}