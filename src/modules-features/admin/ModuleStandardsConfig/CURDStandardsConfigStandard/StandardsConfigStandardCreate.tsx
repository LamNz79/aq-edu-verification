import { MyButtonCreate, MyTextInput } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { Flex } from "@mantine/core";
import { IStandardsConfigStandardViewModel } from "../interface";

export default function StandardsConfigStandardCreate() {
  const form = useForm<IStandardsConfigStandardViewModel>({});
  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={"lg"}
      form={form}
      title={"Chi tiết danh sách tiêu chuẩn"}
      onSubmit={() => {}}
    >
      <Flex direction="column">
        <MyTextInput label="Mã tiêu chuẩn" {...form.getInputProps("code")} />
        <MyTextInput label="Tên tiêu chuẩn" {...form.getInputProps("name")} />
        <MyTextInput
          label="Tên tiêu chuẩn Eg"
          {...form.getInputProps("nameEg")}
        />
        <MyTextInput label="Ghi chú" {...form.getInputProps("note")} />
      </Flex>
    </MyButtonCreate>
  );
}
