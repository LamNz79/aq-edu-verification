"use client";

import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import {
  AQButtonCreateByImportFile,
  MyButton,
  MyButtonDeleteList,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { Anchor, Text } from "@mantine/core";
import { IEvidenceData } from "./interfaces/EvidenceManagementViewModel";
import EvidenceManagementUpdate from "./EvidenceManagementUpdate";
import EvidenceManagementCreate from "./EvidenceManagementCreate";

export default function EvidenceManagementTable() {
  const query = useQuery({
    queryKey: ["evidence-management"],
    queryFn: () => {
      return mockData;
    },
  });

  const form_multiple = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });

  const columns = useMemo<MRT_ColumnDef<IEvidenceData>[]>(
    () => [
      {
        header: "Mã Minh chứng",
        accessorKey: "evidenceCode",
        size: 150,
      },
      {
        header: "Tên Minh chứng",
        accessorKey: "evidenceName",
        size: 300,
      },
      {
        header: "Mã MC Trực thuộc",
        accessorKey: "parentEvidenceCode",
        size: 150,
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "issuanceNumberDate",
        size: 200,
      },
      {
        header: "Đơn vị ban hành",
        accessorKey: "issuingUnit",
        size: 200,
      },
      {
        header: "Hiệu lực Từ ngày",
        accessorKey: "effectiveFrom",
        size: 130,
      },
      {
        header: "Hiệu lực Đến ngày",
        accessorKey: "effectiveTo",
        size: 130,
      },
      {
        header: "Trạng thái hiệu lực",
        accessorKey: "validityStatus",
        size: 150,
        Cell: ({ row }) => {
          const effectiveTo = row.original.effectiveTo;

          const currentDate = new Date();
          const toDate = effectiveTo ? new Date(effectiveTo || "") : null;
          const isLate = !toDate || currentDate > toDate;

          return (
            <MyCenterFull>
              <Text fw={600} c={isLate ? "red" : "green"}>
                {isLate ? "Hết hạn" : "Còn hạn"}
              </Text>
            </MyCenterFull>
          );
        },
      },
      {
        header: "File đính kèm",
        accessorKey: "attachedFile",
        size: 120,
        Cell: ({ cell }) => {
          return (
            <MyCenterFull>
              <MyButtonViewPDF />
            </MyCenterFull>
          );
        },
      },
      {
        header: "Link liên kết",
        accessorKey: "link",
        size: 120,
        accessorFn: (row) => {
          return (
            <Anchor href={row.link} target="_blank">
              <Text truncate maw={200}>
                {row.link}
              </Text>
            </Anchor>
          );
        },
      },
      {
        header: "Ghi chú",
        accessorKey: "note",
        size: 300,
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách kế hoạch tự đánh giá">
      <MyDataTable
        columns={columns}
        enableRowSelection={true}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <EvidenceManagementCreate />
              <AQButtonCreateByImportFile onSubmit={() => {}} form={form_multiple} />
              <MyButton crudType="export" />
              <MyButtonDeleteList
                onSubmit={() => {}}
                contextData={table
                  .getSelectedRowModel()
                  .flatRows.flatMap((item) => item.original)
                  .map((item) => item.evidenceCode)
                  .join(", ")}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <EvidenceManagementUpdate values={row.original} />
            </MyCenterFull>
          );
        }}
        data={query.data || []}
      />
    </MyFieldset>
  );
}

const mockData: IEvidenceData[] = [
  {
    evidenceCode: "H5.05.02.01",
    evidenceName: "Quyết định ban hành Quy chế đào tạo trình độ ĐH của Trường",
    parentEvidenceCode: "",
    issuanceNumberDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
    attachedFile: "file1.pdf",
    link: "https://example.com/1",
    note: "Là văn bản pháp lý nền tảng cho hoạt động đào tạo Đại học, Cần phiên bản có hiệu lực",
  },
  {
    evidenceCode: "H5.05.02.02",
    evidenceName: "Báo cáo tổng kết công tác khảo sát ý kiến SV về Quy chế đào tạo",
    parentEvidenceCode: "",
    issuanceNumberDate: "Số 789/QĐ-ĐT Ngày 15/01/2023",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2023",
    effectiveTo: "31/01/2025",
    attachedFile: "file2.pdf",
    link: "https://example.com/2",
    note: "Tổng hợp ý kiến phản hồi của sinh về quy chế đào tạo",
  },
  {
    evidenceCode: "H1.01.01.01",
    evidenceName: "Quyết định về mục tiêu và chuẩn đầu ra của CTĐT KTPM",
    parentEvidenceCode: "",
    issuanceNumberDate: "Số 123/QĐ-KHMT Ngày 15/05/2024",
    issuingUnit: "Khoa Khoa học Máy tính",
    effectiveFrom: "01/09/2024",
    effectiveTo: "31/08/2028",
    attachedFile: "file3.pdf",
    link: "https://example.com/3",
    note: "Văn bản chính thức quy định chuẩn đầu ra cho CTĐT KTPM",
  },
  {
    evidenceCode: "H1.01.01.01.01",
    evidenceName: "Biên bản họp Hội đồng Khoa học về sửa đổi CDR",
    parentEvidenceCode: "H1.01.01.01",
    issuanceNumberDate: "Ngày 10/01/2025",
    issuingUnit: "Hội đồng Khoa học Trường",
    effectiveFrom: "10/01/2025",
    effectiveTo: "",
    attachedFile: "file4.pdf",
    link: "https://example.com/4",
    note: "Biên bản ghi nhận quá trình thảo luận và sửa đổi chuẩn đầu ra",
  },
];
