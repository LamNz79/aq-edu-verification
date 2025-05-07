"use client";
import MyCheckbox from "@/components/Checkbox/MyCheckbox";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Button, Group } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonExportData,
  MyCenterFull,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_79t4hwd85i_Update from "./F_79t4hwd85i_Update";

interface I_F_79t4hwd85i_Read {
  id?: number;
  maTieuChuan?: string;
  maTieuChi?: string;
  maYeuCau?: string;
  tenTeuCau?: string;
  noiDung?: string;
  nguoiPhuTrach?: string;
  donViPhuTrach?: string;
  ngayBatDau?: Date;
  ngayKetThuc?: Date;
  trangThai?: string;
  daCapNhat?: boolean;
}

const mockData: I_F_79t4hwd85i_Read[] = [
  {
    id: 1,
    maTieuChuan: "TC01",
    maTieuChi: "TC1.1",
    maYeuCau: "M001",
    tenTeuCau:
      "Chuẩn đầu ra của CTDT được xây dựng, rà soát và điều chỉnh theo quy định trước, trong đó có sử tham gia của các BLQ",
    noiDung: "Đề án xây dựng chương trình đào tạo",
    nguoiPhuTrach: "Tô Ngọc Lan",
    donViPhuTrach: "Phòng tổ chức",
    ngayBatDau: new Date("2025-02-01"),
    ngayKetThuc: new Date("2025-05-30"),
    trangThai: "Còn hạn",
    daCapNhat: false,
  },
  {
    id: 2,
    maTieuChuan: "TC01",
    maTieuChi: "TC1.1",
    maYeuCau: "M002",
    tenTeuCau:
      "Chuẩn đầu ra của CTDT được xây dựng, rà soát và điều chỉnh theo quy định trước, trong đó có sử tham gia của các BLQ",
    noiDung: "Nội dung chi tiết chương trình đào tạo",
    nguoiPhuTrach: "Tô Ngọc Lan",
    donViPhuTrach: "Phòng tổ chức",
    ngayBatDau: new Date("2025-02-01"),
    ngayKetThuc: new Date("2025-05-30"),
    trangThai: "Còn hạn",
    daCapNhat: false,
  },
];

export default function F_79t4hwd85i_Read() {
  const danhSachNoiDungBaoCaoQuery = useQuery({
    queryKey: ["F_79t4hwd85i_Read"],
    queryFn: async () => mockData,
  });

  const columns = useMemo<MRT_ColumnDef<I_F_79t4hwd85i_Read>[]>(
    () => [
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "maTieuChuan",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "maTieuChi",
      },
      {
        header: "Mã yêu cầu / mốc chuẩn",
        accessorKey: "maYeuCau",
      },
      {
        header: "Tên yêu cầu / mốc chuẩn",
        accessorKey: "tenTeuCau",
        size: 300,
      },
      {
        header: "Nội dung",
        accessorKey: "noiDung",
      },
      {
        header: "Người phụ trách",
        accessorKey: "nguoiPhuTrach",
      },
      {
        header: "Đơn vị phụ trách",
        accessorKey: "donViPhuTrach",
      },
      {
        header: "Ngày bắt đầu",
        accessorKey: "ngayBatDau",
        accessorFn: (originalRow) =>
          originalRow.ngayBatDau
            ? utils_date_dateToDDMMYYYString(originalRow.ngayBatDau)
            : "",
      },
      {
        header: "Ngày kết thúc",
        accessorKey: "ngayKetThuc",
        accessorFn: (originalRow) =>
          originalRow.ngayKetThuc
            ? utils_date_dateToDDMMYYYString(originalRow.ngayKetThuc)
            : "",
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
      },
      {
        header: "Đã cập nhật",
        accessorKey: "daCapNhat",
        accessorFn: (originalRow) => (
          <MyCenterFull>
            <MyCheckbox checked={originalRow.daCapNhat} onChange={() => {}} />
          </MyCenterFull>
        ),
      },
      {
        header: "Thao tác",
        accessorKey: "thaoTac",
        size: 150,
        enableEditing: false,
        Cell: ({ cell }) => {
          return <F_79t4hwd85i_Update />;
        },
      },
    ],
    []
  );

  const exportConfig = {
    fields: [],
  };

  if (danhSachNoiDungBaoCaoQuery.isLoading) return "Đang tải dữ liệu...";
  if (danhSachNoiDungBaoCaoQuery.isError) return "Đã có lỗi xảy ra!";

  return (
    <MyFlexColumn>
      <MyFieldset title="Danh sách nội dung báo cáo cần cập nhật">
        <MyDataTable
          data={danhSachNoiDungBaoCaoQuery.data!}
          columns={columns}
          enableRowSelection={true}
          enableRowNumbers={true}
          initialState={{ columnPinning: { right: ["daCapNhat", "thaoTac"] } }}
          renderTopToolbarCustomActions={({ table }) => (
            <Group>
              <AQButtonExportData
                isAllData={true}
                objectName="dsClass"
                data={danhSachNoiDungBaoCaoQuery.data!}
                exportConfig={exportConfig}
              />
              <Button leftSection={<IconTrash />} color="red">
                Xóa
              </Button>
            </Group>
          )}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}
