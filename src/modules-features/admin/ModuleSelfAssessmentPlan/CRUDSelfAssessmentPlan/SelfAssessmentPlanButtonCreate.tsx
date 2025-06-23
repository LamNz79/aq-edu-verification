import { Flex, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MyDateInput,
  MyFileInput,
  MyTab,
  MyTextInput,
} from "aq-fe-framework/components";
import { ISelfAssessmentPlanViewModel } from "../interface";
import AssignmentGroupTable from "./AssignmentGroupTable";
import ResourceMobilizationTable from "./ResourceMobilizationTable";

export default function SelfAssessmentPlanButtonCreate() {
  const form = useForm<ISelfAssessmentPlanViewModel>({});

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phân công nhóm thực hiện" },
    { label: "Kế hoạch huy động nguồn lực" },
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
        <Tabs.Panel value="Phân công nhóm thực hiện">
          <AssignmentGroupTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Kế hoạch huy động nguồn lực">
          <ResourceMobilizationTable data={[]} />
        </Tabs.Panel>
      </MyTab>
    </MyButtonCreate>
  );
}
