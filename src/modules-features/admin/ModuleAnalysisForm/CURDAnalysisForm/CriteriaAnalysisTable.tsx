"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ICriteriaAnalysisViewModel } from "../interface";
import CriteriaAnalysisCreate from "./CURDCriteriaAnalysis/CriteriaAnalysisCreate";
import CriteriaAnalysisUpdate from "./CURDCriteriaAnalysis/CriteriaAnalysisUpdate";
import CriteriaAnalysisDelete from "./CURDCriteriaAnalysis/CriteriaAnalysisDelete";

export default function CriteriaAnalysisTable({
  data,
}: {
  data?: ICriteriaAnalysisViewModel[];
}) {
  const Query = useQuery({
    queryKey: ["CriteriaAnalysisTable"],
    queryFn: async () => {
      return data;
    },
  });

  const columns = useMemo<MRT_ColumnDef<ICriteriaAnalysisViewModel>[]>(
    () => [
      {
        accessorKey: "group.name",
        header: "Nhóm công tác",
      },
      {
        accessorKey: "standardCode",
        header: "Mã tiêu chuẩn",
      },
      {
        accessorKey: "criteriaCode",
        header: "Mã tiêu chí",
      },
      {
        accessorKey: "requirementCode",
        header: "Mã yêu cầu",
      },
      {
        accessorKey: "code",
        header: "Mã mốc chuẩn",
      },
      {
        accessorKey: "name",
        header: "Minh chứng cần thu thập",
        size: 300,
      },
      {
        accessorKey: "location",
        header: "Nơi thu thập",
      },
      {
        accessorKey: "method",
        header: "Phương pháp thu thập",
      },
      {
        accessorKey: "codeEvent",
        header: "Mã hóa sự kiện",
      },
    ],
    []
  );

  return (
    <MyDataTable
      data={Query.data || []}
      enableRowSelection={true}
      columns={columns}
      renderTopToolbarCustomActions={() => (
        <Group>
          <CriteriaAnalysisCreate />
          <MyButton color="green" leftSection={<IconUpload />}>
            Import
          </MyButton>
          <MyButton color="teal" leftSection={<IconTableExport />}>
            Export
          </MyButton>
          <MyButton color="red" leftSection={<IconTrash />}>
            Xóa
          </MyButton>
        </Group>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <CriteriaAnalysisUpdate data={row.original} />
          <CriteriaAnalysisDelete code={row.original.code} id={row.original.id} />
        </MyCenterFull>
      )}
    />
  );
}
