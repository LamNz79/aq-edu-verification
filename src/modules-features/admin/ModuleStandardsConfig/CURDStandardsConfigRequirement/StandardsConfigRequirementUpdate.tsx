import {
  MyActionIconUpdate,
  MyButtonCreate,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { Flex } from "@mantine/core";
import {
  IStandardsConfigCriteriaViewModel,
  IStandardsConfigRequirementViewModel,
  IStandardsConfigStandardViewModel,
} from "../interface";

export default function StandardsConfigRequirementUpdate({
  data,
}: {
  data: IStandardsConfigRequirementViewModel;
}) {
  const form = useForm<IStandardsConfigRequirementViewModel>({
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
        <MySelect
          label="Mã tiêu chí/chỉ số"
          data={mockCriteria.map((item) => ({
            value: item.code,
            label: `${item.code} - ${item.name}`,
          }))}
          {...form.getInputProps("criteriaCode")}
        />
        <MyTextInput
          label="Mã yêu cầu/mốc chuẩn"
          {...form.getInputProps("code")}
        />
        <MyTextInput
          label="Tên yêu cầu/mốc chuẩn"
          {...form.getInputProps("name")}
        />
        <MyTextArea label="Mô tả" {...form.getInputProps("description")} />
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

const mockCriteria: IStandardsConfigCriteriaViewModel[] = [
  {
    id: "1",
    standardCode: "TC01",
    code: "TC1.1",
    name: "Tâm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng. phù hợp với định hướng phát triển và được công bố công khai.",
    suggested: "Văn bản về sứ mạng, tầm nhìn, mục tiêu chiến lược của CSGDDH",
    note: "",
  },
  {
    id: "2",
    standardCode: "TC02",
    code: "TC1.2",
    name: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị niềm tin và hành vi của cán bộ giảng viên, nhân viên và người học.",
    suggested: "",
    note: "",
  },
  {
    id: "3",
    standardCode: "TC03",
    code: "TC1.3",
    name: "Cơ sở giáo dục có các chính sách và biện pháp cụ thể để thúc đẩy và duy trì văn hóa chất lượng trong toàn bộ hoạt động",
    suggested: "",
    note: "",
  },
  {
    id: "4",
    standardCode: "TC04",
    code: "TC1.4",
    name: "Cơ sở giáo dục thường xuyên đánh giá và cải tiến tầm nhìn. sứ mạng và văn hóa chất lượng để đáp ứng yêu cầu phát triển và hội nhập.",
    suggested: "",
    note: "",
  },
  {
    id: "5",
    standardCode: "TC05",
    code: "TC1.5",
    name: "Cơ sở giáo dục có cơ chế thu thập và phản hồi ý kiến từ các bên liên quan về tầm nhìn. sứ mạng và văn hóa chất lượng.",
  },
];
