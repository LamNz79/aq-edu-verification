"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IEstablishCouncilMemberViewModel } from "../interfaces";
import EstablishCouncilButtonDelete from "./CRUDEstablishCouncilMember/EstablishCouncilMemberDelete";
import EstablishCouncilMemberCreate from "./CRUDEstablishCouncilMember/EstablishCouncilMemberCreate";
import EstablishCouncilMemberUpdate from "./CRUDEstablishCouncilMember/EstablishCouncilMemberUpdate";

export default function EstablishCouncilMemberTable({
  data,
}: {
  data?: IEstablishCouncilMemberViewModel[];
}) {
  const Query = useQuery({
    queryKey: ["EstablishCouncilMemberTable"],
    queryFn: async () => {
      return data;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IEstablishCouncilMemberViewModel>[]>(
    () => [
      {
        accessorKey: "code",
        header: "Mã viên chức",
      },
      {
        accessorKey: "name",
        header: "Tên viên chức",
      },
      {
        accessorKey: "position",
        header: "Chức danh - chức vụ",
      },
      {
        accessorKey: "responsibility",
        header: "Nhiệm vụ",
      },
    ],
    []
  );

  if (Query.isLoading) return "Đang tải dữ liệu...";
  if (Query.isError) return "Không có dữ liệu...";

  return (
    <MyDataTable
      data={Query.data || []}
      enableRowSelection={true}
      columns={columns}
      renderTopToolbarCustomActions={() => (
        <Group>
          <EstablishCouncilMemberCreate />
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
          <EstablishCouncilMemberUpdate data={row.original} />
          <EstablishCouncilButtonDelete establishCouncilMember={row.original} />
        </MyCenterFull>
      )}
    />
  );
}
