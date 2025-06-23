"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IExpectedEvidenceViewModel } from "../interface";
import ExpectedEvidenceCreate from "./CURDExpectedEvidence/ExpectedEvidenceCreate";
import ExpectedEvidenceDelete from "./CURDExpectedEvidence/ExpectedEvidenceDelete";
import ExpectedEvidenceUpdate from "./CURDExpectedEvidence/ExpectedEvidenceUpdate";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";

export default function ExpectedEvidenceTable({
  data,
}: {
  data?: IExpectedEvidenceViewModel[];
}) {
  const Query = useQuery({
    queryKey: ["ExpectedEvidenceTable"],
    queryFn: async () => {
      return data;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IExpectedEvidenceViewModel>[]>(
    () => [
      {
        accessorKey: "code",
        header: "Mã minh chứng dự kiên",
      },
      {
        accessorKey: "name",
        header: "Tên minh chứng",
        size: 300,
      },
      {
        accessorKey: "issuanceNumber",
        header: "Số ban hành",
      },
      {
        accessorKey: "date",
        header: "Ngày tháng ban hành",
        accessorFn: (row) => {
          return row.date ? utils_date_dateToDDMMYYYString(new Date(row.date)) : "";
        },  
      },
      {
        accessorKey: "location",
        header: "Nơi ban hành",
      },
      {
        accessorKey: "note",
        header: "Ghi chú",
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
          <ExpectedEvidenceCreate />
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
          <ExpectedEvidenceUpdate data={row.original} />
          <ExpectedEvidenceDelete code={row.original.code} id={row.original.id} />
        </MyCenterFull>
      )}
    />
  );
}
