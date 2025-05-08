import { Center, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MyButton, MyButtonModal } from "aq-fe-framework/components";
import { I_o4e65ehgty_ProofView } from "./F_o4e65ehgty_Proof_View";

export default function F_o4e65ehgty_Proof_Use({
  data,
}: {
  data: I_o4e65ehgty_ProofView;
}) {
  const disc = useDisclosure();

  const isFileValid =
    data?.ngayHetHan && new Date(data.ngayHetHan) > new Date();
  const daysRemaining =
    isFileValid && data?.ngayHetHan
      ? Math.ceil(
          (new Date(data.ngayHetHan).getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  return (
    <MyButtonModal
      disclosure={disc}
      onSubmit={() => {}}
      variant="transparent"
      label="Sử dụng"
      title="Cảnh báo"
      crudType="default"
    >
      <Group>
        <Text>
          File minh chứng {data?.maFile} mà bạn chọn{" "}
          {isFileValid ? (
            <>
              sẽ hết hạn sử dụng trong{" "}
              <Text fw={600} span c="blue" td="underline">
                {daysRemaining}
              </Text>{" "}
              ngày nữa.
            </>
          ) : (
            "không còn hiệu lực"
          )}
        </Text>
        <Text>Đồng ý nếu tiếp tục sử dụng.</Text>
        <Text>Chọn Upload file mới nếu muốn dùng file khác</Text>
      </Group>
      <Center>
        <MyButton mr={6} variant="filled" color="green" crudType="default">
          Đồng ý
        </MyButton>
        <MyButton variant="filled" color="green" crudType="default">
          Upload file khác
        </MyButton>
      </Center>
    </MyButtonModal>
  );
}
