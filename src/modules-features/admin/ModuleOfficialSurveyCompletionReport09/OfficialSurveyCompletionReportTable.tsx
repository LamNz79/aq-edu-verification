import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IOfficialSurveyCompletionReportInfoViewModel } from "./interfaces/IOfficialSurveyCompletionReportInfoViewModel";
import OfficialSurveyCompletionReportCreateButton from "./OfficialSurveyCompletionReportCreateButton";
import OfficialSurveyCompletionReportDeleteButton from "./OfficialSurveyCompletionReportDeleteButton";
import OfficialSurveyCompletionReportDeleteList from "./OfficialSurveyCompletionReportDeleteList";
import OfficialSurveyCompletionReportUpdateButton from "./OfficialSurveyCompletionReportUpdateButton";

export default function OfficialSurveyCompletionReportTable() {
  const columns = useMemo<MRT_ColumnDef<IOfficialSurveyCompletionReportInfoViewModel>[]>(
    () => [
      {
        header: "Chương trình đào tạo",
        accessorKey: "programName",
      },
      {
        header: "Giai đoạn đánh giá",
        accessorKey: "evaluationPeriod",
      },
      {
        header: "Ngày lập biên bản",
        accessorKey: "reportDate",
        Cell: ({ cell }) => {
          return utils_date_dateToDDMMYYYString(cell.getValue<Date>());
        },
      },
      {
        header: "Trưởng đoàn",
        accessorKey: "teamLeader",
      },
      {
        header: "Thư trưởng đơn vị",
        accessorKey: "unitHead",
      },
      {
        header: "File biên bản hoàn thành khảo sát chính thức",
        accessorKey: "filePath",
        size: 250,
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
    <MyFieldset title="Danh sách Biên bản Hoàn thành Đợt Khảo sát Chính thức CTĐT">
      <MyDataTable
        columns={columns}
        data={mockData || []}
        enableRowSelection
        renderTopToolbarCustomActions={({ table }) => (
          <MyCenterFull>
            <OfficialSurveyCompletionReportCreateButton />
            <MyButton crudType="import">Import</MyButton>
            <MyButton crudType="export">Export</MyButton>
            <OfficialSurveyCompletionReportDeleteList
              values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
            />
          </MyCenterFull>
        )}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <OfficialSurveyCompletionReportUpdateButton values={row.original} />
              <OfficialSurveyCompletionReportDeleteButton
                id={row.original.id || 0}
                code={row.original.programName}
              />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

export const mockData: IOfficialSurveyCompletionReportInfoViewModel[] = [
  {
    id: 1,
    programName: "Kỹ thuật phần mềm",
    evaluationPeriod: "2020-2024",
    reportDate: new Date("2025-07-15"),
    teamLeader: "GS.TS. Nguyễn B",
    unitHead: "PGS. TS. Trần C",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report001.pdf",
    },
  },
  {
    id: 2,
    programName: "Kế toán",
    evaluationPeriod: "2021-2025",
    reportDate: new Date("2025-07-20"),
    teamLeader: "TS. Lê D",
    unitHead: "ThS. Phạm E",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report002.pdf",
    },
  },
  {
    id: 3,
    programName: "Công nghệ thông tin",
    evaluationPeriod: "Định kỳ 5 năm (2025)",
    reportDate: new Date("2025-07-25"),
    teamLeader: "PGS.TS. Hoàng G",
    unitHead: "TS. Mai H",
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "report003.pdf",
    },
  },
];
