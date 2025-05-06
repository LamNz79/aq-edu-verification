import {
  MyButton,
  MyButtonViewPDF,
  MyFieldset,
} from "aq-fe-framework/components";
import { Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

interface I_o4e65ehgty_TableProof {
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

export default function F_o4e65ehgty_TableProof() {
  const Q_data = useQuery({
    queryKey: ["F_o4e65ehgty_TableProof"],
    queryFn: () => {
      return MockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<I_o4e65ehgty_TableProof>[]>(
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
        accessorFn: (row) => <MyButtonViewPDF id={parseInt(row.id)} />,
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
    <MyFieldset title="File minh chứng">
      <Group align="start" style={{ height: "336px", overflowY: "auto" }}>
        <MyDataTable
          enableRowSelection
          columns={columns}
          data={Q_data.data ?? []}
          rowActionSize={100}
          renderTopToolbarCustomActions={() => (
            <>
              <MyButton crudType="default" color="green">
                Sử dụng
              </MyButton>
            </>
          )}
          renderRowActions={(row) => {
            const originalRow = row.row.original;
            if (
              originalRow.ngayHetHan &&
              new Date(originalRow.ngayHetHan) > new Date()
            ) {
              return (
                <MyButton variant="transparent" crudType="default">
                  Sử dụng
                </MyButton>
              );
            } else {
              return (
                <MyButton variant="transparent" crudType="default">
                  Hủy
                </MyButton>
              );
            }
          }}
        />
      </Group>
    </MyFieldset>
  );
}

const MockData: I_o4e65ehgty_TableProof[] = [
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
