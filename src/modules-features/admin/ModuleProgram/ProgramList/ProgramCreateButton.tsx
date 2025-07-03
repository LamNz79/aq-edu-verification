"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyButtonCreate,
  MyNumberInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";

interface IProgramCreateButton {
  code?: string;
  name?: string;
  startYear?: number;
  standardDuration?: number;
  managingFaculty?: string;
  educationLevel?: string;
  educationType?: string;
}

export default function ProgramCreateButton() {
  const form = useForm<IProgramCreateButton>({
    initialValues: {
      code: "",
      name: "",
      startYear: 0,
      standardDuration: 0,
      managingFaculty: "",
      educationLevel: "",
      educationType: "",
    },
  });
  return (
    <MyButtonCreate
      form={form}
      modalSize={"70vw"}
      onSubmit={() => {}}
      objectName="chương trình đào tạo"
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
        <Stack>
          <MyTextInput label="Mã chương trình đào tạo" {...form.getInputProps("code")} />
          <MyTextInput label="Tên chương trình đào tạo" {...form.getInputProps("name")} />
          <MyNumberInput label="Năm bắt đầu tuyển sinh" {...form.getInputProps("startYear")} />
          <MyNumberInput
            label="Thời gian đào tạo chuẩn"
            {...form.getInputProps("standardDuration")}
          />
        </Stack>
        <Stack>
          <MySelect
            label="Khoa/Viện quản lý"
            data={[
              { value: "Khoa Công nghệ Thông tin", label: "Khoa Công nghệ Thông tin" },
              { value: "Viện Kinh tế và Quản lý", label: "Viện Kinh tế và Quản lý" },
              { value: "Khoa Điện Tử", label: "Khoa Điện Tử" },
              { value: "Khoa Du lịch", label: "Khoa Du lịch" },
            ]}
            {...form.getInputProps("managingFaculty")}
          />
          <MySelect
            label="Trình độ đào tạo"
            data={[
              { value: "Đại học", label: "Đại học" },
              { value: "Thạc sĩ", label: "Thạc sĩ" },
              { value: "Tiến sĩ", label: "Tiến sĩ" },
            ]}
            {...form.getInputProps("educationLevel")}
          />
          <MySelect
            label="Loại hình đào tạo"
            data={[
              { value: "Chính quy", label: "Chính quy" },
              { value: "Từ xa", label: "Từ xa" },
              { value: "Vừa học vừa làm", label: "Vừa học vừa làm" },
            ]}
            {...form.getInputProps("educationType")}
          />
          <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
        </Stack>
      </SimpleGrid>
    </MyButtonCreate>
  );
}
