import { MyActionIconModal } from "@/components/ActionIcons/ActionIconModal/MyActionIconModal";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";
import {
  MyButton,
  MyCheckbox,
  MySelect,
  MyTextArea,
} from "aq-fe-framework/components";
import { IImprovementProgressTrackingViewModel } from "./interface";
import { Flex } from "@mantine/core";

enum ENUM_STATUS_CHECK {
  "Chưa kiểm tra" = 0,
  "Cần hiệu chính" = 1,
  "Đạt yêu cầu" = 2,
}

export default function ImprovementProgressTrackingCheck({
  value,
}: {
  value: IImprovementProgressTrackingViewModel;
}) {
  const dis = useDisclosure();
  const form = useForm({
    initialValues: {
      ...value,
    },
  });

  return (
    <MyActionIconModal
      crudType="check"
      icon={<IconCheck />}
      title="Chi tiết kiểm tra"
      disclosure={dis}
    >
      <form>
        <Flex direction={"column"} gap={8}>
          <MySelect
            label="Trạng thái"
            data={Object.entries(ENUM_STATUS_CHECK).map(([key, value]) => ({
              label: key,
              value: value.toString(),
            }))}
            value={form.getValues().statusCheck.toString()}
          />
          <MyTextArea
            label="Nội dung"
            name="note"
            {...form.getInputProps("note")}
          />

          <MyCheckbox
            label={"Gửi thông báo"}
            defaultChecked={form.getValues().sendNotification ?? false}
            {...form.getInputProps("sendNotification")}
          />

          <MyButton
            type="submit"
            variant="filled"
            color="blue"
            leftSection={<IconCheck />}
          >
            Lưu
          </MyButton>
        </Flex>
      </form>
    </MyActionIconModal>
  );
}
