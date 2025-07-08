"use client";
import { useDisclosure } from "@mantine/hooks";
import { MyButton, MyCheckbox, MyTextArea } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { ICheckCriteriaAnalysisInfoViewModel } from "./interface";
import { useForm } from "@mantine/form";
import { MyButtonModal, MySelect } from "aq-fe-framework/core";
import { selectTrangThaiKiemTra } from "./mockData";
import { IconCheck } from "@tabler/icons-react";

export default function CheckCriteriaAnalysisButtonModalCheck({
  values,
}: {
  values: ICheckCriteriaAnalysisInfoViewModel;
}) {
  const disc = useDisclosure();
  const form = useForm<ICheckCriteriaAnalysisInfoViewModel>({
    initialValues: { ...values },
  });

  return (
    <MyButtonModal
      modalProps={{
        size: "lg",
        title: "Chi tiết kết quả kiểm tra",
      }}
      buttonProps={{
        size: "xs",
        color: "green",
        children: "Kiểm tra",
        variant: "outline",
      }}
      disclosure={disc}
    >
      <MySelect
        data={selectTrangThaiKiemTra}
        label="Trạng thái kiểm tra"
        {...form.getInputProps("trangThaiKiemTra")}
      />
      <MyTextArea label="Nhận xét" />
      <MyCheckbox label="Gửi thông báo" />
      <MyButton crudType="save" fullWidth>
        Lưu
      </MyButton>
    </MyButtonModal>
  );
}
