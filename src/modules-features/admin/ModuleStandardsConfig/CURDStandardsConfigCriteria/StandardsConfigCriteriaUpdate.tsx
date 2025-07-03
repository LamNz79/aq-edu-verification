import { Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MySelect,
  MyTextArea,
  MyTextInput
} from "aq-fe-framework/components";
import {
  IStandardsConfigCriteriaViewModel,
  IStandardsConfigStandardViewModel,
} from "../interface";

export default function StandardsConfigCriteriaUpdate({
  data,
}: {
  data: IStandardsConfigCriteriaViewModel;
}) {
  const form = useForm<IStandardsConfigCriteriaViewModel>({
    initialValues: data,
  });

  return (
    <MyActionIconUpdate
      modalSize={"lg"}
      form={form}
      title={"Chi tiết danh sách tiêu chí"}
      onSubmit={() => {}}
    >
      <Flex direction="column">
        <MySelect
          label="Tiêu chuẩn"
          data={mockStandards.map((item) => ({
            value: item.code,
            label: `${item.code} - ${item.name}`,
          }))}
          {...form.getInputProps("standardCode")}
        />
        <MyTextInput
          label="Mã tiêu chí/chỉ số"
          {...form.getInputProps("code")}
        />
        <MyTextInput
          label="Tên tiêu chí/chỉ số"
          {...form.getInputProps("name")}
        />
        <MyTextInput
          label="Tên tiêu chí Eg"
          {...form.getInputProps("nameEg")}
        />
        <MyTextArea
          label="Minh chứng gợi ý"
          {...form.getInputProps("suggested")}
        />
        <MyTextArea label="Ghi chú" {...form.getInputProps("note")} />
      </Flex>
    </MyActionIconUpdate>
  );
}

const mockStandards: IStandardsConfigStandardViewModel[] = [
  {
    id: "1",
    code: "TC01",
    name: "Tầm nhìn, sứ mạng và văn hóa",
    nameEg: "",
    note: "",
  },
  {
    id: "2",
    code: "TC02",
    name: "Quản trị và quản lý",
    nameEg: "",
    note: "",
  },
  {
    id: "3",
    code: "TC03",
    name: "Đào tạo",
    nameEg: "",
    note: "",
  },
  {
    id: "4",
    code: "TC04",
    name: "Nghiên cứu khoa học",
    nameEg: "",
    note: "",
  },
  {
    id: "5",
    code: "TC05",
    name: "Đội ngũ giảng viên và nhân viên",
    nameEg: "",
    note: "",
  },
  {
    id: "6",
    code: "TC06",
    name: "Người học và hoạt động hỗ trợ người học",
    nameEg: "",
    note: "",
  },
  {
    id: "7",
    code: "TC07",
    name: "Cơ sở vật chất và trang thiết bị",
    nameEg: "",
    note: "",
  },
  {
    id: "8",
    code: "TC08",
    name: "Tài chính và quản lý tài chính",
    nameEg: "",
    note: "",
  },
  {
    id: "9",
    code: "TC09",
    name: "Hoạt động nghiên cứu khoa học và công nghệ",
    nameEg: "",
    note: "",
  },
  {
    id: "10",
    code: "TC10",
    name: "Hợp tác quốc tế",
    nameEg: "",
    note: "",
  },
];
