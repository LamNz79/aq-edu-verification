"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IRecordResultsCollectRealWorldEvidenceInfoViewModel } from "./interfaces";
import { mockDataRecordResultsCollectRealWorldEvidence } from "./mockData";
import RecordResultsCollectRealWorldEvidenceButtonModalUpdate from "./RecordResultsCollectRealWorldEvidenceButtonModalUpdate";

export default function RecordResultsCollectRealWorldEvidenceRead() {
  const query = useQuery<IRecordResultsCollectRealWorldEvidenceInfoViewModel[]>(
    {
      queryKey: ["RecordResultsCollectRealWorldEvidenceRead"],
      queryFn: async () => mockDataRecordResultsCollectRealWorldEvidence,
    }
  );

  const columns = useMemo<
    MRT_ColumnDef<IRecordResultsCollectRealWorldEvidenceInfoViewModel>[]
  >(
    () => [
      {
        header: "Mã kế hoạch TDG",
        accessorKey: "maKeHoachTdg",
      },
      {
        header: "Mã nhóm CT",
        accessorKey: "maNhomCt",
      },
      {
        header: "Thành viên phụ trách",
        accessorKey: "thanhVienPhuTrach",
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
        header: "Mã MC dự kiến",
        accessorKey: "maMcDuKien",
      },
      {
        header: "Tên MC dự kiến",
        accessorKey: "tenMcDuKien",
      },
      {
        header: "Mã MC thực tế",
        accessorKey: "maMcThucTe",
      },
      {
        header: "Tên MC",
        accessorKey: "tenMc",
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "soNgayBanHanh",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
      {
        header: "Đơn vị ban hành",
        accessorKey: "donViBanHanh",
      },
      {
        header: "File đính kèm",
        accessorKey: "fileDinhKem",
      },
      {
        header: "Link liên kết",
        accessorKey: "linkLienKet",
        accessorFn: (row) => <MyButtonViewPDF />,
      },
      {
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
      {
        header: "Trạng thái kiểm duyệt MC",
        accessorKey: "trangThaiKiemDuyetMc",
      },
    ],
    []
  );

  return (
    <MyFieldset title="">
      <MyDataTable
        isError={query.isError}
        isLoading={query.isLoading}
        columns={columns}
        data={query.data || []}
        exportAble
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <RecordResultsCollectRealWorldEvidenceButtonModalUpdate values={row.original} />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}
