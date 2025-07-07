"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButtonViewPDF,
  MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ITabPlaceToUseInfoViewModel } from "../../interfaces";
import { mockDataPlaceToUseTab } from "../../mockData";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";

export default function PlaceToUseRead() {
  const query = useQuery<ITabPlaceToUseInfoViewModel[]>({
    queryKey: ["PlaceToUseRead"],
    queryFn: async () => mockDataPlaceToUseTab,
  });

  const columns = useMemo<MRT_ColumnDef<ITabPlaceToUseInfoViewModel>[]>(
    () => [
      {
        header: "Mã kế hoạch TDG",
        accessorKey: "maKeHoachTdg",
      },
      {
        header: "Mã CTĐT",
        accessorKey: "maCtdt",
      },
      {
        header: "Khóa",
        accessorKey: "khoa",
      },
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "maTieuChuan",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "maTieuChi",
      },
      {
        header: "Mã minh chứng",
        accessorKey: "maMinhChung",
      },
      {
        header: "ID file (Hệ thống)",
        accessorKey: "idFileHeThong",
      },
      {
        header: "Tên file hiển thị",
        accessorKey: "tenFileHienThi",
      },
      {
        header: "File đính kèm",
        accessorKey: "fileDinhKem",
        accessorFn: (row) => <MyButtonViewPDF />,
      },
      {
        header: "Link liên kết",
        accessorKey: "linkLienKet",
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "soNgayBanHanh",
      },
      {
        header: "Đơn vị ban hành/ cấp",
        accessorKey: "donViBanHanhCap",
      },
      {
        header: "Hiệu lực từ ngày",
        accessorKey: "hieuLucTuNgay",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
      {
        header: "Hiệu lực đến ngày",
        accessorKey: "hieuLucDenNgay",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
    ],
    []
  );

  return (
    <MyDataTable
      isError={query.isError}
      isLoading={query.isLoading}
      columns={columns}
      data={query.data || []}
    />
  );
}
