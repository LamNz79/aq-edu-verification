"use client";
import { Center, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import {
  MyButtonViewPDF,
  MyCheckbox,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import ImprovementProgressTrackingExternal from "./ImprovementProgressTrackingExternal";
import { IImprovementProgressTrackingViewModel } from "./interface";
import ImprovementProgressTrackingAssessment from "./ImprovementProgressTrackingAssessment";
import ImprovementProgressTrackingCheck from "./ImprovementProgressTrackingCheck";

enum ENUM_STATUS_CHECK {
  "Chưa kiểm tra" = 0,
  "Cần hiệu chính" = 1,
  "Đạt yêu cầu" = 2,
}

export default function ImprovementProgressTrackingTable() {
  const ExternalReviewInputData = useQuery({
    queryKey: ["improvement-progress-tracking"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<
    MRT_ColumnDef<IImprovementProgressTrackingViewModel>[]
  >(
    () => [
      {
        header: "Tên chương trình đào tạo",
        accessorKey: "programName",
      },
      {
        header: "Giai đoạn",
        accessorKey: "period",
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "criterionCode",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "criterionName",
        size: 300,
      },
      {
        header: "Kết quả đánh giá ngoài",
        accessorKey: "statusExternal",
        accessorFn(originalRow) {
          if (originalRow.statusExternal === undefined) {
            return "Chưa đánh giá";
          }
          return originalRow.statusExternal
            ? "Đạt (Có khuyến nghị)"
            : "Không đạt";
        },
      },
      {
        header: "Nội dung đánh giá ngoài",
        accessorFn(originalRow) {
          return <ImprovementProgressTrackingExternal data={originalRow} />;
        },
      },
      {
        header: "Ngày báo cáo giữa kỳ",
        accessorKey: "reportDate",
      },
      {
        header: "Ngày hoàn thành báo cáo giữa kỳ",
        accessorKey: "finishDate",
      },
      {
        header: "Mã nhân sự phụ trách",
        accessorKey: "reporterCode",
      },
      {
        header: "Họ tên",
        accessorKey: "reporterName",
      },
      {
        header: "Tự đánh giá cải tiến",
        accessorKey: "status",
        accessorFn(originalRow) {
          if (originalRow.status === undefined) {
            return "Chưa đánh giá";
          }
          return originalRow.status ? "Đạt" : "Không đạt";
        },
      },
      {
        header: "Nội dung cải tiến",
        accessorFn(originalRow) {
          return <ImprovementProgressTrackingAssessment />;
        },
      },
      {
        header: "Trạng thái kiểm tra",
        accessorKey: "statusCheck",
        accessorFn(originalRow) {
          return ENUM_STATUS_CHECK[originalRow.statusCheck];
        },
      },
      {
        header: "Gửi thông báo",
        accessorKey: "sendNotification",
        accessorFn(originalRow) {
          return (
            <MyCheckbox
              checked={originalRow.sendNotification ?? false}
              readOnly
            />
          );
        },
      },
      {
        header: "Nhận xét",
        accessorKey: "note",
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách tiêu chí`}>
      <MyDataTable
        data={ExternalReviewInputData.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        enableRowActions={true}
        renderRowActions={({ row }) => (
          <Flex gap={8} py={10} justify={"center"} align={"center"}>
            <ImprovementProgressTrackingCheck value={row.original} />
            <MyButtonViewPDF
              label="In phiếu"
              src="/pdf/evaluation_form_mock.pdf"
            />
          </Flex>
        )}
      />
    </MyFieldset>
  );
}

const mockData: IImprovementProgressTrackingViewModel[] = [
  {
    id: 1,
    programName: "Kỹ thuật phần mềm",
    period: "2020-2024",
    standardCode: "TC_03",
    criterionCode: "TC_03.02",
    criterionName: "Đảm bảo chất lượng đội ngũ giảng viên",
    statusExternal: false,
    reportDate: "2025-10-15",
    finishDate: "2025-10-10",
    reporterCode: "NV005",
    reporterName: "Phạm Văn F",
    status: true,
    statusCheck: 2,
    sendNotification: true,
  },
  {
    id: 2,
    programName: "Kế toán",
    period: "2021-2025",
    standardCode: "TC_02",
    criterionCode: "TC_02.01",
    criterionName: "Cấu trúc chương trình đào tạo",
    statusExternal: false,
    reportDate: "2025-09-01",
    finishDate: "2025-08-28",
    reporterCode: "NV008",
    reporterName: "Lê Thị H",
    status: true,
    statusCheck: 2,
    sendNotification: true,
  },
  {
    id: 3,
    programName: "Công nghệ thông tin",
    period: "Định kỳ 5 năm (2025)",
    standardCode: "TC_04",
    criterionCode: "TC_04.03",
    criterionName: "Hoạt động NCKH của người học",
    statusExternal: false,
    reporterCode: "NV0010",
    reporterName: "Trần Văn K",
    status: true,
    statusCheck: 2,
    sendNotification: true,
  },
  {
    id: 4,
    programName: "Kỹ thuật phần mềm",
    period: "2020-2024",
    standardCode: "TC_01",
    criterionCode: "TC_01.01",
    criterionName: "Mục tiêu và chuẩn đầu ra",
    statusExternal: true,
    reporterCode: "NV005",
    reporterName: "Phạm Văn F",
    status: true,
    statusCheck: 2,
    sendNotification: true,
  },
];
