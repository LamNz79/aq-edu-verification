import { Box, Divider, Grid, Stack, Text } from "@mantine/core";
import { MyFieldset, MyFlexColumn, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import FormHistory from "./FormHistory";

export default function ActionTabLayoutTab() {

  return (
    <MyFlexColumn gap={16} ml={12}>
      <Stack gap={2}>
        <Text fw={600}>4. Kế hoạch hành động:</Text>
        <Text>
          (Phân tích những điểm tồn tại của CTĐT trong đáp ứng yêu cầu của tiêu chí và các khuyến
          nghị cải tiến cần thiết)
        </Text>
      </Stack>
      <FormHistory />
      <MyFieldset title="Nội dung báo cáo hiện tại">
        <Box mb={16}>
          <Text fw={600}>4.1 Khắc phục điểm tồn tại:</Text>
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MyTextArea label="Nội dung" minRows={4} autosize mb={8} />
              <MyTextInput label="Ghi chú" mb={8} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <MyTextInput label="Đơn vị/ người thực hiện" mb={8} />
              <MyTextInput label="Thời gian thực hiện/ hoàn thành" mb={8} />
            </Grid.Col>
          </Grid>
        </Box>
        <Divider />
        <Box>
          <Text fw={600}>4.2 Phát huy điểm mạnh:</Text>
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MyTextArea label="Nội dung" minRows={4} autosize mb={8} />
              <MyTextInput label="Ghi chú" mb={8} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <MyTextInput label="Đơn vị/ người thực hiện" mb={8} />
              <MyTextInput label="Thời gian thực hiện/ hoàn thành" mb={8} />
            </Grid.Col>
          </Grid>
        </Box>
      </MyFieldset>
    </MyFlexColumn>
  );
}
