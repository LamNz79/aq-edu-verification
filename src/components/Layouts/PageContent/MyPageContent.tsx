"use client";

import MyButtonRouterBack from "@/components/Buttons/ButtonRouterBack/MyButtonRouterBack";
import { useS0Sidebar } from "@/stores/S0Sidebar";
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
  const SidebarStore = useS0Sidebar();
  const finalStatus = status ? status : SidebarStore.status;
  const finalDescription =  description ? description : SidebarStore.description;
  const color = getStatusColor(finalStatus);
  const pathname = usePathname();
  const baseRoute = pathname.split("/").slice(0, 2).join("/");
  const finalTitle = title || SidebarStore.title;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items = [
    { title: "Trang chủ", href: "/" },
    { title: SidebarStore.title, href: `${baseRoute}/${SidebarStore.menuCode}` },
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
              {finalStatus && (
                <Badge
                  variant="gradient"
                  gradient={{ from: color, to: `${color}.5` }}
                  size="lg"
                  radius="sm"
                >
                  {finalStatus}
                </Badge>
              )}
            </Group>
            {finalDescription && (
              <Text size="sm" c="dimmed">
                {finalDescription}
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
        <Code color="var(--mantine-color-blue-light)">{SidebarStore.menuCode}</Code>
      </Flex>
    </Container>
  );
}
