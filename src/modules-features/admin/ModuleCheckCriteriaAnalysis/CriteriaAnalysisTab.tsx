"use client";
import {
  MyButton,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

import { ICriteriaAnalysisDetailInfoViewModel } from "./interface";
import { mockDataCriteriaAnalysisDetail } from "./mockData";

export default function CriteriaAnalysisTab() {
  const columns = useMemo<
    MRT_ColumnDef<ICriteriaAnalysisDetailInfoViewModel>[]
  >(
    () => [
      {
        header: "Mã yêu cầu",
        accessorKey: "maYeuCau",
      },
      {
        header: "Yêu cầu",
        accessorKey: "yeuCau",
      },
      {
        header: "Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)",
        accessorKey: "cauHoiDatRa",
      },
      {
        header: "Cần thu thập",
        accessorKey: "canThuThap",
      },
      {
        header: "Nơi thu thập",
        accessorKey: "noiThuThap",
      },
      {
        header: "Phương pháp thu thập",
        accessorKey: "phuongPhapThuThap",
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách yêu cầu">
      <MyDataTable
        columns={columns}
        data={mockDataCriteriaAnalysisDetail ?? []}
        enableRowSelection
      />
    </MyFieldset>
  );
}
