import { Center } from "@mantine/core";
import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import ProgramSurveyMemo08Delete from "./ProgramSurveyMemo08Delete";
import ProgramSurveyMemo08DeleteList from "./ProgramSurveyMemo08DeleteList";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import ProgramSurveyMemo08Update from "./ProgramSurveyMemo08Update";
import SelfAssessmentReportCreate from "../ModuleSelfAssessmentReport/SelfAssessmentReportCreate";
import ProgramSurveyMemo08Create from "./ProgramSurveyMemo08Create";

export default function ProgramSurveyMemo08Table() {
  const form = useForm<any>({
    initialValues: {},
  });

  const query = useQuery<I_SurveyMemo08Table[]>({
    queryKey: ["SurveyMemo08Query"],
    queryFn: async () => {
      return surveyMemo08MockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_SurveyMemo08Table>[]>(
    () => [
      { header: "Tên Chương trình đào tạo", accessorKey: "curriculumName" },
      { header: "Giai đoạn đánh giá", accessorKey: "phase" },
      {
        header: "Ngày lập biên bản",
        accessorFn: (row) =>
          row.minutesDate
            ? utils_date_dateToDDMMYYYString(new Date(row.minutesDate))
            : "",
        id: "minutesDate",
      },
      { header: "Trưởng đoàn", accessorKey: "leader" },
      { header: "Thủ trưởng đơn vị", accessorKey: "deputy" },
      {
        header: "File biên bản ghi nhớ",
        accessorFn: (row) => (
          <Center>
            <MyButtonViewPDF />
          </Center>
        ),
        id: "file",
      }
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "curriculumName", header: "Tên Chương trình đào tạo" },
      { fieldName: "phase", header: "Giai đoạn đánh giá" },
      { fieldName: "minutesDate", header: "Ngày lập biên bản" },
      { fieldName: "leader", header: "Trưởng đoàn" },
      { fieldName: "deputy", header: "Thủ trưởng đơn vị" },
    ],
  };

  return (
    <MyFieldset title={"Danh sách biên bản ghi nhớ sau khảo sát sơ bộ CTĐT"}>
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
            <ProgramSurveyMemo08Create />
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachBienBanGhiNho"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <ProgramSurveyMemo08DeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <ProgramSurveyMemo08Update data={row.original} />
            <ProgramSurveyMemo08Delete
              id={row.original.id}
              curriculumName={row.original.curriculumName}
              phase={row.original.phase}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

export interface I_SurveyMemo08Table {
  id: number;
  curriculumName: string; // Tên Chương trình đào tạo
  phase: string; // Giai đoạn đánh giá
  minutesDate?: string; // Ngày lập biên bản
  leader: string; // Trưởng đoàn
  deputy: string; // Thủ trưởng đơn vị
  note: string; // Ghi chú
}

const surveyMemo08MockData: I_SurveyMemo08Table[] = [
  {
    id: 1,
    curriculumName: "Kỹ thuật phần mềm",
    phase: "2020-2024",
    minutesDate: "2025-06-20",
    leader: "GS.TS. Nguyễn B",
    deputy: "PGS.TS. Trần C",
    note: "",
  },
  {
    id: 2,
    curriculumName: "Kế toán",
    phase: "2021-2025",
    minutesDate: "2025-06-25",
    leader: "TS. Lê D",
    deputy: "ThS. Phạm E",
    note: "",
  },
  {
    id: 3,
    curriculumName: "Công nghệ thông tin",
    phase: "2021-2025",
    minutesDate: "2025-07-01",
    leader: "PGS.TS. Hoàng G",
    deputy: "TS. Mai H",
    note: "",
  },
];
