"use client";

import {
  Anchor,
  Badge,
  Breadcrumbs,
  Code,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
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

const items = [
  { title: "Trang chủ", href: "#" },
  { title: "Báo cáo tự đánh giá", href: "#" },
  { title: "Xuất báo cáo tự đánh giá", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function PageContent_4({
  children,
  title,
  canBack = false,
  leftTopBar,
  rightTopBar,
  status,
  description,
}: IPageContent) {
  const color = getStatusColor(status);

  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <Flex gap="md" align="center">
          {canBack && <MyButtonRouterBack />}
          <Stack gap={0}>
            <Group>
              <Title order={3}>{title}</Title>
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
            </Group>
            {description && (
              <Text size="sm" c="dimmed">
                {description}
              </Text>
            )}
          </Stack>
          {leftTopBar}
        </Flex>

        <Flex gap="md" align="center">
          <Breadcrumbs>{items}</Breadcrumbs>
          {rightTopBar}
        </Flex>
      </Flex>

      <Divider my={0} />

      {children}

      <Divider my={0} />

      <Flex justify="flex-end">
        <Code color="var(--mantine-color-blue-light)">menuCode</Code>
      </Flex>
    </Stack>
  );
}
