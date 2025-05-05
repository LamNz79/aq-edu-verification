"use client";
import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButton,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";
import F_vrdjnzpfmc_CreateChiTietKy from "./F_vrdjnzpfmc_CreateChiTietKy";
import F_vrdjnzpfmc_UpdateChiTietKy from "./F_vrdjnzpfmc_UpdateChiTietKy";
import F_vrdjnzpfmc_DeleteChiTietKy from "./F_vrdjnzpfmc_DeleteChiTietKy";
import { useForm } from "@mantine/form";
import F_vrdjnzpfmc_CreateChuKy from "./F_vrdjnzpfmc_CreateChuKy";
export interface F_vrdjnzpfmc {
  id?: number; // STT
  maChuKy?: string; // Mã chủ kỳ
  maKy?: string; // Mã kỳ
  tenKy?: string; // Tên kỳ
  ngayBatDauCapNhat?: Date; // Ngày bắt đầu cập nhật
  ngayKetThucCapNhat?: Date; // Ngày kết thúc cập nhật
  ngayBatDauTongHop?: Date; // Ngày bắt đầu tổng hợp
  ngayKetThucTongHop?: Date; // Ngày kết thúc tổng hợp
  ghiChu?: string; // Ghi chú
}

const mockData: F_vrdjnzpfmc[] = [
  {
    id: 1,
    maChuKy: "2023-2028",
    maKy: "2024.01",
    tenKy: "Kỳ 1 năm 2024",
    ngayBatDauCapNhat: new Date("2024-01-01"),
    ngayKetThucCapNhat: new Date("2024-06-30"),
    ngayBatDauTongHop: new Date("2024-01-01"),
    ngayKetThucTongHop: new Date("2024-06-30"),
    ghiChu: "Ghi chú 1",
  },
  {
    id: 2,
    maChuKy: "2023-2028",
    maKy: "2024.02",
    tenKy: "Kỳ 2 năm 2024",
    ngayBatDauCapNhat: new Date("2024-07-01"),
    ngayKetThucCapNhat: new Date("2024-12-31"),
    ngayBatDauTongHop: new Date("2024-07-01"),
    ngayKetThucTongHop: new Date("2024-12-31"),
    ghiChu: "Ghi chú 2",
  },
];
export default function F_vrdjnzpfmc_Read() {
  const [importData, setImportData] = useState(false);
  const form_multiple = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });
  const query = useQuery<F_vrdjnzpfmc[]>({
    queryKey: ["F_vrdjnzpfmc_Read"],
    queryFn: async () => mockData,
  });
  const columns = useMemo<MRT_ColumnDef<F_vrdjnzpfmc>[]>(
    () => [
      {
        header: "Mã chu kỳ",
        accessorKey: "maChuKy",
      },
      {
        header: "Mã kỳ",
        accessorKey: "maKy",
      },
      {
        header: "Tên kỳ",
        accessorKey: "tenKy",
      },
      {
        header: "Ngày bắt đầu",
        accessorFn(originalRow) {
          return utils_date_dateToDDMMYYYString(
            new Date(originalRow.ngayBatDauCapNhat!)
          );
        },
      },
      {
        header: "Ngày kết thúc",
        accessorFn(originalRow) {
          return utils_date_dateToDDMMYYYString(
            new Date(originalRow.ngayKetThucCapNhat!)
          );
        },
      },
      {
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "maChuKy", header: "Mã chu kỳ" },
      { fieldName: "maKy", header: "Mã kỳ" },
      { fieldName: "tenKy", header: "Tên kỳ" },
      { fieldName: "ngayBatDauCapNhat", header: "Ngày bắt đầu" },
      { fieldName: "ngayKetThucCapNhat", header: "Ngày kết thúc" },
      { fieldName: "ghiChu", header: "Ghi chú" },
    ],
  };
  if (query.isLoading) return "Đang tải...";
  if (query.isError) return "Không có dữ liệu";

  return (
    <MyFieldset title="Danh sách kỳ cập nhật báo cáo">
      <MyDataTable
        enableRowSelection={true}
        columns={columns}
        enableRowNumbers={true}
        data={query.data!}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <F_vrdjnzpfmc_CreateChiTietKy />
              <AQButtonCreateByImportFile
                setImportedData={setImportData}
                form={form_multiple}
                onSubmit={() => {
                  console.log(form_multiple.values);
                }}
              />
              <AQButtonExportData
                isAllData={true}
                objectName="dsCapNhatKyBaoCao"
                data={query.data!}
                exportConfig={exportConfig}
              />
              <MyButton crudType="delete">Xóa</MyButton>
              <F_vrdjnzpfmc_CreateChuKy />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <F_vrdjnzpfmc_UpdateChiTietKy value={row.original} />
              <F_vrdjnzpfmc_DeleteChiTietKy
                id={row.original.maKy!}
                context={row.original.maKy!}
              />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}
