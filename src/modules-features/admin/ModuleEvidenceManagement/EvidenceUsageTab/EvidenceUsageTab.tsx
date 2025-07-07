"use client";

import { CopyButton, Button } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MyButtonViewPDF, MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IEvidenceUsage } from "../interfaces/EvidenceManagementViewModel";

interface EvidenceUsageTabProps {
  evidenceCode: string;
}

export default function EvidenceUsageTab({ evidenceCode }: EvidenceUsageTabProps) {
  const query = useQuery({
    queryKey: ["evidence-usage", evidenceCode],
    queryFn: () => {
      return mockUsageData.filter((item) => item.evidenceCode === evidenceCode);
    },
  });

  const columns = useMemo<MRT_ColumnDef<IEvidenceUsage>[]>(
    () => [
      {
        header: "Mã Kế hoạch TDG",
        accessorKey: "evaluationPlanCode",
        size: 150,
      },
      {
        header: "Mã CTĐT",
        accessorKey: "programCode",
        size: 100,
      },
      {
        header: "Khoá",
        accessorKey: "cohort",
        size: 80,
      },
      {
        header: "Mã Tiêu chuẩn",
        accessorKey: "standardCode",
        size: 120,
      },
      {
        header: "Mã Tiêu chí",
        accessorKey: "criteriaCode",
        size: 120,
      },
      {
        header: "ID File",
        accessorKey: "fileId",
        size: 120,
      },
      {
        header: "Tên file hiện thị",
        accessorKey: "displayFileName",
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
    ],
    []
  );

  return <MyDataTable columns={columns} enableRowSelection={true} data={query.data || []} />;
}

const mockUsageData: IEvidenceUsage[] = [
  {
    evaluationPlanCode: "KH-KTPM-2024",
    programCode: "KTPM",
    cohort: "K2020",
    standardCode: "TC_05",
    criteriaCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    displayFileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    attachedFile: "file1.pdf",
    link: "https://example.com/file1",
    issuanceNumberDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    evaluationPlanCode: "KH-KTPM-2024",
    programCode: "KTPM",
    cohort: "K2021",
    standardCode: "TC_05",
    criteriaCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    displayFileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    attachedFile: "file1.pdf",
    link: "https://example.com/file1",
    issuanceNumberDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    evaluationPlanCode: "KH-KT-2025",
    programCode: "KT",
    cohort: "K2019",
    standardCode: "TC_05",
    criteriaCode: "TC_05.02",
    evidenceCode: "H5.05.02.01",
    fileId: "FILE_ID_0001",
    displayFileName: "Quyết định ban hành Quy chế đào tạo ĐH (2025)",
    attachedFile: "file1.pdf",
    link: "https://example.com/file1",
    issuanceNumberDate: "Số 456/QĐ-ĐT Ngày 20/01/2025",
    issuingUnit: "Trường Đại học Đồng Nai",
    effectiveFrom: "01/02/2025",
    effectiveTo: "31/01/2027",
  },
  {
    evaluationPlanCode: "KH-KTPM-2024",
    programCode: "KTPM",
    cohort: "K2020",
    standardCode: "TC_01",
    criteriaCode: "TC_01.01",
    evidenceCode: "H1.01.01.01",
    fileId: "FILE_ID_0003",
    displayFileName: "Quyết định về mục tiêu và chuẩn đầu ra KTPM (2024)",
    attachedFile: "file3.pdf",
    link: "https://example.com/file3",
    issuanceNumberDate: "Số 123/QĐ-KHMT Ngày 15/05/2024",
    issuingUnit: "Khoa Khoa học Máy tính",
    effectiveFrom: "01/09/2024",
    effectiveTo: "31/08/2028",
  },
];
