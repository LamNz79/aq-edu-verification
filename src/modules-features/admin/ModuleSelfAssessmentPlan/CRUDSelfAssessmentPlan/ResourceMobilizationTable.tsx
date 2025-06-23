"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IResourceMobilizationViewModel } from "../interface";
import ResourceMobilizationCreate from "./CRUDResourceMobilization/ResourceMobilizationCreate";
import ResourceMobilizationDelete from "./CRUDResourceMobilization/ResourceMobilizationDelete";
import ResourceMobilizationUpdate from "./CRUDResourceMobilization/ResourceMobilizationUpdate";

export default function ResourceMobilizationTable({
  data,
}: {
  data?: IResourceMobilizationViewModel[];
}) {
  const Query = useQuery({
    queryKey: ["ResourceMobilizationTable"],
    queryFn: async () => {
      return data;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IResourceMobilizationViewModel>[]>(
    () => [
      {
        accessorKey: "standard.code",
        header: "Mã tiêu chuẩn",
      },
      {
        accessorKey: "standard.name",
        header: "Tên tiêu chuẩn",
      },
      {
        accessorKey: "name",
        header: "Các hoạt động",
        size: 300,
      },
      {
        accessorKey: "resourceTypes",
        header: "Các loại nguồn lực",
      },
      {
        accessorKey: "time",
        header: "Thời gian",
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
          <ResourceMobilizationCreate />
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
          <ResourceMobilizationUpdate data={row.original} />
          <ResourceMobilizationDelete code={row.original.code} id={row.original.id} />
        </MyCenterFull>
      )}
    />
  );
}