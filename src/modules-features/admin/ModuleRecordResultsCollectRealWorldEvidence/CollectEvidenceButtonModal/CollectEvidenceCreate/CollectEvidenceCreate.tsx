import { Grid, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconUpdate,
  MyButtonCreate,
  MySelect,
  MyTab,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { ICollectEvidenceInfoViewModel } from "../../interfaces";
import { selectTrucThuocMinhChung } from "../../mockData";
import PlaceToUseTab from "./PlaceToUseTab";
import EvidenceVersionRead from "./EvidenceVersionTab/EvidenceVersionRead";
export default function CollectEvidenceCreate() {
  const form = useForm<ICollectEvidenceInfoViewModel>({
    initialValues: {
      maMinhChung: "",
      tenMinhChung: "",
      maMcTrucThuocCha: "",
      ghiChu: "",
    },
  });

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phiên bản minh chứng" },
    { label: "Nơi sử dụng" },
  ];

  return (
    <MyButtonCreate
      title="Chi tiết minh chứng"
      modalSize={"90%"}
      form={form}
      onSubmit={() => {}}
    >
      <MyTab tabList={tabData}>
        <Tabs.Panel value="Thông tin chung">
          <MyTextInput
            label="Mã minh chứng"
            {...form.getInputProps("maMinhChung")}
          />
          <MyTextInput
            label="Tên minh chứng"
            {...form.getInputProps("tenMinhChung")}
          />
          <MySelect
            data={selectTrucThuocMinhChung}
            label="Trực thuộc minh chứng"
            {...form.getInputProps("maMcTrucThuocCha")}
          />
          <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />
        </Tabs.Panel>
        <Tabs.Panel value="Phiên bản minh chứng">
          <EvidenceVersionRead />
        </Tabs.Panel>
        <Tabs.Panel value="Nơi sử dụng">
          <PlaceToUseTab />
        </Tabs.Panel>
      </MyTab>
    </MyButtonCreate>
  );
}
