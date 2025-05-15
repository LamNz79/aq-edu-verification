"use client";

import { Container, Grid, Paper, Text, Stack, Divider } from "@mantine/core";
import PageContent_1 from "./_components/PageContent_1";
import PageContent_2 from "./_components/PageContent_2";
import PageContent_3 from "./_components/PageContent_3";
import Fieldset_1 from "./_components/Fieldset_1";
import { IconAdjustments } from "@tabler/icons-react";
import Fieldset_2 from "./_components/Fieldset_2";
import PageContent_4 from "./_components/PageContent_4";

export default function Test() {
  return (
    <Container p={"xl"} fluid>
      <Stack>
        <Text size="xl" fw={700}>
          PageContent
        </Text>
        <Grid>
          {/* PageContent_1 */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper withBorder p="md" radius="md" shadow="sm">
              <PageContent_1 title="PageContent_1" canBack status="Prototype">
                <Text>Content</Text>
              </PageContent_1>
            </Paper>
          </Grid.Col>

          {/* PageContent_2 */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper withBorder p="md" radius="md" shadow="sm">
              <PageContent_2 title="PageContent_2" canBack status="Beta" compact>
                <Text>Content</Text>
              </PageContent_2>
            </Paper>
          </Grid.Col>

          {/* PageContent_3 */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper withBorder p="md" radius="md" shadow="sm">
              <PageContent_3
                title="PageContent_3"
                canBack
                status="Prototype"
                description="Velit esse elit id et labore anim nostrud"
              >
                <Text>Content</Text>
              </PageContent_3>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
            <Paper withBorder p="md" radius="md" shadow="sm">
              <PageContent_4
                title="PageContent_3"
                canBack
                status="Prototype"
                description="Velit esse elit id et labore anim nostrud"
              >
                <Text>Content</Text>
              </PageContent_4>
            </Paper>
          </Grid.Col>
        </Grid>

        <Divider my="md" />

        <Text size="xl" fw={700}>
          Fieldset
        </Text>
        <Grid>
          {/* Fieldset_1 */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Fieldset_1
              icon={<IconAdjustments style={{ width: "70%", height: "70%" }} stroke={1.5} />}
              legend="Action Icon"
            >
              <Text>Nội dung fieldset</Text>
            </Fieldset_1>
          </Grid.Col>

          {/* Fieldset_2 */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Fieldset_2 legend="With icon and border">
              <Text>Nội dung fieldset</Text>
            </Fieldset_2>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
