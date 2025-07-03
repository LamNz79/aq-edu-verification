"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyCheckbox,
  MyDateInput,
  MyFileInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { IStandardInfoViewModel } from "./interfaces/IStandardInfoViewModel";

export default function StandardUpdateButton({ values }: { values: IStandardInfoViewModel }) {
  const form = useForm<IStandardInfoViewModel>({
    initialValues: values,
  });
  return (
    <MyActionIconUpdate
      title="Cập nhật phiên bản tiêu chuẩn"
      modalSize="xl"
      form={form}
      onSubmit={() => {}}
    >
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack>
          <MyTextInput label="Tên Phiên bản" {...form.getInputProps("versionName")} />
          <MyTextArea label="Mô tả phiên bản" {...form.getInputProps("versionDescription")} />
        </Stack>
        <Stack>
          <MyDateInput
            label="Ngày ban hành"
            {...form.getInputProps("issueDate")}
            clearable={false}
          />
          <MyCheckbox
            label="Trạng thái hiệu lực"
            {...form.getInputProps("isActive", { type: "checkbox" })}
          />
          <MyFileInput label="Tên file bản thảo" {...form.getInputProps("fileLink")} />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
