interface IEstablishCouncilViewModel {
  id: number;
  code: string;
  date: string;
  name: string;
  signatory: string;
  filePath: string;
  fileDetail: FileViewModel;
}

interface IEstablishCouncilMemberViewModel {
  id: number;
  name: string;
  code: string;
  position: string; // Chức vụ
  responsibility: string; // Nhiệm vụ
  groupName?: string; // Nhóm công tác
}

export type { IEstablishCouncilViewModel, IEstablishCouncilMemberViewModel };
