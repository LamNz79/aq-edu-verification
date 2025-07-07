import { Center, Group } from "@mantine/core";
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
import { useQuery } from "@tanstack/react-query";
import SelfAssessmentReportCreate from "./SelfAssessmentReportCreate";
import SelfAssessmentReportDeleteList from "./SelfAssessmentReportDeleteList";
import { useForm } from "@mantine/form";
import SelfAssessmentReportDelete from "./SelfAssessmentReportDelete";
import SelfAssessmentReportUpdate from "./SelfAssessmentReportUpdate";

export default function SelfAssessmentReportTable() {
  const form = useForm<any>({
    initialValues: {
      // Define your initial values here
    },
  });

  const query = useQuery<I_SelfAssessmentReportTable[]>({
    queryKey: ["SelfAssessmentReportQuery"],
    queryFn: async () => {
      return selfAssessmentReportMockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_SelfAssessmentReportTable>[]>(
    () => [
      { header: "Mã Chương trình đào tạo", accessorKey: "curriculum" },
      { header: "Tên Chương trình đào tạo", accessorKey: "curriculumName" },
      { header: "Mã Khóa", accessorKey: "course" },
      { header: "Giai đoạn đánh giá", accessorKey: "phase" },
      {
        header: "Ngày Báo cáo",
        accessorFn: (row) =>
          row.reportDate
            ? utils_date_dateToDDMMYYYString(new Date(row.reportDate))
            : "",
        id: "reportDate",
      },
      { header: "Người ký", accessorKey: "signer" },
      {
        header: "File báo cáo tự đánh giá",
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
      { fieldName: "curriculum", header: "Mã Chương trình đào tạo" },
      { fieldName: "curriculumName", header: "Tên Chương trình đào tạo" },
      { fieldName: "course", header: "Mã Khóa" },
      { fieldName: "phase", header: "Giai đoạn đánh giá" },
      { fieldName: "reportDate", header: "Ngày Báo cáo" },
      { fieldName: "signer", header: "Người ký" },
      { fieldName: "note", header: "Ghi chú" },
    ],
  };

  return (
    <MyFieldset title={"Danh sách báo cáo tự đánh giá"}>
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
            <SelfAssessmentReportCreate />
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachBaoCaoTuyDanhGia"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <SelfAssessmentReportDeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <SelfAssessmentReportUpdate data={row.original} />
            <SelfAssessmentReportDelete
              id={row.original.id}
              code={row.original.curriculum}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

export interface I_SelfAssessmentReportTable {
  id: number; // ID
  curriculum: string; // Mã Chương trình đào tạo
  curriculumName: string; // Tên Chương trình đào tạo
  course: string; // Mã Khóa
  phase: string; // Giai đoạn đánh giá
  reportDate?: string; // Ngày Báo cáo
  signer: string; // Người ký
  note: string; // Ghi chú
}

const selfAssessmentReportMockData: I_SelfAssessmentReportTable[] = [
  {
    id: 1,
    curriculum: "KTPM",
    curriculumName: "Kỹ thuật phần mềm",
    course: "KTPM_K20",
    phase: "2020-2024",
    reportDate: "2025-06-25",
    signer: "PGS. TS. Nguyễn Văn Z",
    note: "",
  },
  {
    id: 2,
    curriculum: "KT",
    curriculumName: "Kế toán",
    course: "KT_K21",
    phase: "2021-2025",
    reportDate: "2025-07-15",
    signer: "GS. TS. Lê Thị Y",
    note: "",
  },
  {
    id: 3,
    curriculum: "CNTT",
    curriculumName: "Công nghệ thông tin",
    course: "CNTT_K19",
    phase: "Định kỳ 5 năm (2025)",
    reportDate: "2025-05-30",
    signer: "TS. Phạm Văn X",
    note: "",
  },
  {
    id: 4,
    curriculum: "QLDV",
    curriculumName: "Quản lý văn hóa",
    course: "QLDV_K22",
    phase: "2022-2026",
    reportDate: "2025-08-01",
    signer: "ThS. Trần Thị W",
    note: "",
  },
];
