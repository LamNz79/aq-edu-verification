export interface IManageTrainingProgramSelfAssessmentPlanInfoViewModel {
  maKeHoach?: string; // Mã kế hoạch
  tenKeHoach?: string; // Tên kế hoạch
  chuongTrinhDaoTaoApDung?: string; // Chương trình Đào tạo áp dụng
  maGiaiDoan?: string; // Mã giai đoạn
  boTieuChuanApDung?: string; // Bộ Tiêu chuẩn áp dụng
  phienBanBoTieuChuan?: string; // Phiên bản Bộ Tiêu chuẩn
  mucTieuTuDanhGia?: string; // Mục tiêu tự đánh giá
  phamViTuDanhGia?: string; // Phạm vi tự đánh giá
  ngayBatDau?: string; // Ngày bắt đầu
  ngayKetThuc?: string; // Ngày kết thúc
  nguoiKy?: string; // Người ký
  fileKeHoach?: string; // File kế hoạch
  quyetDinhThanhLapHoiDong?: string; // Quyết định Thành lập Hội đồng
}

export interface IAssignmentTasksInfoViewModel {
  tieuChuan?: string; // Tiêu chuẩn
  nhomCongTac?: string; // Nhóm công tác
  thoiGianThuThapThongTinVaMinhChung?: string; // Thời gian thu thập thông tin và minh chứng (Dự kiến)
  ghiChu?: string; // Ghi chú
}

export interface IResourceMobilizationInfoViewModel {
  tieuChuan?: string; // Tiêu chuẩn
  hoatDong?: string; // Hoạt động
  cacNguonLucCanHuyDong?: string; // Các nguồn lực cần huy động
  thoiDiemCanHuyDong?: string; // Thời điểm cần huy động
  ghiChu?: string; // Ghi chú
}
