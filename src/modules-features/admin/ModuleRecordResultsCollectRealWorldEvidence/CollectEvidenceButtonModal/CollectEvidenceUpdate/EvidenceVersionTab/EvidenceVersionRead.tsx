"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ITabEvidenceVersionInfoViewModel } from "../../../interfaces";
import { mockDataTabEvidenceVersion } from "../../../mockData";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { Checkbox } from "@mantine/core";
import EvidenceVersionDelete from "./EvidenceVersionDelete";
import EvidenceVersionUpdate from "./EvidenceVersionUpdate";
import EvidenceVersionCreate from "./EvidenceVersionCreate";

export default function EvidenceVersionRead() {
  const query = useQuery<ITabEvidenceVersionInfoViewModel[]>({
    queryKey: ["EvidenceVersionRead"],
    queryFn: async () => mockDataTabEvidenceVersion,
  });

  const columns = useMemo<MRT_ColumnDef<ITabEvidenceVersionInfoViewModel>[]>(
    () => [
      {
        header: "ID file",
        accessorKey: "idFile",
      },
      {
        header: "Tên file",
        accessorKey: "tenFile",
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
      {
        header: "Ghi chú phiên bản",
        accessorKey: "ghiChuPhienBan",
      },
      {
        header: "Hiện hành?",
        accessorKey: "hienHanh",
        Cell: ({ cell }) => (
          <MyCenterFull>
            <Checkbox checked={cell.getValue<boolean>()} readOnly />
          </MyCenterFull>
        ),
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
      enableRowSelection
      renderTopToolbarCustomActions={() => (
        <MyCenterFull>
          <EvidenceVersionCreate />
          <MyButton crudType="delete">Xóa</MyButton>
        </MyCenterFull>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <EvidenceVersionUpdate values={row.original} />
          <EvidenceVersionDelete id={row.original.idFile ?? ""} />
        </MyCenterFull>
      )}
    />
  );
}
