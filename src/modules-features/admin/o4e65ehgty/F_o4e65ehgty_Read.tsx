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
        accessorFn: (row) => {
          return <MyCheckbox checked={row.daCapNhat} readOnly />;
        },
      },
      { header: "Người cập nhật", accessorKey: "nguoiCapNhat" },
      {
        header: "Ngày cập nhật",
        accessorKey: "ngayCapNhat",
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
        renderRowActions={() => <F_o4e65ehgty_Update />}
      />
    </MyFieldset>
  );
}

const MockData: I_o4e65ehgty_Read[] = [
  {
    maTieuChuan: "TC001",
    maTieuChi: "TC001.1",
    maYeuCauMocChuan: "YCMC001",
    tenYeuCau: "Đánh giá chất lượng giảng dạy",
    minhChungGoiY: "Báo cáo kết quả khảo sát sinh viên",
    nguoiPhuTrach: "Nguyễn Văn A",
    ngayBatDau: "2025-01-01",
    ngayKetThuc: "2025-04-30",
    daCapNhat: false,
    nguoiCapNhat: "",
    ngayCapNhat: "",
  },
  {
    maTieuChuan: "TC002",
    maTieuChi: "TC002.1",
    maYeuCauMocChuan: "YCMC002",
    tenYeuCau: "Quản lý chương trình đào tạo",
    minhChungGoiY: "Hồ sơ chương trình đào tạo",
    nguoiPhuTrach: "Trần Thị B",
    ngayBatDau: "2025-02-01",
    ngayKetThuc: "2025-03-30",
    daCapNhat: true,
    nguoiCapNhat: "Trần Thị B",
    ngayCapNhat: "2025-12-15",
  },
  {
    maTieuChuan: "TC003",
    maTieuChi: "TC003.1",
    maYeuCauMocChuan: "YCMC003",
    tenYeuCau: "Đảm bảo chất lượng nghiên cứu khoa học",
    minhChungGoiY: "Danh sách công bố khoa học",
    nguoiPhuTrach: "Lê Văn C",
    ngayBatDau: "2025-03-01",
    ngayKetThuc: "2025-05-31",
    daCapNhat: false,
    nguoiCapNhat: "",
    ngayCapNhat: "",
  },
];
