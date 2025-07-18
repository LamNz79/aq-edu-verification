"use client";

import {
  MyButton,
  MyButtonModal,
  MyCheckbox,
  MySelect,
  MyTextArea,
} from "aq-fe-framework/components";
import { useDisclosure } from "@mantine/hooks";
import { IconPencilCheck } from "@tabler/icons-react";
import { Divider, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { ExpectedEvidence } from "./EvidenceCollectionReviewTable";

export default function EvidenceCollectionReviewApprovalButton({
  value,
}: {
  value: ExpectedEvidence;
}) {
  const dics = useDisclosure();

  return (
    <MyButtonModal
      disclosure={dics}
      title="Chi tiết kiểm duyệt"
      label="Duyệt"
      modalSize="60%"
      leftSection={<IconPencilCheck />}
      variant="subtle"
    >
      <Stack gap={3}>
        <SimpleGrid cols={2}>
          <Text fw={500}>
            Mã tiêu chí: <Text span>{value.criterionCode}</Text>
          </Text>
          <Text fw={500}>
            Mã minh chứng dự kiến: <Text span>{value.expectedCode}</Text>
          </Text>
        </SimpleGrid>
        <Text fw={500}>
          Tên minh chứng dự kiến: <Text span>{value.expectedName}</Text>
        </Text>
        <Divider m={4} />
        <Text fw={500}>
          Tên minh chứng: <Text span>{value.actualName}</Text>
        </Text>
        <Text fw={500}>
          Số - Ngày ban hành:&nbsp;
          <Text span>
            {[value.issueNumber, value.issueDate].filter(Boolean).join(", ")}
          </Text>
        </Text>
        <Text fw={500}>
          Đơn vị ban hành: <Text span>{value.issuedBy}</Text>
        </Text>
        <Text fw={500} mt="xs">
          Trạng thái kiểm duyệt minh chứng
        </Text>
        <MySelect
          defaultValue={"Chưa kiểm duyệt"}
          data={[
            "Chưa kiểm duyệt",
            "Đã kiểm duyệt",
            "Yêu cầu bổ sung/hiệu chỉnh",
          ]}
        />
        <Text fw={500} mt="xs">
          Nhận xét
        </Text>
        <MyTextArea defaultValue={value.comment} />
        <Group mb="md" mt="xs">
          <MyCheckbox />
          <Text fw={500}>Gửi thông báo</Text>
        </Group>
        <MyButton crudType="save"></MyButton>
      </Stack>
    </MyButtonModal>
  );
}
