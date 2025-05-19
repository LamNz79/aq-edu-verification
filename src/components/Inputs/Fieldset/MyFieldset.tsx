import {
    Fieldset,
    Group,
    Text,
    FieldsetProps,
    useMantineColorScheme,
} from "@mantine/core";
import { ReactNode, CSSProperties } from "react";

interface IFieldset extends FieldsetProps {
    children?: ReactNode;
    title: string;
    textColor?: string;
    bgColor?: string;
    customLegend?: ReactNode;
}

export default function MyFieldset({
    children,
    title,
    textColor,
    bgColor,
    styles,
    customLegend,
    ...props
}: IFieldset) {
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";
    
    const defaultLegendStyles: CSSProperties = {
        borderLeft: `4px solid ${isDark ? "#638cab" : "var(--mantine-color-blue-4)"}`,
        backgroundColor: bgColor ?? (isDark ? "var(--mantine-color-gray-8)" : "var(--mantine-color-blue-1)"),
        paddingLeft: "var(--mantine-spacing-xs)",
        paddingRight: "var(--mantine-spacing-xs)",
        color: textColor ?? (isDark ? "var(--mantine-color-white)" : "var(--mantine-color-blue-8)"),
    };

    const mergedStyles =
        typeof styles === "function"
            ? styles
            : {
                ...styles,
                legend: {
                    ...defaultLegendStyles,
                    ...(styles?.legend as CSSProperties),
                },
            };

    return (
        <Fieldset
            legend={
                customLegend ?? (
                    <Group gap="xs">
                        <Text fw={600}> {title} </Text>
                    </Group>
                )
            }
            styles={mergedStyles}
            {...props}
        >
            {children}
        </Fieldset>
    );
}
