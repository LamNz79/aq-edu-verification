import MyFileInput from "@/components/Inputs/FileInput/MyFileInput";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarWeek, IconSearch } from "@tabler/icons-react";
import {
  MyButtonCreate,
  MyDateInput,
  MyTextInput,
} from "aq-fe-framework/components";

interface F_79t4hwd85i_UploadEvidenceFile {
  maFile?: string;
  tenFile?: string;
  ngayHieuLuc?: Date;
  ngayHetHan?: Date;
  upLoad?: File;
  link?: string;
}

interface F_79t4hwd85i_UploadEvidenceFileProps {
  disclosure: ReturnType<typeof useDisclosure>;
}

export default function F_79t4hwd85i_UploadEvidenceFile({
  disclosure,
}: F_79t4hwd85i_UploadEvidenceFileProps) {
  const form = useForm<F_79t4hwd85i_UploadEvidenceFile>({
    initialValues: {
      maFile: "",
      tenFile: "",
      ngayHieuLuc: undefined,
      ngayHetHan: undefined,
      upLoad: undefined,
      link: "",
    },
    validate: {
      maFile: (value) => (value ? null : "Không được để trống"),
      tenFile: (value) => (value ? null : "Không được để trống"),
    },
  });

  return (
    <MyButtonCreate
      label={"Upload"}
      modalSize={"40%"}
      variant="transparent"
      title="Chi tiết minh chứng"
      onSubmit={() => {}}
      form={form}
      disclosure={disclosure}
      leftSection={<></>}
    >
      <MyTextInput label="Mã file" {...form.getInputProps("maFile")} />
      <MyTextInput label="Tên file" {...form.getInputProps("tenFile")} />
      <MyDateInput
        label="Ngày hiệu lực"
        {...form.getInputProps("ngayHieuLuc")}
        rightSection={<IconCalendarWeek size={16} />}
      />
      <MyDateInput
        label="Ngày hết hạn"
        {...form.getInputProps("ngayHetHan")}
        rightSection={<IconCalendarWeek size={16} />}
      />
      <MyFileInput
        label="Upload"
        {...form.getInputProps("upLoad")}
      />
      <MyTextInput label="Link" {...form.getInputProps("link")} />
    </MyButtonCreate>
  );
}
