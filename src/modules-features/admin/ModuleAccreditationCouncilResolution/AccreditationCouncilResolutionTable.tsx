import { Center } from "@mantine/core";
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
import AccreditationCouncilResolutionDelete from "./AccreditationCouncilResolutionDelete";
import AccreditationCouncilResolutionDeleteList from "./AccreditationCouncilResolutionDeleteList";
import AccreditationCouncilResolutionCreate from "./AccreditationCouncilResolutionCreate";
import AccreditationCouncilResolutionUpdate from "./AccreditationCouncilResolutionUpdate";
import { useForm } from "@mantine/form";

export default function AccreditationCouncilResolutionTable() {
  const form = useForm<any>({
    initialValues: {},
  });

  const query = useQuery<I_ResolutionTable[]>({
    queryKey: ["ResolutionQuery"],
    queryFn: async () => {
      return resolutionMockData ?? [];
    },
  });
  
  const columns = useMemo<MRT_ColumnDef<I_ResolutionTable>[]>(
    () => [
      { header: "Số nghị quyết", accessorKey: "resolutionNumber" },
      {
        header: "Ngày ban hành",
        accessorFn: (row) =>
          row.issueDate
            ? utils_date_dateToDDMMYYYString(new Date(row.issueDate))
            : "",
        id: "issueDate",
      },
      { header: "Tên nghị quyết", accessorKey: "resolutionName" },
      { header: "Chương trình đào tạo", accessorKey: "curriculumName" },
      { header: "Tổ chức kiểm định", accessorKey: "assessmentOrg" },
      { header: "Giai đoạn", accessorKey: "phase" },
      { header: "Người ký", accessorKey: "signer" },
      {
        header: "File nghị quyết",
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
      { fieldName: "resolutionNumber", header: "Số nghị quyết" },
      { fieldName: "issueDate", header: "Ngày ban hành" },
      { fieldName: "resolutionName", header: "Tên nghị quyết" },
      { fieldName: "curriculumName", header: "Chương trình đào tạo" },
      { fieldName: "assessmentOrg", header: "Tổ chức kiểm định" },
      { fieldName: "phase", header: "Giai đoạn" },
      { fieldName: "signer", header: "Người ký" },
      { fieldName: "note", header: "Ghi chú" },
    ],
  };

  return (
    <MyFieldset title={"Danh sách nghị quyết của hội đồng"}>
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
            <AccreditationCouncilResolutionCreate />
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachghiQuyetHoiDong"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <AccreditationCouncilResolutionDeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <AccreditationCouncilResolutionUpdate data={row.original} />
            <AccreditationCouncilResolutionDelete
              id={row.original.id}
              resolutionNumber={row.original.resolutionNumber}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

export interface I_ResolutionTable {
  id: number; // ID
  resolutionNumber: string; // Số nghị quyết
  resolutionName: string; // Tên nghị quyết
  curriculumName: string; // Chương trình đào tạo
  issueDate?: string; // Ngày ban hành
  assessmentOrg: string; // Tổ chức kiểm định
  phase: string; // Giai đoạn
  signer: string; // Người ký
  note: string; // Ghi chú
}

const resolutionMockData: I_ResolutionTable[] = [
  {
    id: 1,
    resolutionNumber: "32/NQ-HĐKDCLGD",
    resolutionName:
      "Về việc công nhận đạt chuẩn CLCTĐT ngành Kỹ thuật phần mềm",
    curriculumName: "Kỹ thuật phần mềm",
    issueDate: "2025-06-10",
    assessmentOrg: "Trung tâm KĐCLGD - ĐHQGHN",
    phase: "2020-2024",
    signer: "Nguyễn Văn B",
    note: "",
  },
  {
    id: 2,
    resolutionNumber: "45/NQ-HĐKDCLGD",
    resolutionName: "Về việc công nhận đạt chuẩn CLCTĐT ngành Kế toán",
    curriculumName: "Kế toán",
    issueDate: "2025-07-15",
    assessmentOrg: "Trung tâm KĐCLGD - ĐHQGTPHCM",
    phase: "2021-2025",
    signer: "Nguyễn Văn B",
    note: "",
  },
  {
    id: 3,
    resolutionNumber: "18/NQ-HĐKDCLGD",
    resolutionName:
      "Về việc yêu cầu CTĐT Công nghệ thông tin thực hiện cải tiến chất lượng",
    curriculumName: "Công nghệ thông tin",
    issueDate: "2025-08-20",
    assessmentOrg: "Trung tâm KĐCLGD - ĐH Đà Nẵng",
    phase: "2021-2025",
    signer: "Nguyễn Văn B",
    note: "",
  },
];
