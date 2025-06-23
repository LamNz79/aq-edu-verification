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
import { ISelfAssessmentPlanViewModel } from "./interface";
import SelfAssessmentPlanButtonCreate from "./CRUDSelfAssessmentPlan/SelfAssessmentPlanButtonCreate";
import SelfAssessmentPlanButtonUpdate from "./CRUDSelfAssessmentPlan/SelfAssessmentPlanButtonUpdate";
import SelfAssessmentPlanButtonDelete from "./CRUDSelfAssessmentPlan/SelfAssessmentPlanButtonDelete";

export default function SelfAssessmentPlanTable() {
  const councilEstablishmentDecisionList = useQuery<
    ISelfAssessmentPlanViewModel[]
  >({
    queryKey: ["SelfAssessmentPlanTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<ISelfAssessmentPlanViewModel>[]>(
    () => [
      {
        header: "Số quyết định",
        accessorKey: "code",
        size: 150,
      },
      {
        header: "Ngày quyết định",
        accessorKey: "date",
        size: 150,
      },
      {
        header: "Tên quyết định",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Người ký",
        accessorKey: "signatory",
        size: 150,
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
    <MyFieldset title={`Danh sách kế hoạch tự đánh giá`}>
      <MyDataTable
        data={councilEstablishmentDecisionList.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        renderTopToolbarCustomActions={() => (
          <Group>
            <SelfAssessmentPlanButtonCreate />
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
            <SelfAssessmentPlanButtonUpdate data={row.original} />
            <SelfAssessmentPlanButtonDelete
              code={row.original.code}
              id={row.original.id}
            />
          </Group>
        )}
      />
    </MyFieldset>
  );
}

const mockData: ISelfAssessmentPlanViewModel[] = [
  {
    id: "1",
    code: "14/2024/QĐ",
    date: "01/02/2024",
    name: "V/v thành lập hội đồng tự đánh giá năm 2024",
    signatory: "Tô Ngọc Lan",
    filePath: "quyet_dinh_14_2024.pdf",
    fileDetail: {
      fileName: "quyet_dinh_14_2024.pdf",
      fileExtension: "pdf",
      fileBase64String: "",
    },
  },
];
