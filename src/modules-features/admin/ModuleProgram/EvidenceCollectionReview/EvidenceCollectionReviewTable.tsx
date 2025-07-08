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
import EvidenceCollectionReviewApprovalButton from "./EvidenceCollectionReviewApprovalButton";

export interface ExpectedEvidence {
    id: number;
    planCode: string;            // Mã kế hoạch TĐG
    groupCode: string;           // Mã Nhóm CTĐT
    responsibleMember: string;   // Thành viên phụ trách
    standardCode: string;        // Mã Tiêu chuẩn
    criterionCode: string;       // Mã Tiêu chí
    expectedCode: string;        // Mã MC Dự kiến
    expectedName: string;        // Tên MC Dự kiến
    actualCode: string;          // Mã MC Thực tế
    actualName: string;          // Tên MC Thực tế
    issueNumber: string;         // Số/Ký hiệu
    issueDate: string;           // Ngày ban hành
    issuedBy: string;            // Đơn vị ban hành
    fileUrl: string;             // File đính kèm
    link: string;                // Link liên kết
    note: string;                // Ghi chú
    approvalStatus: string;      // Trạng thái Kiểm duyệt MC
    comment: string;             // Nhận xét
}


export default function EvidenceCollectionReviewTable() {

    const columns = useMemo<MRT_ColumnDef<ExpectedEvidence>[]>(
        () => [
            { accessorKey: "planCode", header: "Mã kế hoạch TDG" },
            { accessorKey: "groupCode", header: "Mã Nhóm CT" },
            { accessorKey: "responsibleMember", header: "Thành viên phụ trách" },
            { accessorKey: "standardCode", header: "Mã Tiêu chuẩn" },
            { accessorKey: "criterionCode", header: "Mã Tiêu chí" },
            { accessorKey: "expectedCode", header: "Mã MC Dự kiến" },
            { accessorKey: "expectedName", header: "Tên MC Dự kiến" },
            { accessorKey: "actualCode", header: "Mã MC Thực tế" },
            { accessorKey: "actualName", header: "Tên MC" },
            {
                header: "Số - Ngày ban hành",
                accessorFn: (row) => [row.issueNumber, row.issueDate].filter(Boolean).join(", ")
            },
            { accessorKey: "issuedBy", header: "Đơn vị ban hành" },
            {
                accessorKey: "fileUrl",
                header: "File đính kèm",
                accessorFn: () => <MyButtonViewPDF />
            },
            {
                accessorKey: "link",
                header: "Link liên kết",
            },
            { accessorKey: "note", header: "Ghi chú" },
            { accessorKey: "approvalStatus", header: "Trạng thái Kiểm duyệt MC" },
            { accessorKey: "comment", header: "Nhận xét" },
        ],
        []
    );

    return (
        <MyFieldset title="Danh sách minh chứng dự kiến">
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={expectedEvidences || []}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <MyButton crudType="export" />
                        </>
                    );
                }}
                renderRowActions={({ row }) => {
                    return (
                        <MyCenterFull>
                            <EvidenceCollectionReviewApprovalButton value={row.original} />
                        </MyCenterFull>
                    );
                }}
            />
        </MyFieldset>
    );
}

export const expectedEvidences: ExpectedEvidence[] = [
    {
        id: 1,
        planCode: "KH-KTPM-2024",
        groupCode: "NCT_TC5-7",
        responsibleMember: "ThS. Hoàng Thị E",
        standardCode: "TC_05",
        criterionCode: "TC_05.02",
        expectedCode: "H5.05.02.01",
        expectedName: "Quyết định ban hành Quy chế đào tạo trình độ ĐH",
        actualCode: "H5.05.02.01",
        actualName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
        issueNumber: "Số 456/QĐ-ĐT",
        issueDate: "Ngày 20/01/2025",
        issuedBy: "Trường Đại học Đồng Nai",
        fileUrl: "",
        link: "http://drive.google.com/link_quyche_2025_v2",
        note: "",
        approvalStatus: "Chưa kiểm duyệt",
        comment: ""
    },
    {
        id: 2,
        planCode: "KH-KTPM-2024",
        groupCode: "NCT_TC5-7",
        responsibleMember: "ThS. Hoàng Thị E",
        standardCode: "TC_05",
        criterionCode: "TC_05.02",
        expectedCode: "H5.05.02.02",
        expectedName: "Báo cáo khảo sát SV về Quy chế đào tạo",
        actualCode: "H5.05.02.02",
        actualName: "Báo cáo tổng kết công tác khảo sát ý kiến SV (2024)",
        issueNumber: "",
        issueDate: "Ngày 10/12/2024",
        issuedBy: "Phòng Đảm bảo Chất lượng",
        fileUrl: "",
        link: "http://drive.google.com/link_baocao_ks",
        note: "",
        approvalStatus: "Đã kiểm duyệt",
        comment: ""
    },
    {
        id: 3,
        planCode: "KH-KTPM-2024",
        groupCode: "NCT_TC1-3",
        responsibleMember: "TS. Trần Văn C",
        standardCode: "TC_01",
        criterionCode: "TC_01.01",
        expectedCode: "H1.01.01.01",
        expectedName: "Quyết định về mục tiêu và chuẩn đầu ra cao CTĐT",
        actualCode: "H1.01.01.01",
        actualName: "Quyết định về mục tiêu và chuẩn đầu ra KTPM (2024)",
        issueNumber: "Số 123/QĐ-KHMT",
        issueDate: "Ngày 15/05/2024",
        issuedBy: "Khoa Khoa học Máy tính",
        fileUrl: "",
        link: "http://drive.google.com/link_cdr_ktpm",
        note: "",
        approvalStatus: "Yêu cầu bổ sung/hiệu chỉnh",
        comment: ""
    },
    {
        id: 4,
        planCode: "KH-KTPM-2024",
        groupCode: "NCT_TC3-4",
        responsibleMember: "CN. Bùi Thị L",
        standardCode: "TC_03",
        criterionCode: "TC_03.02",
        expectedCode: "H3.03.02.05",
        expectedName: "Danh sách cán bộ viên chức cơ hữu",
        actualCode: "H3.03.02.05",
        actualName: "Danh sách CBGV Khoa CNTT (HK1_24-25)",
        issueNumber: "",
        issueDate: "Ngày 01/09/2024",
        issuedBy: "Phòng Tổ chức Cán bộ",
        fileUrl: "",
        link: "http://drive.google.com/link_ds_gvcn",
        note: "",
        approvalStatus: "Đã kiểm duyệt",
        comment: ""
    },
    {
        id: 5,
        planCode: "KH-KTPM-2024",
        groupCode: "NCT_TC2-4",
        responsibleMember: "ThS. Nguyễn Thị K",
        standardCode: "TC_02",
        criterionCode: "TC_02.01",
        expectedCode: "H2.02.01.03",
        expectedName: "Danh mục đề cương chi tiết học phần",
        actualCode: "",
        actualName: "",
        issueNumber: "",
        issueDate: "",
        issuedBy: "",
        fileUrl: "",
        link: "",
        note: "",
        approvalStatus: "",
        comment: ""
    },
];
