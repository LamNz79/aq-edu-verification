"use client";

import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyNumberInput,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { AccreditationRoadmap } from "./ImplementationRoadmapUpdateButtonModal";

export default function ImplementationRoadmapCreateButton() {

  const form = useForm<AccreditationRoadmap>({
    initialValues: {
      id: 0,
      cycleCode: "",
      roadmapCode: "",
      roadmapName: "",
      note: ""
    },
  });

  return (
    <MyButtonCreate
      form={form}
      modalSize="50%"
      onSubmit={() => { }}
      title="Tạo lộ trình"
    >
      <MyNumberInput label="Thứ tự" {...form.getInputProps("index")} />
      <MyTextInput label="Mã lộ trình" {...form.getInputProps("roadmapCode")} />
      <MyTextInput label="Tên lộ trình" {...form.getInputProps("roadmapName")} />
      <MyDateInput label="Thời gian bắt đầu" {...form.getInputProps("startDate")} />
      <MyDateInput label="Thời gian kết thúc" {...form.getInputProps("endDate")} />
      <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
    </MyButtonCreate>
  );
}
