import { Accordion, Flex, Grid, GridCol, Text, Textarea } from "@mantine/core";
import {
  IconSquareCheckFilled,
  IconSquareRoundedMinusFilled,
} from "@tabler/icons-react";
import F_o4e65ehgty_TableProof from "./F_o4e65ehgty_TableProof";
import { I_o4e65ehgty_Update } from "./F_o4e65ehgty_Update";

export default function F_o4e65ehgty_ReportRow({
  item,
}: {
  item: I_o4e65ehgty_Update;
}) {
  return (
    <Accordion.Item value={`item-${item.id}`} key={item.id}>
      <Accordion.Control>
        <Grid w={"100%"}>
          <Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
            <Text fw={"500"}>{item.name}</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 2, lg: 2 }}>
            <Flex>
              <Text fw={"500"} w={"120px"}>
                {item?.nguoiCapNhat}
              </Text>
              {item.trangThai ? (
                <IconSquareCheckFilled color="green" />
              ) : (
                <IconSquareRoundedMinusFilled color="red" />
              )}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
            <Flex justify={"start"} align={"center"}>
              <Text fw={"500"}>{`Cập nhật ngày 21/02/2025 15:25:30`}</Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Accordion.Control>
      <Accordion.Panel>
        <Grid w={"100%"}>
          <GridCol mt={14} span={6}>
            <Textarea
              value={item.content! || ""}
              autosize={false}
              rows={14}
              style={{
                overflowY: "auto",
                resize: "none",
              }}
              size={"md"}
              readOnly
            />
          </GridCol>
          <GridCol span={6} mt={14}>
            <F_o4e65ehgty_TableProof />
          </GridCol>
        </Grid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
