import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonExportData,
  MyButton,
  MyButtonViewPDF,
  MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_o4e65ehgty_Proof_Create from "./F_o4e65ehgty_Proof_Create";
import F_o4e65ehgty_Proof_Upload from "./F_o4e65ehgty_Proof_Upload";
import F_o4e65ehgty_Proof_Use from "./F_o4e65ehgty_Proof_Use";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
export interface I_o4e65ehgty_ProofView {
  id: string;
  ma?: string;
  ten?: string;
  maFile?: string;
  tenFile?: string;
  ngayHieuLuc?: string;
  ngayHetHan?: string;
  lienKet?: string;
  nguoiCapNhat?: string;
  ngayCapNhat?: string;
  donViCapNhat?: string;
}

// Chưa có nên phải tạo utils
export function utils_date_FormatToDateTimetring(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0 nên phải cộng thêm 1
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
}

export default function F_o4e65ehgty_Proof_View() {
  const disc = useDisclosure();
  const Q_data = useQuery({
    queryKey: ["F_o4e65ehgty_Proof_View"],
    queryFn: () => {
      return MockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_o4e65ehgty_ProofView>[]>(
    () => [
      { header: "Mã minh chứng", accessorKey: "ma" },
      { header: "Tên minh chứng", accessorKey: "ten", size: 300 },
      { header: "Mã file", accessorKey: "maFile", size: 60 },
      { header: "Tên file", accessorKey: "tenFile" },
      {
        header: "Xem file",
        accessorKey: "file",
        accessorFn: (row) => <MyButtonViewPDF id={parseInt(row.id)} />,
        size: 60,
      },
      {
        header: "Link file",
        accessorKey: "lienKet",
        accessorFn: () => (
          <MyButton variant="transparent" crudType="default">
            Xem
          </MyButton>
        ),
      },
      {
        header: "Ngày hiệu lực",
        accessorFn: (row) =>
          row.ngayHieuLuc &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayHieuLuc)),
      },
      {
        header: "Ngày hết hạn",
        accessorFn: (row) =>
          row.ngayHetHan &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayHetHan)),
      },
      {
        header: "Ngày cập nhật",
        accessorFn: (row) =>
          row.ngayCapNhat &&
          utils_date_FormatToDateTimetring(new Date(row.ngayCapNhat)),
      },
      {
        header: "Người cập nhật",
        accessorFn: (row) => row.nguoiCapNhat,
      },
      {
        header: "Đơn vị cập nhật",
        accessorKey: "donViCapNhat",
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
        accessorFn: (row) => {
          if (row.ngayHetHan && new Date(row.ngayHetHan) > new Date()) {
            return "Còn hiệu lực";
          } else {
            return "Hết hiệu lực";
          }
        },
      },
      {
        header: "Xem chi tiết",
        accessorFn: () => (
          <MyButton variant="transparent" crudType="default">
            Xem
          </MyButton>
        ),
        size: 140,
      },
      {
        header: "Thao tác",
        accessorFn: (row) => <F_o4e65ehgty_Proof_Use data={row} />,
        size: 60,
      },
      {
        header: "Upload File mới",
        accessorFn: () => <F_o4e65ehgty_Proof_Upload />,
      },
    ],
    [Q_data.data]
  );

  const exportConfig = {
    fields: [
      { fieldName: "ma", header: "Mã minh chứng" },
      { fieldName: "ten", header: "Tên minh chứng" },
      { fieldName: "maFile", header: "Mã file minh chứng" },
      { fieldName: "tenFile", header: "Tên file minh chứng" },
      { fieldName: "ngayHieuLuc", header: "Ngày hiệu lực" },
      { fieldName: "ngayHetHan", header: "Ngày hết hạn" },
      { fieldName: "nguoiCapNhat", header: "Người cập nhật" },
      { fieldName: "ngayCapNhat", header: "Ngày cập nhật" },
      { fieldName: "donViCapNhat", header: "Đơn vị cập nhật" },
      { fieldName: "trangThai", header: "Trạng thái" },
    ],
  };

  if (Q_data.isLoading) return <div>Loading...</div>;
  if (Q_data.isError) return <div>Error: {Q_data.error.message}</div>;

  return (
    <MyButtonModal
      label="Thêm"
      title="Danh sách minh chứng"
      crudType="default"
      color="green"
      disclosure={disc}
      modalSize={"80%"}
    >
      <MyDataTable
        enableRowSelection
        columns={columns}
        rowActionSize={20}
        data={Q_data.data ?? []}
        renderTopToolbarCustomActions={() => (
          <>
            <AQButtonExportData
              isAllData={true}
              data={Q_data.data || []}
              exportConfig={exportConfig}
              objectName="dsMinhChung"
            />
            <F_o4e65ehgty_Proof_Create />
          </>
        )}
      />
    </MyButtonModal>
  );
}

const MockData: I_o4e65ehgty_ProofView[] = [
  {
    id: "1",
    ma: "CODE-2",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2024",
    maFile: "MD-23",
    tenFile: "Quyết định số 432",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-12-15",
    nguoiCapNhat: "Nguyễn Văn A",
    ngayCapNhat: "2025-01-10",
    donViCapNhat: "Phòng Khoa học Công nghệ",
  },
  {
    id: "2",
    ma: "CODE-3",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2023",
    maFile: "MD-24",
    tenFile: "Quyết định số 432",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-04-31",
    nguoiCapNhat: "Trần Thị B",
    ngayCapNhat: "2025-01-12",
    donViCapNhat: "Phòng Đào tạo",
  },
  {
    id: "3",
    ma: "CODE-4",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2022",
    maFile: "MD-25",
    tenFile: "Quyết định số 432",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-03-15",
    nguoiCapNhat: "Lê Văn C",
    ngayCapNhat: "2025-01-14",
    donViCapNhat: "Phòng Quản lý Khoa học",
  },
];
