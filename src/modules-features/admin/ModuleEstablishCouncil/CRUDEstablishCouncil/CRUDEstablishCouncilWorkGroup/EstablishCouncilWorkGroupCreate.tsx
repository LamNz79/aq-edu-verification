import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MySelect,
  MyTextInput,
} from "aq-fe-framework/components";
import {
  IEstablishCouncilMemberViewModel,
  IEstablishCouncilViewModel,
} from "../../interfaces";

export default function EstablishCouncilWorkGroupCreate() {
  const form = useForm<IEstablishCouncilViewModel>({});
  return (
    <MyButtonCreate
      label="Thêm"
      form={form}
      title="Chi tiết nhiệm vụ thành viên"
      onSubmit={() => {}}
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
    </MyButtonCreate>
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
