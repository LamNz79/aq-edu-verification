import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import ProgramExternalEvalPlanDelete from "./ProgramExternalEvalPlanDelete";
import ProgramExternalEvalPlanDeleteList from "./ProgramExternalEvalPlanDeleteList";
import { Center } from "@mantine/core";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import ProgramExternalEvalPlanCreate from "./ProgramExternalEvalPlanCreate";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import ProgramExternalEvalPlanUpdate from "./ProgramExternalEvalPlanUpdate";

export default function ProgramExternalEvalPlanTable() {
    const form = useForm<any>({
    initialValues: {
    },
  });

  const query = useQuery<I_ExternalAssessmentPlanTable[]>({
    queryKey: ["ExternalAssessmentPlanQuery"],
    queryFn: async () => {
      return externalAssessmentPlanMockData ?? [];
    },
  });
  const columns = useMemo<MRT_ColumnDef<I_ExternalAssessmentPlanTable>[]>(
    () => [
      { header: "Số kế hoạch", accessorKey: "planNumber" },
      {
        header: "Ngày kế hoạch",
        accessorFn: (row) =>
          row.planDate
            ? utils_date_dateToDDMMYYYString(new Date(row.planDate))
            : "",
        id: "planDate",
      },
      { header: "Chương trình đào tạo", accessorKey: "curriculum" },
      { header: "Giai đoạn đánh giá", accessorKey: "phase" },
      { header: "Tên Tổ chức kiểm định", accessorKey: "assessmentOrg" },
      { header: "Trưởng đoàn", accessorKey: "leader" },
      { header: "Giám đốc Tổ chức", accessorKey: "director" },
      {
        header: "File kế hoạch đánh giá ngoài",
        accessorFn: (row) => (
          <Center>
            <MyButtonViewPDF />
          </Center>
        ),
        id: "file",
      },
      { header: "Ghi chú", accessorKey: "note" },
    ],
    []
  );

  const exportConfig = {
  fields: [
    { fieldName: "planNumber", header: "Số kế hoạch" },
    { fieldName: "planDate", header: "Ngày kế hoạch" },
    { fieldName: "curriculum", header: "Chương trình đào tạo" },
    { fieldName: "phase", header: "Giai đoạn đánh giá" },
    { fieldName: "assessmentOrg", header: "Tên Tổ chức kiểm định" },
    { fieldName: "leader", header: "Trưởng đoàn" },
    { fieldName: "director", header: "Giám đốc Tổ chức" },
    { fieldName: "note", header: "Ghi chú" }
  ]
};


  return (
    <MyFieldset title={"Danh sách kế hoạch đánh giá ngoài CTĐT"}>
      <MyDataTable
        isError={query.isError}
        isLoading={query.isLoading}
        columns={columns}
        data={query.data || []}
        enableRowSelection
        enableColumnFilters
        enableRowNumbers
        renderTopToolbarCustomActions={({ table }) => (
          <>
            <ProgramExternalEvalPlanCreate />
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachKeHoachDanhGia"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <ProgramExternalEvalPlanDeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <ProgramExternalEvalPlanUpdate data={row.original} />
            <ProgramExternalEvalPlanDelete
              id={row.original.id}
              code={row.original.planNumber}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

export interface I_ExternalAssessmentPlanTable {
    id:number;
  planNumber: string; // Số kế hoạch
  planDate?: string; // Ngày kế hoạch
  curriculum: string; // Chương trình đào tạo
  phase: string; // Giai đoạn đánh giá
  assessmentOrg: string; // Tên Tổ chức kiểm định
  leader: string; // Trưởng đoàn
  director: string; // Giám đốc Tổ chức
  note: string; // Ghi chú
}

const externalAssessmentPlanMockData: I_ExternalAssessmentPlanTable[] = [
  {
    id: 1,
    planNumber: "123/KH-KĐCLGD",
    planDate: "2025-05-10",
    curriculum: "KTPM",
    phase: "2020-2024",
    assessmentOrg: "Trung tâm Kiểm định chất lượng giáo dục - ĐHQGHN",
    leader: "GS.TS Nguyễn B",
    director: "PGS.TS. Trần C",
    note: "",
  },
  {
    id: 2,
    planNumber: "050/KH-KĐCL",
    planDate: "2025-06-20",
    curriculum: "KT",
    phase: "2021-2025",
    assessmentOrg:
      "Trung tâm Kiểm định chất lượng giáo dục - Đại học Quốc gia TP.HCM",
    leader: "TS. Lê D",
    director: "ThS. Phạm E",
    note: "",
  },
  {
    id: 3,
    planNumber: "200/KH-KĐCL",
    planDate: "2025-07-01",
    curriculum: "CNTT",
    phase: "Định kỳ 5 năm (2025)",
    assessmentOrg: "Trung tâm Kiểm định chất lượng giáo dục - Đại học Đà Nẵng",
    leader: "PGS.TS. Hoàng G",
    director: "TS. Mai H",
    note: "",
  },
];
