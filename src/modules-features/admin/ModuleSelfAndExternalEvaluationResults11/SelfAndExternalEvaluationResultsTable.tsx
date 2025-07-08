import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ISelfAndExternalEvaluationResultInfoViewModel } from "./interfaces/ISelfAndExternalEvaluationResultInfoViewModel";
import SelfAndExternalEvaluationResultsDeleteButton from "./SelfAndExternalEvaluationResultsDeleteButton";
import SelfAndExternalEvaluationResultsDeleteListButton from "./SelfAndExternalEvaluationResultsDeleteListButton";
import SelfAndExternalEvaluationResultsCreateButton from "./SelfAndExternalEvaluationResultsCreateButton";
import SelfAndExternalEvaluationResultsUpdateButton from "./SelfAndExternalEvaluationResultsUpdateButton";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";

export default function SelfAndExternalEvaluationResultsTable() {
  const columns = useMemo<MRT_ColumnDef<ISelfAndExternalEvaluationResultInfoViewModel>[]>(
    () => [
      { header: "Chương trình đào tạo", accessorKey: "programName" },
      { header: "Giai đoạn đánh giá", accessorKey: "evaluationPeriod" },
      { header: "Tên tổ chức kiểm định", accessorKey: "organizationName" },
      {
        header: "Ngày tổng hợp",
        accessorKey: "summaryDate",
        Cell: ({ cell }) => {
          return utils_date_dateToDDMMYYYString(cell.getValue<Date>());
        },
      },
      { header: "Người ký", accessorKey: "signer" },
      {
        header: "File tổng hợp kết quả tự đánh giá và đánh giá ngoài",
        accessorKey: "filePath",
        size: 200,
        accessorFn: (row) => (
          <MyCenterFull>
            <MyButtonViewPDF />
          </MyCenterFull>
        ),
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách Bảng Tổng hợp Kết quả Tự đánh giá và Đánh giá ngoài (Biểu 11)">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData || []}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <SelfAndExternalEvaluationResultsCreateButton />
              <MyButton crudType="import" />
              <MyButton crudType="export" />
              <SelfAndExternalEvaluationResultsDeleteListButton
                values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <SelfAndExternalEvaluationResultsUpdateButton values={row.original} />
              <SelfAndExternalEvaluationResultsDeleteButton
                id={row.original.id || 0}
                code={row.original.id?.toString() || ""}
              />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

const mockData: ISelfAndExternalEvaluationResultInfoViewModel[] = [
  {
    id: 1,
    programName: "Kỹ thuật phần mềm",
    evaluationPeriod: "2020-2024",
    organizationName: "Trung tâm KĐCLGD - ĐHQGHN",
    summaryDate: new Date("2025-08-01"),
    signer: "Chủ tịch Hội đồng KĐCLGD",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report001.pdf",
    },
  },
  {
    id: 2,
    programName: "Kế toán",
    evaluationPeriod: "2021-2025",
    organizationName: "Trung tâm KĐCLGD - ĐHQGTPHCM",
    summaryDate: new Date("2025-08-05"),
    signer: "Giám đốc Trung tâm KĐCLGD",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report002.pdf",
    },
  },
  {
    id: 3,
    programName: "Công nghệ thông tin",
    evaluationPeriod: "Định kỳ 5 năm (2025)",
    organizationName: "Trung tâm KĐCLGD - ĐH Đà Nẵng",
    summaryDate: new Date("2025-08-10"),
    signer: "Chủ tịch Hội đồng KĐCLGD",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report003.pdf",
    },
  },
];
