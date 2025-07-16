"use client";

import { useMemo } from "react";
import { ITrackSelfAssessmentProgressViewModel } from "./interface";
import { MRT_ColumnDef } from "mantine-react-table";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@mantine/core";
import { U0DateToDDMMYYYString } from "@/utils/date";
import TrackSelfAssessmentProgressDetail from "./TrackSelfAssessmentProgressDetail";
import { MyButton, MyCenterFull } from "aq-fe-framework/components";
import TrackSelfAssessmentProgressSendNoti from "./TrackSelfAssessmentProgressSendNoti";
import TrackSelfAssessmentProgressNotiDetail from "./TrackSelfAssessmentProgressNotiDetail";

export default function TrackSelfAssessmentProgressTable() {
  const TrackSelfAssessmentProgressList = useQuery({
    queryKey: ["TrackSelfAssessmentProgressList"],
    queryFn: () => mockData,
  });

  const columns = useMemo<
    MRT_ColumnDef<ITrackSelfAssessmentProgressViewModel>[]
  >(
    () => [
      {
        header: "Mã Kế hoạch TDG",
        accessorKey: "planCode",
      },
      {
        header: "Mã CTĐT",
        accessorKey: "programCode",
      },
      {
        header: "Mã Khóa",
        accessorKey: "courseCode",
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "code",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Nhóm công tác chuyên trách",
        accessorKey: "groupCode",
      },
      {
        header: "Thành viên phụ trách",
        accessorKey: "evaluator",
      },
      {
        header: "Ngày phụ trách",
        accessorKey: "assignDate",
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>();
          return date ? U0DateToDDMMYYYString(date) : "";
        },
      },
      {
        header: "Ngày kết thúc",
        accessorKey: "endDate",
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>();
          return date ? U0DateToDDMMYYYString(date) : "";
        },
      },
      {
        header: "Tự đánh giá",
        accessorKey: "selfAssessmentStatus",
      },
      {
        header: "Chi tiết tự đánh giá",
        accessorKey: "detailSelfAssessmentId",
        Cell: () => {
          return (
            <MyCenterFull>
              <TrackSelfAssessmentProgressDetail />
            </MyCenterFull>
          );
        },
      },
      {
        header: "Trạng thái kiểm tra",
        accessorKey: "checkStatus",
      },
      {
        header: "Đã gửi thông báo",
        accessorKey: "notificationSent",
        Cell: ({ cell }) => {
          const sent = cell.getValue<boolean>();
          return (
            <MyCenterFull>
              <Checkbox checked={sent} readOnly />
            </MyCenterFull>
          );
        },
      },
      {
        header: "Số lần gửi",
        accessorKey: "sentNumber",
      },
      {
        header: "Nội dung thông báo",
        accessorKey: "notificationContentId",
        Cell: ({ cell }) => {
          return (
            <MyCenterFull>
              <TrackSelfAssessmentProgressNotiDetail />
            </MyCenterFull>
          );
        },
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách tiêu chí`}>
      <MyDataTable
        data={TrackSelfAssessmentProgressList.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        enableRowActions={true}
        renderTopToolbarCustomActions={() => <MyButton crudType="export" />}
        renderRowActions={() => (
          <MyCenterFull>
            <TrackSelfAssessmentProgressSendNoti />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}

const mockData: ITrackSelfAssessmentProgressViewModel[] = [
  {
    id: 1,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2020",
    standardCode: "TC_01",
    code: "TC_01.01",
    name: "Mục tiêu và chuẩn đầu ra",
    groupCode: "Nhóm tiêu chí 1-3",
    evaluator: "Nguyễn Văn A",
    assignDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-30"),
    selfAssessmentStatus: "Đạt",
    detailSelfAssessmentId: 1,
    checkStatus: "Đạt yêu cầu",
    notificationSent: true,
    notificationContentId: 1,
    sentNumber: 1,
  },
  {
    id: 2,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2020",
    standardCode: "TC_02",
    code: "TC_02.03",
    name: "Cấu trúc và nội dung CTĐT",
    groupCode: "Nhóm tiêu chí 1-3",
    evaluator: "Trần Thị B",
    assignDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-30"),
    selfAssessmentStatus: "Đạt",
    detailSelfAssessmentId: 1,
    checkStatus: "Đang kiểm tra",
    notificationSent: true,
    notificationContentId: 2,
    sentNumber: 2,
  },
  {
    id: 3,
    planCode: "KH-KTPM-2024",
    programCode: "KTPM",
    courseCode: "K2020",
    standardCode: "TC_03",
    code: "TC_03.02",
    name: "Đội ngũ giảng viên",
    groupCode: "Nhóm tiêu chí 1-3",
    evaluator: "Lê Văn C",
    assignDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-30"),
    selfAssessmentStatus: "Không đạt",
    detailSelfAssessmentId: 1,
    checkStatus: "Chưa kiểm tra",
    notificationSent: false,
    notificationContentId: 0,
    sentNumber: 0,
  },
  {
    id: 4,
    planCode: "KH-QTKD-2025",
    programCode: "QTKD",
    courseCode: "K2021",
    standardCode: "TC_01",
    code: "TC_01.01",
    name: "Mục tiêu và chuẩn đầu ra",
    groupCode: "Nhóm tiêu chí 1-3",
    evaluator: "Phạm Thị D",
    assignDate: new Date("2025-08-01"),
    endDate: new Date("2025-08-31"),
    selfAssessmentStatus: "Chưa đánh giá",
    detailSelfAssessmentId: 1,
    checkStatus: "Chưa kiểm tra",
    notificationSent: false,
    notificationContentId: 0,
    sentNumber: 0,
  },
  {
    id: 5,
    planCode: "KH-QTKD-2025",
    programCode: "QTKD",
    courseCode: "K2021",
    standardCode: "TC_02",
    code: "TC_02.03",
    name: "Cấu trúc và nội dung CTĐT",
    groupCode: "Nhóm tiêu chí 1-2",
    evaluator: "Hoàng Văn E",
    assignDate: new Date("2025-08-01"),
    endDate: new Date("2025-08-31"),
    selfAssessmentStatus: "Chưa đánh giá",
    detailSelfAssessmentId: 1,
    checkStatus: "Đang kiểm tra",
    notificationSent: true,
    notificationContentId: 1,
    sentNumber: 1,
  },
  {
    id: 6,
    planCode: "KH-KHMT-2025",
    programCode: "KHMT",
    courseCode: "K2022",
    standardCode: "TC_03",
    code: "TC_03.02",
    name: "Đội ngũ giảng viên",
    groupCode: "Nhóm tiêu chí 3-5",
    evaluator: "Nguyễn Thị G",
    assignDate: new Date("2025-09-01"),
    endDate: new Date("2025-09-30"),
    selfAssessmentStatus: "Đạt",
    detailSelfAssessmentId: 1,
    checkStatus: "Đang kiểm tra",
    notificationSent: false,
    notificationContentId: 0,
    sentNumber: 0,
  },
];
