"use client";

import { MySelect, MyDataTable, MyFieldset, AQButtonExportData, MyButton } from "aq-fe-framework/components";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";

interface Iraolvysdbf_ReadProps {
  maTieuChuan: string;
  maTieuChi: string;
  tenTieuChi: string; // New property
  maMocChuan: string;
  tenMocChuan: string;
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

const mockData: Iraolvysdbf_ReadProps[] = [
  {
    maTieuChuan: "TC02",
    maTieuChi: "TC2.1",
    tenTieuChi: "Tiêu chí chất lượng", // Added new field
    maMocChuan: "M001",
    tenMocChuan: "Cấu trúc pla pla",
    donViPhuTrach: "Phòng đào tạo",
    nhanSuPhuTrach: "Tô Ngọc Lâm",
  },
];

export default function F_raolvysdbf_Read() {
  //===initiate===
  const [dvptEdited, dvptSetEdited] = useState<string | null>(null) // Đơn vị phụ trách
  const [nsptEdited, nsptSetEdited] = useState<string | null>(null) // Nhân sự phụ trách
  //===pseudo data===
  const donViPhuTrachQuery = useQuery<ISelectOption[]>({
    queryKey: ["Fraolvysdbf_DonViPhuTrach_Read"],
    queryFn: async () => mockDonViPhuTrach,
  });

  const nhanSuPhuTrachQuery = useQuery<ISelectOption[]>({
    queryKey: ["Fraolvysdbf_NhanSuPhuTrach_Read"],
    queryFn: async () => mockNhanSuPhuTrach,
  });

  const mockDataQuery = useQuery<Iraolvysdbf_ReadProps[]>({
    queryKey: ["Fraolvysdbf_MockData_Read"],
    queryFn: async () => mockData,
  });

  //===function===
  const exportConfig = {
    fields: [
      { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
      { fieldName: "maTieuChi", header: "Mã tiêu chí" },
      { fieldName: "tenTieuChi", header: "Tên tiêu chí" },
      { fieldName: "maMocChuan", header: "Mã yêu cầu/mốc chuẩn" },
      { fieldName: "tenMocChuan", header: "Tên yêu cầu/mốc chuẩn" },
      { fieldName: "nhanSuPhuTrach", header: "Người phụ trách" },
      { fieldName: "donViPhuTrach", header: "Đơn vị phụ trách" },
    ],
  };

  //===component===
  const danhSachBoTieuChuanColumns = useMemo<MRT_ColumnDef<Iraolvysdbf_ReadProps>[]>(() => [
        { accessorKey: "maTieuChuan", header: "Mã tiêu chuẩn" },
        { accessorKey: "maTieuChi", header: "Mã tiêu chí" },
        { accessorKey: "tenTieuChi", header: "Tên tiêu chí" },
        { accessorKey: "maMocChuan", header: "Mã yêu cầu/mốc chuẩn" },
        { accessorKey: "tenMocChuan", header: "Tên yêu cầu/mốc chuẩn" },
        {
          accessorKey: "nhanSuPhuTrach",
          header: "Người phụ trách",
          Cell: ({ row }) => (
              <MySelect
                  placeholder="Người phụ trách"
                  value={nsptEdited ?? row.original.nhanSuPhuTrach}
                  data={nhanSuPhuTrachQuery.data!.map((item) => item.label)}
                  onChange={nsptSetEdited}
              ></MySelect>
          ),
        },
        {
          accessorKey: "donViPhuTrach",
          header: "Đơn vị phụ trách",
          // Cell: ({ row }) => (
          //     <MySelect
          //         placeholder="Đơn vị phụ trách"
          //         value={dvptEdited ?? row.original.donViPhuTrach}
          //         data={donViPhuTrachQuery.data!.map(item => item.label)}
          //         onChange={dvptSetEdited}
          //     ></MySelect>
          // ),
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
        <MyFieldset title="Phân công phụ trách yêu cầu/ mốc chuẩn">
          <MyDataTable
              columns={danhSachBoTieuChuanColumns}
              data={mockDataQuery.data!}
              enableRowSelection={true}
              renderTopToolbarCustomActions={() => (
                  <>
                    <MyButton crudType="default" color="green">
                      Lưu
                    </MyButton>
                    <MyButton crudType="import"></MyButton>
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