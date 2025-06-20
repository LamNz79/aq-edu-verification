import { Flex, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
    MyButtonCreate,
    MyDateInput,
    MyFileInput,
    MyTab,
    MyTextInput,
} from "aq-fe-framework/components";
import {
    IEstablishCouncilMemberViewModel,
    IEstablishCouncilViewModel,
} from "../interfaces";
import EstablishCouncilMemberTable from "./EstablishCouncilMemberTable";
import EstablishCouncilSecretaryTable from "./EstablishCouncilSecretaryTable";
import EstablishCouncilWorkGroupTable from "./EstablishCouncilWorkGroupTable";

export default function EstablishCouncilButtonCreate() {
  const form = useForm<IEstablishCouncilViewModel>({});

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Thành viên hội đồng" },
    { label: "Thành viên ban thư ký" },
    { label: "Nhóm công tác chuyên trách" },
  ];

  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={"80%"}
      form={form}
      title="Chi tiết quyết định"
      onSubmit={() => {}}
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
              {...form.getInputProps("filePath")}
            />
          </Flex>
        </Tabs.Panel>
        <Tabs.Panel value="Thành viên hội đồng">
          <EstablishCouncilMemberTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Thành viên ban thư ký">
          <EstablishCouncilSecretaryTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Nhóm công tác chuyên trách">
          <EstablishCouncilWorkGroupTable data={[]} />
        </Tabs.Panel>
      </MyTab>
    </MyButtonCreate>
  );
}

