import { useForm } from "@mantine/form";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";

interface IContent {
  content: string;
}

export default function CurrentReport() {
  const form = useForm<IContent>({
    initialValues: {
      ...mockContent,
    },
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

const mockContent: IContent = {
  content: `
  <p>
    Khuôn viên chưa có nhiều cây xanh, thiếu không gian sinh hoạt chung
  </p>
`,
};

