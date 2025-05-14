"use client";

import { Badge, Code, Divider, Group, Paper, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import MyButtonRouterBack from "./MyButtonRouterBack";

interface IPageContent {
  children?: ReactNode;
  title?: string;
  canBack?: boolean;
  leftTopBar?: ReactNode;
  rightTopBar?: ReactNode;
  status?: "Prototype" | "Beta" | "Production";
  compact?: boolean;
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

export default function PageContent_2({
  children,
  title,
  canBack = false,
  leftTopBar,
  rightTopBar,
  status,
  compact = false,
}: IPageContent) {
  const color = getStatusColor(status);

  return (
    <Paper withBorder p={compact ? "xs" : "md"} radius="md" shadow="sm">
      <Stack gap={compact ? "xs" : "md"}>
        <Group>
          <Group gap="xs">
            {canBack && <MyButtonRouterBack />}
            <Title order={compact ? 3 : 2}>{title}</Title>
            {status && (
              <Badge variant="filled" color={color} size="md" radius="sm">
                {status}
              </Badge>
            )}
            {leftTopBar}
          </Group>

          <Group gap="xs">
            {rightTopBar}
            {!compact && <Code color="var(--mantine-color-blue-light)">menuCode</Code>}
          </Group>
        </Group>

        <Divider />

        <div>{children}</div>
      </Stack>
    </Paper>
  );
}
