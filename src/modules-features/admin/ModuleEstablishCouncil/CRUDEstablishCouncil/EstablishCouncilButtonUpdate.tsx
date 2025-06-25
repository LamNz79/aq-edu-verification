import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyTextInput,
  MyTab,
  MyDateInput,
  MyFileInput,
} from "aq-fe-framework/components";
import {
  IEstablishCouncilMemberViewModel,
  IEstablishCouncilViewModel,
} from "../interfaces";
import { Tabs } from "@mantine/core";
import { Flex } from "@mantine/core";
import EstablishCouncilMemberTable from "./EstablishCouncilMemberTable";
import EstablishCouncilSecretaryTable from "./EstablishCouncilSecretaryTable";
import EstablishCouncilWorkGroupTable from "./EstablishCouncilWorkGroupTable";

interface I extends IEstablishCouncilViewModel {
  file?: File;
}

export default function EstablishCouncilButtonUpdate({
  values,
}: {
  values: IEstablishCouncilViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...values,
      file: new File(
        [],
        values.filePath?.split("/")[values.filePath.split("/").length - 1]!
      ),
    },
  });

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Thành viên hội đồng" },
    { label: "Thành viên ban thư ký" },
    { label: "Nhóm công tác chuyên trách" },
  ];

  return (
    <MyActionIconUpdate
      form={form}
      modalSize={"80%"}
      onSubmit={() => {}}
      title="Chi tiết quyết định"
    >
      <MyTab tabList={tabData}>
        <Tabs.Panel value="Thông tin chung">
          <Flex direction="column">
            <MyTextInput
              label="Số quyết định"
              placeholder="Nhập số quyết định"
              {...form.getInputProps("code")}
            />
            <MyDateInput
              label="Ngày quyết định"
              placeholder="Nhập ngày quyết định"
              {...form.getInputProps("date")}
            />
            <MyTextInput
              label="Tên quyết định"
              placeholder="Nhập tên quyết định"
              {...form.getInputProps("name")}
            />
            <MyTextInput
              label="Người ký"
              placeholder="Nhập người ký"
              {...form.getInputProps("signatory")}
            />
            <MyFileInput
              label="File đính kèm"
              placeholder="Tải lên file đính kèm"
              {...form.getInputProps("file")}
            />
          </Flex>
        </Tabs.Panel>
        <Tabs.Panel value="Thành viên hội đồng">
          <EstablishCouncilMemberTable data={mockDataMember} />
        </Tabs.Panel>
        <Tabs.Panel value="Thành viên ban thư ký">
          <EstablishCouncilSecretaryTable data={mockDataSecretary} />
        </Tabs.Panel>
        <Tabs.Panel value="Nhóm công tác chuyên trách">
          <EstablishCouncilWorkGroupTable data={mockDataWorkGroup} />
        </Tabs.Panel>
      </MyTab>
    </MyActionIconUpdate>
  );
}

const mockDataMember: IEstablishCouncilMemberViewModel[] = [
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

const mockDataSecretary: IEstablishCouncilMemberViewModel[] = [
  {
    id: 1,
    name: "Tô La Hy",
    code: "NV00001",
    position: "",
    responsibility: "Thành viên - Trưởng ban thư ký",
  },
  {
    id: 2,
    name: "Tô La An",
    code: "NV00002",
    position: "",
    responsibility: "Thành viên",
  },
  {
    id: 3,
    name: "Tô La Ba",
    code: "NV00003",
    position: "",
    responsibility: "Thành viên",
  },
  {
    id: 3,
    name: "Tô La Vy",
    code: "NV00004",
    position: "",
    responsibility: "Thành viên",
  },
];

const mockDataWorkGroup: IEstablishCouncilMemberViewModel[] = [
  {
    id: 1,
    name: "Tô La Hy",
    code: "NV00001",
    position: "",
    responsibility: "Thu thập minh chứng - báo cáo tiêu chí 1",
    groupName: "Nhóm công tác chuyên trách 1",
  },
  {
    id: 2,
    name: "Tô La An",
    code: "NV00002",
    position: "",
    responsibility: "Thu thập minh chứng - báo cáo tiêu chí 1",
    groupName: "Nhóm công tác chuyên trách 1",
  },
  {
    id: 3,
    name: "Tô La Ba",
    code: "NV00003",
    position: "",
    responsibility: "Thu thập minh chứng - báo cáo tiêu chí 2",
    groupName: "Nhóm công tác chuyên trách 2",
  },
  {
    id: 3,
    name: "Tô La Vy",
    code: "NV00004",
    position: "",
    responsibility: "Thu thập minh chứng - báo cáo tiêu chí 2",
    groupName: "Nhóm công tác chuyên trách 2",
  },
];
