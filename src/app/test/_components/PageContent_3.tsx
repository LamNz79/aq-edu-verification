"use client";

import { Badge, Box, Card, Code, Flex, Group, Text, Title, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";
import MyButtonRouterBack from "./MyButtonRouterBack";

interface IPageContent {
  children?: ReactNode;
  title?: string;
  canBack?: boolean;
  leftTopBar?: ReactNode;
  rightTopBar?: ReactNode;
  status?: "Prototype" | "Beta" | "Production" | "Alpha";
  description?: string;
  withShadow?: boolean;
}

const getStatusColor = (status?: string) => {
  switch (status) {
    case "Prototype":
      return "blue";
    case "Beta":
      return "orange";
    default:
      return "gray";
  }
};

export default function PageContent_3({
  children,
  title,
  canBack = false,
  leftTopBar,
  rightTopBar,
  status,
  description,
  withShadow = true,
}: IPageContent) {
  const color = getStatusColor(status);

  return (
    <Card
      withBorder
      radius="lg"
      p="lg"
      shadow={withShadow ? "md" : "none"}
      style={{ overflow: "visible" }}
    >
      <Card.Section p="md" withBorder inheritPadding>
        <Flex justify="space-between" align="center">
          <Flex gap="md" align="center">
            {canBack && <MyButtonRouterBack />}
            <Box>
              <Title order={3}>{title}</Title>
              {description && (
                <Text size="sm" c="dimmed">
                  {description}
                </Text>
              )}
            </Box>
            {leftTopBar}
          </Flex>

          <Flex gap="md" align="center">
            {status && (
              <Badge
                variant="gradient"
                gradient={{ from: color, to: `${color}.5` }}
                size="lg"
                radius="sm"
              >
                {status}
              </Badge>
            )}
            {rightTopBar}
          </Flex>
        </Flex>
      </Card.Section>

      <Box pt="md">{children}</Box>

      <Card.Section pt="xs" pb="xs" withBorder inheritPadding mt="md">
        <Flex justify="flex-end">
          <Code color="var(--mantine-color-blue-light)">menuCode</Code>
        </Flex>
      </Card.Section>
    </Card>
  );
}
