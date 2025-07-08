"use client";

import { useMemo } from "react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { MyButton, MyButtonModal, MyDataTable, MyTextArea } from "aq-fe-framework/components";
import { ITrackSelfAssessmentProgressNotificationDetail } from "./interface";
import { U0DateToDDMMYYYString } from "@/utils/date";

interface ITrackSelfAssessmentProgressNotiDetail {}

export default function TrackSelfAssessmentProgressNotiDetail() {
  const [opened, { open, close }] = useDisclosure(false);

  const query = useQuery({
    queryKey: ["TrackSelfAssessmentProgressNotificationDetail"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<ITrackSelfAssessmentProgressNotificationDetail>[]>(
    () => [
      {
        header: "Ngày gửi",
        accessorKey: "sendDate",
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>();
          return date ? U0DateToDDMMYYYString(date) : "";
        },
      },
      {
        header: "Người gửi",
        accessorKey: "sender",
      },
      {
        header: "Người nhận",
        accessorKey: "receiver",
      },
      {
        header: "Nội dung thông báo",
        accessorKey: "content",
        size: 400,
      },
    ],
    []
  );

  return (
    <MyButtonModal
      crudType="default"
      variant="transparent"
      title="Chi tiết thông báo"
      label="Xem chi tiết"
      size="xs"
      modalSize={"80%"}
      disclosure={[opened, { open, close, toggle: () => open() }]}
    >
      <MyDataTable columns={columns} data={query.data || []} />
    </MyButtonModal>
  );
}

const mockData: ITrackSelfAssessmentProgressNotificationDetail[] = [
  {
    id: 1,
    sendDate: new Date("2025-07-01"),
    sender: "Nguyễn Thị X",
    receiver: "Trần Thị B (Nhóm TC 1-3)",
    content:
      "Kính gửi chị B; Nhắc nhở cập nhật tiến độ báo cáo tự đánh giá Tiêu chí TC_02.03. Thời hạn là 30/07/2025. Vui lòng hoàn thành đúng hạn",
  },
  {
    id: 2,
    sendDate: new Date("2025-07-05"),
    sender: "Nguyễn Thị X",
    receiver: "Trần Thị B (Nhóm TC 1-3)",
    content:
      "Kính gửi chị B; Tiếp tục nhắc nhở về tiến độ Tiêu chí TC_02.03. Hiện tại đã quá 5 ngày so với kế hoạch. Vui lòng phản hồi và cập nhật đúng tiến độ",
  },
  {
    id: 3,
    sendDate: new Date("2025-07-08"),
    sender: "Phạm Văn Y",
    receiver: "Lê Văn C (Nhóm TC 1-3)",
    content:
      "Kính gửi anh C; Đề nghị anh khẩn trương hoàn thành báo cáo tự đánh giá Tiêu chí TC_03.02. Nhiệm vụ đã trễ hạn và cần được ưu tiên xử lý. Vui lòng liên hệ nếu cần hỗ trợ",
  },
  {
    id: 4,
    sendDate: new Date("2025-08-10"),
    sender: "Nguyễn Thị X",
    receiver: "Hoàng Văn E (Nhóm TC 1-2)",
    content:
      "Kính gửi anh E; Nhắc nhở anh về việc bắt đầu thực hiện nhiệm vụ TC_02.03 theo kế hoạch. Thời hạn là 31/08/2025. Chúc anh hoàn thành tốt",
  },
];
