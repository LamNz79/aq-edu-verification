export interface ITrackSelfAssessmentProgressCurrentSituationRowHistory {
  id: string;
  name?: string;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  status?: boolean;
}

export interface ITrackSelfAssessmentProgressCurrentSituationRowHistoryProof {
  id: string;
  code: string;
  name?: string;
  content?: string;
  status?: string;
  isUsed?: boolean;
}

export interface ITrackSelfAssessmentProgressCurrentSituationRowHistoryProofDetail {
  id?: number;
  fileId?: string; // Mã file
  name?: string; // Tên file
  issuedDate?: string; // Ngày ban hành
  issuedNumber?: string; // Số quyết định
  issuer?: string; // Đơn vị ban hành
  link?: string; // Link đính kèm
  effectiveFrom?: string; // Hiệu lực từ ngày
  effectiveTo?: string; // Hiệu lực đến ngày
  note?: string; // Ghi chú phiên bản
  status?: boolean;
}

export interface ITrackSelfAssessmentProgressCurrentSituationRowProofLocal {
  id?: number;
  planCode?: string; // Mã kế hoạch TDG
  programCode?: string; // Mã CTĐT
  courseCode?: string; // Mã khóa học (K2020, K2021, K2019...)
  standardCode?: string; // Mã tiêu chuẩn (TC_05, TC_01...)
  criterionCode?: string; // Mã tiêu chí (TC_05.02)
  evidenceCode?: string; // Mã minh chứng (H5.05.02.01)
  fileId?: string; // Mã file (FILE_ID_0001...)
  fileName?: string; // Tên file hiển thị
  link?: string; // Link file đính kèm
  issuedNumber?: string; // Số quyết định
  issuedDate?: string; // Ngày ban hành
  issuer?: string; // Đơn vị ban hành
  effectiveFrom?: string; // Hiệu lực từ ngày
  effectiveTo?: string; // Hiệu lực đến ngày
}
