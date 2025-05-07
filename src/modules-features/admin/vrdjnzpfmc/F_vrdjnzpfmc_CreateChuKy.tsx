"use client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  MyButton,
  MyButtonModal,
  MyDataTable,
  MyDateInput,
  MyFieldset,
  MyFlexColumn,
  MyFlexRow,
  MyNumberInput,
  MySelect,
} from "aq-fe-framework/components";
import { useMemo, useState } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { IconPlus } from "@tabler/icons-react";

export interface F_vrdjnzpfmc_CreateChuKy {
  maChuKy?: string; // Mã chu kỳ
  soNam?: number; // Số năm của 1 chu kỳ
  namBatDau?: number; // Năm bắt đầu chu kỳ
  soKyCapNhat?: number; // Số kỳ cập nhật đánh giá trong một năm
  dsChiTietChuKy: F_vrdjnzpfmc_CreateChiTietChuKy[]; // Danh sách chi tiết chu kỳ
}

export interface F_vrdjnzpfmc_CreateChiTietChuKy {
  ky?: number; // Kỳ
  ngayBatDauCapNhat?: Date; // Ngày bắt đầu cập nhật nội dung báo cáo
  ngayKetThucCapNhat?: Date; // Ngày kết thúc cập nhật nội dung báo cáo
  ngayBatDauTongHop?: Date; // Ngày bắt đầu tổng hợp mốc chuẩn
  ngayKetThucTongHop?: Date; // Ngày kết thúc tổng hợp mốc chuẩn
}
export default function F_vrdjnzpfmc_CreateChuKy() {
  const disc = useDisclosure();
  const form = useForm<F_vrdjnzpfmc_CreateChuKy>({
    initialValues: {
      dsChiTietChuKy: [],
    },
    validate: {
      soNam: (value) => (value ? null : "Không được để trống"),
      namBatDau: (value) => (value ? null : "Không được để trống"),
      soKyCapNhat: (value) => (value ? null : "Không được để trống"),
      dsChiTietChuKy: {
        ngayBatDauCapNhat: (value, values, path) => {
          const index = parseInt(path.split(".")[1]);
          const item = values.dsChiTietChuKy[index];
          if (!value) {
            return "Vui lòng chọn ngày bắt đầu cập nhật";
          }
          if (
            value &&
            item.ngayKetThucCapNhat &&
            value > item.ngayKetThucCapNhat
          ) {
            return "Ngày bắt đầu cập nhật phải nhỏ hơn ngày kết thúc cập nhật";
          }
          return null;
        },
        ngayKetThucCapNhat: (value, values, path) => {
          const index = parseInt(path.split(".")[1]);
          const item = values.dsChiTietChuKy[index];
          if (!value) {
            return "Vui lòng chọn ngày kết thúc cập nhật";
          }
          if (
            value &&
            item.ngayBatDauCapNhat &&
            value < item.ngayBatDauCapNhat
          ) {
            return "Ngày kết thúc cập nhật phải lớn hơn ngày bắt đầu cập nhật";
          }
          return null;
        },
        ngayBatDauTongHop: (value, values, path) => {
          const index = parseInt(path.split(".")[1]);
          const item = values.dsChiTietChuKy[index];
          if (!value) {
            return "Vui lòng chọn ngày bắt đầu tổng hợp";
          }
          if (
            value &&
            item.ngayKetThucTongHop &&
            value > item.ngayKetThucTongHop
          ) {
            return "Ngày bắt đầu tổng hợp phải nhỏ hơn ngày kết thúc tổng hợp";
          }
          return null;
        },
        ngayKetThucTongHop: (value, values, path) => {
          const index = parseInt(path.split(".")[1]);
          const item = values.dsChiTietChuKy[index];
          if (!value) {
            return "Vui lòng chọn ngày kết thúc tổng hợp";
          }
          if (
            value &&
            item.ngayBatDauTongHop &&
            value < item.ngayBatDauTongHop
          ) {
            return "Ngày kết thúc tổng hợp phải lớn hơn ngày bắt đầu tổng hợp";
          }
          return null;
        },
      },
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
      form.setFieldValue("dsChiTietChuKy", newDsKy);
    }
  };

  const handleCreateChuKy = async () => {
    try {
      if (form.validate().hasErrors) {
        return;
      }

      // Prepare data for API
      const chuKyData = {
        ...form.values,
        dsChiTietChuKy: form.values.dsChiTietChuKy.map((ky) => ({
          ...ky,
          ngayBatDauCapNhat: ky.ngayBatDauCapNhat?.toISOString(),
          ngayKetThucCapNhat: ky.ngayKetThucCapNhat?.toISOString(),
          ngayBatDauTongHop: ky.ngayBatDauTongHop?.toISOString(),
          ngayKetThucTongHop: ky.ngayKetThucTongHop?.toISOString(),
        })),
      };

      // TODO: Add API call here
      // const response = await api.createChuKy(chuKyData);
      
      notifications.show({
        title: "Thành công",
        message: "Tạo chu kỳ thành công",
        color: "green",
      });
      
      // Reset form to initial values
      form.reset();
      disc[1].close();
    } catch (error) {
      console.error("Error creating chu ky:", error);
      notifications.show({
        title: "Lỗi",
        message: "Có lỗi xảy ra khi tạo chu kỳ",
        color: "red",
      });
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
          const index = form.values.dsChiTietChuKy.findIndex(
            (item) => item.ky === row.original.ky
          );
          return (
            <MyDateInput
              {...form.getInputProps(
                `dsChiTietChuKy.${index}.ngayBatDauCapNhat`
              )}
            />
          );
        },
      },
      {
        accessorKey: "ngayKetThucCapNhat",
        header: "Ngày kết thúc cập nhật nội dung báo cáo",
        Cell: ({ row }) => {
          const index = form.values.dsChiTietChuKy.findIndex(
            (item) => item.ky === row.original.ky
          );
          return (
            <MyDateInput
              {...form.getInputProps(
                `dsChiTietChuKy.${index}.ngayKetThucCapNhat`
              )}
            />
          );
        },
      },
      {
        accessorKey: "ngayBatDauTongHop",
        header: "Ngày bắt đầu tổng hợp mốc chuẩn",
        Cell: ({ row }) => {
          const index = form.values.dsChiTietChuKy.findIndex(
            (item) => item.ky === row.original.ky
          );
          return (
            <MyDateInput
              {...form.getInputProps(
                `dsChiTietChuKy.${index}.ngayBatDauTongHop`
              )}
            />
          );
        },
      },
      {
        accessorKey: "ngayKetThucTongHop",
        header: "Ngày kết thúc tổng hợp mốc chuẩn",
        Cell: ({ row }) => {
          const index = form.values.dsChiTietChuKy.findIndex(
            (item) => item.ky === row.original.ky
          );
          return (
            <MyDateInput
              {...form.getInputProps(
                `dsChiTietChuKy.${index}.ngayKetThucTongHop`
              )}
            />
          );
        },
      },
    ],
    [form]
  );

  return (
    <MyButtonModal
      disclosure={disc}
      title="Tạo chu kỳ cập nhật báo cáo"
      modalSize={"90%"}
      label="Tạo chu kỳ"
      leftSection={<IconPlus />}
      color="blue"
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
            hideControls
            label="Số năm của 1 chu kỳ"
            {...form.getInputProps("soNam")}
            min={1}
            max={10}
          />
          <MyNumberInput
            withAsterisk
            hideControls
            label="Năm bắt đầu chu kỳ"
            min={1}
            {...form.getInputProps("namBatDau")}
          />
          <MyNumberInput
            withAsterisk
            hideControls
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
                enableRowSelection={false}
                columns={columns}
                enableRowNumbers={false}
                data={form.values.dsChiTietChuKy}
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
        <MyFlexRow justify="flex-end" gap="md">
          <MyButton crudType="create" onClick={handleCreateChuKy}>
            Tạo chu kỳ
          </MyButton>
          <MyButton crudType="cancel" onClick={() => disc[1].close()}>
            Hủy
          </MyButton>
        </MyFlexRow>
      </MyFlexColumn>
    </MyButtonModal>
  );
}
