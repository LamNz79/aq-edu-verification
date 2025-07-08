export interface ITrackSelfAssessmentProgressSelfEvaluationRowHistory {
  id: string;
  name?: string;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  status?: boolean;
}

export interface ITrackSelfAssessmentProgressSelfEvaluationRowHistoryTable {
  id: string;
  code: string;
  name: string;
  description?: string;
  evaluator?: string;
  date?: string;
  note?: string;
}
