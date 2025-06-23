"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IAssignmentGroupViewModel } from "../interface";
import AssignmentGroupCreate from "./CRUDAssignmentGroup/AssignmentGroupCreate";
import AssignmentGroupButtonDelete from "./CRUDAssignmentGroup/AssignmentGroupDelete";
import AssignmentGroupUpdate from "./CRUDAssignmentGroup/AssignmentGroupUpdate";

export default function AssignmentGroupTable({
  data,
}: {
  data?: IAssignmentGroupViewModel[];
}) {
  const Query = useQuery({
    queryKey: ["AssignmentGroupTable"],
    queryFn: async () => {
      return data;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IAssignmentGroupViewModel>[]>(
    () => [
      {
        accessorKey: "code",
        header: "Mã tiêu chuẩn",
      },
      {
        accessorKey: "name",
        header: "Tên tiêu chuẩn",
        size: 300,
      },
      {
        accessorKey: "group.name",
        header: "Nhóm",
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
          <AssignmentGroupCreate />
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
          <AssignmentGroupUpdate data={row.original} />
          <AssignmentGroupButtonDelete code={row.original.code} id={row.original.id} />
        </MyCenterFull>
      )}
    />
  );
}