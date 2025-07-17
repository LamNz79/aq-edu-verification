export interface ITrackSelfAssessmentProgressActionPlanRowHistory {
  id: string;
  name?: string;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  status?: boolean;
}

export interface ITrackSelfAssessmentProgressActionPlanRowHistoryTable {
  id: number;
  code: string;
  name: string;
  description?: string;
  evaluator?: string;
  date?: string;
  note?: string;
}
