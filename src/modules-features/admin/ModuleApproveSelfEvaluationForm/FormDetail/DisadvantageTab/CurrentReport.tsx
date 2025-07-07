import { useForm } from "@mantine/form";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

interface IFormUpdateForm {
  content: string;
}

export default function CurrentReport() {
  const form = useForm<IFormUpdateForm>({
    initialValues: {
      ...mockContent,
    },
    validate: { content: (v) => (v ? null : "Không được để trống") },
  });

  return (
    <MyFieldset title="Nội dung báo cáo hiện tại">
      <MyTextEditor
        value={form.values.content}
        contentHeight={"220px"}
        error={form.errors.content as string | undefined}
        onChange={() => {}}
      />
    </MyFieldset>
  );
}

const mockContent: IFormUpdateForm = {
  content: `
  <p>
    Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung
  </p>
`,
};

