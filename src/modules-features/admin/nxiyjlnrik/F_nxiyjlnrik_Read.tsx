"use client";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { U0DateToDDMMYYYString } from "@/utils/date";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_nxiyjlnrik_Create from "./F_nxiyjlnrik_Create";
import F_nxiyjlnrik_Update from "./F_nxiyjlnrik_Update";
import F_nxiyjlnrik_Delete from "./F_nxiyjlnrik_Delete";
import MyButtonViewPDF from "@/components/Buttons/ButtonViewPDF/MyButtonViewPDF";
import { MyFieldset } from "aq-fe-framework/components";

export interface I_nxiyjlnrik_Read {
  maMinhChung?: string; // Mã minh chứng
  tenMinhChung?: string; // Tên minh chứng
  moTa?: string; // Mô tả
  fileMinhChung?: string; // File minh chứng
  dinhDang?: string; // Định dạng
  nguoiTai?: string; // Người tải
  ngayTai?: Date; // Ngày tạo
  donViBanHanh?: string; // Đơn vị ban hành
  ngayBanHanh?: Date; // Ngày ban hành
  ngayHetHan?: Date; // Ngày hết hạn
  trangThai?: string; // Trạng thái
  ghiChu?: string; // Ghi chú
}

const mockData: I_nxiyjlnrik_Read[] = [
  {
    maMinhChung: "MC001",
    tenMinhChung: "Báo cáo tổng kết năm học 2022-2023",
    moTa: "Báo cáo tổng kết hoạt động của trường trong năm học 2022-2023",
    fileMinhChung: "bao-cao-tong-ket-2022-2023.pdf",
    dinhDang: "PDF",
    nguoiTai: "Nguyễn Văn A",
    ngayTai: new Date("2023-06-15"),
    donViBanHanh: "Trường THPT ABC",
    ngayBanHanh: new Date("2023-06-10"),
    ngayHetHan: new Date("2024-06-10"),
    trangThai: "Còn hiệu lực",
    ghiChu: "Cần cập nhật thông tin vào tháng 12/2023",
  },
  {
    maMinhChung: "MC002",
    tenMinhChung: "Kế hoạch năm học 2023-2024",
    moTa: "Kế hoạch hoạt động của trường trong năm học 2023-2024",
    fileMinhChung: "ke-hoach-nam-hoc-2023-2024.docx",
    dinhDang: "DOCX",
    nguoiTai: "Trần Thị B",
    ngayTai: new Date("2023-08-20"),
    donViBanHanh: "Phòng Giáo dục và Đào tạo",
    ngayBanHanh: new Date("2023-08-15"),
    ngayHetHan: new Date("2024-08-15"),
    trangThai: "Còn hiệu lực",
    ghiChu: "Đã được phê duyệt",
  },
  {
    maMinhChung: "MC003",
    tenMinhChung: "Báo cáo kiểm định chất lượng",
    moTa: "Báo cáo kết quả kiểm định chất lượng giáo dục",
    fileMinhChung: "bao-cao-kiem-dinh-2023.xlsx",
    dinhDang: "XLSX",
    nguoiTai: "Lê Văn C",
    ngayTai: new Date("2023-10-05"),
    donViBanHanh: "Sở Giáo dục và Đào tạo",
    ngayBanHanh: new Date("2023-09-30"),
    ngayHetHan: new Date("2024-09-30"),
    trangThai: "Còn hiệu lực",
    ghiChu: "Cần bổ sung thêm minh chứng",
  },
];

export default function F_nxiyjlnrik_Read() {
  const [importData, setImportData] = useState(false);
  const form_multiple = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });
  const form = useForm<I_nxiyjlnrik_Read>({
    initialValues: {},
  });

  // Query to fetch the data
  const query = useQuery<I_nxiyjlnrik_Read[]>({
    queryKey: ["F_nxiyjlnrik_Read"],
    queryFn: async () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_nxiyjlnrik_Read>[]>(
    () => [
      { header: "Mã minh chứng", accessorKey: "maMinhChung" },
      { header: "Tên minh chứng", accessorKey: "tenMinhChung" },
      { header: "Mô tả", accessorKey: "moTa" },
      {
        header: "File minh chứng",
        accessorFn: (row) => {
          return (
            <MyCenterFull>
              <MyButtonViewPDF />
            </MyCenterFull>
          );
        },
      },
      { header: "Định dạng", accessorKey: "dinhDang" },
      { header: "Người tải", accessorKey: "nguoiTai" },
      {
        header: "Ngày tải",
        accessorFn: (row) => U0DateToDDMMYYYString(new Date(row.ngayTai!)),
      },
      { header: "Đơn vị ban hành", accessorKey: "donViBanHanh" },
      {
        header: "Ngày ban hành",
        accessorKey: "ngayBanHanh",
        accessorFn: (row) => U0DateToDDMMYYYString(new Date(row.ngayBanHanh!)),
      },
      {
        header: "Ngày hết hạn",
        accessorKey: "ngayHetHan",
        accessorFn: (row) => U0DateToDDMMYYYString(new Date(row.ngayHetHan!)),
      },
      { header: "Trạng thái", accessorKey: "trangThai" },
      { header: "Ghi chú", accessorKey: "ghiChu" },
    ],
    [query.data]
  );

  const exportConfig = {
    fields: [
      { fieldName: "maMinhChung", header: "Mã minh chứng" },
      { fieldName: "tenMinhChung", header: "Tên minh chứng" },
      { fieldName: "moTa", header: "Mô tả" },
      { fieldName: "fileMinhChung", header: "File minh chứng" },
      { fieldName: "dinhDang", header: "Định dạng" },
      { fieldName: "nguoiTai", header: "Người tải" },
      { fieldName: "ngayTai", header: "Ngày tải" },
      { fieldName: "donViBanHanh", header: "Đơn vị ban hành" },
      { fieldName: "ngayBanHanh", header: "Ngày ban hành" },
      { fieldName: "ngayHetHan", header: "Ngày hết hạn" },
      { fieldName: "trangThai", header: "Trạng thái" },
      { fieldName: "ghiChu", header: "Ghi chú" },
    ],
  };

  // Kiểm tra trạng thái của query
  if (query.isLoading) return "Đang tải dữ liệu...";
  if (query.isError) return "Không có dữ liệu...";

  return (
    <MyFieldset title="Danh sách minh chứng">
      <MyDataTable<I_nxiyjlnrik_Read>
        enableRowSelection={true}
        columns={columns}
        data={query.data!}
        renderTopToolbarCustomActions={() => (
          <>
            <F_nxiyjlnrik_Create />
            <AQButtonCreateByImportFile
              setImportedData={setImportData}
              form={form_multiple}
              onSubmit={() => {
                console.log(form_multiple.values);
              }}
            />
            <AQButtonExportData
              isAllData={true}
              data={query.data || []}
              exportConfig={exportConfig}
              objectName="dsMinhChungMinhChung"
            />
            <MyButton crudType="delete">Xóa</MyButton>
          </>
        )}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <F_nxiyjlnrik_Update value={row.original} />
              <F_nxiyjlnrik_Delete id={row.original.maMinhChung!} />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}
