import { ICheckCriteriaAnalysisInfoViewModel, ICriteriaAnalysisDetailInfoViewModel, IExpectedEvidenceInfoViewModel } from "./interface"

export const mockDataCheckCriteriaAnalysis: ICheckCriteriaAnalysisInfoViewModel[] = [
  {
    maKeHoachTdg: "KH-KTPM-2024",
    nhomCongTac: "NCT_TC5-7, Nhóm Tiêu chí 5-7",
    thanhVienPhuTrach: "ThS. Hoàng Thị E",
    maTieuChi: "TC_05.02",
    tenTieuChi: "Các quy định về đánh giá KQHT",
    trangThaiPhanTich: "Đã soạn xong; chờ kiểm tra",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXetCuaTruongNhom: undefined
  },
  {
    maKeHoachTdg: "KH-KTPM-2024",
    nhomCongTac: "NCT_TC5-7, Nhóm Tiêu chí 5-7",
    thanhVienPhuTrach: "ThS. Hoàng Thị E",
    maTieuChi: "TC_05.01",
    tenTieuChi: "Các chính sách, quy định về đánh giá KQHT",
    trangThaiPhanTich: "Đang thực hiện",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXetCuaTruongNhom: undefined
  },
  {
    maKeHoachTdg: "KH-KTPM-2024",
    nhomCongTac: "NCT_TC1-3, Nhóm Tiêu chí 1-3",
    thanhVienPhuTrach: "TS. Trần Văn C",
    maTieuChi: "TC_0101",
    tenTieuChi: "Mục tiêu và Chuẩn đầu ra của CTĐT",
    trangThaiPhanTich: "Đã soạn xong; chờ kiểm tra",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXetCuaTruongNhom: undefined
  },
  {
    maKeHoachTdg: "KH-QTKD-2025",
    nhomCongTac: "NCT_TC7-9, Nhóm Tiêu chí 7-9",
    thanhVienPhuTrach: "CN Bùi Thị L",
    maTieuChi: "TC_07.03",
    tenTieuChi: "Thực tập và hỗ trợ việc làm",
    trangThaiPhanTich: "Chưa bắt đầu",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXetCuaTruongNhom: undefined
  },
  {
    maKeHoachTdg: "KH-KHMT-2025",
    nhomCongTac: "NCT_TC2-4, Nhóm Tiêu chí 2-4",
    thanhVienPhuTrach: "ThS. Nguyễn Thị K",
    maTieuChi: "TC_02.01",
    tenTieuChi: "Đề cương chi tiết học phần",
    trangThaiPhanTich: "Cần hiệu chỉnh",
    trangThaiKiemTra: "Chưa kiểm tra",
    nhanXetCuaTruongNhom: undefined
  }
]


export const selectTrangThaiKiemTra: string[] = [
  "Chưa kiểm tra",
  "Cần hiệu chỉnh",
  "Đạt yêu cầu"
]

export const mockDataCriteriaAnalysisDetail: ICriteriaAnalysisDetailInfoViewModel[] = [
  {
    maYeuCau: "YC1.1",
    yeuCau: "Các quy định về đánh giá kết quả học tập của NH (bao gồm thời gian; phương pháp; tiêu chí; trọng số; cơ chế phản hồi và các nội dung liên quan) rõ ràng.",
    cauHoiDatRa: "Các tài liệu/hướng dẫn được xác định rõ ràng về thời gian; hình thức; phương pháp; tiêu chí; trọng số; cơ chế phản hồi và các nội dung liên quan đến đánh giá và kết quả học tập của NH.",
    canThuThap: "Quy định đào tạo/thi; kiểm tra; đánh giá*; Mẫu phiếu/bản rubrics đánh giá khóa học/môn học; học phần/đề tài/đề án/luận văn; luận án/bài thi cuối kỳ/cuối khóa.",
    noiThuThap: "ĐHĐN, Khoa Kinh tế, P.ĐT",
    phuongPhapThuThap: "Lấy từ P.ĐT; Khoa Kinh tế hoặc tham mưu các đơn vị chức năng ban hành nếu thiếu"
  },
  {
    maYeuCau: "YC1.1",
    yeuCau: "Các quy định về đánh giá kết quả học tập của NH (bao gồm thời gian; phương pháp; tiêu chí; trọng số; cơ chế phản hồi và các nội dung liên quan) được thông báo công khai tới NH",
    cauHoiDatRa: "Các tài liệu/hướng dẫn quy định cụ thể về thời gian; hình thức; phương pháp; tiêu chí; trọng số; cơ chế phản hồi và các nội dung liên quan đến đánh giá và kết quả học tập của NH được công bố công khai tới NH trước mỗi khóa học/kỳ học/học phần; NH được phổ biến các quy định về kiểm tra/đánh giá kết quả học tập.",
    canThuThap: "Bản mô tả CTĐT/bản mô tả môn học/học phần*; Sổ tay sinh viên*; Trang thông tin điện tử của CSGD có các quy định về đánh giá*; Đề cương các môn học; học phần.",
    noiThuThap: "ĐHĐN, Khoa Kinh tế, P.ĐT",
    phuongPhapThuThap: "Lấy từ P.ĐT; Khoa Kinh tế hoặc tham mưu các đơn vị chức năng ban hành nếu thiếu"
  }
]

