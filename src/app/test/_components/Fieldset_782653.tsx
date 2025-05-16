import { Fieldset, Group, Text, FieldsetProps } from "@mantine/core";
import { ReactNode, CSSProperties } from "react";

interface IFieldset extends FieldsetProps {
    children?: ReactNode;
    legend: string;
    textColor?: string;
    bgColor?: string;
    customLegend?: ReactNode;
}

export default function Fieldset_782653({ children, legend, textColor, bgColor, styles, customLegend, ...props }: IFieldset) {
    const defaultLegendStyles: CSSProperties = {
        borderLeft: "5px solid var(--mantine-color-blue-3)",
        backgroundColor: bgColor ?? "var(--mantine-color-blue-0)",
        paddingLeft: "var(--mantine-spacing-xs)",
        paddingRight: "var(--mantine-spacing-xs)",
    };

    // Nếu styles là hàm -> không xử lý merge thủ công (truyền thẳng)
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
            legend={customLegend ??
                <Group gap="xs">
                    <Text fw={600} tt="capitalize" c={textColor ?? "blue.7"}>
                        {legend}
                    </Text>
                </Group>
            }
            styles={mergedStyles}
            {...props}
        >
            {children}
        </Fieldset>
    );
}
