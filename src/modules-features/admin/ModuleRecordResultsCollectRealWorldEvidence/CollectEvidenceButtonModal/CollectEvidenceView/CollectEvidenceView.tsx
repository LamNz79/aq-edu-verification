import { Grid, Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyActionIconModal,
  MyActionIconUpdate,
  MySelect,
  MyTab,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { ICollectEvidenceInfoViewModel } from "../../interfaces";
import { selectTrucThuocMinhChung } from "../../mockData";
import PlaceToUseTab from "./PlaceToUseTab";
import EvidenceVersionRead from "./EvidenceVersionTab/EvidenceVersionRead";
import { IconEye } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
export default function CollectEvidenceView({
  values,
}: {
  values: ICollectEvidenceInfoViewModel;
}) {
  const disc = useDisclosure();
  const form = useForm<ICollectEvidenceInfoViewModel>({
    initialValues: {
      ...values,
    },
    validate: {},
  });

  const tabData = [
    { label: "Thông tin chung" },
    { label: "Phiên bản minh chứng" },
    { label: "Nơi sử dụng" },
  ];

  return (
    <MyActionIconModal
      icon={<IconEye />}
      color="blue"
      crudType="check"
      title="Chi tiết minh chứng"
      modalSize={"90%"}
      onSubmit={() => {}}
      disclosure={disc}
    >
      <MyTab tabList={tabData}>
        <Tabs.Panel value="Thông tin chung">
          <MyTextInput
            label="Mã minh chứng"
            {...form.getInputProps("maMinhChung")}
            readOnly
          />
          <MyTextInput
            label="Tên minh chứng"
            {...form.getInputProps("tenMinhChung")}
            readOnly
          />
          <MySelect
            data={selectTrucThuocMinhChung}
            label="Trực thuộc minh chứng"
            {...form.getInputProps("maMcTrucThuocCha")}
            readOnly
          />
          <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} readOnly />
        </Tabs.Panel>
        <Tabs.Panel value="Phiên bản minh chứng">
          <EvidenceVersionRead />
        </Tabs.Panel>
        <Tabs.Panel value="Nơi sử dụng">
          <PlaceToUseTab />
        </Tabs.Panel>
      </MyTab>
    </MyActionIconModal>
  );
}
