import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MySelect,
  MyButton,
} from "aq-fe-framework/components";
import { ICriteriaInfoViewModel } from "./interfaces/ICriteriaInfoViewModel";

const staffOptions = [
  { value: "NV005", label: "Phạm Văn F" },
  { value: "NV008", label: "Lê Thị H" },
  { value: "NV010", label: "Trần Văn K" },
];

export default function ImprovementAssignmentUpdateButton({ values }: { values: ICriteriaInfoViewModel   }) {
  const form = useForm<ICriteriaInfoViewModel>({
    initialValues: {
      staffCode: values.staffCode || "",
      midtermReportDate: values.midtermReportDate || undefined,
      midtermReportCompleteDate: values.midtermReportCompleteDate || undefined,
    },
  });

  return (
    <MyActionIconUpdate
      title="Chi tiết phân công cải tiến"
      modalSize="md"
      form={form}
      onSubmit={() => {}}
    >
      <Stack gap={16}>
        <MySelect
          label="Nhân sự phụ trách"
          data={staffOptions}
          placeholder="Chọn nhân sự"
          {...form.getInputProps("staffCode")}
        />
        <MyDateInput
          label="Ngày báo cáo giữa kỳ"
          {...form.getInputProps("midtermReportDate")}
          clearable={false}
        />
        <MyDateInput
          label="Ngày hoàn thành báo cáo giữa kỳ"
          {...form.getInputProps("midtermReportCompleteDate")}
          clearable={false}
        />
      </Stack>
    </MyActionIconUpdate>
  );
}
