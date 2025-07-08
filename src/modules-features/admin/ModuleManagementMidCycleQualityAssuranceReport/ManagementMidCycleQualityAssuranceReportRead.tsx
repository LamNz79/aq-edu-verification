"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IManagementMidCycleQualityAssuranceReportInfoViewModel } from "./interface";
import { mockData } from "./mockData";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import ManagementMidCycleQualityAssuranceReportCreateUpdate from "./ManagementMidCycleQualityAssuranceReportCreateUpdate";
import ManagementMidCycleQualityAssuranceReportDelete from "./ManagementMidCycleQualityAssuranceReportDelete";

export default function ManagementMidCycleQualityAssuranceReportRead() {
  const query = useQuery<
    IManagementMidCycleQualityAssuranceReportInfoViewModel[]
  >({
    queryKey: ["ManagementMidCycleQualityAssuranceReportRead"],
    queryFn: async () => mockData,
  });

  const columns = useMemo<
    MRT_ColumnDef<IManagementMidCycleQualityAssuranceReportInfoViewModel>[]
  >(
    () => [
      {
        header: "Chương trình đào tạo",
        accessorKey: "chuongTrinhDaoTao",
      },
      {
        header: "Giai đoạn",
        accessorKey: "giaiDoan",
      },
      {
        header: "Số báo cáo",
        accessorKey: "soBaoCao",
      },
      {
        header: "Ngày báo cáo",
        accessorKey: "ngayBaoCao",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
      {
        header: "Người ký",
        accessorKey: "nguoiKy",
      },
      {
        header: "File báo cáo giữa kỳ",
        accessorKey: "fileBaoCaoGiuaKy",
        accessorFn: (row) => <MyButtonViewPDF />,
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách Báo cáo Giữa Chu kỳ Kiểm định Chất lượng CTĐT">
      <MyDataTable
        isError={query.isError}
        isLoading={query.isLoading}
        columns={columns}
        data={query.data || []}
        enableRowSelection
        renderTopToolbarCustomActions={() => (
          <MyCenterFull>
            <ManagementMidCycleQualityAssuranceReportCreateUpdate />
            <MyButton crudType="import">Import</MyButton>
            <MyButton crudType="export">Export</MyButton>
            <MyButton crudType="delete">Xóa</MyButton>
          </MyCenterFull>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <ManagementMidCycleQualityAssuranceReportCreateUpdate
              values={row.original}
            />
            <ManagementMidCycleQualityAssuranceReportDelete
              id={row.original.chuongTrinhDaoTao || ""}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}
