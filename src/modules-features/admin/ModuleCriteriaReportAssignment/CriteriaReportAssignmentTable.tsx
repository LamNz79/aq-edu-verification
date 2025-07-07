import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButton,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MySelect,
} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Center } from "@mantine/core";
import CriteriaReportAssignmentDelete from "./CriteriaReportAssignmentDelete";
import CriteriaReportAssignmentDeleteList from "./CriteriaReportAssignmentDeleteList";

export default function CriteriaReportAssignmentTable() {
  const form = useForm<any>({
    initialValues: {},
  });

  const query = useQuery<I_CriterionAssignmentTable[]>({
    queryKey: ["CriterionAssignmentQuery"],
    queryFn: async () => {
      return criterionAssignmentMockData ?? [];
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_CriterionAssignmentTable>[]>(
    () => [
      { header: "Mã CTĐT", accessorKey: "curriculum" },
      { header: "Mã Khóa", accessorKey: "course" },
      { header: "Mã Tiêu chuẩn", accessorKey: "standardCode" },
      { header: "Mã Tiêu chí", accessorKey: "criterionCode" },
      { header: "Tên Tiêu chí", accessorKey: "criterionName" },
      {
        header: "Mã Người phụ trách",
        id: "managerCode",
        accessorFn: (row) => (
          <Center>
            <MySelect
              data={
                query.data
                  ? query.data.map((item) => ({
                      value: item.managerCode,
                      label: item.managerName,
                    }))
                  : []
              }
              defaultValue={row.managerCode}
            />
          </Center>
        ),
      },
      { header: "Họ tên", accessorKey: "managerName" },
      { header: "Đơn vị", accessorKey: "department" },
      { header: "Email", accessorKey: "email" },
      { header: "Số điện thoại", accessorKey: "phone" },
    ],
    [query.data]
  );

  const exportConfig = {
    fields: [
      { fieldName: "curriculum", header: "Mã CTĐT" },
      { fieldName: "course", header: "Mã Khóa" },
      { fieldName: "standardCode", header: "Mã Tiêu chuẩn" },
      { fieldName: "criterionCode", header: "Mã Tiêu chí" },
      { fieldName: "criterionName", header: "Tên Tiêu chí" },
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
            <AQButtonCreateByImportFile onSubmit={() => {}} form={form} />
            <AQButtonExportData
              isAllData={false}
              objectName={"DanhSachBaoCaoTuyDanhGia"}
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

export interface I_CriterionAssignmentTable {
  id: number;
  curriculum: string; // Mã CTĐT
  course: string; // Mã Khóa
  standardCode: string; // Mã Tiêu chuẩn
  criterionCode: string; // Mã Tiêu chí
  criterionName: string; // Tên Tiêu chí
  managerCode: string; // Mã Người phụ trách
  managerName: string; // Họ tên
  department: string; // Đơn vị
  email: string; // Email
  phone: string; // Số điện thoại
}

const criterionAssignmentMockData: I_CriterionAssignmentTable[] = [
  {
    id: 1,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    criterionName:
      "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
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
    standardCode: "TC_01",
    criterionCode: "TC_0101",
    criterionName:
      "Đảm bảo tính công khai, minh bạch của mục tiêu và chuẩn đầu ra",
    managerCode: "NV002",
    managerName: "Lê Thị B",
    department: "Khoa Khoa học Máy tính",
    email: "lethib@dh.edu.vn",
    phone: "0902345678",
  },
  {
    id: 3,
    curriculum: "KTPM",
    course: "KTPM_K21",
    standardCode: "TC_05",
    criterionCode: "TC_05.02",
    criterionName:
      "Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan",
    managerCode: "NV003",
    managerName: "Trần Văn C",
    department: "Phòng Tổ chức Cán bộ",
    email: "tranc@dh.edu.vn",
    phone: "0903456789",
  },
  {
    id: 4,
    curriculum: "KTPM",
    course: "KTPM_K20",
    standardCode: "TC_03",
    criterionCode: "TC_03.02",
    criterionName:
      "Đảm bảo chất lượng đội ngũ giảng viên, đáp ứng yêu cầu của chương trình đào tạo",
    managerCode: "NV004",
    managerName: "Phạm Thị D",
    department: "Phòng Khoa học Công nghệ",
    email: "phamd@dh.edu.vn",
    phone: "0904567890",
  },
];
