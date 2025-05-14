import { MyActionIcon } from "@/components/ActionIcons/ActionIcon/MyActionIcon";
import { Box, Fieldset, FieldsetProps, Group, Text } from "@mantine/core";
import { ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";

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
          py={4}
          style={{
            borderRadius: 4,
            backgroundColor: "var(--mantine-color-blue-1)",
            // border: "1px solid var(--mantine-color-blue-filled)",
            color: "var(--mantine-color-blue-filled)",
          }}
        >
          <Group gap={4}>
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
