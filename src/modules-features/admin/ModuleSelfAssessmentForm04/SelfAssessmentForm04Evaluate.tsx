import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { MyButton, MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import {
    ISelfAssessmentForm04EvaluateViewModel,
    ISelfAssessmentForm04ViewModel,
} from "./interface";

export default function SelfAssessmentForm04Evaluate({
  data,
}: {
  data: ISelfAssessmentForm04ViewModel;
}) {
  const disc = useDisclosure();

  const Q_evaluate = useQuery({
    queryKey: ["self-assessment-form-04-evaluate", data.id],
    queryFn: () => {
        return mockHieuChinhNoiDung
    },
  });

  const columns = useMemo<
    MRT_ColumnDef<ISelfAssessmentForm04EvaluateViewModel>[]
  >(
    () => [
      { header: "Nhóm nội dung", accessorKey: "group" },
      { header: "Nội dung đề cập", accessorKey: "content" },
      { header: "Nhận xét và yêu cầu hiệu chính", accessorKey: "comment", size: 300 },
    ],
    []
  );

  return (
    <>
      <MyButton variant="transparent" onClick={disc[1].open}>
        Xem nhận xét
      </MyButton>
      <Modal
        opened={disc[0]}
        title="Danh sách nhận xét"
        onClose={disc[1].close}
        size="70%"
      >
        <MyDataTable
          data={Q_evaluate.data || []}
          enableRowSelection={true}
          enableRowNumbers={true}
          columns={columns}
        />
      </Modal>
    </>
  );
}

const mockHieuChinhNoiDung: ISelfAssessmentForm04EvaluateViewModel[] = [
    {
      id: 1,
      code: "TC_05.02",
      group: "1. Mô tả hiện trạng",
      content: "Phần giới thiệu về lịch sử hình thành Khoa Công nghệ Thông tin",
      comment: "Cần bổ sung thêm các mốc thời gian quan trọng và sự kiện nổi bật của Khoa từ khi thành lập đến nay. Thông tin hiện tại quá chung chung"
    },
    {
      id: 2,
      code: "TC_05.02",
      group: "1. Mô tả hiện trạng",
      content: "Dữ liệu về số lượng sinh viên năm học 2023-2024",
      comment: "Số liệu chưa khớp với báo cáo thống kê mới nhất từ Phòng Đào tạo. Yêu cầu cập nhật số liệu chính xác."
    },
    {
      id: 3,
      code: "TC_05.02",
      group: "1. Mô tả hiện trạng",
      content: "Mô tả về cơ sở vật chất phục vụ giảng dạy",
      comment: "Chưa liệt kê đầy đủ các phòng thí nghiệm chuyên dụng và trang thiết bị hiện đại. Cần chi tiết hơn về các tiện ích mới được nâng cấp"
    },
    {
      id: 4,
      code: "TC_05.02",
      group: "1. Mô tả hiện trạng",
      content: "Nội dung về hoạt động nghiên cứu khoa học của giảng viên",
      comment: "Thiếu các ví dụ cụ thể về đề tài nghiên cứu tiêu biểu; các công bố khoa học quốc tế trong 3 năm gần đây. Nên thêm tên dự án và kết quả đạt được."
    },
    {
      id: 5,
      code: "TC_05.02",
      group: "1. Mô tả hiện trạng",
      content: "Phần phân tích điểm mạnh và điểm yếu của CTĐT",
      comment: "Phần điểm yếu còn chung chung, chưa chỉ ra được những thách thức cụ thể và giải pháp đang triển khai. Yêu cầu làm rõ hơn."
    },
    {
      id: 6,
      code: "TC_05.02",
      group: "3. Điểm tồn tại",
      content: "Tỷ lệ giảng viên có trình độ tiến sĩ còn thấp so với yêu cầu",
      comment: "Cần nêu rõ tỷ lệ hiện tại và mục tiêu phấn đấu theo lộ trình. Đề xuất các giải pháp cụ thể để tăng cường đội ngũ tiến sĩ."
    },
    {
      id: 7,
      code: "TC_05.02",
      group: "3. Điểm tồn tại",
      content: "Hạn chế về tài liệu học tập chuyên ngành tiếng Anh",
      comment: "Cần phân tích rõ hơn về sự thiếu hụt các đầu sách; tạp chí khoa học chuyên ngành bằng tiếng Anh. Đề xuất kế hoạch bổ sung và khuyến khích sinh viên tiếp cận."
    },
    {
      id: 8,
      code: "TC_05.02",
      group: "3. Điểm tồn tại",
      content: "Thời gian thực tập của sinh viên chưa đủ dài để tích lũy kinh nghiệm",
      comment: "So sánh với các chương trình tương đương của các trường khác. Đề xuất mở rộng thời gian thực tập hoặc tăng cường các dự án thực tế trong môn học."
    },
    {
      id: 9,
      code: "TC_05.02",
      group: "5. Tự đánh giá",
      content: "Kết quả tự đánh giá Tiêu chí 1.1",
      comment: "Phần phân tích chưa làm rõ được các minh chứng liên quan đến việc công bố mục tiêu và chuẩn đầu ra. Cần bổ sung thêm ví dụ về cách thức công khai"
    },
    {
      id: 10,
      code: "TC_05.02",
      group: "5. Tự đánh giá",
      content: "Đánh giá tổng thể về sự phù hợp của CTĐT với sứ mạng nhà trường",
      comment: "Phân tích còn sơ sài. Cần liên hệ chặt chẽ hơn giữa các kết quả tự đánh giá chi tiết với sứ mạng tổng thể của trường và mục tiêu của chương trình đào tạo."
    }
  ];
  