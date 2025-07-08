import { Grid, Stack, Text } from "@mantine/core";
import { MyFlexColumn } from "aq-fe-framework/components";
import CurrentReport from "./CurrentReport";
import EvidenceListTable from "./EvidenceListTable";
import FormHistory from "./FormHistory";

export default function StatusLayoutTab() {
  return (
    <MyFlexColumn gap={16}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          1. Mô tả hiện trạng:
        </Text>
        <Text size="sm">
          (Căn cứ yêu cầu của tiêu chí, mô tả các hoạt động của cơ sở đào tạo có CTĐT được đánh giá
          kèm theo các thông tin, minh chứng để chứng minh mức độ đạt được tiêu chí)
        </Text>
      </Stack>
      <FormHistory />
      <Grid>
        <Grid.Col span={{ md: 12, xl: 7 }}>
          <CurrentReport />
        </Grid.Col>
        <Grid.Col span={{ md: 12, xl: 5 }}>
          <EvidenceListTable />
        </Grid.Col>
      </Grid>
    </MyFlexColumn>
  );
}
