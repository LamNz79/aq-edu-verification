import { Grid, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyTextArea } from "aq-fe-framework/components";
import { useState } from "react";
import {
  MyButtonCreateUpdate,
  MySelect,
  MyTextInput,
} from "aq-fe-framework/core";
import { IResourceMobilizationInfoViewModel } from "../interface";
import { selectNhomCongTac, selectTieuChuanAssignmentTasks, selectTieuChuanResourceMobilization } from "../mockData";

export default function ResourceMobilizationTabCreateUpdate({
  values,
}: {
  values?: IResourceMobilizationInfoViewModel;
}) {
  const form = useForm<IResourceMobilizationInfoViewModel>({
    initialValues: {
      ...values,
    },
    validate: {},
  });

  return (
    <MyButtonCreateUpdate
      modalProps={{
        size: "70%",
        title: "Chi tiết phân bổ nguồn lực",
      }}
      form={form}
      onSubmit={() => {}}
      isUpdate={!!values}
    >
      <Grid>
        <Grid.Col span={6}>
          <MySelect
            data={selectTieuChuanResourceMobilization}
            label={"Tiêu chuẩn"}
            {...form.getInputProps("tieuChuan")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label={"Hoạt động"}
            {...form.getInputProps("hoatDong")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea
            label={"Các nguồn lực cần huy động"}
            {...form.getInputProps("cacNguonLucCanHuyDong")}
            minRows={7}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label={"Thời điểm cần huy động"}
            {...form.getInputProps("thoiDiemCanHuyDong")}
          />
          <MyTextArea label={"Ghi chú"} {...form.getInputProps("ghiChu")} />
        </Grid.Col>
      </Grid>
    </MyButtonCreateUpdate>
  );
}
