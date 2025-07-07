import { Center } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
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
import ProgramEvalComments13Update from "./ProgramEvalComments13Update";
import ProgramEvalComments13DeleteList from "./ProgramEvalComments13DeleteList";
import ProgramEvalComments13Delete from "./ProgramEvalComments13Delete";
import ProgramEvalComments13Create from "./ProgramEvalComments13Create";

export default function ProgramEvalComments13Table() {
  const form = useForm<any>({
    initialValues: {},
  });

  const query = useQuery<I_EvaluationCommentTable[]>({
    queryKey: ["EvaluationCommentQuery"],
    queryFn: async () => {
      return evaluationCommentMockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_EvaluationCommentTable>[]>(
    () => [
      { header: "Tên Chương trình đào tạo", accessorKey: "curriculumName" },
      { header: "Giai đoạn đánh giá", accessorKey: "phase" },
      {
        header: "Ngày nhận xét",
        accessorFn: (row) =>
          row.commentDate
            ? utils_date_dateToDDMMYYYString(new Date(row.commentDate))
            : "",
        id: "commentDate",
      },
      { header: "Người nhận xét", accessorKey: "reviewer" },
      {
        header: "File nhận xét hồ sơ",
        accessorFn: (row) => (
          <Center>
            <MyButtonViewPDF />
          </Center>
        ),
        id: "file",
      },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "curriculumName", header: "Tên Chương trình đào tạo" },
      { fieldName: "phase", header: "Giai đoạn đánh giá" },
      { fieldName: "commentDate", header: "Ngày nhận xét" },
      { fieldName: "reviewer", header: "Người nhận xét" },
    ],
  };

  return (
    <MyFieldset
      title={"Danh sách nhận xét về hồ sơ thẩm định kết quả đánh giá"}
    >
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
            <ProgramEvalComments13Create />
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachNhanXetHoSoThamDinh"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <ProgramEvalComments13DeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <ProgramEvalComments13Update data={row.original} />
            <ProgramEvalComments13Delete
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

export interface I_EvaluationCommentTable {
  id: number; // id
  curriculumName: string; // Tên Chương trình đào tạo
  phase: string; // Giai đoạn đánh giá
  commentDate?: string; // Ngày nhận xét
  reviewer: string; // Người nhận xét
  note: string; // Ghi chú
}

const evaluationCommentMockData: I_EvaluationCommentTable[] = [
  {
    id: 1,
    curriculumName: "Kỹ thuật phần mềm",
    phase: "2020-2024",
    commentDate: "2025-07-15",
    reviewer: "TS. Phan Thị K",
    note: "",
  },
  {
    id: 2,
    curriculumName: "Kế toán",
    phase: "2021-2025",
    commentDate: "2025-07-20",
    reviewer: "GS.TS. Trần V",
    note: "",
  },
  {
    id: 3,
    curriculumName: "Công nghệ thông tin",
    phase: "Định kỳ 5 năm (2025)",
    commentDate: "2025-07-25",
    reviewer: "Hội đồng Khoa học Trường",
    note: "",
  },
];
