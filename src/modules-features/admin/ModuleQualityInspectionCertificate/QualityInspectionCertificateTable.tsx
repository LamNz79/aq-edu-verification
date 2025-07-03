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
import IQualityInspectionCertificateInfoViewModel from "./interfaces/IQualityInspectionCertificateInfoViewModel";
import QualityInspectionCertificateDeleteButton from "./QualityInspectionCertificateDeleteButton";
import QualityInspectionCertificateDeleteListButton from "./QualityInspectionCertificateDeleteListButton";
import QualityInspectionCertificateUpdateButton from "./QualityInspectionCertificateUpdateButton";
import QualityInspectionCertificateCreateButton from "./QualityInspectionCertificateCreateButton";

export default function QualityInspectionCertificateTable() {
  const columns = useMemo<MRT_ColumnDef<IQualityInspectionCertificateInfoViewModel>[]>(
    () => [
      { header: "Số Giấy chứng nhận", accessorKey: "code" },
      { header: "Đơn vị cấp", accessorKey: "issuer" },
      { header: "Ngày cấp", accessorKey: "issueDate" },
      { header: "Ngày hết hiệu lực", accessorKey: "expiryDate" },
      { header: "Đợt Kiểm định", accessorKey: "inspectionBatch" },
      {
        header: "Trạng thái hiệu lực",
        accessorKey: "isActive",
        Cell: ({ cell }) => (
          <MyCenterFull>
            <MyCheckbox checked={cell.getValue() as boolean} readOnly />
          </MyCenterFull>
        ),
      },
      {
        header: "File Giấy chứng nhận",
        accessorKey: "filePath",
        size: 200,
        Cell: ({ cell }) => <MyButtonViewPDF src={cell.getValue() as string} />,
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách Giấy chứng nhận">
      <MyDataTable
        enableRowSelection
        columns={columns}
        data={mockData || []}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <>
              <QualityInspectionCertificateCreateButton />
              <MyButton crudType="create">Thêm phiên bản</MyButton>
              <MyButton crudType="import" />
              <MyButton crudType="export" />
              <QualityInspectionCertificateDeleteListButton
                values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
              />
            </>
          );
        }}
        renderRowActions={({ row }) => {
          return (
            <MyCenterFull>
              <QualityInspectionCertificateUpdateButton values={row.original} />
              <QualityInspectionCertificateDeleteButton
                id={row.original.id || 0}
                code={row.original.code}
              />
            </MyCenterFull>
          );
        }}
      />
    </MyFieldset>
  );
}

const mockData: IQualityInspectionCertificateInfoViewModel[] = [
  {
    id: 1,
    code: "001/GCNKDCL-ĐH",
    issuer: "Trung tâm KĐCLGD - ĐHQGHN",
    issueDate: "2024-05-20",
    expiryDate: "2029-05-20",
    inspectionBatch: "KĐCL KTPM K60 - 2024",
    isActive: true,
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "certificate-001-GCNKDCL-ĐH.pdf",
    },
  },
  {
    id: 2,
    code: "002/GCNKDCL-KHXHNV",
    issuer: "Trung tâm KĐCLGD - ĐHQGHN",
    issueDate: "2019-11-10",
    expiryDate: "2024-11-10",
    inspectionBatch: "KĐCL Ngôn ngữ Anh K55 - 2019",
    isActive: false,
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "certificate-002-GCNKDCL-KHXHNV.pdf",
    },
  },
  {
    id: 3,
    code: "003/GCNKDCL-CTĐL",
    issuer: "Trung tâm KĐCLGD - ĐHDN",
    issueDate: "2023-08-01",
    expiryDate: "2028-08-01",
    inspectionBatch: "KĐCL CNTT Tiên tiến K58 - 2023",
    isActive: true,
    filePath: "https://datafiles.chinhphu.vn/cpp/files/vbpq/2016/07/85.signed.pdf",
    fileDetail: {
      fileName: "certificate-003-GCNKDCL-CTĐL.pdf",
    },
  },
];
