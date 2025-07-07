"use client";

import { MyActionIconModal } from "@/components/ActionIcons/ActionIconModal/MyActionIconModal";
import { Grid, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAnalyze, IconEdit, IconFile } from "@tabler/icons-react";
import UpdateModalForecastTable from "./UpdateModalForecastTable";
import { I_EvidenceForecast, I_Requirement } from "../interfaces";
import { MySelect } from "aq-fe-framework/components";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import UpdateModalRequirementTable from "./UpdateModalRequirementTable";

type DetailProps = {
  mockRequirementData: I_Requirement[];
  mockEvidenceForecastData: I_EvidenceForecast[];
};

export enum EnumStatus {
  NotStarted = 0,
  InProgress = 1,
  DraftDone = 2,
}

export const getStatusOptions = () => [
  { value: EnumStatus.NotStarted.toString(), label: "Chưa bắt đầu" },
  { value: EnumStatus.InProgress.toString(), label: "Đang thực hiện" },
  {
    value: EnumStatus.DraftDone.toString(),
    label: "Đã soạn xong, chờ kiểm tra",
  },
];

export default function UpdateModal(data: DetailProps) {
  const disc = useDisclosure(false);

  return (
    <MyActionIconModal
      modalSize={"100%"}
      disclosure={disc}
      crudType="default"
      title="Chi tiết phân công tiêu chí"
      color="yellow"
      icon={<IconEdit />}
      onSubmit={() => {}}
    >
      <Grid ml={8} align="flex-end">
        <MySelect
          label="Trạng thái phân tích"
          data={getStatusOptions()}
          w={250}
          defaultValue={EnumStatus.DraftDone.toString()}
        />
        <MyButton ml={20} color="green" crudType="save" onClick={disc[1].close}>
          Lưu
        </MyButton>
      </Grid>
      <Tabs mb={200} pt={10} defaultValue="tab1" h="55vh">
        <Tabs.List>
          <Tabs.Tab
            bg="rgba(131, 204, 235, 0.3)"
            color="rgba(131, 204, 235, 1)"
            flex={1}
            leftSection={<IconAnalyze />}
            value="tab1"
          >
            Phân tích tiêu chí
          </Tabs.Tab>
          <Tabs.Tab
            bg="rgba(247, 216, 54, 0.3)"
            color="rgba(247, 216, 54, 1)"
            flex={1}
            leftSection={<IconFile />}
            value="tab2"
          >
            Dự kiện minh chứng
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel pt={20} value="tab1">
          <UpdateModalRequirementTable
            data={data.mockRequirementData}
          />
        </Tabs.Panel>
        <Tabs.Panel pt={20} value="tab2">
          <UpdateModalForecastTable
            data={data.mockEvidenceForecastData}
          />
        </Tabs.Panel>
      </Tabs>
    </MyActionIconModal>
  );
}
