import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MyTab } from "aq-fe-framework/components";
import { IExternalReviewInputViewModel } from "./interface";
import { Box, Grid, Tabs } from "@mantine/core";
import TabStrengths from "./TabsDetail/TabStrengths";
import TabWeaknesses from "./TabsDetail/TabWeaknesses";
import TabAreasForImprovement from "./TabsDetail/TabAreasForImprovement";
import TabAchievementLevel from "./TabsDetail/TabAchievementLevel";
import { useCustomScrollSpy } from "./useCustomScrollSpy";
import { useState } from "react";

export default function ExternalReviewInputUpdate({
  data,
}: {
  data: IExternalReviewInputViewModel;
}) {
  const form = useForm({
    initialValues: {
      ...data,
    },
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
      title="Chi tiết kết quả đánh giá ngoài"
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
                transition: "all 0.3s ease",
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
              <TabStrengths />
            </Box>
            <Box id="section-2" style={{ paddingBottom: 40, minHeight: 200 }}>
              <TabWeaknesses />
            </Box>
            <Box id="section-3" style={{ paddingBottom: 40, minHeight: 200 }}>
              <TabAreasForImprovement />
            </Box>
            <Box id="section-4" style={{ paddingBottom: 40, minHeight: 200 }}>
              <TabAchievementLevel status={data.status ?? null} />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
