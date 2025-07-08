import { Grid, Group, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyCenterFull,
  MyTab,
} from "aq-fe-framework/components";
import { useState } from "react";
import { IManageTrainingProgramSelfAssessmentPlanInfoViewModel } from "./interface";
import { MyButtonCreateUpdate } from "aq-fe-framework/core";
import GeneralInformationTab from "./GeneralInformationTab";
import AssignmentTasksRead from "./AssignmentTasksTab/AssignmentTasksRead";
import ResourceMobilizationTabRead from "./ResourceMobilizationTab/ResourceMobilizationTabRead";
import {
  IconChecklist,
  IconInfoCircle,
  IconLoadBalancer,
} from "@tabler/icons-react";

export default function ManageTrainingProgramSelfAssessmentPlanCreateUpdate({
  values,
}: {
  values?: IManageTrainingProgramSelfAssessmentPlanInfoViewModel;
}) {
  const [activeTab, setActiveTab] = useState<string | null>(
    "GeneralInformation"
  );

  const form = useForm<IManageTrainingProgramSelfAssessmentPlanInfoViewModel>({
    initialValues: {
      ...values,
    },
    validate: {},
  });

  return (
    <MyButtonCreateUpdate
      modalProps={{
        size: "90%",
        title: "Chi tiết quyết định",
      }}
      form={form}
      onSubmit={() => {}}
      isUpdate={!!values}
    >
      <Tabs radius={0} value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow justify="space-between">
          <Tabs.Tab
            bg={"rgba(131, 204, 235, 0.3)"}
            color="rgba(131, 204, 235, 1)"
            value="GeneralInformation"
            leftSection={<IconInfoCircle />}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thông tin chung
          </Tabs.Tab>
          <Tabs.Tab
            bg={"rgba(247, 216, 54, 0.3)"}
            color="rgba(247, 216, 54, 1)"
            value="AssignmentTasks"
            leftSection={<IconChecklist />}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Phân công nhiệm vụ
          </Tabs.Tab>
          <Tabs.Tab
            bg={"rgba(243, 156, 18, 0.3)"}
            color="rgba(243, 156, 18, 1)"
            value="ResourceMobilization"
            leftSection={<IconLoadBalancer />}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Huy động nguồn lực
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="GeneralInformation">
          <GeneralInformationTab values={values} />
        </Tabs.Panel>
        <Tabs.Panel value="AssignmentTasks">
          <AssignmentTasksRead values={values} />
        </Tabs.Panel>
        <Tabs.Panel value="ResourceMobilization">
          <ResourceMobilizationTabRead values={values} />
        </Tabs.Panel>
      </Tabs>
    </MyButtonCreateUpdate>
  );
}
