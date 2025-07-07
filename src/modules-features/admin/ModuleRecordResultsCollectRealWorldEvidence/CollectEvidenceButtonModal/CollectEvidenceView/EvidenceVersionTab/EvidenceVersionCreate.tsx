"use client";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  MyButton,
  MyButtonModal,
  MyCheckbox,
  MyDateInput,
  MyFileInput,
  MyTextInput,
} from "aq-fe-framework/components";
import { ITabEvidenceVersionInfoViewModel } from "../../../interfaces";
import { Grid, Group } from "@mantine/core";

export default function EvidenceVersionCreate() {
  const disc = useDisclosure();
  const form = useForm<ITabEvidenceVersionInfoViewModel>({
    initialValues: {},
  });

  return (
    <MyButtonModal
      title="Chi tiết phiên bản"
      modalSize={"lg"}
      disclosure={disc}
      crudType="create"
    >
      <Grid>
        <Grid.Col span={6}>
          <MyFileInput label="File đính kèm" {...form.getInputProps("fileDinhKem")}/>
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput label="Tên file" {...form.getInputProps("tenFile")} />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label="Số - Ngày ban hành"
            {...form.getInputProps("soNgayBanHanh")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label="Link liên kết"
            {...form.getInputProps("linkLienKet")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label="Đơn vị ban hành"
            {...form.getInputProps("donViBanHanhCap")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyTextInput
            label="Ghi chú phiên bản"
            {...form.getInputProps("ghiChuPhienBan")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label="Hiệu lực từ ngày"
            {...form.getInputProps("hieuLucTuNgay")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Group h="100%" align="center">
            <MyCheckbox
              label="Hiện hành?"
              {...form.getInputProps("hienHanh", { type: "checkbox" })}
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={6}>
          <MyDateInput
            label="Hiệu lực đến ngày"
            {...form.getInputProps("hieuLucDenNgay")}
          />
        </Grid.Col>
      </Grid>

      <MyButton crudType="save" type="submit" fullWidth />
    </MyButtonModal>
  );
}
