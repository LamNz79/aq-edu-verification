"use client";
import { MySwitchTheme } from "@/components/ActionIcons/SwitchTheme/MySwitchTheme";
import { MyAppSpotlight } from "@/components/AppSpotlight/MyAppSpotlight";
import F0Logout from "@/modules-features/auth/F0Logout/F0Logout";
import { useS0Sidebar } from "@/stores/S0Sidebar";
import {
  ActionIcon,
  AppShell,
  Badge,
  Divider,
  Group,
  Image,
  NavLink,
  ScrollArea,
  Select,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { spotlight } from "@mantine/spotlight";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconLibraryMinus,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface I0LinkItem {
  pageId?: number;
  name?: string;
  label: string;
  status?: "Default" | "Prototype" | "New" | "Menu" | "Change";
  link?: string;
  links?: I0LinkItem[];
}

function getRightSection(status: string) {
  if (status === "Prototype")
    return (
      <Badge
        styles={{ root: { cursor: "pointer" } }}
        radius="xs"
        color="pink"
        circle
      >
        P
      </Badge>
    );
  if (status === "New")
    return (
      <Badge styles={{ root: { cursor: "pointer" } }} radius="xs" circle>
        N
      </Badge>
    );
  if (status === "Menu")
    return (
      <Badge
        styles={{ root: { cursor: "pointer" } }}
        radius="xs"
        color="gray"
        circle
      >
        M
      </Badge>
    );
  if (status === "Change")
    return (
      <Badge
        styles={{ root: { cursor: "pointer" } }}
        radius="xs"
        color="green"
        circle
      >
        C
      </Badge>
    );
  return null; // Fallback for unknown types
}

function RenderNavLinks({ items }: { items: I0LinkItem[] }) {
  const SidebarStore = useS0Sidebar();
  const pathName = usePathname();
  return (
    <>
      {items.map((item, index) => (
        <NavLink
          active={item.link === pathName.split("/")[2]}
          component={Link}
          key={index}
          rightSection={getRightSection(item.status!)}
          opened={SidebarStore.groupMenuOpenId.includes(item.label)}
          href={`/admin/${item.link}` || "#"}
          label={item.label}
          childrenOffset={28}
          // rightSection={item.link && "prototype"}
          onClick={() => {
            if (item.links) SidebarStore.toggleGroupMenuOpenId(item.label);
            if (item.link) {
              SidebarStore.setMenuCode(item.link);
              SidebarStore.setTitle(item.label);
            }
          }}
        >
          {item.links && <RenderNavLinks items={item.links} />}
        </NavLink>
      ))}
    </>
  );
}

function childrenMenuToListEnumUsingPageIdAndName(
  children: I0LinkItem[]
): I0LinkItem[] {
  return children.flatMap((item) => {
    if (
      item.label === "Quản lí hệ thống" ||
      item.label === "Văn bản - Quy định"
    ) {
      return []; // Exclude these menus
    }
    return item.links
      ? item.pageId
        ? [item, ...childrenMenuToListEnumUsingPageIdAndName(item.links)]
        : childrenMenuToListEnumUsingPageIdAndName(item.links)
      : item.pageId
      ? [item]
      : [];
  });
}

function validateMenuItems(items: I0LinkItem[]): boolean {
  const pageIdSet = new Set<number>();
  const nameSet = new Set<string>();

  for (const item of items) {
    if (item.pageId) {
      if (pageIdSet.has(item.pageId)) {
        alert(`Duplicate pageId detected: ${item.pageId}`);
        return false;
      }
      pageIdSet.add(item.pageId);
    }
    if (item.name) {
      const enumName = "COE_" + item.name.replace(/\s+/g, "_");
      if (nameSet.has(enumName)) {
        alert(`Duplicate name detected: ${item.name}`);
        return false;
      }
      nameSet.add(enumName);
    }
  }

  return true;
}

function sortMenuItemsByPageId(items: I0LinkItem[]): I0LinkItem[] {
  return items.sort((a, b) => (a.pageId ?? 0) - (b.pageId ?? 0));
}

function transformMenuToEnum(menu: I0LinkItem[]) {
  const items = childrenMenuToListEnumUsingPageIdAndName(menu);

  if (!validateMenuItems(items)) {
    return {};
  }

  return sortMenuItemsByPageId(items).reduce((acc, item) => {
    if (item.pageId && item.name) {
      acc["COE_" + item.name.replace(/\s+/g, "_")] = item.pageId;
    }
    return acc;
  }, {} as Record<string, number>);
}

export function BasicAppShell({
  children,
  menu,
}: {
  children: ReactNode;
  menu: I0LinkItem[];
}) {
  const SidebarStore = useS0Sidebar();
  const media = useMediaQuery("(min-width: 72em)");
  const selectMedia = useMediaQuery("(min-width: 80em)");
  // console.log(transformMenuToEnum(childrenMenuToListEnumUsingPageIdAndName(menu)));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 333,
        breakpoint: "sm",
        collapsed: {
          mobile: SidebarStore.opened,
          desktop: !SidebarStore.opened,
        },
      }}
      padding="md"
    >
      <AppShell.Header>
        <MyAppSpotlight menu={menu} />
        {/* For large screens - show all elements normally */}
        {media ? (
          <Group h="100%" px="md" justify="space-between" align="center">
            {/* Left side */}
            <Group h="100%">
              <Tooltip
                label={
                  SidebarStore.opened ? "Ẩn thanh menu" : "Hiện thanh menu"
                }
              >
                <ActionIcon
                  size="lg"
                  radius="md"
                  variant="default"
                  onClick={SidebarStore.toggle}
                >
                  {SidebarStore.opened ? (
                    <IconLayoutSidebarLeftExpand />
                  ) : (
                    <IconLayoutSidebarLeftCollapse />
                  )}
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Đóng tất cả menu">
                <ActionIcon
                  size="lg"
                  radius="md"
                  variant="default"
                  onClick={() => SidebarStore.clearGroupMenuOpenId()}
                >
                  <IconLibraryMinus />
                </ActionIcon>
              </Tooltip>
            </Group>

            {/* Center - placed with absolute positioning */}
            <Group
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Text c="green" fw="bold">
                AQ Verification - Phần mềm Quản lý minh chứng kiểm định
              </Text>
            </Group>

            {/* Right side */}
            <Group>
              <Text>Học kỳ làm việc</Text>
              <Select
                w={selectMedia ? 245 : 150}
                placeholder="Chọn công thức sắp xếp"
                defaultValue={1?.toString()}
                data={[
                  { value: "1", label: "Năm học 2024 - 2025 Học kỳ 1" },
                  { value: "2", label: "Năm học 2024 - 2025 Học kỳ 1" },
                ]}
              />
              <MySwitchTheme />
            </Group>
          </Group>
        ) : (
          // For mobile screens - simplified layout
          <Group h="100%" px="md" justify="space-between">
            {/* Left: Just menu toggle */}
            <ActionIcon
              size="lg"
              radius="md"
              variant="default"
              onClick={SidebarStore.toggle}
            >
              {SidebarStore.opened ? (
                <IconLayoutSidebarLeftExpand />
              ) : (
                <IconLayoutSidebarLeftCollapse />
              )}
            </ActionIcon>

            {/* Center: Short title */}
            <Text c="green" fw="bold" size="sm">
              AQ EduCourseEvaluation
            </Text>

            {/* Right: Just theme switch and dropdown menu for other options */}
            <Group>
              <Select
                w={100}
                size="xs"
                placeholder="Học kỳ"
                defaultValue={1?.toString()}
                data={[
                  { value: "1", label: "20241" },
                  { value: "2", label: "20242" },
                ]}
              />
              <MySwitchTheme />
            </Group>
          </Group>
        )}
      </AppShell.Header>
      <AppShell.Navbar>
        <TextInput
          mt={"md"}
          placeholder="Tìm menu (Ctrl + K)"
          mx={10}
          component={"button"}
          onClick={spotlight.open}
          leftSection={<IconSearch />}
        >
          Tìm kiếm (Ctrl + K)
        </TextInput>
        <AppShell.Section grow component={ScrollArea} p={5}>
          <RenderNavLinks items={menu} />
          <Divider></Divider>
          <F0Logout />
        </AppShell.Section>
        <AppShell.Section p={"md"}>
          <Divider></Divider>
          <Image
            src={"/imgs/0/IMG0LogoAQTech.png"}
            h={50}
            alt=""
            w="auto"
          ></Image>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main
        bg={
          "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))"
        }
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export const groupToTwoLevels = (menu: I0LinkItem[]): I0LinkItem[] => {
  return menu
    .map((item) => {
      if (item.links) {
        const flattenedLinks: I0LinkItem[] = [];

        const flattenSubLinks = (subLinks: I0LinkItem[]) => {
          subLinks.forEach((subItem) => {
            if (subItem.links) {
              flattenSubLinks(subItem.links); // Flatten deeper levels
            } else {
              if (subItem.pageId != undefined) {
                flattenedLinks.push(subItem);
              }
            }
          });
        };

        flattenSubLinks(item.links);

        return {
          ...item,
          links: flattenedLinks, // Replace with flattened links
        };
      }

      if (item.pageId != undefined) {
        return item;
      }
      return undefined;
    })
    .filter((item) => item != undefined);
};
export function utils_layout_getItemsWithoutLinks(menu: I0LinkItem[]) {
  let result: I0LinkItem[] = [];
  function traverse(items: I0LinkItem[]) {
    for (const item of items) {
      if (!item.links) {
        result.push(item);
      } else {
        traverse(item.links);
      }
    }
  }
  traverse(menu);
  return result;
}
