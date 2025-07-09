import { IManagementMidCycleQualityAssuranceReportInfoViewModel } from "./interface";

export const mockData: IManagementMidCycleQualityAssuranceReportInfoViewModel[] = [
  {
    chuongTrinhDaoTao: "Kỹ thuật phần mềm",
    giaiDoan: "2020-2025",
    soBaoCao: "01/BC-GK-KTPM",
    ngayBaoCao: "2023-07-20",
    nguoiKy: "GS.TS. Nguyễn Văn A",
    fileBaoCaoGiuaKy: "file.pdf"
  },
  {
    chuongTrinhDaoTao: "Kế toán",
    giaiDoan: "2021-2026",
    soBaoCao: "02/BC-GK-KT",
    ngayBaoCao: "2024-08-15",
    nguoiKy: "PGS.TS. Trần Thị B",
    fileBaoCaoGiuaKy: "file.pdf"
  },
  {
    chuongTrinhDaoTao: "Công nghệ thông tin",
    giaiDoan: "2022-2027",
    soBaoCao: "03/BC-GK-CNTT",
    ngayBaoCao: "2025-09-10",
    nguoiKy: "TS. Phạm Văn C",
    fileBaoCaoGiuaKy: "file.pdf"
  }
]

export const selectChuongTrinhDaoTao: string[] = [
  "Kỹ thuật phần mềm",
  "Kế toán",
  "Công nghệ thông tin"
]