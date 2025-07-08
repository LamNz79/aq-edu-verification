export interface ICheckCriteriaAnalysisInfoViewModel {
  maKeHoachTdg?: string; // Mã kế hoạch TDG
  nhomCongTac?: string; // Nhóm công tác
  thanhVienPhuTrach?: string; // Thành viên phụ trách
  maTieuChi?: string; // Mã Tiêu chí
  tenTieuChi?: string; // Tên Tiêu chí
  trangThaiPhanTich?: string; // Trạng thái phân tích
  trangThaiKiemTra?: string; // Trạng thái kiểm tra
  nhanXetCuaTruongNhom?: string; // Nhận xét của trưởng nhóm
}


export interface ICriteriaAnalysisDetailInfoViewModel {
  maYeuCau?: string; // Mã yêu cầu
  yeuCau?: string; // Yêu cầu
  cauHoiDatRa?: string; // Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)
  canThuThap?: string; // Cần thu thập
  noiThuThap?: string; // Nơi thu thập
  phuongPhapThuThap?: string; // Phương pháp thu thập
}


export interface IExpectedEvidenceInfoViewModel {
  maTieuChuan?: string; // Mã tiêu chuẩn
  maTieuChi?: string; // Mã tiêu chí
  maMinhChung?: string; // Mã minh chứng
  tenMinhChung?: string; // Tên minh chứng
  trucThuocMinhChung?: string; // Trực thuộc minh chứng
  soNgayBanHanhThoiDiemKhaoSat?: string; // Số - ngày ban hành - thời điểm khảo sát
  noiBanHanh?: string; // Nơi ban hành
  ghiChu?: string; // Ghi chú
}


