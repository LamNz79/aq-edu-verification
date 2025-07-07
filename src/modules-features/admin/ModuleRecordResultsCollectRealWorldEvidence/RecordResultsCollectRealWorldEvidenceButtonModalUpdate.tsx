"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  MyButton,
  MyButtonModal,
  MyFlexColumn,
  MyFlexRow,
  MyTextArea,
} from "aq-fe-framework/components";
import { IRecordResultsCollectRealWorldEvidenceInfoViewModel } from "./interfaces";
import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import CollectEvidenceButtonModal from "./CollectEvidenceButtonModal/CollectEvidenceButtonModal";

export default function RecordResultsCollectRealWorldEvidenceButtonModalUpdate({
  values,
}: {
  values?: IRecordResultsCollectRealWorldEvidenceInfoViewModel;
}) {
  const disc = useDisclosure();

  const form = useForm({
    initialValues: {
      ghiChu: values?.ghiChu || "",
    },
  });

  return (
    <MyButtonModal
      title="Chi tiết thu thập minh chứng"
      label="Cập nhật"
      variant="transparent"
      color="blue"
      modalSize={"90%"}
      disclosure={disc}
    >
      <MyFlexColumn>
        <MyFlexRow>
          <Text me="lg">Mã tiêu chí: {values?.maTieuChi}</Text>
          <Text>Mã minh chứng dự kiến: {values?.maMcDuKien}</Text>
        </MyFlexRow>
        <Text>Tên minh chứng dự kiến: {values?.tenMcDuKien}</Text>
        <CollectEvidenceButtonModal />
        <Text>Mã minh chứng: {values?.maMcThucTe}</Text>
        <Text>Tên minh chứng: {values?.tenMc}</Text>
        <Text>Số - Ngày ban hành: {values?.soNgayBanHanh}</Text>
        <Text>Đơn vị ban hành: {values?.donViBanHanh}</Text>

        <MyTextArea label="Ghi chú" {...form.getInputProps("ghiChu")} />

        <MyButton crudType="save" fullWidth>
          Lưu
        </MyButton>
      </MyFlexColumn>
    </MyButtonModal>
  );
}
