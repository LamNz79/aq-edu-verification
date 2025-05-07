"use client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyFlexColumn,
  MyFlexRow,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { F_vrdjnzpfmc } from "./F_vrdjnzpfmc_Read";

export default function F_vrdjnzpfmc_UpdateChiTietKy({
  value,
}: {
  value: F_vrdjnzpfmc;
}) {
  const disc = useDisclosure();
  const form = useForm<F_vrdjnzpfmc>({
    initialValues: {
      ...value,
    },
    validate: {
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
    <MyActionIconUpdate
      modalSize="lg"
      disclosure={disc}
      form={form}
      onSubmit={() => {
        disc[1].close();
      }}
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
          <MyTextInput disabled label="Mã kỳ" {...form.getInputProps("maKy")} />
          <MyDateInput
            placeholder="Chọn ngày"
            label="Ngày bắt đầu cập nhật nội dung báo cáo"
            {...form.getInputProps("ngayBatDauCapNhat")}
          />
          <MyDateInput
            placeholder="Chọn ngày"
            label="Ngày bắt đầu tổng hợp mốc chuẩn"
            {...form.getInputProps("ngayBatDauTongHop")}
          />
        </MyFlexColumn>
        <MyFlexColumn>
          <MyTextInput label="Tên kỳ" {...form.getInputProps("tenKy")} />
          <MyDateInput
            placeholder="Chọn ngày"
            label="Ngày kết thúc cập nhật nội dung báo cáo"
            {...form.getInputProps("ngayKetThucCapNhat")}
          />
          <MyDateInput
            placeholder="Chọn ngày"
            label="Ngày kết thúc tổng hợp mốc chuẩn"
            {...form.getInputProps("ngayKetThucTongHop")}
          />
        </MyFlexColumn>
      </MyFlexRow>
      <MyFlexRow>
        <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
      </MyFlexRow>
    </MyActionIconUpdate>
  );
}
