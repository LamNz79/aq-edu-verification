export interface IForm04SelfEvaluationRowHistory {
  id: string;
  name?: string;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  status?: boolean;
}

export interface IForm04SelfEvaluationRowHistoryTable {
  id: string;
  code: string;
  name: string;
  description?: string;
  evaluator?: string;
  date?: string;
  note?: string;
}
