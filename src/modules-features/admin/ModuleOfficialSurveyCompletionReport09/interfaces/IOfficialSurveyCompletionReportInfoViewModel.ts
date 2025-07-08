export interface IOfficialSurveyCompletionReportInfoViewModel {
  id?: number; // STT
  programName?: string; // Chương trình đào tạo
  evaluationPeriod?: string; // Giai đoạn đánh giá
  reportDate?: Date; // Ngày lập biên bản
  teamLeader?: string; // Trưởng đoàn
  unitHead?: string; // Thư trưởng đơn vị
  reportFile?: string; // File biên bản hoàn thành khảo sát chính thức
  filePath?: string;
  fileDetail?: {
    fileName?: string;
    fileExtension?: string;
    fileBase64String?: string;
  };
}
