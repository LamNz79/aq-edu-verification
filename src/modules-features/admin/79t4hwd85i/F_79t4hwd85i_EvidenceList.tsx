import { Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonExportData,
  MyButtonModal,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
} from "aq-fe-framework/components";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_79t4hwd85i_AddEvidence from "./F_79t4hwd85i_AddEvidence";
import F_79t4hwd85i_UploadEvidenceFile from "./F_79t4hwd85i_UploadEvidenceFile";
import F_79t4hwd85i_WarningEvidence from "./F_79t4hwd85i_WarningEvidence";

interface I_FileMinhChung {
  id?: number;
  maMinhChung?: string;
  tenMinhChung?: string;
  maFileMinhChung?: string;
  tenFileMinhChung?: string;
  ngayHieuLuc?: Date;
  ngayHetHan?: Date;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  donViCapNhat?: string;
  trangThai?: string;
}

const mockDataFileMinhChung: I_FileMinhChung[] = [
  {
    id: 1,
    maMinhChung: "MC0001",
    tenMinhChung: "Tầm nhìn",
    maFileMinhChung: "F0012",
    tenFileMinhChung: "Quyết định xác định tầm nhìn chiến lược 5 năm tới",
    ngayHieuLuc: new Date("2025-02-01"),
    ngayHetHan: new Date("2025-04-03"),
    ngayCapNhat: "12/01/2025 12:05:25",
    nguoiCapNhat: "Tô Ngọc Bảo",
    donViCapNhat: "Phòng tổ chức",
    trangThai: "Còn hiệu lực",
  },
];
export default function F_79t4hwd85i_EvidenceList() {
  const dis = useDisclosure();
  const disUploadEvidenceFile = useDisclosure();

  const danhSachFileMinhChung = useQuery({
    queryKey: ["F_79t4hwd85i_EvidenceList_FileMinhChung"],
    queryFn: async () => mockDataFileMinhChung,
  });

  const columns = useMemo<MRT_ColumnDef<I_FileMinhChung>[]>(
    () => [
      {
        header: "Mã minh chứng",
        accessorKey: "maMinhChung",
      },
      {
        header: "Tên minh chứng",
        accessorKey: "tenMinhChung",
        size: 300,
      },
      {
        header: "Mã file",
        accessorKey: "maFileMinhChung",
      },
      {
        header: "Tên file",
        accessorKey: "tenFileMinhChung",
        size: 300,
      },
      {
        header: "Xem file",
        accessorKey: "xemfile",
        accessorFn: (originalRow) => (
          <MyCenterFull>
            <MyButtonViewPDF
              label="Xem"
              src="https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf"
            />
          </MyCenterFull>
        ),
      },
      {
        header: "Link file",
        accessorKey: "linkFile",
        accessorFn: (originalRow) => (
          <MyCenterFull>
            <Button variant="transparent">Xem</Button>
          </MyCenterFull>
        ),
      },
      {
        header: "Ngày hiệu lực",
        accessorKey: "ngayHieuLuc",
        accessorFn: (originalRow) =>
          originalRow.ngayHieuLuc ? utils_date_dateToDDMMYYYString(originalRow.ngayHieuLuc) : "",
      },
      {
        header: "Ngày hết hạn",
        accessorKey: "ngayHetHan",
        accessorFn: (originalRow) =>
          originalRow.ngayHetHan ? utils_date_dateToDDMMYYYString(originalRow.ngayHetHan) : "",
      },
      {
        header: "Ngày cập nhật",
        accessorKey: "ngayCapNhat",
        accessorFn: (originalRow) => (originalRow.ngayCapNhat ? originalRow.ngayCapNhat : ""),
      },
      {
        header: "Người cập nhật",
        accessorKey: "nguoiCapNhat",
      },
      {
        header: "Đơn vị cập nhật",
        accessorKey: "donViCapNhat",
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
      },
      {
        header: "Xem chi tiết",
        accessorKey: "xemChiTiet",
        accessorFn: (originalRow) => (
          <MyCenterFull>
            <Button variant="transparent">Xem</Button>
          </MyCenterFull>
        ),
      },
      {
        header: "Thao tác",
        accessorKey: "suDung",
        Cell: ({ cell }) => (
          <MyCenterFull>
            <F_79t4hwd85i_WarningEvidence
              code={cell.row.original.maFileMinhChung!}
              expireDate={
                cell.row.original.ngayHetHan && cell.row.original.ngayHieuLuc
                  ? Math.floor(
                      (cell.row.original.ngayHetHan.getTime() -
                        cell.row.original.ngayHieuLuc.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )
                  : 0
              }
              disEvidenceList={dis}
              disUploadEvidenceFile={disUploadEvidenceFile}
            />
          </MyCenterFull>
        ),
      },
      {
        header: "Upload File mới",
        accessorKey: "uploadFile",
        Cell: () => (
          <MyCenterFull>
            <F_79t4hwd85i_UploadEvidenceFile disclosure={disUploadEvidenceFile} />
          </MyCenterFull>
        ),
      },
    ],
    [disUploadEvidenceFile]
  );

  const exportConfig = {
    fields: [],
  };

  if (danhSachFileMinhChung.isLoading) return "Đang tải dữ liệu...";
  if (danhSachFileMinhChung.isError) return "Đã có lỗi xảy ra!";

  return (
    <MyButtonModal
      crudType="create"
      label="Thêm"
      modalSize={"90%"}
      disclosure={dis}
      title="Danh sách minh chứng"
    >
      <MyDataTable
        data={danhSachFileMinhChung.data!}
        initialState={{ columnVisibility: { ngayCapNhat: true } }}
        columns={columns}
        enableRowSelection={true}
        enableRowNumbers={true}
        renderTopToolbarCustomActions={({ table }) => (
          <Group>
            <AQButtonExportData
              isAllData={true}
              objectName="dsMinhChung"
              data={danhSachFileMinhChung.data!}
              exportConfig={exportConfig}
            />
            <F_79t4hwd85i_AddEvidence />
          </Group>
        )}
      />
    </MyButtonModal>
  );
}
