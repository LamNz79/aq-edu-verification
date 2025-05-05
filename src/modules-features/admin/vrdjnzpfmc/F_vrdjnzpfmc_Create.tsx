"use client";
import MyButtonCreate from "@/components/Buttons/ButtonCRUD/MyButtonCreate";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  MyDateInput,
  MyFlexColumn,
  MyFlexRow,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
export interface F_vrdjnzpfmc_Create {
  id?: number; // STT
  maChuKy?: string; // Mã chủ kỳ
  maKy?: string; // Mã kỳ
  tenKy?: string; // Tên kỳ
  ngayBatDauCapNhat?: Date; // Ngày bắt đầu cập nhật
  ngayKetThucCapNhat?: Date; // Ngày kết thúc cập nhật
  ngayBatDauTongHop?: Date; // Ngày bắt đầu tổng hợp
  ngayKetThucTongHop?: Date; // Ngày kết thúc tổng hợp
  ghiChu?: string; // Ghi chú
}
export default function F_vrdjnzpfmc_Create() {
  const disc = useDisclosure();
  const form = useForm<F_vrdjnzpfmc_Create>({
    initialValues: {},
    validate: {
      maKy: (value) => (value ? null : "Không được để trống"),
      tenKy: (value) => (value ? null : "Không được để trống"),
      ngayBatDauCapNhat: (value) => (value ? null : "Không được để trống"),
      ngayKetThucCapNhat: (value) => {
        if (!value) return "Không được để trống";
        const startDate = form.values.ngayBatDauCapNhat;
        if (startDate && startDate > value) {
          return "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu";
        }
        return null;
      },
      ngayBatDauTongHop: (value) => (value ? null : "Không được để trống"),
      ngayKetThucTongHop: (value) => {
        if (!value) return "Không được để trống";
        const startDate = form.values.ngayBatDauTongHop;
        if (startDate && startDate > value) {
          return "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu";
        }
        return null;
      },
    },
  });

  return (
    <MyButtonCreate
      disclosure={disc}
      form={form}
      onSubmit={() => {}}
      objectName="Chi tiết kỳ báo cáo"
      modalSize={"lg"}
    >
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
      <MyFlexRow justify="space-between">
        <MyFlexColumn>
          <MyTextInput label="Mã kỳ" {...form.getInputProps("maKy")} />
          <MyDateInput
            label="Ngày bắt đầu cập nhật nội dung báo cáo"
            {...form.getInputProps("ngayBatDauCapNhat")}
          />
          <MyDateInput
            label="Ngày bắt đầu tổng hợp mốc chuẩn"
            {...form.getInputProps("ngayBatDauTongHop")}
          />
        </MyFlexColumn>
        <MyFlexColumn>
          <MyTextInput label="Tên kỳ" {...form.getInputProps("tenKy")} />
          <MyDateInput
            label="Ngày kết thúc cập nhật nội dung báo cáo"
            {...form.getInputProps("ngayKetThucCapNhat")}
          />
          <MyDateInput
            label="Ngày kết thúc tổng hợp mốc chuẩn"
            {...form.getInputProps("ngayKetThucTongHop")}
          />
        </MyFlexColumn>
      </MyFlexRow>
      <MyFlexRow>
        <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
      </MyFlexRow>
    </MyButtonCreate>
  );
}
