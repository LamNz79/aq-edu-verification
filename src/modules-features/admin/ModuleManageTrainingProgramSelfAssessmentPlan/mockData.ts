import {
  IAssignmentTasksInfoViewModel,
  IManageTrainingProgramSelfAssessmentPlanInfoViewModel,
  IResourceMobilizationInfoViewModel,
} from "./interface";

export const mockDataManageTrainingProgramSelfAssessmentPlan: IManageTrainingProgramSelfAssessmentPlanInfoViewModel[] =
  [
    {
      maKeHoach: "KH-KTPM-2024",
      tenKeHoach: "Kế hoạch TDG CTĐT Kỹ thuật Phần mềm K60",
      chuongTrinhDaoTaoApDung: "Kỹ thuật Phần mềm",
      maGiaiDoan: "2021-2026",
      boTieuChuanApDung: "Thông tư 04/2025/TT-BGDĐT",
      phienBanBoTieuChuan: "Phiên bản gốc",
      mucTieuTuDanhGia:
        "Rà soát toàn diện chất lượng CTĐT KTPM K60, Chuẩn bị cho đánh giá ngoài.",
      phamViTuDanhGia:
        "Từ năm học 2020-2021 đến 2023-2024, Toàn bộ 11 tiêu chuẩn.",
      ngayBatDau: "2024-03-01",
      ngayKetThuc: "2024-04-30",
      nguoiKy: "Tô Ngọc Bảo",
      fileKeHoach: "Xem file",
      quyetDinhThanhLapHoiDong: "QĐ-HTDG-KTPM-2024",
    },
    {
      maKeHoach: "KH-QTKD-2025",
      tenKeHoach: "Kế hoạch TDG CTĐT Quản trị Kinh doanh K61",
      chuongTrinhDaoTaoApDung: "Quản trị Kinh doanh",
      maGiaiDoan: "2022-2027",
      boTieuChuanApDung: "Thông tư 04/2025/TT-BGDĐT",
      phienBanBoTieuChuan: "Sửa đổi lần 1",
      mucTieuTuDanhGia:
        "Đánh giá sự phù hợp của CTĐT với yêu cầu xã hội, Xây dựng kế hoạch cải tiến.",
      phamViTuDanhGia:
        "Từ năm học 2021-2022 đến 2024-2025, Tập trung tiêu chuẩn 1 2 3 4.",
      ngayBatDau: "2025-01-15",
      ngayKetThuc: "2025-07-30",
      nguoiKy: "Tô Ngọc Bảo",
      fileKeHoach: "Xem file",
      quyetDinhThanhLapHoiDong: "QĐ-HTDG-KTPM-2024",
    },
    {
      maKeHoach: "KH-KHMT-2025",
      tenKeHoach: "Kế hoạch TDG CTĐT Khoa học Máy tính K62",
      chuongTrinhDaoTaoApDung: "Khoa học Máy tính",
      maGiaiDoan: "2023-2028",
      boTieuChuanApDung: "Thông tư 04/2025/TT-BGDĐT",
      phienBanBoTieuChuan: "Sửa đổi lần 2",
      mucTieuTuDanhGia:
        "Kiểm tra tiến độ thực hiện các khuyến nghị từ đợt đánh giá trước, Đánh giá chất lượng giảng dạy.",
      phamViTuDanhGia:
        "Từ năm học 2022-2023 đến 2025-2026, Tập trung tiêu chuẩn 3 5 6.",
      ngayBatDau: "2025-10-01",
      ngayKetThuc: "2026-07-30",
      nguoiKy: "Tô Ngọc Bảo",
      fileKeHoach: "Xem file",
      quyetDinhThanhLapHoiDong: "QĐ-HTDG-KTPM-2024",
    },
    {
      maKeHoach: "KH-CNTTTT-2024",
      tenKeHoach: "Kế hoạch TDG CTĐT CNTT Tiên tiến K20",
      chuongTrinhDaoTaoApDung: "CNTT Tiên tiến",
      maGiaiDoan: "2023-2028",
      boTieuChuanApDung: "AUN-QA",
      phienBanBoTieuChuan: "Version 4.0",
      mucTieuTuDanhGia:
        "Tự đánh giá theo chuẩn AUN-QA để chuẩn bị cho đánh giá ngoài bởi AUN.",
      phamViTuDanhGia: "Toàn bộ CTĐT từ năm 2020 đến nay, 11 tiêu chí AUN-QA.",
      ngayBatDau: "2024-08-01",
      ngayKetThuc: "2025-02-28",
      nguoiKy: "Tô Ngọc Bảo",
      fileKeHoach: "Xem file",
      quyetDinhThanhLapHoiDong: "QĐ-HTDG-KTPM-2024",
    },
  ];

