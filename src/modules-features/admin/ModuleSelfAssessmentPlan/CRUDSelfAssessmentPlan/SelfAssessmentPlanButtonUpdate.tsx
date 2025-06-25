import { Flex, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyDateInput,
  MyFileInput,
  MyTab,
  MyTextInput,
} from "aq-fe-framework/components";
import {
  IAssignmentGroupViewModel,
  IResourceMobilizationViewModel,
  ISelfAssessmentPlanViewModel,
} from "../interface";
import AssignmentGroupTable from "./AssignmentGroupTable";
import ResourceMobilizationTable from "./ResourceMobilizationTable";
import { useState } from "react";

interface I extends ISelfAssessmentPlanViewModel {
  file: File;
}

export default function SelfAssessmentPlanButtonUpdate({
  data,
}: {
  data: ISelfAssessmentPlanViewModel;
}) {
  const form = useForm<I>({
    initialValues: {
      ...data,
      file: new File(
        [],
        data.filePath?.split("/")[data.filePath.split("/").length - 1]!
      ),
    },
  });
  const [activeTab, setActiveTab] = useState("Thông tin chung");
  const modalSize = activeTab === "Thông tin chung" ? "42.5%" : "80%";
  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phân công nhóm thực hiện" },
    { label: "Kế hoạch huy động nguồn lực" },
  ];

  return (
    <MyActionIconUpdate
      modalSize={modalSize}
      form={form}
      title="Chi tiết quyết định"
      onSubmit={() => {}}
    >
      <MyTab tabList={tabData} onChange={(value) => setActiveTab(value || "")}>
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
        <Tabs.Panel value="Phân công nhóm thực hiện">
          <AssignmentGroupTable data={mockDataAssignmentGroup} />
        </Tabs.Panel>
        <Tabs.Panel value="Kế hoạch huy động nguồn lực">
          <ResourceMobilizationTable data={mockDataResourceMobilization} />
        </Tabs.Panel>
      </MyTab>
    </MyActionIconUpdate>
  );
}

const mockDataAssignmentGroup: IAssignmentGroupViewModel[] = [
  {
    id: "1",
    code: "TC01",
    name: "Tiêu chuẩn 1 - Tầm nhìn, sứ mệnh, giá trị cốt lõi",
    groupId: "1",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N01",
    },
    note: "",
  },
];

const mockDataResourceMobilization: IResourceMobilizationViewModel[] = [
  {
    id: "1",
    code: "TC01",
    name: "Trích lục tầm nhìn sứ mạng",
    standardId: "1",
    standard: {
      id: "1",
      name: "Tiêu chuẩn 1",
      code: "TC01",
    },
    resourceTypes: "Tô La Ba",
    time: "tháng 5",
    note: "",
  },
  {
    id: "2",
    code: "TC02",
    name: "Minh chứng hướng dẫn đơn vị xây dụng tầm nhìn sứ mạng",
    standardId: "1",
    standard: {
      id: "1",
      name: "Tiêu chuẩn 1",
      code: "TC01",
    },
    resourceTypes: "Tô La Ba",
    time: "tháng 5",
    note: "",
  },
];
