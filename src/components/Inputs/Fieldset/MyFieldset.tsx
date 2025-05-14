import { Box, Fieldset, FieldsetProps, Group, Text } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import { ReactNode } from "react";

interface MyFieldsetProps extends FieldsetProps {
  chilren?: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export default function MyFieldset({
  children,
  title,
  icon,
  ...rest
}: MyFieldsetProps) {
  return (
    <Fieldset
      {...rest}
      legend={
        <Box
          px={"xs"}
          py={3}
          style={{
            borderRadius: 100,
            backgroundColor: "var(--mantine-color-white",
            border: "1px solid var(--mantine-color-blue-filled)",
            color: "var(--mantine-color-blue-filled)",
          }}
        >
          <Group>
            {icon}
            <Text c="blue" size="sm" fw={500}>
              {title}
            </Text>
          </Group>
        </Box>
      }
    >
      {children}
    </Fieldset>
  );
}