export const mockDataExpectedEvidence: IExpectedEvidenceInfoViewModel[] = [
  {
    maTieuChuan: "TC_01",
    maTieuChi: "TC_01.01",
    maMinhChung: "H1.01.01.01",
    tenMinhChung: "Quyết định về mục tiêu và chuẩn đầu ra của CTĐT",
    trucThuocMinhChung: undefined,
    soNgayBanHanhThoiDiemKhaoSat: "Số 123/QĐ-ĐT ngày 15/01/2024",
    noiBanHanh: "Phòng Đào tạo",
    ghiChu: "Cần phiên bản mới nhất; đảm bảo có dấu mộc đỏ."
  },
  {
    maTieuChuan: "TC_01",
    maTieuChi: "TC_01.01",
    maMinhChung: "H1.01.01.02",
    tenMinhChung: "Biên bản họp lấy ý kiến xây dựng mục tiêu/chuẩn đầu ra",
    trucThuocMinhChung: "H1.01.01.01",
    soNgayBanHanhThoiDiemKhaoSat: "Biên bản họp số 05/BB-KH ngày 10/02/2024",
    noiBanHanh: "Khoa Kinh tế",
    ghiChu: "Minh chứng kèm cho QĐ về mục tiêu."
  },
  {
    maTieuChuan: "TC_03",
    maTieuChi: "TC_03.02",
    maMinhChung: "H3.03.02.15",
    tenMinhChung: "Báo cáo tỷ lệ sinh viên nhập học hàng năm theo CTĐT",
    trucThuocMinhChung: undefined,
    soNgayBanHanhThoiDiemKhaoSat: "Từ năm học 2022-2023 đến 2024-2025",
    noiBanHanh: "Phòng Đào tạo",
    ghiChu: "Đối chiếu với số liệu tuyển sinh đại học."
  },
  {
    maTieuChuan: "TC_04",
    maTieuChi: "TC_04.03",
    maMinhChung: "H4.04.03.25",
    tenMinhChung: "Biên bản họp Hội đồng khoa cấp Khoa về hoạt động NCKH của SV",
    trucThuocMinhChung: undefined,
    soNgayBanHanhThoiDiemKhaoSat: "Từ 2023-01-01 đến 2025-06-30",
    noiBanHanh: "Khoa CNTT",
    ghiChu: "Cần tổng hợp các chủ đề đề tài SV nghiên cứu."
  },
  {
    maTieuChuan: "TC_05",
    maTieuChi: "TC_05.01",
    maMinhChung: "H5.05.01.03",
    tenMinhChung: "Quy chế đánh giá kết quả học tập của người học",
    trucThuocMinhChung: undefined,
    soNgayBanHanhThoiDiemKhaoSat: "Số 456/QĐ-ĐT ngày 20/08/2023",
    noiBanHanh: "Phòng Đào tạo",
    ghiChu: "Xem xét các điều khoản về cơ chế phản hồi."
  },
  {
    maTieuChuan: "TC_06",
    maTieuChi: "TC_06.01",
    maMinhChung: "H6.06.01.07",
    tenMinhChung: "Danh mục công trình khoa học công nghệ của giảng viên",
    trucThuocMinhChung: undefined,
    soNgayBanHanhThoiDiemKhaoSat: "Từ năm 2023 đến 2025",
    noiBanHanh: "Phòng KHCN",
    ghiChu: "Phân loại theo chuẩn ISI/Scopus."
  },
  {
    maTieuChuan: "TC_06",
    maTieuChi: "TC_06.01",
    maMinhChung: "H6.06.01.08",
    tenMinhChung: "Minh chứng về bài báo khoa học của giảng viên (trích yếu/bìa tạp chí)",
    trucThuocMinhChung: "H6.06.01.07",
    soNgayBanHanhThoiDiemKhaoSat: "Năm 2024",
    noiBanHanh: "Khoa CNTT",
    ghiChu: "Minh chứng chi tiết cho danh mục công trình."
  }
]