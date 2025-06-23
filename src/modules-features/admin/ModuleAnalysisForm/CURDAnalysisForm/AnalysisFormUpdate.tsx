import { Flex, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButtonCreate, MySelect, MyTab } from "aq-fe-framework/components";
import {
  IAnalysisFormInfoViewModel,
  ICriteriaAnalysisViewModel,
  IExpectedEvidenceViewModel,
  IGroupViewModel,
  IStandardViewModel,
} from "../interface";
import CriteriaAnalysisTable from "./CriteriaAnalysisTable";
import ExpectedEvidenceTable from "./ExpectedEvidenceTable";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";

export default function AnalysisFormButtonUpdate({
  data,
}: {
  data: IAnalysisFormInfoViewModel;
}) {
  const form = useForm<IAnalysisFormInfoViewModel>({
    initialValues: data,
  });

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phân tích tiêu chí" },
    { label: "Minh chứng dự kiến" },
  ];

  return (
    <MyActionIconUpdate
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
          <CriteriaAnalysisTable data={mockDataCriteriaAnalysis} />
        </Tabs.Panel>
        <Tabs.Panel value="Minh chứng dự kiến">
          <ExpectedEvidenceTable data={mockDataExpectedEvidence} />
        </Tabs.Panel>
      </MyTab>
    </MyActionIconUpdate>
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
    code: "N1",
  },
  {
    id: "2",
    name: "Nhóm 2",
    code: "N2",
  },
  {
    id: "3",
    name: "Nhóm 3",
    code: "N3",
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

const mockDataCriteriaAnalysis: ICriteriaAnalysisViewModel[] = [
  {
    id: "1",
    name: "Văn bản tuyên bố tầm nhìn sứ mệnh",
    code: "MC1.1.1.1",
    groupCode: "N01",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N01",
    },
    standardCode: "TC1",
    criteriaCode: "TC1.1",
    requirementCode: "YC1.1.1",
    location: "Phòng tổ chức",
    method: "Photo/scan",
    codeEvent: "MC1.1.1.1",
  },
  {
    id: "2",
    name: "Có sự tham gia của các bên liênn quan tầm nhìn sứ mệnh",
    code: "MC1.1.1.2",
    groupCode: "N01",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N01",
    },
    standardCode: "TC1",
    criteriaCode: "TC1.1",
    requirementCode: "YC1.1.1",
    location: "Phòng tổ chức",
    method: "Photo/scan",
    codeEvent: "MC1.1.1.2",
  },

  {
    id: "3",
    name: "Nội dung tuyên bố tầm nhìn sứ mệnh phù hợp các chức năng của CSGD",
    code: "MC1.1.1.3",
    groupCode: "N01",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N01",
    },
    standardCode: "TC1",
    criteriaCode: "TC1.1",
    requirementCode: "YC1.1.1",
    location: "Phòng tổ chức",
    method: "Photo/scan",
    codeEvent: "MC1.1.1.3",
  },
  {
    id: "4",
    name: "Lãnh đạo có kế hoạch hướng dẫn tầm nhìn sứ mệnh",
    code: "MC1.1.1.4",
    groupCode: "N01",
    group: {
      id: "1",
      name: "Nhóm 1",
      code: "N01",
    },
    standardCode: "TC1",
    criteriaCode: "TC1.1",
    requirementCode: "YC1.1.1",
    location: "Phòng tổ chức",
    method: "Photo/scan",
    codeEvent: "MC1.1.1.4",
  },
];

const mockDataExpectedEvidence: IExpectedEvidenceViewModel[] = [
  {
    id: "1",
    name: "Văn bản tuyên bố tầm nhìn sứ mệnh",
    code: "MC1.1.1.1",
    date: "2018-05-15",
    issuanceNumber: "14/2018/TN",
    note: "",
    location: "Phòng tổ chức",
  },
  {
    id: "2",
    name: "Có sự tham gia của các bên liênn quan tầm nhìn sứ mệnh",
    code: "MC1.1.1.2",
    date: "2018-05-15",
    issuanceNumber: "14/2018/TN",
    note: "",
    location: "Phòng tổ chức",
  },
  {
    id: "3",
    name: "Nội dung tuyên bố tầm nhìn sứ mệnh phù hợp các chức năng của CSGD",
    code: "MC1.1.1.3",
    date: "2018-05-15",
    issuanceNumber: "14/2018/TN",
    note: "",
    location: "Phòng tổ chức",
  },
  {
    id: "4",
    name: "Lãnh đạo có kế hoạch hướng dẫn tầm nhìn sứ mệnh",
    code: "MC1.1.1.4",
    date: "2018-05-15",
    issuanceNumber: "14/2018/TN",
    note: "",
    location: "Phòng tổ chức",
  },
];
