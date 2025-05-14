"use client";

import { Badge, Code, Divider, Group, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import MyButtonRouterBack from "./MyButtonRouterBack";

interface IPageContent {
  children?: ReactNode;
  title?: string;
  canBack?: boolean;
  leftTopBar?: ReactNode;
  rightTopBar?: ReactNode;
  status?: "Prototype" | "Beta";
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

export default function PageContent_1({
  children,
  title,
  canBack = false,
  leftTopBar,
  rightTopBar,
  status,
}: IPageContent) {
  const color = getStatusColor(status);
  return (
    <Stack>
      <Group justify="space-between">
        <Group>
          {canBack && <MyButtonRouterBack />}
          <Title>{title}</Title>
          {leftTopBar}
        </Group>
        <Group>
          {rightTopBar}
          <Code color="var(--mantine-color-blue-light)">menuCode</Code>
        </Group>
      </Group>
      <Divider
        my={0}
        label={
          <Badge variant="light" color={color} size="lg" radius="sm">
            {status}
          </Badge>
        }
        labelPosition="center"
      />
      {children}
    </Stack>
  );
}
