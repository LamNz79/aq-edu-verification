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
import { U0DateToDDMMYYYString } from "aq-fe-framework/utils";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { Checkbox } from "@mantine/core";
import { CertificateEducationProgramsViewModel } from "./interfaces/CertificateEducationProgramsViewModel";
import CertificateEducationProgramsDelete from "./CertificateEducationProgramsDelete";
import CertificateEducationProgramsCreate from "./CertificateEducationProgramsCreate";
import CertificateEducationProgramsUpdate from "./CertificateEducationProgramsUpdate";

export default function CertificateEducationProgramsTable() {
  const query = useQuery({
    queryKey: ["certificate-education-programs"],
    queryFn: () => {
      return mockData;
    },
  });

  const form_multiple = useForm<any>({
    initialValues: {
      importedData: [],
    },
  });

  const columns = useMemo<MRT_ColumnDef<CertificateEducationProgramsViewModel>[]>(
    () => [
      {
        header: "Số Giấy chứng nhận",
        accessorKey: "certificateNumber",
        size: 180,
      },
      {
        header: "Đơn vị cấp",
        accessorKey: "issuingAuthority",
        size: 200,
      },
      {
        header: "Ngày cấp",
        accessorKey: "issueDate",
        size: 120,
        Cell: ({ cell }) => U0DateToDDMMYYYString(cell.getValue<Date>()),
      },
      {
        header: "Ngày hết hiệu lực",
        accessorKey: "expiryDate",
        size: 140,
        Cell: ({ cell }) => U0DateToDDMMYYYString(cell.getValue<Date>()),
      },
      {
        header: "Chương trình đào tạo",
        accessorKey: "trainingProgram",
        size: 180,
      },
      {
        header: "Khóa",
        accessorKey: "cohort",
        size: 100,
      },
      {
        header: "Đợt Kiểm định",
        accessorKey: "accreditationRound",
        size: 200,
      },
      {
        header: "Trạng thái hiệu lực",
        accessorKey: "isValid",
        size: 140,
        Cell: ({ cell }) => (
          <MyCenterFull>
            <Checkbox checked={cell.getValue<boolean>()} readOnly size="sm" />
          </MyCenterFull>
        ),
      },
      {
        header: "File Giấy chứng nhận",
        accessorKey: "certificateFile",
        size: 160,
        Cell: () => (
          <MyCenterFull>
            <MyButtonViewPDF />
          </MyCenterFull>
        ),
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách giấy chứng nhận">
      <MyDataTable
        columns={columns}
        enableRowSelection={true}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <CertificateEducationProgramsCreate />
              <AQButtonCreateByImportFile onSubmit={() => {}} form={form_multiple} />
              <MyButton crudType="export" />
              <MyButtonDeleteList
                onSubmit={() => {}}
                contextData={table
                  .getSelectedRowModel()
                  .flatRows.flatMap((item) => item.original)
                  .map((item) => item.id)
                  .join(", ")}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <CertificateEducationProgramsUpdate values={row.original} />
              <CertificateEducationProgramsDelete
                id={row.original.id}
                code={row.original.certificateNumber}
              />
            </MyCenterFull>
          );
        }}
        data={query.data || []}
      />
    </MyFieldset>
  );
}

const mockData: CertificateEducationProgramsViewModel[] = [
  {
    id: 1,
    certificateNumber: "001/GCNKĐCL-ĐH",
    issuingAuthority: "Trung tâm KĐCLGĐ - ĐHQGHN",
    issueDate: new Date(2024, 4, 20), // May 20, 2024
    expiryDate: new Date(2029, 4, 20), // May 20, 2029
    trainingProgram: "Kỹ thuật phần mềm",
    cohort: "K60",
    accreditationRound: "KĐCL KTPM K60 - 2024",
    isValid: true,
    certificateFile: "certificate_001_KTPM_K60.pdf",
    period: "2024-2029",
  },
  {
    id: 2,
    certificateNumber: "002/GCNKĐCL-KHXH",
    issuingAuthority: "Trung tâm KĐCLGĐ - ĐHQGHN",
    issueDate: new Date(2019, 10, 10), // November 10, 2019
    expiryDate: new Date(2024, 10, 10), // November 10, 2024
    trainingProgram: "Ngôn ngữ Anh",
    cohort: "K55",
    accreditationRound: "KĐCL Ngôn ngữ Anh K55 - 2019",
    isValid: false,
    certificateFile: "certificate_002_NgonNguAnh_K55.pdf",
    period: "2019-2024",
  },
  {
    id: 3,
    certificateNumber: "003/GCNKĐCL-CTĐL",
    issuingAuthority: "Trung tâm KĐCLGĐ - ĐHĐN",
    issueDate: new Date(2023, 7, 1), // August 1, 2023
    expiryDate: new Date(2028, 7, 1), // August 1, 2028
    trainingProgram: "Công nghệ thông tin Tiên tiến",
    cohort: "K58",
    accreditationRound: "KĐCL CNTT Tiên tiến K58 - 2023",
    isValid: true,
    certificateFile: "certificate_003_CNTTTienTien_K58.pdf",
    period: "2023-2028",
  },
];
