export interface ITrackSelfAssessmentProgressViewModel {
  id?: number;
  planCode?: string;
  programCode?: string;
  courseCode?: string;
  standardCode?: string;
  code?: string;
  name?: string;
  description?: string;
  groupCode?: string;
  evaluator?: string;
  assignDate?: Date;
  endDate?: Date;
  selfAssessmentStatus?: "Đạt" | "Không đạt" | "Chưa đánh giá";
  detailSelfAssessmentId?: number;
  checkStatus?: "Đạt yêu cầu" | "Đang kiểm tra" | "Chưa kiểm tra";
  notificationSent?: boolean;
  notificationContentId?: number;
}

export interface ITrackSelfAssessmentProgressNotificationDetail {
  id?: number;
  sendDate?: Date; // Ngày gửi
  sender?: string; // Người gửi
  receiver?: string; // Người nhận
  content?: string; // Nội dung thông báo
}
