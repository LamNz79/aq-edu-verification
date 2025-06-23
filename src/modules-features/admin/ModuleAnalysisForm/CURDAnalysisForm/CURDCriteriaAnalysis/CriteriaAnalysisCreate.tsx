import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import {
    MyButtonCreate,
    MySelect,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";
import {
    ICriteriaAnalysisViewModel,
    IRequirementViewModel
} from "../../interface";

export default function CriteriaAnalysisCreate() {
  const form = useForm<ICriteriaAnalysisViewModel>({});

  const { data: data } = useQuery({
    queryKey: ["CriteriaAnalysisCreate"],
    queryFn: () => mockData,
  });

  const { data: dataRequirement } = useQuery({
    queryKey: ["mockDataRequirement"],
    queryFn: () => mockDataRequirement,
  });

  if (!data || !dataRequirement) return "...loading";

  return (
    <MyButtonCreate
      label="Thêm"
      form={form}
      modalSize={"lg"}
      title="Chi tiết phân tích tiêu chí"
      onSubmit={() => {}}
    >
      <MySelect
        data={dataRequirement?.map((item) => ({
          value: item.id,
          label: `${item.code}`,
        }))}
        label="Yêu cầu"
        {...form.getInputProps("requirementCode")}
      />
      <MySelect
        data={data?.map((item) => ({
          value: item.id,
          label: `${item.code}`,
        }))}
        label="Mốc chuẩn"
        {...form.getInputProps("code")}
      />
      <MyTextArea
        label="Minh chứng cần thu thập"
        {...form.getInputProps("name")}
      />
      <MyTextInput label="Nơi thu thập" {...form.getInputProps("location")} />
      <MyTextInput label="Phương pháp" {...form.getInputProps("method")} />
      <MyTextInput
        label="Mã hóa sự kiện"
        {...form.getInputProps("codeEvent")}
      />
    </MyButtonCreate>
  );
}

const mockDataRequirement: IRequirementViewModel[] = [
  {
    id: "1",
    name: "Yêu cầu 1.1.1",
    code: "YC1.1.1",
  },
  {
    id: "2",
    name: "Yêu cầu 1.1.2",
    code: "YC1.1.2",
  },
  {
    id: "3",
    name: "Yêu cầu 1.1.3",
    code: "YC1.1.3",
  },
];

const mockData: ICriteriaAnalysisViewModel[] = [
  {
    id: "1",
    name: "Mốc chuẩn 1",
    code: "MC1.1.1.1",
  },
  {
    id: "2",
    name: "Mốc chuẩn 2",
    code: "MC1.1.1.2",
  },
  {
    id: "3",
    name: "Mốc chuẩn 3",
    code: "MC1.1.1.3",
  },
];