export const selectChuongTrinhDaoTaoApDung: string[] = [
  "Kỹ thuật Phần mềm",
  "Quản trị Kinh doanh",
  "Khoa học Máy tính",
  "CNTT Tiên tiến",
];

export const selectGiaiDoan: string[] = [
  "2021-2026",
  "2022-2027",
  "2023-2028",
];
export const selectHoiDongTuDanhGia: string[] = [
  "QĐ-HTDG-KTPM-2024"
]
export const mockDataAssignmentTasks: IAssignmentTasksInfoViewModel[] = [
  {
    tieuChuan: "Tiêu chuẩn 1",
    nhomCongTac: "Nhóm Tiêu chí 1-3",
    thoiGianThuThapThongTinVaMinhChung: "2025-07-01 - 2025-09-30",
    ghiChu: "Tập trung hoàn thiện khung chương trình và chuẩn đầu ra",
  },
  {
    tieuChuan: "Tiêu chuẩn 5",
    nhomCongTac: "Nhóm Tiêu chí 5-7",
    thoiGianThuThapThongTinVaMinhChung: "2025-08-01 - 2025-10-15",
    ghiChu: "Cần báo cáo chi tiết về đội ngũ giảng viên và nghiên cứu viên",
  },
  {
    tieuChuan: "Tiêu chuẩn 9",
    nhomCongTac: "Nhóm Tiêu chí 5-7",
    thoiGianThuThapThongTinVaMinhChung: "2025-09-01 - 2025-11-30",
    ghiChu: "Hỗ trợ tổng hợp minh chứng tài chính và cơ sở vật chất",
  },
];

export const selectTieuChuanAssignmentTasks: string[] = [
  "Tiêu chuẩn 1",
  "Tiêu chuẩn 5",
  "Tiêu chuẩn 9",
];

export const selectNhomCongTac: string[] = [
  "Nhóm Tiêu chí 1-3",
  "Nhóm Tiêu chí 5-7",
  "Nhóm Tiêu chí 8-10",
];

export const mockDataResourceMobilization: IResourceMobilizationInfoViewModel[] =
  [
    {
      tieuChuan: "Tiêu chuẩn 6",
      hoatDong: "Tổ chức Hội thảo Lấy ý kiến các bên liên quan",
      cacNguonLucCanHuyDong:
        "Kinh phí 20.000.000 VND; 2 Chuyên gia tư vấn ngoài",
      thoiDiemCanHuyDong: "Quý 4/2025",
      ghiChu:
        "Để tổ chức đánh giá hoạt động nghiên cứu khoa học; Liên hệ Phòng KHCN",
    },
    {
      tieuChuan: "Tiêu chuẩn 2",
      hoatDong: "Tổ chức Hội thảo Lấy ý kiến các bên liên quan",
      cacNguonLucCanHuyDong:
        "Phần mềm khảo sát online (license 1 năm); 1 thiết bị ghi hình chất lượng cao",
      thoiDiemCanHuyDong: "Quý 3/2025",
      ghiChu: "Để khảo sát và phỏng vấn người học cựu người học",
    },
    {
      tieuChuan: "Tiêu chuẩn 7",
      hoatDong: "Tổ chức Hội thảo Lấy ý kiến các bên liên quan",
      cacNguonLucCanHuyDong:
        "Kinh phí di chuyển 3.000.000 VND; Xe công tác (1 chiếc 4 chỗ)",
      thoiDiemCanHuyDong: "Tháng 11/2025",
      ghiChu: "Cho chuyến đi thực tế khảo sát doanh nghiệp đối tác",
    },
    {
      tieuChuan: "Tiêu chuẩn 9",
      hoatDong: "Tổ chức Hội thảo Lấy ý kiến các bên liên quan",
      cacNguonLucCanHuyDong:
        "200m2 kho lưu trữ tài liệu; Kệ sắt chuyên dụng (10 bộ)",
      thoiDiemCanHuyDong: "Quý 1/2026",
      ghiChu: "Để lưu trữ các hồ sơ minh chứng vật lý",
    },
  ];

export const selectTieuChuanResourceMobilization: string[] = [
  "Tiêu chuẩn 6",
  "Tiêu chuẩn 2",
  "Tiêu chuẩn 7",
  "Tiêu chuẩn 9",
];
