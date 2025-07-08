import { Box, Button, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate } from "aq-fe-framework/components";
import { useState } from "react";
import Form04ActionPlanLayout from "./Form04ActionPlan/Form04ActionPlanLayout";
import Form04CurrentSituationLayout from "./Form04CurrentSituation/Form04CurrentSituationLayout";
import Form04SelfEvaluationLayout from "./Form04SelfEvaluation/Form04SelfEvaluationLayout";
import Form04StrengthsLayout from "./Form04Strengths/Form04StrengthsLayout";
import Form04WeaknessesLayout from "./Form04Weaknesses/Form04WeaknessesLayout";
import { ISelfAssessmentForm04ViewModel } from "./interface";
import { useCustomScrollSpy } from "./useCustomScrollSpy";

export default function SelfAssessmentForm04Update({
  data,
}: {
  data: ISelfAssessmentForm04ViewModel;
}) {
  const form = useForm({
    initialValues: {},
  });
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null
  );

  const scrollRef = (element: HTMLDivElement | null) => {
    if (element) {
      setScrollContainer(element);
    }
  };

  const { activeId } = useCustomScrollSpy({
    root: scrollContainer,
    selector: "[id]",
    offset: 20,
  });

  return (
    <MyActionIconUpdate
      modalSize={"100%"}
      form={form}
      title="Chi tiết phiếu tự đánh giá"
      onSubmit={() => {}}
    >
      <Grid style={{ minHeight: "75vh", position: "relative" }}>
        <Grid.Col
          span={{ base: 4, md: 2 }}
          style={{
            position: "sticky",
            top: 50,
            height: "100%",
            overflowY: "auto",
          }}
        >
          {[
            { id: "section-1", label: "1. Mô tả hiện trạng" },
            { id: "section-2", label: "2. Điểm mạnh" },
            { id: "section-3", label: "3. Điểm tồn tại" },
            { id: "section-4", label: "4. Kế hoạch hành động" },
            { id: "section-5", label: "5. Tự đánh giá" },
          ].map((item) => (
            <Box
              key={item.id}
              style={{
                textAlign: "left",
                cursor: "pointer",
                padding: "6px 10px",
                borderLeft:
                  activeId === item.id
                    ? "4px solid var(--mantine-color-blue-4)"
                    : "none",
                backgroundColor:
                  activeId === item.id
                    ? "var(--mantine-color-blue-1)"
                    : "transparent",
                color:
                  activeId === item.id
                    ? "var(--mantine-color-blue-8)"
                    : "black",
              }}
              mt={2}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element && scrollContainer) {
                  const containerRect = scrollContainer.getBoundingClientRect();
                  const elementRect = element.getBoundingClientRect();
                  const currentScrollTop = scrollContainer.scrollTop;
                  const relativeTop =
                    elementRect.top - containerRect.top + currentScrollTop;

                  scrollContainer.scrollTo({
                    top: relativeTop - 30,
                  });
                }
              }}
            >
              {item.label}
            </Box>
          ))}
        </Grid.Col>
        <Grid.Col span={{ base: 8, md: 10 }}>
          <Box
            ref={scrollRef}
            style={{
              maxHeight: "75vh",
              overflowY: "auto",
              border: "1px solid #ccc",
              padding: 20,
            }}
          >
            <Box id="section-1" style={{ paddingBottom: 40, minHeight: 200 }}>
              <Form04CurrentSituationLayout />
            </Box>
            <Box id="section-2" style={{ paddingBottom: 40, minHeight: 200 }}>
              <Form04StrengthsLayout />
            </Box>
            <Box id="section-3" style={{ paddingBottom: 40, minHeight: 200 }}>
              <Form04WeaknessesLayout />
            </Box>
            <Box id="section-4" style={{ paddingBottom: 40, minHeight: 200 }}>
              <Form04ActionPlanLayout />
            </Box>
            <Box id="section-5" style={{ paddingBottom: 40, minHeight: 200 }}>
              <Form04SelfEvaluationLayout />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
