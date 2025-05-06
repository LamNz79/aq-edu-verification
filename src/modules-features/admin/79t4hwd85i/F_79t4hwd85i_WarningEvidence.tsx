import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUpload } from "@tabler/icons-react";
import { MyButton } from "aq-fe-framework/components";

interface F_79t4hwd85i_WarningEvidenceProps {
  disUploadEvidenceFile: ReturnType<typeof useDisclosure>;
  disEvidenceList: ReturnType<typeof useDisclosure>;
  code: string;
  expireDate: number;
}

export default function F_79t4hwd85i_WarningEvidence({
  disUploadEvidenceFile,
  disEvidenceList,
  code,
  expireDate,
}: F_79t4hwd85i_WarningEvidenceProps) {
  const dis = useDisclosure();

  return (
    <MyButtonModal
      label="Sử dụng"
      modalSize={"40%"}
      disclosure={dis}
      title="Cảnh báo"
      variant="transparent"
    >
      <Flex direction="column" gap={0}>
        <Group gap={4}>
          <Text>
            File minh chứng <Text span>{code}</Text> mà bạn chọn sẽ hết hạn sau{" "}
            <Text fw={600} span c="blue" td="underline">
              {expireDate}
            </Text>{" "}
            ngày nữa.
          </Text>
        </Group>
        <Text>Chọn Đồng ý nếu tiếp tục sử dụng.</Text>
        <Text>Chọn Upload mới nếu muốn dùng file khác.</Text>
      </Flex>

      <Group grow>
        <MyButton
          crudType="save"
          bg={"green"}
          onClick={() => {
            dis[1].close();
            disEvidenceList[1].close();
          }}
        >
          Đồng ý
        </MyButton>
        <MyButton
          crudType="cancel"
          bg={"blue"}
          leftSection={<IconUpload size={16} />}
          onClick={() => {
            dis[1].close();
            disUploadEvidenceFile[1].open();
          }}
        >
          Upload file khác
        </MyButton>
      </Group>
    </MyButtonModal>
  );
}
