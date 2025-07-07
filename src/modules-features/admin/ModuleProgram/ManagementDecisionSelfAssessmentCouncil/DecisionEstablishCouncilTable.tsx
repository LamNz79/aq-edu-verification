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
import DecisionEstablishCouncilCreateButton from "./DecisionEstablishCouncilCreateButton";
import DecisionEstablishCouncilDeleteListButton from "./DecisionEstablishCouncilDeleteListButton";
import DecisionEstablishCouncilDeleteButton from "./DecisionEstablishCouncilDeleteButton";
import DecisionEstablishCouncilUpdateButton from "./DecisionEstablishCouncilUpdateButton";

export interface SelfAssessmentDecision {
    id: number;
    decisionNumber: string;
    decisionDate?: string; // ISO string, e.g. "2024-02-01"
    decisionTitle: string;
    appliedProgram: string;
    programCode: string;
    appliedCohort: string;
    signer: string;
    fileUrl: string;
}

export default function DecisionEstablishCouncilTable() {

    const columns = useMemo<MRT_ColumnDef<SelfAssessmentDecision>[]>(
        () => [
            { accessorKey: 'decisionNumber', header: 'Số Quyết định' },
            { accessorKey: 'decisionDate', header: 'Ngày Quyết định' },
            { accessorKey: 'decisionTitle', header: 'Tên Quyết định' },
            { accessorKey: 'appliedProgram', header: 'Chương trình Đào tạo áp dụng' },
            { accessorKey: 'appliedCohort', header: 'Khóa đào tạo áp dụng' },
            { accessorKey: 'signer', header: 'Người ký' },
            {
                accessorKey: 'fileUrl',
                header: 'File Đính Kèm',
                accessorFn: () => <MyButtonViewPDF />
            }
        ],
        []
    );

    return (
        <MyFieldset title="Danh sách quyết định thành lập hội đồng">
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={selfAssessmentDecisions || []}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <DecisionEstablishCouncilCreateButton />
                            <MyButton crudType="import" />
                            <MyButton crudType="export" />
                            <DecisionEstablishCouncilDeleteListButton
                                values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
                            />
                        </>
                    );
                }}
                renderRowActions={({ row }) => {
                    return (
                        <MyCenterFull>
                            <DecisionEstablishCouncilUpdateButton values={row.original} />
                            <DecisionEstablishCouncilDeleteButton id={row.original.id || 0} code={row.original.decisionNumber} />
                        </MyCenterFull>
                    );
                }}
            />
        </MyFieldset>
    );
}


export const selfAssessmentDecisions: SelfAssessmentDecision[] = [
    {
        id: 1,
        decisionNumber: "14/2024/QĐ-ĐHSPKT",
        decisionDate: "2024-02-01",
        decisionTitle: "V/v thành lập Hội đồng Tự đánh giá CTĐT Kỹ thuật Phần mềm năm 2024",
        appliedProgram: "Kỹ thuật Phần mềm",
        appliedCohort: "K60",
        signer: "Tô Ngọc Báo",
        fileUrl: "",
        programCode: "7480201"
    },
    {
        id: 2,
        decisionNumber: "25/2024/QĐ-ĐHSPKT",
        decisionDate: "2024-03-10",
        decisionTitle: "V/v thành lập Hội đồng Tự đánh giá CTĐT Quản trị Kinh doanh năm 2024",
        appliedProgram: "Quản trị Kinh doanh",
        appliedCohort: "K61",
        signer: "Nguyễn Văn C",
        fileUrl: "",
        programCode: "7510301H"
    },
    {
        id: 3,
        decisionNumber: "05/2025/QĐ-ĐHSPKT",
        decisionDate: "2025-01-20",
        decisionTitle: "V/v thành lập Hội đồng Tự đánh giá CTĐT Khoa học Máy tính năm 2025",
        appliedProgram: "Khoa học Máy tính",
        appliedCohort: "K62",
        signer: "Trần Thị D",
        fileUrl: "",
        programCode: "7480101C"
    },
    {
        id: 4,
        decisionNumber: "06/2025/QĐ-ĐHSPKT",
        decisionDate: "2025-01-25",
        decisionTitle: "V/v thành lập Hội đồng Tự đánh giá CTĐT CNTT Tiên tiến năm 2025",
        appliedProgram: "CNTT Tiên tiến",
        appliedCohort: "K20",
        signer: "Tô Ngọc Báo",
        fileUrl: "",
        programCode: "7480201C"
    },
];
