import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MySelect,
  MyTextInput,
} from "aq-fe-framework/components";
import { IEstablishCouncilMemberViewModel } from "../../interfaces";

export default function EstablishCouncilWorkGroupUpdate({
  data,
}: {
  data: IEstablishCouncilMemberViewModel;
}) {
  const form = useForm<IEstablishCouncilMemberViewModel>({
    initialValues: data,
  });
  return (
    <MyActionIconUpdate
      form={form}
      onSubmit={() => {}}
      title="Chi tiết nhiệm vụ thành viên"
    >
      <MyTextInput
        label="Nhóm công tác"
        placeholder="Nhập nhóm công tác"
        {...form.getInputProps("groupName")}
      />
      <MySelect
        data={mockData.map((item) => ({
          value: item.code,
          label: `${item.code} - ${item.name}`,
        }))}
        label="Mã viên chức"
        placeholder="Nhập mã viên chức"
        {...form.getInputProps("code")}
      />
      <MyTextInput
        label="Chức danh - chức vụ"
        placeholder="Nhập chức danh - chức vụ"
        {...form.getInputProps("position")}
      />
      <MyTextInput
        label="Nhiệm vụ"
        placeholder="Nhập nhiệm vụ"
        {...form.getInputProps("responsibility")}
      />
    </MyActionIconUpdate>
  );
}

const mockData: IEstablishCouncilMemberViewModel[] = [
  {
    id: 1,
    name: "Tô La Hy",
    code: "NV00001",
    position: "Trưởng phòng đảm bảo chất lượng",
    responsibility: "Chủ tịch",
  },
  {
    id: 2,
    name: "Tô La An",
    code: "NV00002",
    position: "Phó Trưởng phòng đảm bảo chất lượng",
    responsibility: "Phó Chủ tịch",
  },
  {
    id: 3,
    name: "Tô La Ba",
    code: "NV00003",
    position: "",
    responsibility: "Thành viên - Trưởng ban thư ký",
  },
  {
    id: 3,
    name: "Tô La Vy",
    code: "NV00004",
    position: "",
    responsibility: "Thành viên",
  },
];
