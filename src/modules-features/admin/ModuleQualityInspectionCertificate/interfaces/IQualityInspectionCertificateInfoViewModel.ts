export default interface IQualityInspectionCertificateInfoViewModel {
  id?: number;
  code?: string; // Số Giấy chứng nhận
  issuer?: string; // Đơn vị cấp
  issueDate?: string; // Ngày cấp
  expiryDate?: string; // Ngày hết hiệu lực
  inspectionBatch?: string; // Đợt Kiểm định
  isActive?: boolean; // Trạng thái hiệu lực
  filePath?: string;
  fileDetail?: {
    fileName?: string;
    fileExtension?: string;
    fileBase64String?: string;
  };
}
