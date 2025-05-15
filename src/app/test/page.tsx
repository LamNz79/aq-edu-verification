"use client";

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import F_k25w91d9v2_Read from "@/modules-features/admin/k25w91d9v2/F_k25w91d9v2_Read";
import { Container, Grid, Paper, Text, Stack } from "@mantine/core";

export default function Test() {
  return (
    <Container p={"xl"} fluid>
      <Stack>
        <Text size="xl" fw={700}>
          PageContent
        </Text>
        <Grid>
          <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
            <Paper withBorder p="md" radius="md" shadow="sm">
              <MyPageContent
                canBack
                title="Xuất báo cáo tự đánh giá"
                status="Prototype"
                description="Xuất báo cáo tự đánh giá làm dữ liệu cho các nghiệp vụ khác khai thác."
              >
                <F_k25w91d9v2_Read />
              </MyPageContent>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
