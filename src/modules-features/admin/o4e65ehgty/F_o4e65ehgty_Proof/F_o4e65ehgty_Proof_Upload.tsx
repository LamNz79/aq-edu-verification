import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  MyButtonModal,
  MyDateInput,
  MyFileInput,
  MyTextInput,
} from "aq-fe-framework/components";
import { utils_date_FormatToDateTimetring } from "./F_o4e65ehgty_Proof_View";

interface F_o4e65ehgty_Proof_Upload {
  code?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
}

export default function F_o4e65ehgty_Proof_Upload() {
  const disc = useDisclosure();

  const form = useForm<F_o4e65ehgty_Proof_Upload>({
    // mode: 'uncontrolled',
    initialValues: {
      code: "",
      name: "",
      startDate: undefined,
      endDate: undefined,
    },
    validate: {
      code: (value) => (!value ? "Vui lòng nhập mã file" : null),
      name: (value) => (!value ? "Vui lòng nhập tên file" : null),
    },
  });

  return (
    <MyButtonModal
      disclosure={disc}
      onSubmit={() => {}}
      variant="transparent"
      label="Upload"
      title="Chi tiết minh chứng"
      crudType="default"
    >
      <MyTextInput label="Mã file" {...form.getInputProps("code")} />
      <MyTextInput label="Tên file" {...form.getInputProps("name")} />
      <MyDateInput label="Ngày hiệu lực" {...form.getInputProps("startDate")} />
      <MyDateInput label="Ngày hết hạn" {...form.getInputProps("endDate")} />
      <MyFileInput label="Upload" />
    </MyButtonModal>
  );
}
