export interface IEvidenceData {
  evidenceCode: string;
  evidenceName: string;
  parentEvidenceCode?: string;
  note?: string;
  attachedFile?: string;
  link?: string;
  issuanceNumberDate?: string;
  issuingUnit?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
}

export interface IEvidenceVersion {
  fileId: string;
  fileName: string;
  attachedFile?: string;
  link?: string;
  issuanceNumberDate: string;
  issuingUnit: string;
  effectiveFrom: string;
  effectiveTo?: string;
  versionNote?: string;
  isCurrent: boolean;
  evidenceCode: string;
}

export interface IEvidenceUsage {
  evaluationPlanCode: string;
  programCode: string;
  cohort: string;
  standardCode: string;
  criteriaCode: string;
  evidenceCode: string;
  fileId: string;
  displayFileName: string;
  attachedFile?: string;
  link?: string;
  issuanceNumberDate: string;
  issuingUnit: string;
  effectiveFrom: string;
  effectiveTo?: string;
}

export interface IEvidenceManagementFormData {
  evidence: IEvidenceData;
  versions: IEvidenceVersion[];
  usages: IEvidenceUsage[];
}
