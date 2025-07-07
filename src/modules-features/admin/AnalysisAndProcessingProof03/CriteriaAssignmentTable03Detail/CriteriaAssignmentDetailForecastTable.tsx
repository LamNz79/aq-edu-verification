"use client";

import { Group } from "@mantine/core";
import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { I_EvidenceForecast } from "../interfaces";
import { useForm } from "@mantine/form";

type Props = {
  data: I_EvidenceForecast[];
};

export default function CriteriaAssignmentForecastTable({ data }: Props) {
  const form_multiple = useForm({
    initialValues: {},
  });

  const columns = useMemo<MRT_ColumnDef<I_EvidenceForecast>[]>(
    () => [
      { header: "Mã Tiêu chuẩn", accessorKey: "criteriaGroupCode" },
      { header: "Mã Tiêu chí", accessorKey: "criteriaCode" },
      { header: "Mã Minh chứng", accessorKey: "evidenceCode" },
      { header: "Tên Minh chứng", accessorKey: "evidenceName", size: 300 },
      {
        header: "Trực thuộc minh chứng",
        accessorKey: "evidenceBelongToCode",
      },
      {
        header: "Số - ngày ban hành - thời điểm khảo sát",
        accessorKey: "issuedInfo",
        size: 240,
      },
      { header: "Nơi ban hành", accessorKey: "issuingDept" },
      { header: "Ghi chú", accessorKey: "note", size: 200 },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "criteriaGroupCode", header: "Mã Tiêu chuẩn" },
      { fieldName: "criteriaCode", header: "Mã Tiêu chí" },
      { fieldName: "evidenceCode", header: "Mã Minh chứng" },
      { fieldName: "evidenceName", header: "Tên Minh chứng" },
      { fieldName: "evidenceBelongToCode", header: "Trực thuộc minh chứng" },
      {
        fieldName: "issuedInfo",
        header: "Số - ngày ban hành - thời điểm khảo sát",
      },
      { fieldName: "issuingDept", header: "Nơi ban hành" },
      { fieldName: "note", header: "Ghi chú" },
    ],
  };

  return (
    <MyFieldset title="Danh danh yêu cầu">
      <MyFlexColumn>
        <MyDataTable
          enableRowSelection
          enableRowNumbers
          data={data || []}
          columns={columns}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}
