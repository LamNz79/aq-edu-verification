"use client";

import { MyActionIconModal } from "@/components/ActionIcons/ActionIconModal/MyActionIconModal";
import { Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAnalyze, IconEye, IconFile } from "@tabler/icons-react";
import CriteriaAssignmentForecastTable from "./CriteriaAssignmentDetailForecastTable";
import { I_EvidenceForecast, I_Requirement } from "../interfaces";
import CriteriaAssignmentDetailRequirementTable from "./CriteriaAssignmentDetailRequirementTable";

type DetailProps = {
  mockRequirementData: I_Requirement[];
  mockEvidenceForecastData: I_EvidenceForecast[];
};

export default function CriteriaAssignmentDetailModal(data: DetailProps) {
  const disc = useDisclosure(false);

  return (
    <MyActionIconModal
      modalSize={"100%"}
      disclosure={disc}
      crudType="default"
      title="Chi tiết phân công tiêu chí"
      icon={<IconEye />}
    >
      <Tabs mb={200} defaultValue="tab1" h="55vh">
        <Tabs.List>
          <Tabs.Tab
            bg="rgba(131, 204, 235, 0.3)"
            color="rgba(131, 204, 235, 1)"
            flex={1}
            leftSection={<IconAnalyze />}
            value="tab1"
          >
            Phân tích tiêu chí
          </Tabs.Tab>
          <Tabs.Tab
            bg="rgba(247, 216, 54, 0.3)"
            color="rgba(247, 216, 54, 1)"
            flex={1}
            leftSection={<IconFile />}
            value="tab2"
          >
            Dự kiện minh chứng
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel pt={20} value="tab1">
          <CriteriaAssignmentDetailRequirementTable
            data={data.mockRequirementData}
          />
        </Tabs.Panel>
        <Tabs.Panel pt={20} value="tab2">
          <CriteriaAssignmentForecastTable
            data={data.mockEvidenceForecastData}
          />
        </Tabs.Panel>
      </Tabs>
    </MyActionIconModal>
  );
}
