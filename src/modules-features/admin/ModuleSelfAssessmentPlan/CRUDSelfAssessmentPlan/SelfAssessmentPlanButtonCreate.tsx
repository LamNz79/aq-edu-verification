import { Box, Flex, Tabs } from "@mantine/core";
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
import { useState } from "react";

export default function SelfAssessmentPlanButtonCreate() {
  const form = useForm<ISelfAssessmentPlanViewModel>({});
  const [activeTab, setActiveTab] = useState("Thông tin chung");
  const modalSize = activeTab === "Thông tin chung" ? "42.5%" : "80%";
  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phân công nhóm thực hiện" },
    { label: "Kế hoạch huy động nguồn lực" },
  ];

  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={modalSize}
      form={form}
      title={"Chi tiết quyết định"}
      onSubmit={() => {}}
    >
      <MyTab tabList={tabData} onChange={(value) => setActiveTab(value || "")}>
        <Tabs.Panel value="Thông tin chung">
          <Flex direction="column">
            {/* <Box style={{ width: "40%" }}> */}
            <MyTextInput
              label="Số kế hoạch"
              placeholder="Nhập số kế hoạch"
              {...form.getInputProps("code")}
            />
            {/* </Box> */}
            {/* <Box style={{ width: "40%" }}> */}
            <MyDateInput
              label="Ngày kế hoạch"
              placeholder="Nhập ngày kế hoạch"
              {...form.getInputProps("date")}
            />
            {/* </Box> */}
            {/* <Box style={{ width: "40%" }}> */}
            <MyTextInput
              label="Tên kế hoạch"
              placeholder="Nhập tên kế hoạch"
              {...form.getInputProps("name")}
            />
            {/* </Box> */}
            {/* <Box style={{ width: "40%" }}> */}
            <MyTextInput
              label="Người ký"
              placeholder="Nhập người ký"
              {...form.getInputProps("signatory")}
            />
            {/* </Box> */}
            {/* <Box style={{ width: "40%" }}> */}
            <MyFileInput
              label="File đính kèm"
              placeholder="Tải lên file đính kèm"
              {...form.getInputProps("filePath")}
            />
            {/* </Box> */}
          </Flex>
        </Tabs.Panel>
        <Tabs.Panel
          value="Phân công nhóm thực hiện"
          // onChange={() => setModalSize("80%")}
        >
          <AssignmentGroupTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel
          value="Kế hoạch huy động nguồn lực"
          // onChange={() => setModalSize("80%")}
        >
          <ResourceMobilizationTable data={[]} />
        </Tabs.Panel>
      </MyTab>
    </MyButtonCreate>
  );
}
