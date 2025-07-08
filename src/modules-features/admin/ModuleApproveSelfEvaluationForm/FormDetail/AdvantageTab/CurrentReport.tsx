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
    Trường đã xây dựng môi trường sư phạm hiện đại, năng động, mở phạm, thân thiện, sạch đẹp và an toàn tạo không khí và tâm lý thoải mái, phục vụ hiệu quả cho hoạt động dạy và học.
  </p>
   <p>
   Khuôn viên Trường có đầy đủ các bảng nội quy, hướng dẫn, các thông điệp mang ý nghĩa tích cực giúp người học thêm năng động, sáng tạo trong học tập và rèn luyện
   </p>
`,
};
