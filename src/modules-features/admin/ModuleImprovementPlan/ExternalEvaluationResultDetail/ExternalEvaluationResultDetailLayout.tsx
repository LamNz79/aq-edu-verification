import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { Box, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MyButton } from "aq-fe-framework/components";
import { useState } from "react";
import { useCustomScrollSpy } from "../useCustomScrollSpy";
import AdvantageTab from "./AdvantageTab";
import AssessmentTab from "./AssessmentTab";
import DisadvantageTab from "./DisadvantageTab";
import ImprovementTab from "./ImprovementTab";

export default function ExternalEvaluationResultDetailLayout({}: {}) {
  const disclosure = useDisclosure();
 
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

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

  const handleSubmit = () => {
    disclosure[1].close();
  };

  return (
    <MyButtonModal
      modalSize={"100%"}
      label="Xem chi tiết"
      variant="transparent"
      title="Chi tiết Kết quả đánh giá ngoài"
      onSubmit={() => {}}
      disclosure={disclosure}
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
            { id: "section-1", label: "a. Điểm mạnh" },
            { id: "section-2", label: "b. Điểm tồn tại" },
            { id: "section-3", label: "c. Lĩnh vực cần cải tiến" },
            { id: "section-4", label: "d. Đánh giá mức đạt" },
          ].map((item) => (
            <Box
              key={item.id}
              style={{
                textAlign: "left",
                cursor: "pointer",
                padding: "6px 10px",
                borderLeft: activeId === item.id ? "4px solid var(--mantine-color-blue-4)" : "none",
                backgroundColor:
                  activeId === item.id ? "var(--mantine-color-blue-1)" : "transparent",
                color: activeId === item.id ? "var(--mantine-color-blue-8)" : "black",
              }}
              mt={2}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element && scrollContainer) {
                  const containerRect = scrollContainer.getBoundingClientRect();
                  const elementRect = element.getBoundingClientRect();
                  const currentScrollTop = scrollContainer.scrollTop;
                  const relativeTop = elementRect.top - containerRect.top + currentScrollTop;

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
              <AdvantageTab />
            </Box>
            <Box id="section-2" style={{ paddingBottom: 40, minHeight: 200 }}>
              <DisadvantageTab />
            </Box>
            <Box id="section-3" style={{ paddingBottom: 40, minHeight: 200 }}>
              <ImprovementTab />
            </Box>
            <Box id="section-4" style={{ paddingBottom: 40, minHeight: 200 }}>
              <AssessmentTab />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      <MyButton crudType="save" onClick={handleSubmit}></MyButton>
    </MyButtonModal>
  );
}
