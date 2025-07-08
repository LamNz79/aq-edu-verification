import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyFieldset, MyFlexColumn, MyTextEditor } from "aq-fe-framework/components";

interface IFormUpdateForm {
  content: string;
}

export default function AdvantageTab() {
  const form = useForm<IFormUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFlexColumn gap={4}>
      <Stack gap={2}>
        <Text size="md" fw={500}>
          1. Điểm mạnh
        </Text>
      </Stack>
      <MyFieldset title="Nội dung chi tiết đánh giá" mt={8}>
        <MyTextEditor
          value={form.values.content}
          contentHeight={"220px"}
          error={form.errors.content as string | undefined}
          onChange={() => {}}
        />
      </MyFieldset>
    </MyFlexColumn>
  );
}

const mockContent: IFormUpdateForm = {
  content: `
  <p>
    Chương trình đào tạo có mục tiêu rõ ràng, định hướng cụ thể cho người học.
  </p>
   <p>
Mục tiêu và chuẩn đầu ra được xây dựng bám sát sứ mệnh, tầm nhìn của Trường và nhu cầu xã hội.
  </p>
   <p>
Thông tin về mục tiêu và chuẩn đầu ra được công bố công khai, rộng rãi trên website Trường, cẩm nang sinh viên và trong buổi định hướng nhập học.
  </p>
  
`,
};
