import { Flex, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButtonCreate, MySelect, MyTab } from "aq-fe-framework/components";
import {
  IAnalysisFormInfoViewModel,
  IGroupViewModel,
  IStandardViewModel,
} from "../interface";
import CriteriaAnalysisTable from "./CriteriaAnalysisTable";
import ExpectedEvidenceTable from "./ExpectedEvidenceTable";

export default function AnalysisFormButtonCreate() {
  const form = useForm<IAnalysisFormInfoViewModel>({});

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phân tích tiêu chí" },
    { label: "Minh chứng dự kiến" },
  ];

  return (
    <MyButtonCreate
      label="Thêm"
      modalSize={"80%"}
      form={form}
      title="Chi tiết phiếu phân tích tiêu chí"
      onSubmit={() => {}}
    >
      <MyTab tabList={tabData}>
        <Tabs.Panel value="Thông tin chung">
          <Flex direction="column">
            <MySelect
              label="Số kế hoạch"
              data={[
                {
                  value: "1",
                  label: "KH1.1",
                },
                {
                  value: "2",
                  label: "KH1.2",
                },
                {
                  value: "3",
                  label: "KH1.3",
                },
              ]}
              {...form.getInputProps("")}
            />
            <MySelect
              label="Nhóm công tác"
              placeholder="Chọn nhóm công tác"
              data={mockDataGroup.map((item) => ({
                value: item.code,
                label: item.name,
              }))}
              {...form.getInputProps("groupCode")}
            />
            <MySelect
              label="Tiêu chuẩn"
              data={mockDataStandard.map((item) => ({
                value: item.code,
                label: `${item.code} - ${item.name}`,
              }))}
              {...form.getInputProps("standardCode")}
            />
            <MySelect
              label="Tiêu chí"
              data={mockDataAnalysisForm.map((item) => ({
                value: item.code,
                label: `${item.code} - ${item.name}`,
              }))}
              {...form.getInputProps("code")}
            />
          </Flex>
        </Tabs.Panel>
        <Tabs.Panel value="Phân tích tiêu chí">
          <CriteriaAnalysisTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Minh chứng dự kiến">
          <ExpectedEvidenceTable data={[]} />
        </Tabs.Panel>
      </MyTab>
    </MyButtonCreate>
  );
}

const mockDataStandard: IStandardViewModel[] = [
  {
    id: "1",
    name: "Tầm nhìn sứ mạng và văn hóa",
    code: "TC1",
  },
  {
    id: "2",
    name: "Cố gắng đạt được mục tiêu",
    code: "TC2",
  },
  {
    id: "3",
    name: "Hành vi",
    code: "TC3",
  },
];

const mockDataGroup: IGroupViewModel[] = [
  {
    id: "1",
    name: "Nhóm 1",
    code: "N01",
  },
  {
    id: "2",
    name: "Nhóm 2",
    code: "N02",
  },
  {
    id: "3",
    name: "Nhóm 3",
    code: "N03",
  },
];

const mockDataAnalysisForm: IAnalysisFormInfoViewModel[] = [
  {
    id: "1",
    name: "Lãnh đạo CSGD đảm bảo tầm nhìn và sứ mạng của CSGD",
    code: "TC1.1",
  },
  {
    id: "2",
    name: "Lãnh đạo CSGD thúc đẫy giá trị văn hóa",
    code: "TC1.2",
  },
  {
    id: "3",
    name: "Tầm nhìn, văn hóa; sứ mạng được phổ hiến đầy đủ",
    code: "TC1.3",
  },
  {
    id: "4",
    name: "Tầm nhìn, văn hóa; sứ mạng được rà soát định kỳ",
    code: "TC1.4",
  },
];
