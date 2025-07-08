import { utils_date_dateToDDMMYYYString } from "@/utils/date";
import { Accordion, Flex, Group, Text } from "@mantine/core";
import { MyTextArea } from "aq-fe-framework/components";
import { IForm04WeaknessesRowHistory } from "./interface";

export default function Form04WeaknessesRow({
  data,
}: {
  data: IForm04WeaknessesRowHistory;
}) {
  return (
    <Accordion.Item value={data?.id ?? "1"} w={"100%"}>
      <Accordion.Control>
        <Group gap="md" grow>
          <Text size="sm" fw={500} color={"green"}>
            {data?.name}
          </Text>
          <Text size="sm" fw={500}>
            Ngày cập nhật:{" "}
            {utils_date_dateToDDMMYYYString(new Date(data?.ngayCapNhat ?? ""))}
          </Text>
          <Text size="sm" fw={500}>
            Người cập nhật: {data?.nguoiCapNhat}
          </Text>
          <Flex gap="xs" fw={500}>
            <Text size="sm" fw={500}>
              Tự đánh giá:
            </Text>
            <Text size="sm" fw={500} color={data?.status ? "green" : "red"}>
              {data?.status ? "Đạt" : "Không đạt"}
            </Text>
          </Flex>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <MyTextArea
          rows={10}
          minRows={8}
          maxRows={8}
          value="Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung, không gian làm việc mỏ đôi khi tạo ra sự bất tiện trong công việc (Không tập chung, ồn, do,..)
          "
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
