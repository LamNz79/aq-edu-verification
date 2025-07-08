import { SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyFileInput,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { IOfficialSurveyCompletionReportInfoViewModel } from "./interfaces/IOfficialSurveyCompletionReportInfoViewModel";

const programOptions = [
  { value: "Kỹ thuật phần mềm", label: "Kỹ thuật phần mềm" },
  { value: "Kế toán", label: "Kế toán" },
  { value: "Công nghệ thông tin", label: "Công nghệ thông tin" },
];

interface I extends IOfficialSurveyCompletionReportInfoViewModel {
  file: File;
}

export default function OfficialSurveyCompletionReportUpdateButton({
  values,
}: {
  values: IOfficialSurveyCompletionReportInfoViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...values,
      file: new File([], values.fileDetail?.fileName!),
    },
  });

  return (
    <MyActionIconUpdate
      title="Chi tiết Biên bản Hoàn thành Đợt Khảo sát Chính thức CTĐT"
      modalSize="70vw"
      form={form}
      onSubmit={() => {}}
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24}>
        <Stack>
          <MySelect
            label="Chương trình Đào tạo"
            data={programOptions}
            placeholder="Chọn chương trình"
            {...form.getInputProps("programName")}
          />
          <MyTextInput label="Tên Tổ chức kiểm định" {...form.getInputProps("organizationName")} />
          <MyTextInput label="Giai đoạn đánh giá" {...form.getInputProps("evaluationPeriod")} />
          <MyTextArea label="Ghi chú" minRows={4} {...form.getInputProps("note")} />
        </Stack>
        <Stack>
          <MyDateInput
            label="Ngày lập biên bản"
            {...form.getInputProps("reportDate")}
            clearable={false}
          />
          <MyTextInput label="Thủ trưởng đơn vị" {...form.getInputProps("unitHead")} />
          <MyTextInput label="Trưởng đoàn" {...form.getInputProps("teamLeader")} />
          <MyFileInput
            label="File biên bản hoàn thành khảo sát chính thức"
            {...form.getInputProps("file")}
          />
        </Stack>
      </SimpleGrid>
    </MyActionIconUpdate>
  );
}
