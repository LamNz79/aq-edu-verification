import { Accordion, Box, Flex, Grid, Text } from "@mantine/core";
import { MyCheckbox } from "aq-fe-framework/components";
import { IForm04SelfEvaluationRowHistory } from "./interface";

export default function Form04SelfEvaluationRow({
  data,
}: {
  data: IForm04SelfEvaluationRowHistory;
}) {
  return (
    <Accordion.Item value={`${data?.id}`}>
      <Accordion.Control>
        <Grid>
          <Grid.Col span={3}>
            <Text size="sm" c="green" fw={600}>
              {data.name}
            </Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm" fw={500}>Ngày cập nhật: {data.ngayCapNhat}</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm" fw={500}>Người cập nhật: {data.nguoiCapNhat}</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm" span fw={500}>
              Tự đánh giá:{" "}
              <Text span c={data.status === true ? "green" : "red"} fw={600}>
                {data.status ? "Đạt" : "Không đạt"}
              </Text>
            </Text>
          </Grid.Col>
        </Grid>
      </Accordion.Control>
      <Accordion.Panel>
        <Box>
          <Text fw={500}>Tự đánh giá</Text>
          <Flex gap={10}>
            <MyCheckbox label="Đạt" checked readOnly />
            <MyCheckbox label="Không đạt" readOnly />
          </Flex>
        </Box>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
