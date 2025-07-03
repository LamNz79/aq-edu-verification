export default interface IQualityInspectionCertificateViewModel {
  code?: string; 
  issuer?: string; 
  issueDate?: Date; 
  expiryDate?: Date; 
  inspectionBatch?: string; 
  isActive?: boolean; 
  file?: File;
}
