import { ActionIcon, Fieldset, Group, Text } from "@mantine/core";
import { ReactNode } from "react";

interface IFieldset {
  children?: ReactNode;
  icon: ReactNode;
  legend: string;
}

export default function Fieldset_1({ children, icon, legend, ...props }: IFieldset) {
  return (
    <Fieldset
      legend={
        <Group gap={"sm"}>
          <ActionIcon variant="filled" aria-label="Settings">
            {icon}
          </ActionIcon>
          <Text fw={700} tt={"uppercase"}>
            {legend}
          </Text>
        </Group>
      }
      {...props}
    >
      {children}
    </Fieldset>
  );
}
