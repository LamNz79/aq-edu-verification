export interface I_CriteriaAssignment {
  id?: number;
  curriculumName?: string; 
  curriculumCode?: string;
  planCode?: string;
  groupCode?: string;
  responsibleMember?: string;
  criteriaCode?: string;
  criteriaName?: string;
  status?: string;
  createdAt?: string; // ISO8 string
}

export interface I_Requirement {
  id?: number;
  code?: string; // Mã yêu cầu
  description?: string; // Yêu cầu
  outputStandard?: string; // Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)
  collectEvidence?: string; // Cần thu thập
  collectPlace?: string; // Nơi thu thập
  collectMethod?: string; // Phương pháp thu thập
}

export interface I_EvidenceForecast {
  id?: number;
  code?: string;
  criteriaGroupCode?: string; // Mã Tiêu chí
  criteriaCode?: string; // Mã Tiêu chí con
  evidenceCode?: string; // Mã Minh chứng
  evidenceName?: string; // Tên Minh chứng
  evidenceBelongToCode?: string; // Trực thuộc minh chứng
  issuedInfo?: string; // Số - ngày ban hành - thời điểm khảo sát
  issuingDept?: string; // Nơi ban hành
  note?: string; // Ghi chú
}
