export interface IStandardManagementViewModel {
  id: string;
  code: string;
  date: string;
  name: string;
  description: string;
  nameVersion: string;
  filePath?: string;
  descriptionVersion?: string;
  fileDetail?: {
    fileName: string;
    fileExtension: string;
    fileBase64String: string;
  };
  status?: boolean;
}