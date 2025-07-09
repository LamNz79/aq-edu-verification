import { Grid, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { IManageTrainingProgramSelfAssessmentPlanInfoViewModel } from "./interface";
import { MyFlexColumn, MyTextInput } from "aq-fe-framework/core";
import {
  MyDateInput,
  MyFileInput,
  MyTextArea,
} from "aq-fe-framework/components";
import MySelect from "@/components/Combobox/Select/MySelect";
import {
  selectChuongTrinhDaoTaoApDung,
  selectGiaiDoan,
  selectHoiDongTuDanhGia,
} from "./mockData";

export default function GeneralInformationTab({
  values,
}: {
  values?: IManageTrainingProgramSelfAssessmentPlanInfoViewModel;
}) {
  const form = useForm<IManageTrainingProgramSelfAssessmentPlanInfoViewModel>({
    initialValues: {
      ...values,
    },
    validate: {},
  });

  return (
    <MyFlexColumn>
      <Grid>
        <Grid.Col span={6}>
          <MyTextInput
            label={"Mã kế hoạch"}
            {...form.getInputProps("maKeHoach")}
            disabled={!!values}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label={"Ngày bắt đầu"}
            {...form.getInputProps("ngayBatDau")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label={"Tên kế hoạch"}
            {...form.getInputProps("tenKeHoach")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label={"Ngày kết thúc"}
            {...form.getInputProps("ngayKetThuc")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MySelect
            data={selectHoiDongTuDanhGia}
            label={"Hội đồng tự đánh giá"}
            {...form.getInputProps("quyetDinhThanhLapHoiDong")}
          />
          <MySelect
            data={selectChuongTrinhDaoTaoApDung}
            label={"Chương trình Đào tạo áp dụng"}
            {...form.getInputProps("chuongTrinhDaoTaoApDung")}
            disabled={!!values}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea
            label={"Mục tiêu tự đánh giá"}
            {...form.getInputProps("mucTieuTuDanhGia")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
        <MySelect
            data={selectGiaiDoan}
            label={"Giai đoạn"}
            {...form.getInputProps("maGiaiDoan")}
            disabled={!!values}
          />
          <MyTextInput label={"Người ký"} {...form.getInputProps("nguoiKy")} />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextArea
            label={"Phạm vi tự đánh giá"}
            {...form.getInputProps("phamViTuDanhGia")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyFileInput
            label={"File kế hoạch"}
            {...form.getInputProps("fileKeHoach")}
          />
        </Grid.Col>
      </Grid>
    </MyFlexColumn>
  );
}
