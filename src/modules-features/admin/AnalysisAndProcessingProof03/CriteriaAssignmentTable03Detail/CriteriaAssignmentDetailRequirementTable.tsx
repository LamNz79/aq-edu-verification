"use client";

import { Group } from "@mantine/core";
import {
  AQButtonExportData,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { I_Requirement } from "../interfaces";

type Props = {
  data: I_Requirement[];
};

export default function CriteriaAssignmentDetailRequirementTable({ data }: Props) {
  const columns = useMemo<MRT_ColumnDef<I_Requirement>[]>(
    () => [
      { header: "Mã yêu cầu", accessorKey: "code", size: 180 },
      { header: "Yêu cầu", accessorKey: "description", size: 280 },
      {
        header: "Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)",
        accessorKey: "outputStandard",
        size: 380,
      },
      { header: "Cần thu thập", accessorKey: "collectEvidence", size: 300 },
      { header: "Nơi thu thập", accessorKey: "collectPlace" },
      { header: "Phương pháp thu thập", accessorKey: "collectMethod", size: 300  },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "code", header: "Mã yêu cầu" },
      { fieldName: "description", header: "Yêu cầu" },
      {
        fieldName: "outputStandard",
        header: "Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)",
      },
      { fieldName: "collectEvidence", header: "Cần thu thập" },
      { fieldName: "collectPlace", header: "Nơi thu thập" },
      { fieldName: "collectMethod", header: "Phương pháp thu thập" },
    ],
  };

  return (
    <MyFieldset title="Danh danh yêu cầu">
      <MyFlexColumn>
        <MyDataTable
          enableRowSelection
          enableRowNumbers = {false}
          data={data || []}
          columns={columns}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}
