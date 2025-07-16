"use client";
import { Group, SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  MyButtonCreate,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "aq-fe-framework/components";
import { I_EvidenceForecast } from "../interfaces";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";

export default function UpdateModalRequirementUpdate({
  data,
}: {
  data: I_EvidenceForecast;
}) {
  const form = useForm<I_EvidenceForecast>({
    initialValues: {
      ...data,
    },
    validate: {},
  });

  return (
    <Group>
      <MyActionIconUpdate
        title="Chi tiết minh chứng dự kiến"
        form={form}
        onSubmit={() => {}}
        modalSize={"60%"}
      >
        <SimpleGrid pt={10} cols={2}>
          <Stack>
            <MyTextInput
              label="Mã Minh chứng"
              placeholder="Mã Minh chứng"
              {...form.getInputProps("evidenceCode")}
              readOnly
            />
          </Stack>
          <Stack>
            <MySelect
              data={["H6.06.01.07", "H1.01.01.01"]}
              label="Trực thuộc Minh chứng"
              placeholder="Trực thuộc Minh chứng"
              defaultValue={data.evidenceBelongToCode}
              {...form.getInputProps("evidenceBelongToCode")}
            />
          </Stack>
        </SimpleGrid>
        <MyTextInput
          label="Tên Minh chứng"
          placeholder="Tên Minh chứng"
          {...form.getInputProps("evidenceName")}
        />
        <MyTextInput
          label="Số - ngày ban hành - thời điểm khảo sát"
          {...form.getInputProps("issuedInfo")}
        />
        <SimpleGrid cols={2}>
          <Stack>
            <MyTextArea
              minRows={8}
              maxRows={8}
              label="Ghi chú"
              {...form.getInputProps("note")}
            />
          </Stack>
          <Stack>
            <MyTextArea
              minRows={8}
              maxRows={8}
              label="Nơi ban hành"
              {...form.getInputProps("issuingDept")}
            />
          </Stack>
        </SimpleGrid>
      </MyActionIconUpdate>
    </Group>
  );
}
