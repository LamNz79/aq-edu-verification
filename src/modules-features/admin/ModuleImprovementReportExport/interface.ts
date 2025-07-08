export interface IImprovementReportExportViewModel {
  id: number;
  programName: string; // Tên chương trình đào tạo
  period: string; // Giai đoạn (2020-2024, ...)
  standardCode: string; // Mã tiêu chuẩn (TC_01...)
  criterionCode: string; // Mã tiêu chí (TC_01.01...)
  criterionName: string; // Tên tiêu chí
  statusExternal?: boolean; // kết quả đánh giá ngoài
  externalComment?: string; // Nội dung đánh giá ngoài
  reportDate?: string; // Ngày báo cáo giữa kỳ
  finishDate?: string; // Ngày hoàn thành
  reporterCode?: string; // Mã nhân sự báo cáo
  reporterName?: string; // Họ tên
  status?: boolean; // Tự đánh giá cải tiến
  statusCheck: number;
  sendNotification?: boolean;
  note?: string;
}
