"use client";

import { Stack, Tabs, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButtonCreate } from "aq-fe-framework/components";
import { IEvidenceData } from "./interfaces/EvidenceManagementViewModel";
import EvidenceVersionsTab from "./EvidenceVersionsTab/EvidenceVersionsTab";
import EvidenceUsageTab from "./EvidenceUsageTab/EvidenceUsageTab";

export default function EvidenceManagementCreate() {
  const form = useForm<IEvidenceData>({
    initialValues: {
      evidenceCode: "",
      evidenceName: "",
      parentEvidenceCode: "",
      issuanceNumberDate: "",
      issuingUnit: "",
      effectiveFrom: "",
      effectiveTo: "",
      attachedFile: "",
      link: "",
      note: "",
    },
    validate: {
      evidenceCode: (value) => (!value ? "Mã minh chứng là bắt buộc" : null),
    },
  });

  return (
    <MyButtonCreate form={form} onSubmit={() => {}} modalSize="80%" title="Chi tiết minh chứng">
      <Stack gap="md">
        <Tabs defaultValue="general" keepMounted={false}>
          <Tabs.List>
            <Tabs.Tab value="general">Thông tin chung</Tabs.Tab>
            <Tabs.Tab value="versions">Phiên bản minh chứng</Tabs.Tab>
            <Tabs.Tab value="usage">Nơi sử dụng</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="general" pt="md">
            <Stack gap="md">
              <TextInput
                label="Mã minh chứng"
                placeholder="Nhập mã minh chứng"
                {...form.getInputProps("evidenceCode")}
              />

              <TextInput
                label="Tên minh chứng"
                placeholder="Nhập tên minh chứng"
                {...form.getInputProps("evidenceName")}
              />

              <TextInput
                label="Trực thuộc minh chứng"
                placeholder="Nhập mã minh chứng cha"
                {...form.getInputProps("parentEvidenceCode")}
              />

              <Textarea
                label="Ghi chú"
                placeholder="Nhập ghi chú"
                rows={4}
                {...form.getInputProps("note")}
              />
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="versions" pt="md">
            <EvidenceVersionsTab />
          </Tabs.Panel>

          <Tabs.Panel value="usage" pt="md">
            <EvidenceUsageTab />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </MyButtonCreate>
  );
}
