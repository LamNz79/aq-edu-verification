"use client";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonModal,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ICollectEvidenceInfoViewModel } from "../interfaces";
import { mockDataCollectEvidence } from "../mockData";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { Text } from "@mantine/core";
import CollectEvidenceDelete from "./CollectEvidenceDelete";
import CollectEvidenceUpdate from "./CollectEvidenceUpdate/CollectEvidenceUpdate";
import CollectEvidenceCreate from "./CollectEvidenceCreate/CollectEvidenceCreate";
import CollectEvidenceView from "./CollectEvidenceView/CollectEvidenceView";

export default function CollectEvidenceButtonModal() {
  const disc = useDisclosure();
  const query = useQuery<ICollectEvidenceInfoViewModel[]>({
    queryKey: ["CollectEvidenceButtonModal"],
    queryFn: async () => mockDataCollectEvidence,
  });

  const columns = useMemo<MRT_ColumnDef<ICollectEvidenceInfoViewModel>[]>(
    () => [
      {
        header: "Mã minh chứng",
        accessorKey: "maMinhChung",
      },
      {
        header: "Tên minh chứng",
        accessorKey: "tenMinhChung",
      },
      {
        header: "Mã MC trực thuộc (Cha)",
        accessorKey: "maMcTrucThuocCha",
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "soNgayBanHanh",
      },
      {
        header: "Đơn vị ban hành",
        accessorKey: "donViBanHanh",
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
        header: "Trạng thái hiệu lực",
        accessorKey: "trangThaiHieuLuc",
        accessorFn: (row) => {
          const todayStr = new Date().toISOString().split("T")[0];
          const endDateStr = row.hieuLucDenNgay;

          const isValid = !endDateStr || endDateStr >= todayStr;

          return (
            <Text c={isValid ? "green" : "red"} fw={500}>
              {isValid ? "Còn hạn" : "Hết hạn"}
            </Text>
          );
        },
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
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
    ],
    []
  );

  return (
    <MyButtonModal
      leftSection={<IconSearch size={16} />}
      w={"200px"}
      label="Thu thập minh chứng"
      color="blue"
      modalSize={"90%"}
      disclosure={disc}
    >
      <MyFieldset title="">
        <MyDataTable
          enableRowSelection
          isError={query.isError}
          isLoading={query.isLoading}
          columns={columns}
          data={query.data || []}
          renderTopToolbarCustomActions={() => (
            <MyCenterFull>
              <CollectEvidenceCreate />
              <MyButton crudType="import">Import</MyButton>
              <MyButton crudType="export">Export</MyButton>
              <MyButton crudType="delete">Xóa</MyButton>
            </MyCenterFull>
          )}
          renderRowActions={({ row }) => (
            <MyCenterFull>
              <CollectEvidenceView values={row.original} />
              <CollectEvidenceUpdate values={row.original} />
              <CollectEvidenceDelete id={row.original.maMinhChung ?? ""} />
            </MyCenterFull>
          )}
        />
      </MyFieldset>
    </MyButtonModal>
  );
}
