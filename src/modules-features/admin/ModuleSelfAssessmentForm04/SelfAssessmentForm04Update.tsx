import { Box, Flex, Grid, Group, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate } from "aq-fe-framework/components";
import cx from "clsx";
import { ISelfAssessmentForm04ViewModel } from "./interface";
import classes from "./style.module.css";
import { useEffect, useState } from "react";
import Form04CurrentSituationLayout from "./Form04CurrentSituation/Form04CurrentSituationLayout";
import Form04StrengthsLayout from "./Form04Strengths/Form04StrengthsLayout";
import Form04WeaknessesLayout from "./Form04Weaknesses/Form04WeaknessesLayout";
import Form04ActionPlanLayout from "./Form04ActionPlan/Form04ActionPlanLayout";
import Form04SelfEvaluationLayout from "./Form04SelfEvaluation/Form04SelfEvaluationLayout";

export default function SelfAssessmentForm04Update({
  data,
}: {
  data: ISelfAssessmentForm04ViewModel;
}) {
  const form = useForm({
    initialValues: {},
  });
  const [active, setActive] = useState(window.location.hash || "#1");

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const links = [
    { label: "1. Mô tả hiện trạng", link: "#1", order: 1 },
    { label: "2. Điểm mạnh", link: "#2", order: 1 },
    { label: "3. Điểm tồn tại", link: "#3", order: 1 },
    { label: "4. Kế hoạch hành động", link: "#4", order: 1 },
    { label: "5. Tự đánh giá", link: "#5", order: 1 },
  ];

  const items = links.map((item) => (
    <Box<"a">
      component="a"
      href={item.link}
      key={item.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <MyActionIconUpdate
      modalSize={"90%"}
      form={form}
      title="Chi tiết phiếu tự đánh giá"
      onSubmit={() => {}}
    >
      <Grid style={{ minHeight: "75vh", position: "relative" }}>
        <Grid.Col
          span={2}
          style={{
            position: "sticky",
            top: 50,
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Flex mb="md" direction={"column"} gap={0} style={{ marginTop: 10 }}>
            {items}
          </Flex>
        </Grid.Col>
        <Grid.Col span={10}>
          <Box id="1" style={{ paddingTop: 80 }}>
            <Form04CurrentSituationLayout />
          </Box>
          <Box id="2" style={{ paddingTop: 80 }}>
            <Form04StrengthsLayout />
          </Box>
          <Box id="3" style={{ paddingTop: 80 }}>
            <Form04WeaknessesLayout />
          </Box>
          <Box id="4" style={{ paddingTop: 80 }}>
            <Form04ActionPlanLayout />
          </Box>
          <Box id="5" style={{ paddingTop: 80 }}>
            <Form04SelfEvaluationLayout />
          </Box>
        </Grid.Col>
      </Grid>
    </MyActionIconUpdate>
  );
}
