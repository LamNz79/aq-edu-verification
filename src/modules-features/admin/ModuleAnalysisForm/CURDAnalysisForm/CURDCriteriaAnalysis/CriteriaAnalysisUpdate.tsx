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
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";

export default function CriteriaAnalysisUpdate({
    data,
}: {
    data: ICriteriaAnalysisViewModel;
}) {
  const form = useForm<ICriteriaAnalysisViewModel>({
    initialValues: data,    
  });

  const { data: dataMocChuan } = useQuery({
    queryKey: ["CriteriaAnalysisUpdate"],
    queryFn: () => mockData,
  });

  const { data: dataRequirement } = useQuery({
    queryKey: ["mockDataRequirement"],
    queryFn: () => mockDataRequirement,
  });

  if (!dataMocChuan || !dataRequirement) return "...loading";

  return (
    <MyActionIconUpdate
      form={form}
      modalSize={"lg"}
      title="Chi tiết phân tích tiêu chí"
      onSubmit={() => {}}
    >
      <MySelect
        data={dataRequirement?.map((item) => ({
          value: item.code,
          label: `${item.code}`,
        }))}
        label="Yêu cầu"
        {...form.getInputProps("requirementCode")}
      />
      <MySelect
        data={dataMocChuan?.map((item) => ({
          value: item.code,
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
    </MyActionIconUpdate>
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
  {
    id: "4",
    name: "Yêu cầu 1.1.4",
    code: "YC1.1.4",
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
  {
    id: "4",
    name: "Mốc chuẩn 4",
    code: "MC1.1.1.4",
  },
];
