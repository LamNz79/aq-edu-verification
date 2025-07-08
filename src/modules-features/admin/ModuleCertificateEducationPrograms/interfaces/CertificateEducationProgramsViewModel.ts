export interface CertificateEducationProgramsViewModel {
  id?: number;
  certificateNumber?: string;
  issuingAuthority?: string;
  issueDate?: Date;
  expiryDate?: Date;
  trainingProgram?: string;
  cohort?: string;
  accreditationRound?: string;
  isValid?: boolean;
  certificateFile?: string;
  period?: string;
  notes?: string;
}
