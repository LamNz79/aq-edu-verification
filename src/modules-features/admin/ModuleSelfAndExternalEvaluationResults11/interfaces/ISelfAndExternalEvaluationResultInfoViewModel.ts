export interface ISelfAndExternalEvaluationResultInfoViewModel {
  id?: number;
  programName?: string;
  evaluationPeriod?: string;
  organizationName?: string;
  summaryDate?: Date; 
  signer?: string;
  note?: string;
  filePath?: string;
  fileDetail?: {
    fileName?: string;
    fileExtension?: string;
    fileBase64String?: string;
  };
}
