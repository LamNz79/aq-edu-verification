"use client";
import MyButtonRouterBack from "@/components/Buttons/ButtonRouterBack/MyButtonRouterBack";
import { Code, Container, Divider, Group, Indicator, Title } from "@mantine/core";
import { useS_BasicAppShell } from "aq-fe-framework/components";
import { ReactNode } from "react";

interface IPageContent {
    title?: string;
    canBack?: boolean;
    rightTopBar?: ReactNode;
    children?: ReactNode;
    leftTopBar?: ReactNode;
    status?: "Prototype" | "Beta"
}

// Hàm helper để lấy màu sắc dựa trên trạng thái
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

// Component riêng cho tiêu đề có trạng thái
const PageTitle = ({ title, status }: { title: string; status?: string }) => {
    const color = getStatusColor(status);
    return (
        <Indicator label={status} size={16} inline color={color} disabled={!status} pt={6}>
            <Title>{title}</Title>
        </Indicator>
    );
};

export default function MyPageContent({ leftTopBar, title, canBack = false, rightTopBar, status, children }: IPageContent) {
    const SidebarStore = useS_BasicAppShell();
    const finalTitle = title || SidebarStore.state.title;
    return (
        <Container p={0} fluid>
            <Group justify="space-between">
                <Group>
                    {canBack && <MyButtonRouterBack />}
                    <PageTitle title={finalTitle} status={status} />
                    {leftTopBar}
                </Group>
                <Group>{rightTopBar}<Code color="var(--mantine-color-blue-light)">{SidebarStore.state.menuCode}</Code></Group>

            </Group>
            <Divider />
            {children}
        </Container>
    );
}
