import { useForm } from "@mantine/form";
import { MyActionIconUpdate, MyTab } from "aq-fe-framework/components";
import { IExternalReviewInputViewModel } from "./interface";
import { Box, Tabs } from "@mantine/core";
import TabStrengths from "./TabsDetail/TabStrengths";
import TabWeaknesses from "./TabsDetail/TabWeaknesses";
import TabAreasForImprovement from "./TabsDetail/TabAreasForImprovement";
import TabAchievementLevel from "./TabsDetail/TabAchievementLevel";

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

  const tabsList = [
    { label: "a. Điểm mạnh", value: "a. Điểm mạnh" },
    { label: "b. Điểm tồn tại", value: "b. Điểm tồn tại" },
    { label: "c. Lĩnh vực cần cải tiến", value: "c. Lĩnh vực cần cải tiến" },
    { label: "d. Đánh giá mức đạt", value: "d. Đánh giá mức đạt" },
  ];

  return (
    <MyActionIconUpdate
      modalSize={"100%"}
      form={form}
      title="Chi tiết kết quả đánh giá ngoài"
      onSubmit={() => {}}
    >
      <Box style={{ maxHeight: "70vh" }}>
        <MyTab tabList={tabsList} variant="outline" orientation="vertical">
          <Tabs.Panel value="a. Điểm mạnh">
            <TabStrengths />
          </Tabs.Panel>
          <Tabs.Panel value="b. Điểm tồn tại">
            <TabWeaknesses />
          </Tabs.Panel>
          <Tabs.Panel value="c. Lĩnh vực cần cải tiến">
            <TabAreasForImprovement />
          </Tabs.Panel>
          <Tabs.Panel value="d. Đánh giá mức đạt">
            <TabAchievementLevel status={form.values.status || null} />
          </Tabs.Panel>
        </MyTab>
      </Box>
    </MyActionIconUpdate>
  );
}
