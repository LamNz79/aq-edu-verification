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



const mockNhanSuPhuTrach: ISelectOption[] = [
  {
    label: "Tô Ngọc Bảo",
    value: 1
  },
  {
    label: "Nguyễn Văn Bình",
    value: 2
  },
];

const mockData: Iraolvysdbf_ReadProps[] = [
  {
    maTieuChuan: "TC01",
    maTieuChi: "TC1.1",
    tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    maMocChuan: "M001",
    tenMocChuan: "Chuẩn đầu ra của CTDT được xây dựng. ra soát và điều chỉnh theo quy trình định trước, trong đó có sự tham gia của các BLQ",
    donViPhuTrach: "Phòng đào tạo",
    nhanSuPhuTrach: "Tô Ngọc Bảo",
  },
  {
    maTieuChuan: "TC01",
    maTieuChi: "TC1.2",
    tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    maMocChuan: "M002",
    tenMocChuan: "CDR của CTDT được phát triển rõ ràng, phù hợp với mục tiêu của CTDT, sứ mạng, tầm nhìn và chiến lược của CSDT",
    donViPhuTrach: "Phòng tổ chức",
    nhanSuPhuTrach: "Tô Ngọc Bảo",
  },
  {
    maTieuChuan: "TC01",
    maTieuChi: "TC1.3",
    tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng; phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    maMocChuan: "M003",
    tenMocChuan: "CDT của CTDT được phổ biến đến các BLQ; giảng viên và NH hiểu rõ về CDT của CTDT",
    donViPhuTrach: "Phòng tổ chức",
    nhanSuPhuTrach: "Tô Ngọc Bảo",
  },
];

export default function F_raolvysdbf_Read() {
  //===initiate===
  const [nsptEdited, nsptSetEdited] = useState<string | null>(null) // Nhân sự phụ trách
  //===pseudo data===


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
        },
      ],
      [nsptEdited, nhanSuPhuTrachQuery.data]
  );

  //===query stage condition===
  if (nhanSuPhuTrachQuery.isLoading) return "Đang tải dữ liệu...";
  if (nhanSuPhuTrachQuery.isError) return "Lỗi Tải dữ liệu!";



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