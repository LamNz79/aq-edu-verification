"use client";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  MyButton,
  MyDataTable,
  MyDateInput,
  MyFieldset,
  MyFlexColumn,
  MyFlexRow,
  MyNumberInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { useMemo, useState } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";

export interface F_vrdjnzpfmc_CreateChuKy {
  maChuKy?: string; // Mã chu kỳ
  soNam?: number; // Số năm của 1 chu kỳ
  namBatDau?: number; // Năm bắt đầu chu kỳ
  soKyCapNhat?: number; // Số kỳ cập nhật đánh giá trong một năm
}

export interface F_vrdjnzpfmc_CreateChiTietChuKy {
  ky?: number; // Kỳ
  ngayBatDauCapNhat?: Date; // Ngày bắt đầu cập nhật nội dung báo cáo
  ngayKetThucCapNhat?: Date; // Ngày kết thúc cập nhật nội dung báo cáo
  ngayBatDauTongHop?: Date; // Ngày bắt đầu tổng hợp mốc chuẩn
  ngayKetThucTongHop?: Date; // Ngày kết thúc tổng hợp mốc chuẩn
}
export default function F_vrdjnzpfmc_CreateChuKy() {
  const [dsKy, setDsKy] = useState<F_vrdjnzpfmc_CreateChiTietChuKy[]>([]);
  const disc = useDisclosure();
  const form = useForm<F_vrdjnzpfmc_CreateChuKy>({
    initialValues: {},
    validate: {
      soNam: (value) => (value ? null : "Không được để trống"),
      namBatDau: (value) => (value ? null : "Không được để trống"),
      soKyCapNhat: (value) => (value ? null : "Không được để trống"),
    },
  });
  const handleConfirm = () => {
    const soKy = form.values.soKyCapNhat;
    if (soKy) {
      const newDsKy: F_vrdjnzpfmc_CreateChiTietChuKy[] = [];
      for (let i = 1; i <= soKy; i++) {
        newDsKy.push({
          ky: i,
          ngayBatDauCapNhat: undefined,
          ngayKetThucCapNhat: undefined,
          ngayBatDauTongHop: undefined,
          ngayKetThucTongHop: undefined,
        });
      }
      setDsKy(newDsKy);
    }
  };
  const columns = useMemo<MRT_ColumnDef<F_vrdjnzpfmc_CreateChiTietChuKy>[]>(
    () => [
      {
        accessorKey: "ky",
        header: "Kỳ",
      },
      {
        accessorKey: "ngayBatDauCapNhat",
        header: "Ngày bắt đầu cập nhật nội dung báo cáo",
        Cell: ({ row }) => {
          return <MyDateInput value={row.original.ngayBatDauCapNhat} />;
        },
      },
      {
        accessorKey: "ngayKetThucCapNhat",
        header: "Ngày kết thúc cập nhật nội dung báo cáo",
        Cell: ({ row }) => {
          return <MyDateInput value={row.original.ngayKetThucCapNhat} />;
        },
      },
      {
        accessorKey: "ngayBatDauTongHop",
        header: "Ngày bắt đầu tổng hợp mốc chuẩn",
        Cell: ({ row }) => {
          return <MyDateInput value={row.original.ngayBatDauTongHop} />;
        },
      },
      {
        accessorKey: "ngayKetThucTongHop",
        header: "Ngày kết thúc tổng hợp mốc chuẩn",
        Cell: ({ row }) => {
          return <MyDateInput value={row.original.ngayKetThucTongHop} />;
        },
      },
    ],
    []
  );

  return (
    <MyButtonCreate
      disclosure={disc}
      form={form}
      onSubmit={() => {}}
      objectName="chu kỳ cập nhật báo cáo"
      modalSize={"90%"}
      label="Tạo chu kỳ"
    >
      <MyFlexColumn gap="md" style={{ height: "100%" }}>
        <MyFlexRow>
          <MySelect
            allowDeselect={false}
            label="Mã chu kỳ"
            data={["2023-2028", "2024-2029"]}
            defaultValue={"2023-2028"}
            onChange={(value) =>
              form.setFieldValue("maChuKy", value ?? undefined)
            }
          />
        </MyFlexRow>
        <MyFlexRow align={"flex-end"}>
          <MyNumberInput
            withAsterisk
            label="Số năm của 1 chu kỳ"
            {...form.getInputProps("soNam")}
            min={1}
            max={10}
          />
          <MyNumberInput
            withAsterisk
            label="Năm bắt đầu chu kỳ"
            min={1}
            {...form.getInputProps("namBatDau")}
          />
          <MyNumberInput
            withAsterisk
            min={1}
            max={9}
            label="Số kỳ cập nhật đánh giá trong một năm"
            {...form.getInputProps("soKyCapNhat")}
          />
          <MyButton crudType="default" onClick={() => handleConfirm()}>
            Xác nhận
          </MyButton>
        </MyFlexRow>
        <MyFlexRow style={{ flex: 1, minHeight: 0 }}>
          <MyFieldset
            title="Danh sách chi tiết kỳ cập nhật báo cáo ở năm"
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ height: "calc(100% - 40px)" }}>
              <MyDataTable
                enableRowSelection={true}
                columns={columns}
                enableRowNumbers={false}
                data={dsKy}
                enableColumnResizing
                enablePagination={false}
                enableBottomToolbar={false}
                enableTopToolbar={false}
                enableColumnFilters={false}
                enableSorting={false}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                enableHiding={false}
              />
            </div>
          </MyFieldset>
        </MyFlexRow>
      </MyFlexColumn>
    </MyButtonCreate>
  );
}
