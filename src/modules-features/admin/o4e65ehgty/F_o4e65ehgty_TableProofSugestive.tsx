import { useQuery } from "@tanstack/react-query";
import { MyButton, MyButtonViewPDF, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_o4e65ehgty_Proof_View from "./F_o4e65ehgty_Proof/F_o4e65ehgty_Proof_View";

interface I_o4e65ehgty_TableProofSugestive {
  id: string;
  ma?: string;
  ten?: string;
  maFile?: string;
  ngayHieuLuc?: string;
  ngayHetHan?: string;
  lienKet?: string;
  nguoiCapNhat?: string;
  ngayCapNhat?: string;
}

export default function F_o4e65ehgty_TableProofSugestive() {
  const Q_data = useQuery({
    queryKey: ["F_o4e65ehgty_TableProofSugestive"],
    queryFn: () => {
      return MockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_o4e65ehgty_TableProofSugestive>[]>(
    () => [
      { header: "Mã minh chứng", accessorKey: "ma" },
      { header: "Tên minh chứng", accessorKey: "ten", size: 300 },
      { header: "Mã file minh chứng", accessorKey: "maFile" },
      {
        header: "Ngày hiệu lực",
        accessorFn: (row) =>
          row.ngayHieuLuc ? new Date(row.ngayHieuLuc).toLocaleDateString() : "",
      },
      {
        header: "Ngày hết hạn",
        accessorFn: (row) =>
          row.ngayHetHan ? new Date(row.ngayHetHan).toLocaleDateString() : "",
      },
      {
        header: "Xem file",
        accessorKey: "file",
        accessorFn: (row)  => <MyButtonViewPDF id={parseInt(row.id)} />,
        size: 60,
      },
      {
        header: "Xem liên kết",
        accessorKey: "lienKet",
      },
      {
        header: "Trạng thái",
        accessorKey: "trangThai",
        accessorFn: (row) => {
          if (row.ngayHetHan && new Date(row.ngayHetHan) > new Date()) {
            return "Còn hạn";
          } else {
            return "Hết hạn";
          }
        },
      },
    ],
    [Q_data.data]
  );

  return (
    <MyFieldset title="Minh chứng gợi ý">
      <MyDataTable
        enableRowSelection
        columns={columns}
        rowActionSize={20}
        data={Q_data.data ?? []}
        renderTopToolbarCustomActions={() => (
          <>
            <F_o4e65ehgty_Proof_View />
          </>
        )}
        renderRowActions={(row) => {
          const originalRow = row.row.original;
          if (
            originalRow.ngayHetHan &&
            new Date(originalRow.ngayHetHan) < new Date()
          ) {
            return (
              <MyButton variant="transparent" crudType="default">
                Hủy
              </MyButton>
            );
          }
        }}
      />
    </MyFieldset>
  );
}

const MockData: I_o4e65ehgty_TableProofSugestive[] = [
  {
    id: "1",
    ma: "CODE-2",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2024",
    maFile: "MD-23",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-12-15",
  },
  {
    id: "2",
    ma: "CODE-3",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2023",
    maFile: "MD-24",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-04-31",
  },
  {
    id: "1",
    ma: "CODE-2",
    ten: "Báo cáo kết quả nghiên cứu khoa học năm 2024",
    maFile: "MD-23",
    ngayHieuLuc: "2025-01-15",
    ngayHetHan: "2025-12-15",
  },
];
