"use client";

import {
    MyCenterFull,
    MyDataTable,
    MySelect,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import TabAssignmentTaskUpdateButton from "./TabAssignmentTaskUpdateButton";

export interface CriterionAssignment {
    criterionCode: string;
    criterionName: string;
    memberCode: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    startDate: string;   // YYYY-MM-DD
    endDate: string;     // YYYY-MM-DD
    note: string;
}

export default function AssignmentTaskTable() {

    const columns = useMemo<MRT_ColumnDef<CriterionAssignment>[]>(() => [
        { accessorKey: "criterionCode", header: "Mã Tiêu chí/Chỉ báo" },
        { accessorKey: "criterionName", header: "Tên Tiêu chí/Chỉ báo" },
        { accessorKey: "memberCode", header: "Mã Thành viên" },
        { accessorKey: "fullName", header: "Họ và Tên Thành viên" },
        { accessorKey: "phoneNumber", header: "Số điện thoại" },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "startDate", header: "Ngày bắt đầu" },
        { accessorKey: "endDate", header: "Ngày kết thúc" },
        { accessorKey: "note", header: "Ghi chú" },
    ], []);


    return (
        <MyDataTable
            enableRowSelection
            enableRowNumbers={false}
            columns={columns}
            data={criterionAssignments || []}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <TabAssignmentTaskUpdateButton values={row.original} />
                    </MyCenterFull>
                );
            }}
        />
    );
}

export const criterionAssignments: CriterionAssignment[] = [
    {
        criterionCode: "TC_01.01",
        criterionName: "Mục tiêu và Chuẩn đầu ra của CTĐT",
        memberCode: "VC003",
        fullName: "TS. Trần Văn C",
        phoneNumber: "0901234567",
        email: "tranc@example.edu.vn",
        startDate: "2025-07-08",
        endDate: "2025-07-25",
        note: "Cần thu thập các phiên bản cập nhật của chuẩn đầu ra qua các năm; Phối hợp với Phòng Đào tạo.",
    },
    {
        criterionCode: "TC_01.02",
        criterionName: "Mô tả quá trình xây dựng và phát triển CTĐT",
        memberCode: "VC009",
        fullName: "ThS. Trịnh Thị I",
        phoneNumber: "0987654321",
        email: "trinhi@example.edu.vn",
        startDate: "2025-07-10",
        endDate: "2025-07-30",
        note: "Ghi rõ các mốc thời gian và phiên bản chương trình; Đính kèm các biên bản họp liên quan.",
    },
    {
        criterionCode: "TC_02.01",
        criterionName: "Đề cương chi tiết học phần",
        memberCode: "VC003",
        fullName: "TS. Trần Văn C",
        phoneNumber: "0901234567",
        email: "tranc@example.edu.vn",
        startDate: "2025-07-15",
        endDate: "2025-08-10",
        note: "Kiểm tra tính nhất quán giữa đề cương và thực tế giảng dạy; Lấy mẫu 5 học phần.",
    },
    {
        criterionCode: "TC_02.03",
        criterionName: "Tính liên thông và liên ngành của CTĐT",
        memberCode: "VC009",
        fullName: "ThS. Trịnh Thị I",
        phoneNumber: "0987654321",
        email: "trinhi@example.edu.vn",
        startDate: "2025-08-01",
        endDate: "2025-08-15",
        note: "Đánh giá sự phù hợp với xu hướng phát triển ngành; Thu thập minh chứng về các môn học tự chọn liên ngành.",
    },
    {
        criterionCode: "CB_04.02.01",
        criterionName: "Tỷ lệ giảng viên tham gia các hoạt động NCKH",
        memberCode: "VC004",
        fullName: "ThS. Phạm Thị D",
        phoneNumber: "0912345678",
        email: "phamd@example.edu.vn",
        startDate: "2025-08-15",
        endDate: "2025-08-18",
        note: "Yêu cầu số liệu từ Phòng Khoa học Công nghệ; Kiểm tra số liệu báo cáo SCI/SCOPUS.",
    },
    {
        criterionCode: "CB_04.02.02",
        criterionName: "Chính sách hỗ trợ hoạt động NCKH của giảng viên",
        memberCode: "VC010",
        fullName: "CN. Bùi Thị L",
        phoneNumber: "0976543210",
        email: "buil@example.edu.vn",
        startDate: "2025-07-25",
        endDate: "2025-08-20",
        note: "Thu thập các văn bản quy định hiện hành; Phỏng vấn một số giảng viên về mức độ hài lòng.",
    },
];
