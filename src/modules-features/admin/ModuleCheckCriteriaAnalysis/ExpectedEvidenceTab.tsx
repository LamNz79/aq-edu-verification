"use client";
import {
  MyButtonPrintPDF,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

import { mockDataExpectedEvidence } from "./mockData";
import { IExpectedEvidenceInfoViewModel } from "./interface";

export default function ExpectedEvidenceTab() {
  const columns = useMemo<MRT_ColumnDef<IExpectedEvidenceInfoViewModel>[]>(
    () => [
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "maTieuChuan",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "maTieuChi",
      },
      {
        header: "Mã minh chứng",
        accessorKey: "maMinhChung",
      },
      {
        header: "Tên minh chứng",
        accessorKey: "tenMinhChung",
      },
      {
        header: "Trực thuộc minh chứng",
        accessorKey: "trucThuocMinhChung",
      },
      {
        header: "Số - ngày ban hành - thời điểm khảo sát",
        accessorKey: "soNgayBanHanhThoiDiemKhaoSat",
      },
      {
        header: "Nơi ban hành",
        accessorKey: "noiBanHanh",
      },
      {
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách yêu cầu">
      <MyDataTable
        columns={columns}
        data={mockDataExpectedEvidence ?? []}
        enableRowSelection
      />
    </MyFieldset>
  );
}



