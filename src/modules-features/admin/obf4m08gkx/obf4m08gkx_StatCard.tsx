import { Box, Group, Paper, Text } from "@mantine/core";
import { MyFlexRow } from "aq-fe-framework/components";
import { ReactNode } from "react";

export default function StatCard({
    title,
    value,
    unit = "",
    icons = <></>,
    bg = "white",
    gradient = { from: "indigo.5", to: "cyan.5", deg: 45 },
}: {
    title: string;
    value: string;
    unit?: string;
    description?: string;
    icons?: ReactNode;
    bg?: string;
    gradient?: { from: string; to: string; deg: number };
}) {
    return (
        <Paper
            withBorder
            radius="xl"
            p="lg"
            shadow="xs"
            bg={bg}
            style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
            }
        >
            <Group justify="space-between" align="flex-start">
                <Box>
                    <MyFlexRow gap={6} align={'end'}>
                        <Text
                            size="lg"
                            fw={700}
                            tt="uppercase"
                            variant="gradient"
                            gradient={gradient}
                        >
                            {title}
                        </Text>
                    </MyFlexRow>
                    {unit ? (
                        <Text size="sm" c="gray.6">
                            Đơn vị: <strong>{unit}</strong>
                        </Text>
                    ) : (
                        <Text size="sm" style={{ visibility: "hidden" }}>
                            Đơn vị: _
                        </Text>
                    )}
                </Box>
                <Box>{icons}</Box>
            </Group>

            <Group align="flex-end" gap="xs">
                <Text
                    fz={35}
                    fw={700}
                    style={{
                        letterSpacing: "-1px",
                        transition: "color 0.2s",
                    }}
                >
                    {value}
                </Text>

            </Group>
        </Paper>
    );
}