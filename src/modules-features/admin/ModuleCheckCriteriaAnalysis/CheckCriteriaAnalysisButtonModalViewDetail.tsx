import { Grid, Group, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyCenterFull,
  MyTab,
} from "aq-fe-framework/components";
import { useState } from "react";
import { MyButtonCreateUpdate, MyButtonModal } from "aq-fe-framework/core";
import {
  IconAnalyze,
  IconChecklist,
  IconEye,
  IconInfoCircle,
  IconLoadBalancer,
  IconNote,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import CriteriaAnalysisTab from "./CriteriaAnalysisTab";
import ExpectedEvidenceTab from "./ExpectedEvidenceTab";

export default function CheckCriteriaAnalysisButtonModalViewDetail() {
  const disc = useDisclosure();
  const [activeTab, setActiveTab] = useState<string | null>("CriteriaAnalysis");

  return (
    <MyButtonModal
      modalProps={{
        size: "90%",
      }}
      buttonProps={{
        size: "xs",
        color: "blue",
        children: "Xem chi tiết",
        variant: "outline",
      }}
      disclosure={disc}
    >
      <Tabs radius={0} value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow justify="space-between">
          <Tabs.Tab
            bg={"rgba(131, 204, 235, 0.3)"}
            color="rgba(131, 204, 235, 1)"
            value="CriteriaAnalysis"
            leftSection={<IconAnalyze />}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Phân tích tiêu chí
          </Tabs.Tab>
          <Tabs.Tab
            bg={"rgba(247, 216, 54, 0.3)"}
            color="rgba(247, 216, 54, 1)"
            value="ExpectedEvidence"
            leftSection={<IconNote />}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Dự kiến minh chứng
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="CriteriaAnalysis">
          <CriteriaAnalysisTab />
        </Tabs.Panel>
        <Tabs.Panel value="ExpectedEvidence">
          <ExpectedEvidenceTab />
        </Tabs.Panel>
      </Tabs>
    </MyButtonModal>
  );
}
