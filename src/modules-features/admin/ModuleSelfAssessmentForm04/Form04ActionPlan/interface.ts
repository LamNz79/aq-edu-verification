export interface IForm04ActionPlanRowHistory {
  id: string;
  name?: string;
  ngayCapNhat?: string;
  nguoiCapNhat?: string;
  status?: boolean;
}

export interface IForm04ActionPlanRowHistoryTable {
  id: number;
  code: string;
  name: string;
  description?: string;
  evaluator?: string;
  date?: string;
  note?: string;
}
