"use client";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyCheckbox,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import IProgramInfoViewModel from "./interfaces/IProgramInfoViewModel";
import ProgramDeleteListButton from "./ProgramDeleteListButton";
import ProgramDeleteButton from "./ProgramDeleteButton";
import ProgramUpdateButton from "./ProgramUpdateButton";
import { Button } from "@mantine/core";
import ProgramCreateButton from "./ProgramCreateButton";

export default function ProgramListTable() {
  const columns = useMemo<MRT_ColumnDef<IProgramInfoViewModel>[]>(
    () => [
      { header: "Mã CTĐT", accessorKey: "code" },
      { header: "Tên CTĐT", accessorKey: "name", size: 300 },
      { header: "Khoa/Viện quản lý", accessorKey: "managingFaculty" },
      { header: "Trình độ đào tạo", accessorKey: "educationLevel" },
      { header: "Loại hình đào tạo", accessorKey: "educationType" },
      {
        header: "Thời gian đào tạo chuẩn",
        accessorKey: "standardDuration",
        Cell: ({ cell }) => {
          return (cell.getValue() as number) + " năm";
        },
      },
      { header: "Năm bắt đầu tuyển sinh", accessorKey: "startYear" },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách chương trình đào tạo">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData || []}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <ProgramCreateButton />
              <MyButton crudType="create">Thêm phiên bản</MyButton>
              <MyButton crudType="import" />
              <MyButton crudType="export" />
              <ProgramDeleteListButton
                values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <ProgramUpdateButton values={row.original} />
              <ProgramDeleteButton id={row.original.id || 0} code={row.original.code} />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

const mockData: IProgramInfoViewModel[] = [
  {
    id: 1,
    code: "7480201",
    name: "Kỹ thuật Phần mềm",
    managingFaculty: "Khoa Công nghệ Thông tin",
    educationLevel: "Đại học",
    educationType: "Chính quy",
    standardDuration: 4,
    startYear: 2010,
  },
  {
    id: 2,
    code: "7510301H",
    name: "Quản trị Kinh doanh (Chương trình Chất lượng cao)",
    managingFaculty: "Viện Kinh tế và Quản lý",
    educationLevel: "Đại học",
    educationType: "Chính quy",
    standardDuration: 4,
    startYear: 2015,
  },
  {
    id: 3,
    code: "7480101C",
    name: "Khoa học Máy tính (Chương trình Tiên tiến)",
    managingFaculty: "Khoa Công nghệ Thông tin",
    educationLevel: "Đại học",
    educationType: "Chính quy",
    standardDuration: 4,
    startYear: 2012,
  },
  {
    id: 4,
    code: "6480201",
    name: "Kỹ thuật Điện tử (Thạc sĩ)",
    managingFaculty: "Khoa Điện Tử",
    educationLevel: "Thạc sĩ",
    educationType: "Chính quy",
    standardDuration: 2,
    startYear: 2018,
  },
  {
    id: 5,
    code: "7810103V",
    name: "Quản trị Dịch vụ Du lịch và Lữ hành (Từ xa)",
    managingFaculty: "Khoa Du lịch",
    educationLevel: "Đại học",
    educationType: "Từ xa",
    standardDuration: 4.5,
    startYear: 2020,
  },
];
