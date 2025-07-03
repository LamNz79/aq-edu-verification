import { Tabs } from "@mantine/core";
import { MyFieldset, MyTab } from "aq-fe-framework/components";
import StandardsConfigStandardTable from "./CURDStandardsConfigStandard/StandardsConfigStandardTable";
import StandardsConfigCriteriaTable from "./CURDStandardsConfigCriteria/StandardsConfigCriteriaTable";
import StandardsConfigRequirementTable from "./CURDStandardsConfigRequirement/StandardsConfigRequirementTable";

export default function StandardsConfigLayout() {
  const tabList = [
    {
      label: "Tiêu chuẩn",
      value: "Tiêu chuẩn",
    },
    {
      label: "Tiêu chí",
      value: "Tiêu chí",
    },
    {
      label: "Yêu cầu",
      value: "Yêu cầu",
    },
  ];

  return (
    <MyFieldset title={`Cấu trúc bộ tiêu chuẩn`}>
      <MyTab tabList={tabList} variant="outline">
        <Tabs.Panel value="Tiêu chuẩn">
          <StandardsConfigStandardTable />
        </Tabs.Panel>
        <Tabs.Panel value="Tiêu chí">
          <StandardsConfigCriteriaTable />
        </Tabs.Panel>
        <Tabs.Panel value="Yêu cầu">
          <StandardsConfigRequirementTable />
        </Tabs.Panel>
      </MyTab>
    </MyFieldset>
  );
}
