import { Stack } from "@mantine/core";
import { MyCenterFull, MyDataTable, MyFieldset, MyFlexColumn } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import EvalCriteriaFormPrint from "./EvalCriteriaFormPrint";
import FormDetailButton from "./FormDetail/FormDetailButton";
import VerificationResultButton from "./VerificationResultButton";

export interface IApproveForm {
  id: number;
  maKeHoachTDG: string;
  maCTDT: string;
  maKhoa: string;
  maTieuChuan: string;
  maTieuChi: string;
  tenTieuChi: string;
  nhomCongTacChuyenTrach: string;
  thanhVienPhuTrach: string;
  tuDanhGia: string;
  trangThaiKiemTra: string;
  nhanXet: string;
  guiThongBao: boolean;
}

export default function ApproveFormTable() {
  const columns = useMemo<MRT_ColumnDef<IApproveForm>[]>(
    () => [
      { header: "Mã Kế hoạch TDG", accessorKey: "maKeHoachTDG" },
      { header: "Mã CTĐT", accessorKey: "maCTDT" },
      { header: "Mã Khóa", accessorKey: "maKhoa" },
      { header: "Mã Tiêu chuẩn", accessorKey: "maTieuChuan" },
      { header: "Mã Tiêu chí", accessorKey: "maTieuChi" },
      { header: "Tên Tiêu chí", accessorKey: "tenTieuChi", size: 300 },
      { header: "Nhóm công tác chuyên trách", accessorKey: "nhomCongTacChuyenTrach" },
      { header: "Thành viên phụ trách", accessorKey: "thanhVienPhuTrach" },
      { header: "Tự đánh giá", accessorKey: "tuDanhGia" },
      { header: "Trạng thái kiểm tra", accessorKey: "trangThaiKiemTra" },
      { header: "Nhận xét", accessorKey: "nhanXet" },
    ],
    []
  );

  return (
    <MyFlexColumn>
      <MyFieldset title="Danh sách tiêu chí">
        <MyDataTable
          data={mockData || []}
          columns={columns}
          enableRowSelection={true}
          enableRowNumbers={true}
          renderRowActions={({ row }) => {
            return (
              <MyCenterFull>
                <Stack gap={2}>
                  <VerificationResultButton data={row.original} />
                  <FormDetailButton />
                  <EvalCriteriaFormPrint/>
                </Stack>
              </MyCenterFull>
            );
          }}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockData: IApproveForm[] = [
  {
    id: 1,
    maKeHoachTDG: "KH-KTPM-2024",
    maCTDT: "KTPM",
    maKhoa: "KTPM_K20",
    maTieuChuan: "TC_05",
    maTieuChi: "TC_05.02",
    tenTieuChi:
      '"Đảm bảo tính thống nhất, công khai của quy định về đào tạo và các quy định khác có liên quan"',
    nhomCongTacChuyenTrach: "NCT_TC5-7",
    thanhVienPhuTrach: "ThS. Hoàng Thị E",
    tuDanhGia: "Đạt",
    trangThaiKiemTra: "Đạt yêu cầu",
    nhanXet: "",
    guiThongBao: true,
  },
  {
    id: 2,
    maKeHoachTDG: "KH-KTPM-2024",
    maCTDT: "KTPM",
    maKhoa: "KTPM_K20",
    maTieuChuan: "TC_01",
    maTieuChi: "TC_01.01",
    tenTieuChi: '"Đảm bảo tính công khai; minh bạch của mục tiêu và chuẩn đầu ra"',
    nhomCongTacChuyenTrach: "NCT_TC1-3",
    thanhVienPhuTrach: "TS. Trần Văn C",
    tuDanhGia: "Không đạt",
    trangThaiKiemTra: "Cần hiệu chỉnh",
    nhanXet: "",
    guiThongBao: false,
  },
  {
    id: 3,
    maKeHoachTDG: "KH-KTPM-2024",
    maCTDT: "KTPM",
    maKhoa: "KTPM_K21",
    maTieuChuan: "TC_05",
    maTieuChi: "TC_05.02",
    tenTieuChi:
      '"Đảm bảo tính thống nhất; công khai của quy định về đào tạo và các quy định khác có liên quan"',
    nhomCongTacChuyenTrach: "NCT_TC5-7",
    thanhVienPhuTrach: "ThS. Hoàng Thị E",
    tuDanhGia: "Chưa đánh giá",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXet: "",
    guiThongBao: false,
  },
  {
    id: 4,
    maKeHoachTDG: "KH-KTPM-2024",
    maCTDT: "KTPM",
    maKhoa: "KTPM_K20",
    maTieuChuan: "TC_03",
    maTieuChi: "TC_03.02",
    tenTieuChi: '"Đảm bảo chất lượng đội ngũ giảng viên; đáp ứng yêu cầu của chương trình đào tạo"',
    nhomCongTacChuyenTrach: "NCT_TC3-4",
    thanhVienPhuTrach: "CN. Bùi Thị L",
    tuDanhGia: "Đạt",
    trangThaiKiemTra: "Đạt yêu cầu",
    nhanXet: "",
    guiThongBao: false,
  },
  {
    id: 5,
    maKeHoachTDG: "KH-KTPM-2024",
    maCTDT: "KTPM",
    maKhoa: "KTPM_K20",
    maTieuChuan: "TC_06",
    maTieuChi: "TC_06.01",
    tenTieuChi:
      '"Đảm bảo hoạt động nghiên cứu khoa học và chuyển giao công nghệ phù hợp với định hướng phát triển"',
    nhomCongTacChuyenTrach: "NCT_TC6-7",
    thanhVienPhuTrach: "ThS. Lê Thị M",
    tuDanhGia: "Chưa đánh giá",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXet: "",
    guiThongBao: false,
  },
];
