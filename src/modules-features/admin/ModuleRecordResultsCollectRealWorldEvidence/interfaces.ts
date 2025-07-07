export interface IRecordResultsCollectRealWorldEvidenceInfoViewModel {
  maKeHoachTdg?: string; // Mã kế hoạch TDG
  maNhomCt?: string; // Mã nhóm CT
  thanhVienPhuTrach?: string; // Thành viên phụ trách
  maTieuChuan?: string; // Mã tiêu chuẩn
  maTieuChi?: string; // Mã tiêu chí
  maMcDuKien?: string; // Mã MC dự kiến
  tenMcDuKien?: string; // Tên MC dự kiến
  maMcThucTe?: string; // Mã MC thực tế
  tenMc?: string; // Tên MC
  soNgayBanHanh?: string; // Số - Ngày ban hành
  donViBanHanh?: string; // Đơn vị ban hành
  fileDinhKem?: string; // File đính kèm
  linkLienKet?: string; // Link liên kết
  ghiChu?: string; // Ghi chú
  trangThaiKiemDuyetMc?: string; // Trạng thái kiểm duyệt MC
}

export interface ICollectEvidenceInfoViewModel {
  maMinhChung?: string; // Mã minh chứng
  tenMinhChung?: string; // Tên minh chứng
  maMcTrucThuocCha?: string; // Mã MC trực thuộc (Cha)
  soNgayBanHanh?: string; // Số - Ngày ban hành
  donViBanHanh?: string; // Đơn vị ban hành
  hieuLucTuNgay?: string; // Hiệu lực từ ngày (dd/mm/yyyy)
  hieuLucDenNgay?: string; // Hiệu lực đến ngày (dd/mm/yyyy)
  trangThaiHieuLuc?: string; // Trạng thái hiệu lực
  fileDinhKem?: string; // File đính kèm
  linkLienKet?: string; // Link liên kết
  ghiChu?: string; // Ghi chú
}

export interface ITabEvidenceVersionInfoViewModel {
  idFile?: string; // ID file
  tenFile?: string; // Tên file
  fileDinhKem?: string; // File đính kèm
  linkLienKet?: string; // Link liên kết
  soNgayBanHanh?: string; // Số - Ngày ban hành
  donViBanHanhCap?: string; // Đơn vị ban hành/ cấp
  hieuLucTuNgay?: string; // Hiệu lực từ ngày (dd/mm/yyyy)
  hieuLucDenNgay?: string; // Hiệu lực đến ngày (dd/mm/yyyy)
  ghiChuPhienBan?: string; // Ghi chú phiên bản
  hienHanh?: boolean; // Hiện hành?
}

export interface ICollectEvidenceViewModel {
  maMinhChung?: string; // Mã minh chứng
  tenMinhChung?: string; // Tên minh chứng
  maMcTrucThuocCha?: string; // Mã MC trực thuộc (Cha)
  soNgayBanHanh?: string; // Số - Ngày ban hành
  donViBanHanh?: string; // Đơn vị ban hành
  hieuLucTuNgay?: string; // Hiệu lực từ ngày (dd/mm/yyyy)
  hieuLucDenNgay?: string; // Hiệu lực đến ngày (dd/mm/yyyy)
  trangThaiHieuLuc?: string; // Trạng thái hiệu lực
  fileDinhKem?: string; // File đính kèm
  linkLienKet?: string; // Link liên kết
  ghiChu?: string; // Ghi chú
}

export interface ITabPlaceToUseInfoViewModel {
  maKeHoachTdg?: string; // Mã kế hoạch TDG
  maCtdt?: string; // Mã CTĐT
  khoa?: string; // Khóa
  maTieuChuan?: string; // Mã tiêu chuẩn
  maTieuChi?: string; // Mã tiêu chí
  maMinhChung?: string; // Mã minh chứng
  idFileHeThong?: string; // ID file (Hệ thống)
  tenFileHienThi?: string; // Tên file hiển thị
  fileDinhKem?: string; // File đính kèm
  linkLienKet?: string; // Link liên kết
  soNgayBanHanh?: string; // Số - Ngày ban hành
  donViBanHanhCap?: string; // Đơn vị ban hành/ cấp
  hieuLucTuNgay?: string; // Hiệu lực từ ngày (dd/mm/yyyy)
  hieuLucDenNgay?: string; // Hiệu lực đến ngày (dd/mm/yyyy)
}
