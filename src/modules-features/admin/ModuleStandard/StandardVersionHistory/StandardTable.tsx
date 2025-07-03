"use client";
import {
    MyButton,
    MyButtonViewPDF,
    MyCenterFull,
    MyCheckbox,
    MyDataTable,
    MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import StandardUpdateButton from "./StandardUpdateButton";
import { IStandardInfoViewModel } from "./interfaces/IStandardInfoViewModel";


export default function StandardTable() {
  const columns = useMemo<MRT_ColumnDef<IStandardInfoViewModel>[]>(
    () => [
      { header: "Tên Phiên bản", accessorKey: "versionName" },
      { header: "Mô tả Phiên bản", accessorKey: "versionDescription", size: 400 },
      { header: "Ngày Ban hành", accessorKey: "issueDate" },
      {
        header: "Trạng thái Hiệu lực",
        accessorKey: "isActive",
        size: 220,
        Cell: ({ cell }) => (
          <MyCenterFull>
            <MyCheckbox checked={cell.getValue() as boolean} onChange={() => {}} />
          </MyCenterFull>
        ),
      },
      {
        header: "File Bộ tiêu chuẩn",
        accessorKey: "fileLink",
        size: 200,
        Cell: ({ cell }) => (
          <MyButtonViewPDF
            src={cell.getValue() as string}
          />
        ),
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách bộ tiêu chuẩn">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData || []}
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
             <StandardUpdateButton values={row.original} />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

const mockData: IStandardInfoViewModel[] = [
  {
    id: 1,
    versionName: "Phiên bản gốc",
    versionDescription: "Ban hành theo Thông tư 04/2025/TT-BGDĐT",
    issueDate: "2025-01-04",
    isActive: true,
    fileLink: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
  },
  {
    id: 2,
    versionName: "Sửa đổi lần 1",
    versionDescription: "Bổ sung hướng dẫn về đánh giá CTĐT từ xa, Điều chỉnh một số chỉ báo.",
    issueDate: "2026-03-15",
    isActive: false,
    fileLink: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
  },
  {
    id: 3,
    versionName: "Sửa đổi lần 2",
    versionDescription: "Thay đổi quy định về công khai thông tin, Bãi bỏ một số phụ lục biểu mẫu.",
    issueDate: "2027-09-01",
    isActive: true,
    fileLink: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
  },
  {
    id: 4,
    versionName: "Version 3.0",
    versionDescription: "Phiên bản hiện hành của AUN-QA.",
    issueDate: "2015-05-10",
    isActive: false,
    fileLink: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
  },
  {
    id: 5,
    versionName: "Version 4.0",
    versionDescription:
      "Cập nhật các tiêu chí đánh giá theo xu hướng quốc tế; Tăng cường trọng số yếu tố đổi mới sáng tạo.",
    issueDate: "2020-11-20",
    isActive: true,
    fileLink: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
  },
];
