import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import {
  MyButtonCreate,
  MySelect,
  MyTextArea,
} from "aq-fe-framework/components";
import { IAssignmentGroupViewModel, IGroupViewModel } from "../../interface";

export default function AssignmentGroupCreate() {
  const form = useForm<IAssignmentGroupViewModel>({});

  const { data: dataGroup } = useQuery({
    queryKey: ["dataGroup"],
    queryFn: () => mockDataGroup,
  });

  const { data: dataAssignmentGroup } = useQuery({
    queryKey: ["dataAssignmentGroup"],
    queryFn: () => mockData,
  });

  if (!dataGroup || !dataAssignmentGroup) return "...loading";

  return (
    <MyButtonCreate
      label="Thêm"
      form={form}
      modalSize={"lg"}
      title="Chi tiết phân công thực hiện"
      onSubmit={() => {}}
    >
      <MySelect
        data={dataAssignmentGroup?.map((item) => ({
          value: item.id,
          label: `${item.code} - ${item.name}`,
        }))}
        label="Tiêu chuẩn"
        {...form.getInputProps("id")}
      />
      <MySelect
        data={dataGroup?.map((item) => ({
          value: item.id,
          label: `${item.name}`,
        }))}
        label="Nhóm chịu trách nhiệm"
        {...form.getInputProps("groupId")}
      />
      <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
    </MyButtonCreate>
  );
}

const mockData: IAssignmentGroupViewModel[] = [
  {
    id: "1",
    name: "Tiêu chuẩn 1 - Tầm nhìn, sứ mệnh, giá trị cốt lõi",
    code: "TC01",
  },
  {
    id: "2",
    name: "Tiêu chuẩn 2 - Cố gắng đạt được mục tiêu",
    code: "TC02",
  },
  {
    id: "3",
    name: "Tiêu chuẩn 3 - Hành vi",
    code: "TC03",
  },
];

const mockDataGroup: IGroupViewModel[] = [
  {
    id: "1",
    name: "Nhóm 1",
    code: "N01",
  },
  {
    id: "2",
    name: "Nhóm 2",
    code: "N02",
  },
  {
    id: "3",
    name: "Nhóm 3",
    code: "N03",
  },
];
