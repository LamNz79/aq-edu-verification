import { useForm } from "@mantine/form";
import { MyButtonCreate, MyTextArea, MyTextInput } from "aq-fe-framework/components";

interface I_o4e65ehgty_Proof_Create {
  code?: string;
  name?: string;
  note?: string;
}

export default function F_o4e65ehgty_Proof_Create() {
  const form = useForm<I_o4e65ehgty_Proof_Create>({
    initialValues: {
      code: "",
      name: "",
      note: "",
    },
    validate: {
      code:  (value) => (!value ? "Vui lòng nhập mã minh chứng" : null),
      name:  (value) => (!value ? "Vui lòng nhập tên minh chứng" : null),
    }
  });

  return (
    <MyButtonCreate
      form={form}
      label="Thêm minh chứng"
      onSubmit={() => {}}
      objectName="Minh chứng"
    >
      <MyTextInput
        label="Mã minh chứng"
        {...form.getInputProps("code")}
      />
      <MyTextInput
        label="Tên minh chứng"
        {...form.getInputProps("name")}
      />
      <MyTextArea
        label="Ghi chú"
        {...form.getInputProps("note")}
      />
    </MyButtonCreate>
  );
}
