import { useForm } from "@mantine/form";
import {
  MyDateInput,
  MyFileInput,
  MyFlexColumn,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { MyButtonCreateUpdate, MySelect } from "aq-fe-framework/core";
import { useEffect } from "react";
import { IManagementMidCycleQualityAssuranceReportInfoViewModel } from "./interface";
import { Grid } from "@mantine/core";
import { selectChuongTrinhDaoTao } from "./mockData";

export default function ManagementMidCycleQualityAssuranceReportCreateUpdate({
  values,
}: {
  values?: IManagementMidCycleQualityAssuranceReportInfoViewModel;
}) {
  const form = useForm<IManagementMidCycleQualityAssuranceReportInfoViewModel>({
    mode: "uncontrolled",
    validate: {},
  });

  useEffect(() => {
    if (!values) return;
    form.setValues({
      ...values,
    });
  }, [values]);
  return (
    <MyButtonCreateUpdate
      modalProps={{
        size: "lg",
        title: "Chi tiết Báo cáo Giữa Chu kỳ Kiểm định Chất lượng CTĐT",
      }}
      form={form}
      isUpdate={!!values}
      onSubmit={() => {}}
    >
      <MyFlexColumn>
        <Grid>
          <Grid.Col span={6}>
            <MySelect
              data={selectChuongTrinhDaoTao}
              label={"Chương trình Đào tạo"}
              {...form.getInputProps("chuongTrinhDaoTao")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyTextInput
              label={"Số báo cáo"}
              {...form.getInputProps("soBaoCao")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyTextInput label={"Tên Tổ chức kiểm định"} />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyDateInput
              label={"Ngày báo cáo"}
              {...form.getInputProps("ngayBaoCao")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyTextInput
              label="Giai đoạn đánh giá"
              {...form.getInputProps("giaiDoan")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyTextInput
              label={"Người ký"}
              {...form.getInputProps("nguoiKy")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyTextArea label={"Ghi chú"} {...form.getInputProps("ghiChu")} />
          </Grid.Col>
          <Grid.Col span={6}>
            <MyFileInput label={"File báo cáo giữa kỳ"} />
          </Grid.Col>
        </Grid>
      </MyFlexColumn>
    </MyButtonCreateUpdate>
  );
}
