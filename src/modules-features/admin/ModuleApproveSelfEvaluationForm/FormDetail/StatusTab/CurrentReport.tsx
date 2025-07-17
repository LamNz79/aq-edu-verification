import { useForm } from "@mantine/form";
import { MyFieldset, MyTextEditor } from "aq-fe-framework/components";
import React, { useEffect } from "react";

interface IFormUpdateForm {
  content: string;
}

export default function CurrentReport({ content }: { content: string }) {
  const form = useForm<IFormUpdateForm>({
    initialValues: {
      content,
    },
  });

  useEffect(() => {
    form.setFieldValue("content", content);
  }, [content]);

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

