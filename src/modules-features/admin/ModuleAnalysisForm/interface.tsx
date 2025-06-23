export interface IStandardViewModel {
  id: string;
  name: string;
  code: string;
}

export interface IRequirementViewModel {
  id: string;
  name: string;
  code: string;
}

export interface IUserViewModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IGroupViewModel {
  id: string;
  code: string;
  name: string;
}

export interface IAnalysisFormInfoViewModel {
  id: string;
  name: string;
  code: string;
  standardCode?: string;
  standard?: IStandardViewModel;
  leaderCode?: string;
  leader?: IUserViewModel;
  groupCode?: string;
  group?: IGroupViewModel;
}

export interface ICriteriaAnalysisViewModel {
  id: string;
  name: string;
  code: string; // mã mốc chuẩn
  groupCode?: string;
  group?: IGroupViewModel;
  standardCode?: string; // Mã tiêu chuẩn
  requirementCode?: string; // Mã yêu cầu
  criteriaCode?: string; // Mã tiêu chí
  location?: string; // Vị trí
  method?: string; // Phương pháp
  codeEvent?: string; // Mã sự kiện
}

export interface IExpectedEvidenceViewModel {
  id: string;
  name: string;
  code: string;
  date: string;
  issuanceNumber: string; // Số ban hành
  note: string; // Ghi chú
  location: string; // Vị trí
}
