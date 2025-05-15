"use client";

import MyButtonRouterBack from "@/components/Buttons/ButtonRouterBack/MyButtonRouterBack";
import {
  Anchor,
  Badge,
  Breadcrumbs,
  Code,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useS_BasicAppShell } from "aq-fe-framework/components";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IPageContent {
  children: ReactNode;
  title?: string;
  canBack?: boolean;
  leftTopBar?: ReactNode;
  rightTopBar?: ReactNode;
  status?: "Prototype" | "Beta" | "Production" | "Alpha";
  description?: string;
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

export default function MyPageContent({
  children,
  title,
  canBack = false,
  leftTopBar,
  rightTopBar,
  status,
  description,
}: IPageContent) {
  const color = getStatusColor(status);
  const SidebarStore = useS_BasicAppShell();
  const pathname = usePathname();
  const baseRoute = pathname.split("/").slice(0, 2).join("/");
  const finalTitle = title || SidebarStore.state.title;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items = [
    { title: "Trang chủ", href: "/" },
    { title: SidebarStore.state.title, href: `${baseRoute}/${SidebarStore.state.menuCode}` },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} size={isMobile ? "xs" : "md"}>
      {isMobile && index === 0 ? "Trang chủ" : item.title}
    </Anchor>
  ));

  return (
    <Container p={0} fluid>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={isMobile ? "flex-start" : "space-between"}
        align={isMobile ? "flex-start" : "center"}
        gap={isMobile ? "xs" : 0}
      >
        <Flex gap="md" align="center">
          {canBack && <MyButtonRouterBack />}
          <Stack gap={0}>
            <Group>
              <Title order={3}>{finalTitle}</Title>
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

        <Flex gap="md" align="center" my={isMobile ? "xs" : 0}>
          <Breadcrumbs>{items}</Breadcrumbs>
          {rightTopBar}
        </Flex>
      </Flex>

      <Divider my={"sm"} />

      {children}

      <Divider mb={0} />

      <Flex justify="flex-end">
        <Code color="var(--mantine-color-blue-light)">{SidebarStore.state.menuCode}</Code>
      </Flex>
    </Container>
  );
}
