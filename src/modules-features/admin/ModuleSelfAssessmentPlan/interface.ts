export interface ISelfAssessmentPlanViewModel {
  id: string;
  code: string;
  date: string;
  name: string;
  signatory: string;
  filePath: string;
  fileDetail: {
    fileName: string;
    fileExtension: string;
    fileBase64String: string;
  };
}


export interface IAssignmentGroupViewModel {
  id: string;
  code: string;
  name: string;
  groupId?: string;
  group?: IGroupViewModel,
  note?: string;
}

export interface IGroupViewModel {
  id: string;
  name: string;
  code: string;
}


export interface IResourceMobilizationViewModel {
  id: string;
  code: string;
  name: string;
  standardId?: string;
  standard?: IAssignmentGroupViewModel;
  resourceTypes?: string;
  time?: string;
  note?: string;
}
