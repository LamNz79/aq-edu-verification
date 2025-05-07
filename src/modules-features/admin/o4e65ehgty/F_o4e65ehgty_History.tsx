import { Flex, Group, Skeleton, Tabs, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { MyButton, MyFieldset } from "aq-fe-framework/components";

interface I_o4e65ehgty_History {
  turnOff?: () => void;
}

export default function F_o4e65ehgty_History({
  turnOff,
}: I_o4e65ehgty_History) {
  return (
    <Group w={"100%"} justify="space-start" align="flex-start">
      <Flex w={"100%"} justify={"space-between"}>
        <Text fw={"bold"}>Lịch sử cập nhật</Text>
        <MyButton variant="transparent" crudType="default" onClick={turnOff}>
          <IconX />
        </MyButton>
      </Flex>
      <Group w={"100%"} justify="space-start" align="flex-start" h={"70vh"} style={{ overflowY: "auto" }}>
        <Tabs defaultValue="1" w={"100%"}>
          <Tabs.List>
            <Tabs.Tab value="1">Lịch sử tổng hợp mốc chuẩn</Tabs.Tab>
            <Tabs.Tab value="2">Minh chứng gợi ý</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="1">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Flex  direction={"column"} w={"100%"} py={10} key={index}>
                  <Text>{`Cập nhật ngày 21/02/2025 15:25:30 bởi Tô Ngọc Bảo`}</Text>
                  <MyFieldset
                    h={"280px"}
                    w={"100%"}
                    style={{ overflowY: "auto" }}
                  >
                    <Skeleton height={20} mt={6} />
                    <Skeleton height={20} mt={6} width="60%" />
                    <Skeleton height={20} mt={6} />
                    <Skeleton height={20} mt={6} width="80%" />
                    <Skeleton height={20} mt={6} width="70%" />
                    <Skeleton height={20} mt={6} width="50%" />
                  </MyFieldset>
                </Flex>
              );
            })}
          </Tabs.Panel>

          <Tabs.Panel value="2">
            <MyFieldset
              py={10}
              h={"280px"}
              w={"full"}
              style={{ overflowY: "auto" }}
            >
              <Skeleton height={20} mt={6} />
              <Skeleton height={20} mt={6} width="60%" />
              <Skeleton height={20} mt={6} />
              <Skeleton height={20} mt={6} width="80%" />
              <Skeleton height={20} mt={6} width="70%" />
              <Skeleton height={20} mt={6} width="50%" />
            </MyFieldset>
          </Tabs.Panel>
        </Tabs>
      </Group>
    </Group>
  );
}
