import { Box, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate } from "aq-fe-framework/components";
import Form04ActionPlanLayout from "./Form04ActionPlan/Form04ActionPlanLayout";
import Form04CurrentSituationLayout from "./Form04CurrentSituation/Form04CurrentSituationLayout";
import Form04SelfEvaluationLayout from "./Form04SelfEvaluation/Form04SelfEvaluationLayout";
import Form04StrengthsLayout from "./Form04Strengths/Form04StrengthsLayout";
import Form04WeaknessesLayout from "./Form04Weaknesses/Form04WeaknessesLayout";
import { ISelfAssessmentForm04ViewModel } from "./interface";

export default function SelfAssessmentForm04Update({
  data,
}: {
  data: ISelfAssessmentForm04ViewModel;
}) {
  const form = useForm({
    initialValues: {},
  });

  const links = [
    { label: "1. Mô tả hiện trạng", value: "1. Mô tả hiện trạng" },
    { label: "2. Điểm mạnh", value: "2. Điểm mạnh" },
    { label: "3. Điểm tồn tại", value: "3. Điểm tồn tại" },
    { label: "4. Kế hoạch hành động", value: "4. Kế hoạch hành động" },
    { label: "5. Tự đánh giá", value: "5. Tự đánh giá" },
  ];

  return (
    <MyActionIconUpdate
      modalSize={"100%"}
      form={form}
      title="Chi tiết phiếu tự đánh giá"
      onSubmit={() => {}}
    >
      <Tabs
        defaultValue="1. Mô tả hiện trạng"
        orientation="vertical"
        variant="outline"
      >
        <Tabs.List>
          {links.map((item, index) => {
            return (
              <Tabs.Tab key={index} value={item.value} mb={6}>
                {item.label}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        <Box
          style={{
            flex: 1,
            width: 0,
            minWidth: 0,
            maxWidth: "100%",
            marginLeft: 10,
          }}
        >
          <Tabs.Panel value="1. Mô tả hiện trạng">
            <Form04CurrentSituationLayout />
          </Tabs.Panel>
          <Tabs.Panel value="2. Điểm mạnh">
            <Form04StrengthsLayout />
          </Tabs.Panel>
          <Tabs.Panel value="3. Điểm tồn tại">
            <Form04WeaknessesLayout />
          </Tabs.Panel>
          <Tabs.Panel value="4. Kế hoạch hành động">
            <Form04ActionPlanLayout />
          </Tabs.Panel>
          <Tabs.Panel value="5. Tự đánh giá">
            <Form04SelfEvaluationLayout />
          </Tabs.Panel>
        </Box>
      </Tabs>
    </MyActionIconUpdate>
  );
}
