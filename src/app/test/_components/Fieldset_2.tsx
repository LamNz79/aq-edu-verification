import { Box, Fieldset, Group, Text } from "@mantine/core";
import { IconHistory } from "@tabler/icons-react";
import { ReactNode } from "react";

interface IFieldset {
  children?: ReactNode;
  legend: string;
}

export default function Fieldset_2({ children, legend, ...props }: IFieldset) {
  return (
    <Fieldset
      legend={
        <Group gap="xs">
          <IconHistory size={18} color="var(--mantine-color-blue-6)" />
          <Text fw={600} tt="capitalize" c="blue.7">
            {legend}
          </Text>
        </Group>
      }
      styles={{
        root: {
          borderColor: "var(--mantine-color-blue-3)",
          borderLeftWidth: 3,
          borderRadius: "var(--mantine-radius-md)",
        },
        legend: {
          backgroundColor: "var(--mantine-color-blue-0)",
          paddingLeft: "var(--mantine-spacing-xs)",
          paddingRight: "var(--mantine-spacing-xs)",
        },
      }}
      {...props}
    >
      {children}
    </Fieldset>
  );
}
