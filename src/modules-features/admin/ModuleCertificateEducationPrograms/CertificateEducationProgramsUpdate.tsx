"use client";

import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyTextInput,
  MyDateInput,
  MySelect,
  MyTextArea,
  MyFileInput,
} from "aq-fe-framework/components";
import { Grid } from "@mantine/core";
import { CertificateEducationProgramsViewModel } from "./interfaces/CertificateEducationProgramsViewModel";

interface CertificateEducationProgramsUpdateProps {
  values: CertificateEducationProgramsViewModel;
}

export default function CertificateEducationProgramsUpdate({
  values,
}: CertificateEducationProgramsUpdateProps) {
  const form = useForm<CertificateEducationProgramsViewModel>({
    initialValues: {
      ...values,
    },
    validate: {
      certificateNumber: (value) => (!value ? "Số giấy chứng nhận là bắt buộc" : null),
    },
  });

  return (
    <MyActionIconUpdate
      title="Cập nhật Giấy chứng nhận"
      form={form}
      onSubmit={(values) => {
        console.log("Update certificate:", values);
      }}
      modalSize="lg"
    >
      <Grid>
        <Grid.Col span={6}>
          <MyTextInput
            label="Số Giấy chứng nhận"
            withAsterisk
            {...form.getInputProps("certificateNumber")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MyDateInput label="Ngày cấp" withAsterisk {...form.getInputProps("issueDate")} />
        </Grid.Col>

        <Grid.Col span={6}>
          <MyTextInput
            label="Đơn vị cấp"
            withAsterisk
            {...form.getInputProps("issuingAuthority")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MyDateInput
            label="Ngày hết hiệu lực"
            withAsterisk
            {...form.getInputProps("expiryDate")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MySelect
            label="Chương trình đào tạo"
            withAsterisk
            data={[
              { value: "Kỹ thuật phần mềm", label: "Kỹ thuật phần mềm" },
              { value: "Ngôn ngữ Anh", label: "Ngôn ngữ Anh" },
              { value: "Công nghệ thông tin Tiên tiến", label: "Công nghệ thông tin Tiên tiến" },
            ]}
            {...form.getInputProps("trainingProgram")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MyFileInput
            label="File Giấy chứng nhận"
            accept="application/pdf"
            {...form.getInputProps("certificateFile")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MySelect
            label="Khóa"
            withAsterisk
            data={[
              { value: "K55", label: "K55" },
              { value: "K58", label: "K58" },
              { value: "K60", label: "K60" },
            ]}
            {...form.getInputProps("cohort")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <MyTextInput
            label="Giai đoạn"
            withAsterisk
            placeholder="VD: 2024-2029"
            {...form.getInputProps("period")}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <MyTextArea label="Ghi chú" rows={4} {...form.getInputProps("notes")} />
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
