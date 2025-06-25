"use client";

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import AnalysisFormButtonCreate from "./CURDAnalysisForm/AnalysisFormCreate";
import AnalysisFormButtonDelete from "./CURDAnalysisForm/AnalysisFormDelete";
import { IAnalysisFormInfoViewModel } from "./interface";
import AnalysisFormButtonUpdate from "./CURDAnalysisForm/AnalysisFormUpdate";

export default function AnalysisFormTable() {
  const councilEstablishmentDecisionList = useQuery<
    IAnalysisFormInfoViewModel[]
  >({
    queryKey: ["AnalysisFormTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<IAnalysisFormInfoViewModel>[]>(
    () => [
      {
        header: "Nhóm công tác",
        accessorKey: "group.name",
        size: 150,
      },
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "standardCode",
        size: 150,
      },
      {
        header: "Tên tiêu chuẩn",
        accessorKey: "standard.name",
        size: 300,
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "code",
        size: 150,
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Trưởng nhóm",
        accessorKey: "leader.name",
        size: 150,
      },
      {
        header: "Số điện thoại trưởng nhóm",
        accessorKey: "leader.phone",
        size: 150,
      },
      {
        header: "Email trưởng nhóm",
        accessorKey: "leader.email",
        size: 150,
      },
    ],
    []
  );

  if (councilEstablishmentDecisionList.isLoading) return "Đang tải dữ liệu...";
  if (councilEstablishmentDecisionList.isError) return "Không có dữ liệu...";

  return (
    <MyFieldset title={`Danh sách phiếu phân tích tiêu chí`}>
      <MyDataTable
        data={councilEstablishmentDecisionList.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        renderTopToolbarCustomActions={() => (
          <Group>
            <AnalysisFormButtonCreate />
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
          <Group>
            <AnalysisFormButtonUpdate data={row.original} />
            <AnalysisFormButtonDelete
              code={row.original.code}
              id={row.original.id}
            />
          </Group>
        )}
      />
    </MyFieldset>
  );
}

const mockData: IAnalysisFormInfoViewModel[] = [
  {
    id: "1",
    code: "TC1.1",
    name: "Lãnh đạo CSGD đảm bảo tầm nhìn",
    standardCode: "TC1",
    standard: {
      id: "1",
      name: "Tầm nhìn; sứ mệnh và văn hóa",
      code: "TC1",
    },
    leaderCode: "1",
    leader: {
      id: "1",
      name: "Tô Ngọc Linh",
      email: "linh@gmail.com",
      phone: "0953237432",
    },
    groupCode: "N1",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N1",
    },
  },
  {
    id: "1",
    code: "TC1.2",
    name: "Lãnh đạo CSGD thúc đẫy giá trị văn hóa",
    standardCode: "TC1",
    standard: {
      id: "1",
      name: "Tầm nhìn; sứ mệnh và văn hóa",
      code: "TC1",
    },
    leaderCode: "1",
    leader: {
      id: "1",
      name: "Tô Ngọc Linh",
      email: "linh@gmail.com",
      phone: "0953237432",
    },
    groupCode: "N1",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N1",
    },
  },
  {
    id: "1",
    code: "TC1.3",
    name: "Tầm nhìn, văn hóa; sứ mạng được phổ hiến đầy đủ",
    standardCode: "TC1",
    standard: {
      id: "1",
      name: "Tầm nhìn; sứ mệnh và văn hóa",
      code: "TC1",
    },
    leaderCode: "1",
    leader: {
      id: "1",
      name: "Tô Ngọc Linh",
      email: "linh@gmail.com",
      phone: "0953237432",
    },
    groupCode: "N1",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N1",
    },
  },
  {
    id: "1",
    code: "TC1.4",
    name: "Tầm nhìn, văn hóa; sứ mạng được rà soát định kỳ",
    standardCode: "TC1",
    standard: {
      id: "1",
      name: "Tầm nhìn; sứ mệnh và văn hóa",
      code: "TC1",
    },
    leaderCode: "1",
    leader: {
      id: "1",
      name: "Tô Ngọc Linh",
      email: "linh@gmail.com",
      phone: "0953237432",
    },
    groupCode: "N1",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N1",
    },
  },
];
