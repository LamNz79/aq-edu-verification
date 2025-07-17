"use client";
import {
    MyButton,
    MyButtonViewPDF,
    MyCenterFull,
    MyDataTable,
    MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import DecisionEstablishCouncilUpdateButton from "./TaskAssignmentGroupByCriteriaUpdateButton";

export interface EvaluationPlan {
    id: number;
    code: string; // Mã Kế hoạch TDG
    trainingProgram: string; // Chương trình đào tạo
    stage: string; // Khóa
    groupCode: string; // Mã Nhóm Công tác
    groupName: string; // Tên nhóm
    standardCode: string; // Mã Tiêu chuẩn phụ trách
    standardName: string; // Tên Tiêu chuẩn phụ trách
    startDate: string; // Ngày bắt đầu
    endDate: string; // Ngày kết thúc
    note: string; // Ghi chú
}


export default function DecisionEstablishCouncilTable() {

    const columns = useMemo<MRT_ColumnDef<EvaluationPlan>[]>(
        () => [
            { accessorKey: "code", header: "Mã Kế hoạch TDG" },
            { accessorKey: "trainingProgram", header: "Chương trình đào tạo" },
            { accessorKey: "stage", header: "Giai đoạn" },
            { accessorKey: "groupCode", header: "Mã Nhóm Công tác" },
            { accessorKey: "groupName", header: "Tên nhóm" },   
            { accessorKey: "standardCode", header: "Mã Tiêu chuẩn phụ trách" },
            { accessorKey: "standardName", header: "Tên Tiêu chuẩn phụ trách" },
            { accessorKey: "startDate", header: "Ngày bắt đầu" },
            { accessorKey: "endDate", header: "Ngày kết thúc" },
            { accessorKey: "note", header: "Ghi chú" },
        ],
        []
    );

    return (
        <MyFieldset title="Danh sách phân công tiêu chuẩn">
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={evaluationPlans || []}
                displayColumnDefOptions={{
                    "mrt-row-actions": {
                        header: "Phân công nhiệm vụ",
                        size: 180,
                    },
                    "mrt-row-numbers": {
                        Header: "STT",
                        size: 1
                    }
                }}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <DecisionEstablishCouncilUpdateButton values={row.original} />
                    </MyCenterFull>
                )}
            />
        </MyFieldset>
    );
}


export const evaluationPlans: EvaluationPlan[] = [
    {
        id: 1,
        code: "KH-KTPM-2024",
        trainingProgram: "Kỹ thuật phần mềm",
        stage: "2021-2026",
        groupCode: "NCT_TC1-3",
        groupName: "Nhóm Tiêu chí 1-3",
        standardCode: "TC_01",
        standardName: "Tiêu chuẩn 1 (Chiến lược)",
        startDate: "2025-07-01",
        endDate: "2025-09-30",
        note: "Tập trung hoàn thiện khung chương trình và chuẩn đầu ra",
    },
    {
        id: 2,
        code: "KH-KTPM-2024",
        trainingProgram: "Kỹ thuật phần mềm",
        stage: "2021-2026",
        groupCode: "NCT_TC1-3",
        groupName: "Nhóm Tiêu chí 1-3",
        standardCode: "TC_02",
        standardName: "Tiêu chuẩn 2 (Chương trình đào tạo)",
        startDate: "2025-07-01",
        endDate: "2025-09-30",
        note: "Cần khảo sát kỹ sinh viên và cựu sinh viên",
    },
    {
        id: 3,
        code: "KH-KTPM-2024",
        trainingProgram: "Kỹ thuật phần mềm",
        stage: "2021-2026",
        groupCode: "NCT_TC4-6",
        groupName: "Nhóm Tiêu chí 4-6",
        standardCode: "TC_04",
        standardName: "Tiêu chuẩn 4 (Hoạt động học tập của người học)",
        startDate: "2025-07-15",
        endDate: "2025-10-15",
        note: "Đảm bảo minh chứng về phương pháp giảng dạy đổi mới",
    },
    {
        id: 4,
        code: "KH-QTKD-2025",
        trainingProgram: "Quản trị Kinh doanh",
        stage: "2022-2027",
        groupCode: "NCT_TC1",
        groupName: "Nhóm Tiêu chí 1-2",
        standardCode: "TC_01",
        standardName: "Tiêu chuẩn 1 (Chiến lược)",
        startDate: "2025-08-01",
        endDate: "2025-11-30",
        note: "Phối hợp chặt chẽ với lãnh đạo Khoa",
    },
    {
        id: 5,
        code: "KH-QTKD-2025",
        trainingProgram: "Quản trị Kinh doanh",
        stage: "2022-2027",
        groupCode: "NCT_TC1",
        groupName: "Nhóm Tiêu chí 1-2",
        standardCode: "TC_02",
        standardName: "Tiêu chuẩn 2 (Chương trình đào tạo)",
        startDate: "2025-08-01",
        endDate: "2025-11-30",
        note: "Cần cập nhật chương trình đào tạo theo yêu cầu thị trường",
    },
    {
        id: 6,
        code: "KH-KHMT-2025",
        trainingProgram: "Khoa học Máy tính",
        stage: "2023-2028",
        groupCode: "NCT_TC3-5",
        groupName: "Nhóm Tiêu chí 3-5",
        standardCode: "TC_03",
        standardName: "Tiêu chuẩn 3 (Tuyển sinh và truyền thông)",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
        note: "Kiểm tra lại số liệu tuyển sinh 3 năm gần nhất",
    },
];

