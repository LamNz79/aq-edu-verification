interface IEstablishCouncil {
  id: number;
  code: string;
  date: string;
  name: string;
  signatory: string;
  filePath: string;
  fileDetail: FileViewModel;
}

export type { IEstablishCouncil };
