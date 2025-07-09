"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyNumberInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { AccreditationRoadmap } from "./ImplementationRoadmapUpdateButtonModal";

export default function ImplementationRoadmapUpdateButton({ values }: { values: AccreditationRoadmap }) {

  const form = useForm<AccreditationRoadmap>({
    initialValues: values,
  });

  return (
    <MyActionIconUpdate
      title="Chỉnh sửa lộ trình"
      modalSize="50%"
      form={form}
      onSubmit={() => { }}
    >
      <MyNumberInput label="Thứ tự" {...form.getInputProps("index")} />
      <MyTextInput label="Mã lộ trình" {...form.getInputProps("roadmapCode")} />
      <MyTextInput label="Tên lộ trình" {...form.getInputProps("roadmapName")} />
      <MyDateInput label="Thời gian bắt đầu" {...form.getInputProps("startDate")} />
      <MyDateInput label="Thời gian kết thúc" {...form.getInputProps("endDate")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
    </MyActionIconUpdate>
  );
}