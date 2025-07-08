export interface IExternalReviewInputViewModel {
  id: number;
  name?: string; // Tên tiêu chí
  code?: string; // Mã Tiêu chí (TC_01.01, ...)
  planNumber?: string; // Số kế hoạch ĐGN (123/KH-KDCLGD, ...)
  programCode?: string; // Mã CTĐT
  courseCode?: string; // Mã Khóa
  standardCode?: string; // Mã Tiêu chuẩn (TC_01, ...)
  status?: boolean;
}
