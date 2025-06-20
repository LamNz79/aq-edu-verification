"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Group, Text } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import EstablishCouncilButtonDelete from "./CRUDEstablishCouncil/EstablishCouncilButtonDelete";
import { IEstablishCouncilViewModel } from "./interfaces";
import EstablishCouncilButtonCreate from "./CRUDEstablishCouncil/EstablishCouncilButtonCreate";
import EstablishCouncilButtonUpdate from "./CRUDEstablishCouncil/EstablishCouncilButtonUpdate";

export default function EstablishCouncilTable() {
  const councilEstablishmentDecisionList = useQuery<
    IEstablishCouncilViewModel[]
  >({
    queryKey: ["CouncilEstablishmentDecisionTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<IEstablishCouncilViewModel>[]>(
    () => [
      {
        header: "STT",
        accessorKey: "id",
        enableSorting: false,
        Cell: ({ row }) => <Text>{row.index + 1}</Text>,
      },
      {
        header: "Số quyết định",
        accessorKey: "code",
      },
      {
        header: "Ngày quyết định",
        accessorKey: "date",
      },
      {
        header: "Tên quyết định",
        accessorKey: "name",
      },
      {
        header: "Người ký",
        accessorKey: "signatory",
      },
      {
        header: "File đính kèm",
        accessorKey: "file.fileName",
        Cell: ({ row }) => (
          <MyCenterFull>
            <MyButtonViewPDF filePath={row.original.filePath} isActionIcon />
          </MyCenterFull>
        ),
      },
    ],
    []
  );

  if (councilEstablishmentDecisionList.isLoading) return "Đang tải dữ liệu...";
  if (councilEstablishmentDecisionList.isError) return "Không có dữ liệu...";

  return (
    <MyFieldset title={`Danh sách quyết định thành lập hội đồng`}>
      <MyDataTable
        data={councilEstablishmentDecisionList.data || []}
        enableRowSelection={true}
        enableRowNumbers={false}
        columns={columns}
        renderTopToolbarCustomActions={() => (
          <Group>
            <EstablishCouncilButtonCreate />
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
            <EstablishCouncilButtonUpdate values={row.original} />
            <EstablishCouncilButtonDelete establishCouncil={row.original} />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

const mockData: IEstablishCouncilViewModel[] = [
  {
    id: 1,
    code: "14/2024/QĐ",
    date: "01/02/2024",
    name: "V/v thành lập hội đồng tự đánh giá năm 2024",
    signatory: "Tô Ngọc Bảo",
    filePath: "quyet_dinh_14_2024.pdf",
    fileDetail: {
      fileName: "quyet_dinh_14_2024.pdf",
      fileExtension: "pdf",
      fileBase64String: "",
    },
  },
  {
    id: 2,
    code: "15/2024/QĐ",
    date: "05/02/2024",
    name: "V/v thành lập hội đồng kiểm định chất lượng giáo dục",
    signatory: "Nguyễn Văn Nam",
    filePath: "quyet_dinh_15_2024.pdf",
    fileDetail: {
      fileName: "quyet_dinh_15_2024.pdf",
      fileExtension: "pdf",
      fileBase64String: "",
    },
  },
];
