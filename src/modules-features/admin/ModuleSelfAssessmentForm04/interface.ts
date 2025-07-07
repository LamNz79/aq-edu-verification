export interface ISelfAssessmentForm04ViewModel {
  id?: number;
  code?: string; // mã tiêu chí
  name?: string; // tên tiêu chí
  description?: string;
  planCode?: string;              // Mã Kế hoạch TDG (KH-KTPM-2024)
  programCode?: string;           // Mã CTĐT (KTPM)
  courseCode?: string;            // Mã Khóa (KTPM_K20)
  standardCode?: string;          // Mã Tiêu chuẩn (TC_05)
  groupCode?: string;          // Mã nhóm nghiên cứu (NCT_TC5-7)
  evaluator?: string;             // Thành viên phụ trách (ThS. Hoàng Thị E)
  selfAssessmentStatus?: 'Đạt yêu cầu' | 'Không đạt' | 'Chưa đánh giá';
  checkStatus?: 'Đã kiểm tra' | 'Chưa kiểm tra' | 'Cần hiệu chính';
}