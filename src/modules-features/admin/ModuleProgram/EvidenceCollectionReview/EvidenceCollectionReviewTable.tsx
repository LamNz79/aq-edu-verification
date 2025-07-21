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
import { EvidenceCollectionStatusBadge } from "./EvidenceCollectionStatusBadge";
import { expectedEvidences } from "./mockData";

export interface ExpectedEvidence {
  id: number;
  planCode: string; // Mã kế hoạch TĐG
  trainingProgram: string; // Chương trình đào tạo
  accreditaionCode: string; // Mã giai đoạn
  groupCode: string; // Mã Nhóm CTĐT
  responsibleMember: string; // Thành viên phụ trách
  standardCode: string; // Mã Tiêu chuẩn
  criterionCode: string; // Mã Tiêu chí
  expectedCode: string; // Mã MC Dự kiến
  expectedName: string; // Tên MC Dự kiến
  actualCode: string; // Mã MC Thực tế
  actualName: string; // Tên MC Thực tế
  issueNumber: string; // Số/Ký hiệu
  issueDate: string; // Ngày ban hành
  issuedBy: string; // Đơn vị ban hành
  fileUrl: string; // File đính kèm
  link: string; // Link liên kết
  note: string; // Ghi chú
  approvalStatus: number; // Trạng thái Kiểm duyệt MC
  comment: string; // Nhận xét
}

export default function EvidenceCollectionReviewTable() {
  const columns = useMemo<MRT_ColumnDef<ExpectedEvidence>[]>(
    () => [
      { accessorKey: "planCode", header: "Mã kế hoạch TDG", size: 120 },
      { accessorKey: "trainingProgram", header: "Chương trình đào tạo" },
      { accessorKey: "accreditaionCode", header: "Mã giai đoạn", size: 120 },
      { accessorKey: "groupCode", header: "Mã Nhóm CT", size: 120 },
      { accessorKey: "responsibleMember", header: "Thành viên phụ trách" },
      { accessorKey: "standardCode", header: "Mã Tiêu chuẩn", size: 120 },
      { accessorKey: "criterionCode", header: "Mã Tiêu chí", size: 120 },
      { accessorKey: "expectedCode", header: "Mã MC Dự kiến", size: 120 },
      { accessorKey: "expectedName", header: "Tên MC Dự kiến" },
      { accessorKey: "actualCode", header: "Mã MC Thực tế", size: 120 },
      { accessorKey: "actualName", header: "Tên MC" },
      {
        header: "Số - Ngày ban hành",
        accessorFn: (row) =>
          [row.issueNumber, row.issueDate].filter(Boolean).join(", "),
      },
      { accessorKey: "issuedBy", header: "Đơn vị ban hành" },
      {
        accessorKey: "fileUrl",
        header: "File đính kèm",
        accessorFn: (row) =>
          row.fileUrl.length > 0 ? (
            <MyCenterFull>
              <MyButtonViewPDF />{" "}
            </MyCenterFull>
          ) : (
            ""
          ),
      },
      {
        accessorKey: "link",
        header: "Link liên kết",
        accessorFn: (row) =>
          row.link.length > 0 ? (
            <MyCenterFull>
              <MyButton crudType="default" variant="unstyled">
                Truy cập
              </MyButton>
            </MyCenterFull>
          ) : (
            ""
          ),
      },
      { accessorKey: "note", header: "Ghi chú" },
      {
        accessorKey: "approvalStatus",
        header: "Trạng thái Kiểm duyệt MC",
        size: 230,
        accessorFn(row) {
          return <EvidenceCollectionStatusBadge status={row.approvalStatus} />;
        },
      },
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
        initialState={{ density: "xs" }}
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
