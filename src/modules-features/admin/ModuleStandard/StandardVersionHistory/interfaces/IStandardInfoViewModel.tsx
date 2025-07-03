export interface IStandardInfoViewModel {
  id?: number;
  versionName?: string;
  versionDescription?: string;
  issueDate?: string;
  filePath?: string;
  isActive?: boolean;
  fileDetail?: {
    fileName?: string;
    fileExtension?: string;
    fileBase64String?: string;
  };
}
