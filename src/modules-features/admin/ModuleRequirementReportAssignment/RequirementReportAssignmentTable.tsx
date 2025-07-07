import {
  MyFieldset,
  MyDataTable,
  MyButton,
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyCenterFull,
  MySelect,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import CriteriaReportAssignmentDelete from "../ModuleCriteriaReportAssignment/CriteriaReportAssignmentDelete";
import CriteriaReportAssignmentDeleteList from "../ModuleCriteriaReportAssignment/CriteriaReportAssignmentDeleteList";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "@mantine/form";
import { Center } from "@mantine/core";

export default function RequirementReportAssignmentTable() {
  const [managerCode, setManagerCode] = useState<string>("");

  const form = useForm<any>({
    initialValues: {},
  });

  const query = useQuery<I_RequirementAssignmentTable[]>({
    queryKey: ["RequirementReportQuery"],
    queryFn: async () => {
      return requirementAssignmentMockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_RequirementAssignmentTable>[]>(
    () => [
      { header: "Mã CTĐT", accessorKey: "curriculum" },
      { header: "Mã Khóa", accessorKey: "course" },
      { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
      { header: "Mã Tiêu chí", accessorKey: "criterionCode" },
      { header: "Mã yêu cầu", accessorKey: "requirementCode" },
      { header: "Tên yêu cầu", accessorKey: "requirementName" },
      {
        header: "Mã Người phụ trách",
        accessorKey: "managerCode",
        accessorFn: (row) => (
          <Center>
            <MySelect
              data={managerCodeList}
              defaultValue={row.managerCode}
              searchable
            />
          </Center>
        ),
      },
      { header: "Họ tên", accessorKey: "managerName" },
      { header: "Đơn vị", accessorKey: "department" },
      { header: "Email", accessorKey: "email" },
      { header: "Số điện thoại", accessorKey: "phone" },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "curriculum", header: "Mã CTĐT" },
      { fieldName: "course", header: "Mã Khóa" },
      { fieldName: "standardCode", header: "Mã Tiêu chuẩn" },
      { fieldName: "criterionCode", header: "Mã Tiêu chí" },
      { fieldName: "requirementCode", header: "Mã yêu cầu" },
      { fieldName: "requirementName", header: "Tên yêu cầu" },
      { fieldName: "managerCode", header: "Mã Người phụ trách" },
      { fieldName: "managerName", header: "Họ tên" },
      { fieldName: "department", header: "Đơn vị" },
      { fieldName: "email", header: "Email" },
      { fieldName: "phone", header: "Số điện thoại" },
    ],
  };

  return (
    <MyFieldset title={"Danh sách"}>
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
            <MyButton crudType="save" />
            <AQButtonCreateByImportFile onSubmit={() => { }} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSach"}
              data={query.data || []}
              exportConfig={exportConfig}
            />
            <CriteriaReportAssignmentDeleteList
              values={table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)}
            />
          </>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <CriteriaReportAssignmentDelete
              id={row.original.id}
              course={row.original.course}
              criterionCode={row.original.criterionCode}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

export interface I_RequirementAssignmentTable {
  id: number; // ID
  curriculum: string; // Mã CTĐT
  course: string; // Mã Khóa
  standardCode: string; // Mã Tiêu chuẩn
  criterionCode: string; // Mã Tiêu chí
  requirementCode: string; // Mã yêu cầu
  requirementName: string; // Tên yêu cầu
  managerCode: string; // Mã Người phụ trách
  managerName: string; // Họ tên
  department: string; // Đơn vị
  email: string; // Email
  phone: string; // Số điện thoại
}

const requirementAssignmentMockData: I_RequirementAssignmentTable[] = [
  {
    id: 1,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    requirementCode: "YCCB_01",
    requirementName: "Xây dựng và ban hành quy chế đào tạo",
    managerCode: "NV001",
    managerName: "Nguyễn Văn A",
    department: "Phòng Đảm bảo Chất lượng",
    email: "vana@dh.edu.vn",
    phone: "0901234567",
  },
  {
    id: 2,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    requirementCode: "YCCB_02",
    requirementName: "Phổ biến quy chế đào tạo đến người học và giảng viên",
    managerCode: "NV001",
    managerName: "Nguyễn Văn A",
    department: "Phòng Đảm bảo Chất lượng",
    email: "vana@dh.edu.vn",
    phone: "0901234567",
  },
  {
    id: 3,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_01",
    criterionCode: "TC_0101",
    requirementCode: "YCMD_01",
    requirementName: "Xây dựng mục tiêu và chuẩn đầu ra",
    managerCode: "NV002",
    managerName: "Lê Thị B",
    department: "Khoa Khoa học Máy tính",
    email: "lethib@dh.edu.vn",
    phone: "0902345678",
  },
  {
    id: 4,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_01",
    criterionCode: "TC_0101",
    requirementCode: "YCNL_01",
    requirementName: "Công khai mục tiêu và chuẩn đầu ra trên các phương tiện",
    managerCode: "",
    managerName: "",
    department: "",
    email: "",
    phone: "",
  },
  {
    id: 5,
    curriculum: "KTPM",
    course: "KTPM_K21",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    requirementCode: "YCCB_01",
    requirementName: "Xây dựng và ban hành quy chế đào tạo",
    managerCode: "",
    managerName: "",
    department: "",
    email: "",
    phone: "",
  },
];

const managerCodeList = ["NV001", "NV002", "NV003", "NV004"];
