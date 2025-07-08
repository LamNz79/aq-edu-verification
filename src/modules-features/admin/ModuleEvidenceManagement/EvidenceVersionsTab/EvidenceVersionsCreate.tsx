"use client";

import { Stack, TextInput, Textarea, Checkbox, Grid, FileInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButton, MyButtonModal } from "aq-fe-framework/components";
import { useDisclosure } from "@mantine/hooks";
import { IEvidenceVersion } from "../interfaces/EvidenceManagementViewModel";

export default function EvidenceVersionsCreate() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<IEvidenceVersion>({
    initialValues: {
      fileId: "",
      fileName: "",
      attachedFile: "",
      link: "",
      issuanceNumberDate: "",
      issuingUnit: "",
      effectiveFrom: "",
      effectiveTo: "",
      versionNote: "",
      isCurrent: false,
      evidenceCode: "",
    },
    validate: {
      fileName: (value) => (!value ? "Tên file là bắt buộc" : null),
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    form.onSubmit((values) => {
      console.log(values);
      form.reset();
      close();
    })(event);
  };

  return (
    <>
      <MyButtonModal
        crudType="create"
        title="Thêm phiên bản minh chứng"
        disclosure={[opened, { open, close, toggle: () => {} }]}
        modalSize="xl"
      >
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <Grid>
              <Grid.Col span={6}>
                <TextInput
                  label="ID File"
                  placeholder="Để trống để tự động tạo"
                  {...form.getInputProps("fileId")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Tên file"
                  placeholder="Nhập tên file"
                  withAsterisk
                  {...form.getInputProps("fileName")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <FileInput
                  label="File đính kèm"
                  placeholder="Chọn file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Link liên kết"
                  placeholder="https://..."
                  {...form.getInputProps("link")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Số - Ngày ban hành"
                  placeholder="Số 123/QĐ-ĐT Ngày 01/01/2024"
                  {...form.getInputProps("issuanceNumberDate")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Đơn vị ban hành/ cấp"
                  placeholder="Nhập đơn vị ban hành"
                  {...form.getInputProps("issuingUnit")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Hiệu lực từ ngày"
                  placeholder="dd/mm/yyyy"
                  {...form.getInputProps("effectiveFrom")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Hiệu lực đến ngày"
                  placeholder="dd/mm/yyyy"
                  {...form.getInputProps("effectiveTo")}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Textarea
                  label="Ghi chú phiên bản"
                  placeholder="Nhập ghi chú"
                  rows={3}
                  {...form.getInputProps("versionNote")}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Checkbox
                  label="Phiên bản hiện hành"
                  {...form.getInputProps("isCurrent", { type: "checkbox" })}
                />
              </Grid.Col>
            </Grid>

            <MyButton type="submit" w="full" crudType="create" />
          </Stack>
        </form>
      </MyButtonModal>
    </>
  );
}
