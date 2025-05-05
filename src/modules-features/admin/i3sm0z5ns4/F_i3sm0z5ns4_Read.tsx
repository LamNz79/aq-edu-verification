"use client";

import { MySelect, MyDataTable, MyFieldset, AQButtonExportData, MyButton } from "aq-fe-framework/components";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";

interface Ii3sm0z5ns4_ReadProps {
  maTieuChuan: string;
  maTieuChi: string;
  maMocChuan: string;
  tenMocChuan: string;
  ghiChu: string;
  donViPhuTrach: string;
  nhanSuPhuTrach: string;
}

interface ISelectOption {
  label: string;
  value: number
}

const mockDonViPhuTrach: ISelectOption[] = [
  {
    label: "Phòng đào tạo",
    value: 1
  },
  {
    label: "Phòng nhân sự",
    value: 2
  },
];

const mockNhanSuPhuTrach: ISelectOption[] = [
  {
    label: "Tô Ngọc Lâm",
    value: 1
  },
  {
    label: "Nguyễn Văn Bình",
    value: 2
  },
];

const mockData: Ii3sm0z5ns4_ReadProps[] = [
  {
    maTieuChuan: "TC02",
    maTieuChi: "TC2.1",
    maMocChuan: "M001",
    tenMocChuan: "Cấu trúc pla pla",
    ghiChu: "Ghi chú 1",
    donViPhuTrach: "Phòng đào tạo",
    nhanSuPhuTrach: "Tô Ngọc Lâm",
  },
];

export default function F_i3sm0z5ns4_Read() {
  //===initiate===
  const [dvptEdited, dvptSetEdited] = useState<string | null>(null) // Đơn vị phụ trách
  const [nsptEdited, nsptSetEdited] = useState<string | null>(null) // Nhân sự phụ trách
  //===pseudo data===
  const donViPhuTrachQuery = useQuery<ISelectOption[]>({
    queryKey: ["Fi3sm0z5ns4_DonViPhuTrach_Read"],
    queryFn: async () => mockDonViPhuTrach,
  });

  const nhanSuPhuTrachQuery = useQuery<ISelectOption[]>({
    queryKey: ["Fi3sm0z5ns4_NhanSuPhuTrach_Read"],
    queryFn: async () => mockNhanSuPhuTrach,
  });

  const mockDataQuery = useQuery<Ii3sm0z5ns4_ReadProps[]>({
    queryKey: ["Fi3sm0z5ns4_MockData_Read"],
    queryFn: async () => mockData,
  });

  //===function===
  const exportConfig = {
    fields: [
      { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
      { fieldName: "maTieuChi", header: "Mã tiêu chí" },
      { fieldName: "maMocChuan", header: "Mã mốc chuẩn" },
      { fieldName: "tenMocChuan", header: "Tên mốc chuẩn" },
      { fieldName: "ghiChu", header: "Ghi chú" },
      { fieldName: "donViPhuTrach", header: "Đơn vị phụ trách" },
      { fieldName: "nhanSuPhuTrach", header: "Nhân sự phụ trách" },
    ],
  };

  //===component===
  const danhSachBoTieuChuanColumns = useMemo<MRT_ColumnDef<Ii3sm0z5ns4_ReadProps>[]>(() => [
    { accessorKey: "maTieuChuan", header: "Mã tiêu chuẩn" },
    { accessorKey: "maTieuChi", header: "Mã tiêu chí" },
    { accessorKey: "maMocChuan", header: "Mã mốc chuẩn" },
    { accessorKey: "tenMocChuan", header: "Tên mốc chuẩn" },
    { accessorKey: "ghiChu", header: "Ghi chú" },
    {
      accessorKey: "donViPhuTrach",
      header: "Đơn vị phụ trách",
      Cell: ({ row }) => (
        <MySelect
          placeholder="Đơn vị phụ trách"
          value={dvptEdited ?? row.original.donViPhuTrach}
          data={donViPhuTrachQuery.data!.map(item => item.label)}
          onChange={dvptSetEdited}
        ></MySelect>
      ),
    },
    {
      accessorKey: "nhanSuPhuTrach",
      header: "Nhân sự phụ trách",
      Cell: ({ row }) => (
        <MySelect
          placeholder="Nhân sự phụ trách"
          value={nsptEdited ?? row.original.nhanSuPhuTrach}
          data={nhanSuPhuTrachQuery.data!.map((item) => item.label)}
          onChange={nsptSetEdited}
        ></MySelect>
      ),
    },
  ],
    [dvptEdited, nsptEdited, donViPhuTrachQuery.data, nhanSuPhuTrachQuery.data]
  );

  //===query stage condition===
  if (nhanSuPhuTrachQuery.isLoading) return "Đang tải dữ liệu...";
  if (nhanSuPhuTrachQuery.isError) return "Lỗi Tải dữ liệu!";

  if (donViPhuTrachQuery.isLoading) return "Đang tải dữ liệu...";
  if (donViPhuTrachQuery.isError) return "Lỗi Tải dữ liệu!";

  if (mockDataQuery.isLoading) return "Đang tải dữ liệu...";
  if (mockDataQuery.isError) return "Lỗi Tải dữ liệu!";

  return (
    <>
      <MyFieldset title="Danh sách mốc chuẩn">
        <MyDataTable
          columns={danhSachBoTieuChuanColumns}
          data={mockDataQuery.data!}
          enableRowSelection={true}
          renderTopToolbarCustomActions={() => (
            <>
              <MyButton crudType="default" color="green">
                Lưu
              </MyButton>
              <AQButtonExportData
                isAllData={true}
                data={mockDataQuery.data!}
                exportConfig={exportConfig}
                objectName="danhSachBoTieuChuan"
              />
              <MyButton crudType="delete">Xóa</MyButton>
            </>
          )}
        />
      </MyFieldset>
    </>
  );
}
