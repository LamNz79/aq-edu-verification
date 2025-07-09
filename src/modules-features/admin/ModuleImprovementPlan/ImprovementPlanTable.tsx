import { MyCenterFull, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import ExternalEvaluationResultDetailLayout from "./ExternalEvaluationResultDetail/ExternalEvaluationResultDetailLayout";
import ImprovementAssignmentUpdateButton from "./ImprovementPlanUpdateTable";
import { ICriteriaInfoViewModel } from "./interfaces/ICriteriaInfoViewModel";

export default function ImprovementPlanTable() {
  const columns = useMemo<MRT_ColumnDef<ICriteriaInfoViewModel>[]>(
    () => [
      { header: "Chương trình đào tạo", accessorKey: "programName" },
      { header: "Giai đoạn", accessorKey: "evaluationPeriod" },
      { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
      { header: "Mã Tiêu chí", accessorKey: "criteriaCode" },
      { header: "Tên Tiêu chí", accessorKey: "criteriaName" },
      { header: "Kết quả đánh giá ngoài", accessorKey: "externalResult" },
      {
        header: "Nội dung đánh giá ngoài",
        accessorKey: "externalDetail",
        Cell: ({ cell }) => <ExternalEvaluationResultDetailLayout />,
      },
      {
        header: "Ngày báo cáo giữa kỳ",
        accessorKey: "midtermReportDate",
        Cell: ({ cell }) => {
          return utils_date_dateToDDMMYYYString(cell.getValue<Date>());
        },
      },
      {
        header: "Ngày hoàn thành báo cáo giữa kỳ",
        accessorKey: "midtermReportCompleteDate",
        Cell: ({ cell }) => {
          return utils_date_dateToDDMMYYYString(cell.getValue<Date>());
        },
      },
      { header: "Mã nhân sự phụ trách", accessorKey: "staffCode" },
      { header: "Họ tên", accessorKey: "staffName" },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách tiêu chí">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData || []}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <ImprovementAssignmentUpdateButton values={row.original} />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

const mockData: ICriteriaInfoViewModel[] = [
  {
    id: 1,
    programName: "Kỹ thuật phần mềm",
    evaluationPeriod: "2020-2024",
    standardCode: "TC_03",
    criteriaCode: "TC_03.02",
    criteriaName: "Đảm bảo chất lượng đội ngũ giảng viên",
    externalResult: "Không đạt",
    externalDetail: "#", // Link chi tiết
    midtermReportDate: new Date("2025-10-15"),
    midtermReportCompleteDate: new Date("2025-10-10"),
    staffCode: "NV005",
    staffName: "Phạm Văn F",
  },
  {
    id: 2,
    programName: "Kế toán",
    evaluationPeriod: "2021-2025",
    standardCode: "TC_02",
    criteriaCode: "TC_02.01",
    criteriaName: "Cấu trúc chương trình đào tạo",
    externalResult: "Không đạt",
    externalDetail: "#",
    midtermReportDate: new Date("2025-09-01"),
    midtermReportCompleteDate: new Date("2025-08-28"),
    staffCode: "NV008",
    staffName: "Lê Thị H",
  },
  {
    id: 3,
    programName: "Công nghệ thông tin",
    evaluationPeriod: "Định kỳ 5 năm (2025)",
    standardCode: "TC_04",
    criteriaCode: "TC_04.03",
    criteriaName: "Hoạt động NCKH của người học",
    externalResult: "Không đạt",
    externalDetail: "#",
    midtermReportDate: undefined,
    midtermReportCompleteDate: undefined,
    staffCode: "NV010",
    staffName: "Trần Văn K",
  },
  {
    id: 4,
    programName: "Kỹ thuật phần mềm",
    evaluationPeriod: "2020-2024",
    standardCode: "TC_01",
    criteriaCode: "TC_01.01",
    criteriaName: "Mục tiêu và chuẩn đầu ra",
    externalResult: "Đạt (có khuyến nghị)",
    externalDetail: "#",
    midtermReportDate: undefined,
    midtermReportCompleteDate: undefined,
    staffCode: "NV005",
    staffName: "Phạm Văn F",
  },
];
