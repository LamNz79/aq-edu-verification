import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_o4e65ehgty_Proof_View from "./F_o4e65ehgty_Proof/F_o4e65ehgty_Proof_View";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";

interface I_o4e65ehgty_TableProofSugestive {
  id: string;
  ma?: string;
  ten?: string;
  maFile?: string;
  ngayHieuLuc?: Date;
  ngayHetHan?: Date;
  lienKet?: string;
  nguoiCapNhat?: string;
  ngayCapNhat?: Date;
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
          row.ngayHieuLuc &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayHieuLuc ?? "")),
      },
      {
        header: "Ngày hết hạn",
        accessorFn: (row) =>
          row.ngayHetHan &&
          utils_date_dateToDDMMYYYString(new Date(row.ngayHetHan ?? "")),
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
      {
        header: "Thao tác",
        accessorKey: "thaoTac",
        size: 60,
        accessorFn: (row) => {
          if (row.ngayHetHan && new Date(row.ngayHetHan) < new Date()) {
            return (
              <MyButton variant="transparent" crudType="default">
                Hủy
              </MyButton>
            );
          }
        },
      },
    ],
    [Q_data.data]
  );

  return (
    <MyFieldset
      title="Minh chứng sử dụng"
      h={"320px"}
      style={{ overflowY: "auto" }}
    >
      <MyDataTable
        enableRowSelection
        initialState={{ columnPinning: { right: ["trangThai", "thaoTac"] } }}
        columns={columns}
        data={Q_data.data ?? []}
        renderTopToolbarCustomActions={() => (
          <>
            <F_o4e65ehgty_Proof_View />
          </>
        )}
      />
    </MyFieldset>
  );
}

const MockData: I_o4e65ehgty_TableProofSugestive[] = [
  {
    id: "1",
    ma: "MC0001",
    ten: "Hình ảnh hoạt động",
    maFile: "MD-23",
    ngayHieuLuc: new Date("2025-01-15"),
    ngayHetHan: new Date("2025-12-15"),
  },
  {
    id: "2",
    ma: "MC0002",
    ten: "Video hoạt động",
    maFile: "MD-24",
    ngayHieuLuc: new Date("2025-01-15"),
    ngayHetHan: new Date("2025-04-30"),
  },
];
