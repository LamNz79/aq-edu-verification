import { MyFlexColumn } from "aq-fe-framework/components";
import { Text } from "@mantine/core";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useQuery } from "@tanstack/react-query";
import { mock } from "node:test";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";
export interface F_qlkbc_Read {
  id?: number; // STT
  maChuKy?: string; // Mã chủ kỳ
  maKy?: string; // Mã kỳ
  tenKy?: string; // Tên kỳ
  ngayBatDau?: Date; // Ngày bắt đầu
  ngayKetThuc?: Date; // Ngày kết thúc
  ghiChu?: string; // Ghi chú
}

const mockData: F_qlkbc_Read[] = [
  {
    id: 1,
    maChuKy: "2023-2028",
    maKy: "2024.01",
    tenKy: "Kỳ 1 năm 2024",
    ngayBatDau: new Date("2024-01-01"),
    ngayKetThuc: new Date("2024-06-30"),
    ghiChu: "Ghi chú 1",
  },
  {
    id: 2,
    maChuKy: "2023-2028",
    maKy: "2024.02",
    tenKy: "Kỳ 2 năm 2024",
    ngayBatDau: new Date("2024-07-01"),
    ngayKetThuc: new Date("2024-12-31"),
    ghiChu: "Ghi chú 2",
  },
];
export default function F_qlkbc_Read() {
  const query = useQuery<F_qlkbc_Read[]>({
    queryKey: ["F_qlkbc_Read"],
    queryFn: async () => mockData,
  });
  const columns = useMemo<MRT_ColumnDef<F_qlkbc_Read>[]>(
    () => [
      {
        header: "Mã chu kỳ",
        accessorKey: "maChuKy",
      },
      {
        header: "Mã kỳ",
        accessorKey: "maKy",
      },
      {
        header: "Tên kỳ",
        accessorKey: "tenKy",
      },
      {
        header: "Ngày bắt đầu",
        accessorFn(originalRow) {
          return utils_date_dateToDDMMYYYString(
            new Date(originalRow.ngayBatDau!)
          );
        },
      },
      {
        header: "Ngày kết thúc",
        accessorFn(originalRow) {
          return utils_date_dateToDDMMYYYString(
            new Date(originalRow.ngayKetThuc!)
          );
        },
      },
      {
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
    ],
    []
  );
  if (query.isLoading) return "Đang tải...";
  if (query.isError) return "Không có dữ liệu";

  return (
    <MyFieldset title="Danh sách kỳ cập nhật báo cáo">
      <MyDataTable
        enableRowSelection={true}
        columns={columns}
        enableRowNumbers={true}
        data={query.data!}
        // renderTopToolbarCustomActions={({ table }) => {
        //   return (
        //     <>
        //       <Group>
        //         <MyButton crudType="save" />
        //         <AQButtonCreateByImportFile
        //           setImportedData={setImportData}
        //           form={form_multiple}
        //           onSubmit={() => {
        //             console.log(form_multiple.values);
        //           }}
        //         >
        //           s
        //         </AQButtonCreateByImportFile>
        //         <AQButtonExportData
        //           isAllData={true}
        //           objectName="dsPLO"
        //           data={query.data!}
        //           exportConfig={exportConfig}
        //         />
        //         <F_rb55trm19d_Delete />
        //       </Group>
        //     </>
        //   );
        // }}
      />
    </MyFieldset>
  );
}
