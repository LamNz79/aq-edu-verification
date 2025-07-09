"use client";

import { Stack, Tabs, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { MyButton, MyActionIconModal } from "aq-fe-framework/components";
import { IEvidenceData } from "./interfaces/EvidenceManagementViewModel";
import EvidenceVersionsTab from "./EvidenceVersionsTab/EvidenceVersionsTab";
import EvidenceUsageTab from "./EvidenceUsageTab/EvidenceUsageTab";

export default function EvidenceManagementUpdate({ values }: { values: IEvidenceData }) {
  const [opened, { open, close }] = useDisclosure(false);

  // const query = useQuery({
  //   queryKey: [""],
  //   queryFn: () => { return mockData; },
  // });

  const form = useForm<IEvidenceData>({
    initialValues: {
      ...values,
    },
    validate: {
      evidenceCode: (value) => (!value ? "Mã minh chứng là bắt buộc" : null),
    },
  });

  const handleSubmit = async (values: IEvidenceData) => {
    console.log(values);
    close();
  };

  return (
    <MyActionIconModal
      crudType="update"
      disclosure={[opened, { open, close, toggle: () => open() }]}
      modalSize="80%"
      title="Chi tiết minh chứng"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
                  readOnly
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
              <EvidenceVersionsTab evidenceCode={values.evidenceCode} />
            </Tabs.Panel>

            <Tabs.Panel value="usage" pt="md">
              <EvidenceUsageTab evidenceCode={values.evidenceCode} />
            </Tabs.Panel>
          </Tabs>

          <MyButton type="submit" w="full" crudType="update">
            Lưu
          </MyButton>
        </Stack>
      </form>
    </MyActionIconModal>
  );
}
