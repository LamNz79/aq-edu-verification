export interface IStandardsConfigStandardViewModel {
  id: string;
  code: string;
  name: string;
  nameEg: string;
  note: string;
}

export interface IStandardsConfigCriteriaViewModel {
  id: string;
  code: string;
  name: string;
  nameEg?: string;
  standardCode: string;
  suggested?: string;
  note?: string;
}

export interface IStandardsConfigRequirementViewModel {
  id: string;
  code: string;
  name: string;
  criteriaCode: string;
  criteriaName: string;
  standardCode: string;
  note?: string;
  description?: string;
}