"use client";

import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { MyButton, MyButtonModal, MyTextArea } from "aq-fe-framework/components";

interface ITrackSelfAssessmentProgressSendNoti {
  notificationContent?: string;
}

export default function TrackSelfAssessmentProgressSendNoti() {
  const [opened, { open, close }] = useDisclosure(false);

  // const query = useQuery({
  //   queryKey: [""],
  //   queryFn: () => { return mockData; },
  // });

  const form = useForm<ITrackSelfAssessmentProgressSendNoti>({
    initialValues: {
      notificationContent: "",
    },
    validate: {},
  });

  const handleSubmit = async (values: ITrackSelfAssessmentProgressSendNoti) => {
    console.log(values);
    close();
  };

  return (
    <MyButtonModal
      crudType="default"
      variant="transparent"
      title="Chi tiết thông báo"
      label="Gửi thông báo"
      size="xs"
      disclosure={[opened, { open, close, toggle: () => open() }]}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <MyTextArea label="Nội dung thông báo" {...form.getInputProps("notificationContent")} />
        <MyButton type="submit" w="100%" mt="md">
          Gửi
        </MyButton>
      </form>
    </MyButtonModal>
  );
}
