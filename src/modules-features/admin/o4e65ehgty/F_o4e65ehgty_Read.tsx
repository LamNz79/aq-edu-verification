"use client";

import { useQuery } from "@tanstack/react-query";
import {
  AQButtonExportData,
  MyButton,
  MyDataTable,
  MyFieldset,
  MyCheckbox,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_o4e65ehgty_Update from "./F_o4e65ehgty_Update";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";
import { Center } from "@mantine/core";

interface I_o4e65ehgty_Read {
  id?: string; // ID
  maTieuChuan?: string; // Mã minh chứng
  maTieuChi?: string; // Mã tiêu chí
  maYeuCauMocChuan?: string; // Mã yêu cầu mốc chuẩn
  tenYeuCau?: string; // Tên yêu cầu mốc chuẩn
  minhChungGoiY?: string; // Minh chứng gợi ý
  nguoiPhuTrach?: string; // Người phụ trách
  ngayBatDau?: string; // Ngày bắt đầu
  ngayKetThuc?: string; // Ngày kết thúc
  daCapNhat?: boolean; // Đã cập nhật
  nguoiCapNhat?: string; // Người cập nhật
  ngayCapNhat?: string; // Ngày cập nhật
}

export default function F_o4e65ehgty_Read() {
  const Q_data = useQuery({
    queryKey: ["o4e65ehgty_Read"],
    queryFn: () => {
      return MockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_o4e65ehgty_Read>[]>(
    () => [
      { header: "Mã tiêu chuẩn", accessorKey: "maTieuChuan" },
      { header: "Mã tiêu chí", accessorKey: "maTieuChi" },
      { header: "Mã yêu cầu/ mốc chuẩn", accessorKey: "maYeuCauMocChuan" },
      { header: "Tên yêu cầu/ mốc chuẩn", accessorKey: "tenYeuCau", size: 300 },
      { header: "Minh chứng gợi ý", accessorKey: "minhChungGoiY", size: 200 },
      { header: "Người phụ trách", accessorKey: "nguoiPhuTrach" },
      {
        header: "Ngày bắt đầu",
        accessorFn: (row) =>
          row.ngayBatDau &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayBatDau)),
      },
      {
        header: "Ngày kết thúc",
        accessorFn: (row) =>
          row.ngayKetThuc &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayKetThuc)),
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
        accessorFn: (row) => {
          if (row.ngayKetThuc && new Date(row.ngayKetThuc) > new Date()) {
            return "Còn hạn";
          } else {
            return "Hết hạn";
          }
        },
      },
      {
        header: "Đã cập nhật",
        accessorKey: "daCapNhat",
        size: 140,
        accessorFn: (row) => {
          return (
            <Center>
              <MyCheckbox checked={row.daCapNhat} readOnly />
            </Center>
          );
        },
      },
      {
        header: "Thao tác",
        accessorKey: "thaoTac",
        accessorFn: (row) => <F_o4e65ehgty_Update />,
      },
    ],
    []
  );

  const exportConfig = {
    fields: [
      { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
      { fieldName: "maTieuChi", header: "Mã tiêu chí" },
      { fieldName: "maYeuCauMocChuan", header: "Mã yêu cầu/ mốc chuẩn" },
      { fieldName: "tenYeuCau", header: "Tên yêu cầu/ mốc chuẩn" },
      { fieldName: "minhChungGoiY", header: "Minh chứng gợi ý" },
      { fieldName: "nguoiPhuTrach", header: "Người phụ trách" },
      { fieldName: "ngayBatDau", header: "Ngày bắt đầu" },
      { fieldName: "ngayKetThuc", header: "Ngày kết thúc" },
      { fieldName: "trangThai", header: "Trạng thái" },
      { fieldName: "daCapNhat", header: "Đã cập nhật" },
      { fieldName: "nguoiCapNhat", header: "Người cập nhật" },
      { fieldName: "ngayCapNhat", header: "Ngày cập nhật" },
    ],
  };

  if (Q_data.isLoading) return <div>Loading...</div>;
  if (Q_data.isError) return <div>Error: {Q_data.error.message}</div>;

  return (
    <MyFieldset title="Danh sách nội dung báo cáo cần cập nhật">
      <MyDataTable
        columns={columns}
        enableRowSelection
        rowActionSize={20}
        data={Q_data.data ?? []}
        initialState={{ columnPinning: { right: ["daCapNhat", "thaoTac"] } }}
        renderTopToolbarCustomActions={() => (
          <>
            <AQButtonExportData
              isAllData={true}
              data={Q_data.data || []}
              exportConfig={exportConfig}
              objectName="dsNoiDungBaoCaoCanCapNhat"
            />
            <MyButton crudType="delete">Xóa</MyButton>
          </>
        )}
      />
    </MyFieldset>
  );
}

const MockData: I_o4e65ehgty_Read[] = [
  {
    maTieuChuan: "TC01",
    maTieuChi: "TC1.1",
    maYeuCauMocChuan: "M001",
    tenYeuCau: "Chuẩn đầu ra của CTDT được xây dựng, rà soát và điều chỉnh theo quy định trước, trong đó có sự tham gia của các BLQ",
    minhChungGoiY: "Kế hoạch thực tập toàn khóa",
    nguoiPhuTrach: "Tô Ngọc Bảo",
    ngayBatDau: "2025-01-01",
    ngayKetThuc: "2025-04-30",
    daCapNhat: false,
    nguoiCapNhat: "",
    ngayCapNhat: "",
  },
  {
    maTieuChuan: "TC02",
    maTieuChi: "TC1.2",
    maYeuCauMocChuan: "M002",
    tenYeuCau: "CDR của CTDT được phát triển rõ ràng, phù hợp với mục tiêu CTDT, sứ mạng, tầm nhìn và chiến lược của CSDT",
    minhChungGoiY: "Kế hoạch thực tập toàn khóa",
    nguoiPhuTrach: "Tô Ngọc Bảo",
    ngayBatDau: "2025-02-01",
    ngayKetThuc: "2025-03-30",
    daCapNhat: true,
    nguoiCapNhat: "Trần Thị B",
    ngayCapNhat: "2025-12-15",
  },
  {
    maTieuChuan: "TC03",
    maTieuChi: "TC1.3",
    maYeuCauMocChuan: "M003",
    tenYeuCau: "CDT của CTDT được phổ biến đến các BLQ, giảng viên và NH hiểu rõ về CDT của CTDT",
    minhChungGoiY: "Kế hoạch thực tập toàn khóa",
    nguoiPhuTrach: "Tô Ngọc Bảo",
    ngayBatDau: "2025-03-01",
    ngayKetThuc: "2025-05-31",
    daCapNhat: false,
    nguoiCapNhat: "",
    ngayCapNhat: "",
  },
];
