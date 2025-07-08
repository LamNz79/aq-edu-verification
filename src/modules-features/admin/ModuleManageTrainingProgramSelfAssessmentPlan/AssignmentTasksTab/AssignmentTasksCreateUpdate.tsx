import { Grid, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyTextArea } from "aq-fe-framework/components";
import { useState } from "react";
import { MyButtonCreateUpdate, MySelect } from "aq-fe-framework/core";
import { IAssignmentTasksInfoViewModel } from "../interface";
import { selectNhomCongTac, selectTieuChuanAssignmentTasks } from "../mockData";

export default function AssignmentTasksCreateUpdate({
  values,
}: {
  values?: IAssignmentTasksInfoViewModel;
}) {
  const form = useForm<IAssignmentTasksInfoViewModel>({
    initialValues: {
      ...values,
    },
    validate: {},
  });

  return (
    <MyButtonCreateUpdate
      modalProps={{
        size: "70%",
        title: "Chi tiết phân công nhóm công tác",
      }}
      form={form}
      onSubmit={() => {}}
      isUpdate={!!values}
    >
      <Grid>
        <Grid.Col span={6}>
          <MySelect
            data={selectTieuChuanAssignmentTasks}
            label={"Tiêu chuẩn"}
            {...form.getInputProps("tieuChuan")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MySelect
            data={selectNhomCongTac}
            label={"Nhóm công tác"}
            {...form.getInputProps("nhomCongTac")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea
            label={"Thời gian thu thập thông tin và minh chứng (Dự kiến)"}
            {...form.getInputProps("thoiGianThuThapThongTinVaMinhChung")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea label={"Ghi chú"} {...form.getInputProps("ghiChu")} />
        </Grid.Col>
      </Grid>
    </MyButtonCreateUpdate>
  );
}
