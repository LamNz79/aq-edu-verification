"use client";

import { Button, Checkbox, CopyButton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MyButtonDeleteList, MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import { MyButtonViewPDF } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IEvidenceVersion } from "../interfaces/EvidenceManagementViewModel";
import EvidenceVersionsDelete from "./EvidenceVersionsDelete";
import EvidenceVersionsCreate from "./EvidenceVersionsCreate";
import EvidenceVersionsUpdate from "./EvidenceVersionsUpdate";

interface EvidenceVersionsTabProps {
  evidenceCode: string;
}

export default function EvidenceVersionsTab({ evidenceCode }: EvidenceVersionsTabProps) {
  const query = useQuery({
    queryKey: ["evidence-versions", evidenceCode],
    queryFn: () => {
      return mockVersionData.filter((item) => item.evidenceCode === evidenceCode);
    },
  });

  const columns = useMemo<MRT_ColumnDef<IEvidenceVersion>[]>(
    () => [
      {
        header: "ID File",
        accessorKey: "fileId",
        size: 120,
      },
      {
        header: "Tên file",
        accessorKey: "fileName",
        size: 300,
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
        Cell: ({ cell }) => {
          const link = cell.getValue();
          return (
            <MyCenterFull>
              <CopyButton value={link as string}>
                {({ copied, copy }) => (
                  <Button variant="transparent" onClick={copy}>
                    {copied ? "Đã copy" : `${link}`}
                  </Button>
                )}
              </CopyButton>
            </MyCenterFull>
          );
        },
      },
      {
        header: "Số - Ngày ban hành",
        accessorKey: "issuanceNumberDate",
        size: 200,
      },
      {
        header: "Đơn vị ban hành/ cấp",
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
        header: "Ghi chú phiên bản",
        accessorKey: "versionNote",
        size: 250,
      },
      {
        header: "Hiện hành",
        accessorKey: "isCurrent",
        size: 100,
        Cell: ({ cell }) => (
          <MyCenterFull>
            <Checkbox checked={cell.getValue() as boolean} readOnly />
          </MyCenterFull>
        ),
      },
    ],
    []
  );

  const handleCreateVersion = (newVersion: IEvidenceVersion) => {
    console.log("Created new version:", newVersion);
    // TODO: Integrate with API to create version
    // You can also update the query cache here
  };

  const handleUpdateVersion = (updatedVersion: IEvidenceVersion) => {
    console.log("Updated version:", updatedVersion);
    // TODO: Integrate with API to update version
    // You can also update the query cache here
  };

  return (
    <MyDataTable
      columns={columns}
      enableRowSelection={true}
      renderTopToolbarCustomActions={({ table }) => (
        <>
          <EvidenceVersionsCreate evidenceCode={evidenceCode} />
          <MyButtonDeleteList
            onSubmit={() => {
              const selectedIds = table
                .getSelectedRowModel()
                .flatRows.flatMap((item) => item.original)
                .map((item) => item.fileId)
                .join(", ");
              console.log("Deleting versions with IDs:", selectedIds);
              // TODO: Integrate with API to delete versions
            }}
            contextData={table
              .getSelectedRowModel()
              .flatRows.flatMap((item) => item.original)
              .map((item) => item.fileName)
              .join(", ")}
          />
        </>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <EvidenceVersionsUpdate values={row.original} onSubmit={handleUpdateVersion} />
          <EvidenceVersionsDelete id={row.original.fileId} code={row.original.evidenceCode} />
        </MyCenterFull>
      )}
      data={query.data || []}
    />
  );
}

const mockVersionData: IEvidenceVersion[] = [
  {
    fileId: "FILE_ID_0001",
    fileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    attachedFile: "file1.pdf",
    link: "https://example.com/file1",
    issuanceNumberDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
    versionNote: "Phiên bản mới nhất sau đợt rà soát định kỳ 2025",
    isCurrent: true,
    evidenceCode: "H5.05.02.01",
  },
  {
    fileId: "FILE_ID_0006",
    fileName: "Quyết định ban hành Quy chế đào tạo ĐH (2023)",
    attachedFile: "file6.pdf",
    link: "https://example.com/file6",
    issuanceNumberDate: "Số 789/QĐ-ĐT Ngày 15/01/2023",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2023",
    effectiveTo: "31/01/2025",
    versionNote: "Phiên bản Quy chế đào tạo áp dụng cho giai đoạn 2023 - 2025",
    isCurrent: false,
    evidenceCode: "H5.05.02.01",
  },
  {
    fileId: "FILE_ID_0007",
    fileName: "Biên bản họp Hội đồng Khoa học về sửa đổi Quy chế ĐT (2025)",
    attachedFile: "file7.pdf",
    link: "https://example.com/file7",
    issuanceNumberDate: "Ngày 10/01/2025",
    issuingUnit: "Hội đồng Khoa học Trường",
    effectiveFrom: "10/01/2025",
    effectiveTo: "",
    versionNote: "Là tài liệu nền tảng cho Quyết định ban hành Quy chế đào tạo 2025",
    isCurrent: false,
    evidenceCode: "H5.05.02.01",
  },
  {
    fileId: "FILE_ID_0003",
    fileName: "Quyết định về mục tiêu và chuẩn đầu ra KTPM (2024)",
    attachedFile: "file3.pdf",
    link: "https://example.com/file3",
    issuanceNumberDate: "Số 123/QĐ-KHMT Ngày 15/05/2024",
    issuingUnit: "Khoa Khoa học Máy tính",
    effectiveFrom: "01/09/2024",
    effectiveTo: "31/08/2028",
    versionNote: "Phiên bản cập nhật cho CTĐT KTPM",
    isCurrent: false,
    evidenceCode: "H1.01.01.01",
  },
];
