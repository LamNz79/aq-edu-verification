import { Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAlertTriangle,
  IconBook,
  IconCertificate,
  IconInfoCircle,
  IconStar,
} from "@tabler/icons-react";
import { MyButtonModal } from "aq-fe-framework/components";
import ActionTabLayoutTab from "./ActionTab/ActionTabLayoutTab";
import AdvantageLayoutTab from "./AdvantageTab/AdvantageLayoutTab";
import DisadvantageLayoutTab from "./DisadvantageTab/DisadvantageLayoutTab";
import SelfAssessmentLayoutTab from "./SelfAssessmentTab/SelfAssessmentLayoutTab";
import StatusLayoutTab from "./StatusTab/StatusLayoutTab";

export default function ReportDetailLayoutButton() {
  const disclosure = useDisclosure();
  return (
    <MyButtonModal
      label="Xem chi tiết"
      crudType="default"
      variant="transparent"
      title="Chi tiết Phiếu tự đánh giá"
      modalSize="98vw"
      disclosure={disclosure}
    >
      <Tabs defaultValue="status" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab
            bg="rgba(131, 204, 235, 0.3)"
            color="rgba(131, 204, 235, 1)"
            value="status"
            leftSection={<IconInfoCircle />}
          >
            1. Mô tả hiện trạng
          </Tabs.Tab>

          <Tabs.Tab
            bg="rgba(247, 216, 54, 0.3)"
            color="rgba(247, 216, 54, 1)"
            value="advantages"
            leftSection={<IconStar />}
          >
            2. Điểm mạnh
          </Tabs.Tab>

          <Tabs.Tab
            bg="rgba(112, 219, 186, 0.3)"
            color="rgba(112, 219, 186, 1)"
            value="disadvantages"
            leftSection={<IconAlertTriangle  />}
          >
            3. Điểm tồn tại
          </Tabs.Tab>

          <Tabs.Tab
            bg="rgba(248, 177, 149, 0.3)"
            color="rgba(248, 177, 149, 1)"
            value="action"
            leftSection={<IconBook />}
          >
            4. Kế hoạch hành động
          </Tabs.Tab>

          <Tabs.Tab
            bg="rgba(255, 163, 200, 0.3)"
            color="rgba(255, 163, 200, 1)"
            value="selfassessment"
            leftSection={<IconCertificate />}
          >
            5. Tự đánh giá
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="status" pt="md">
          <StatusLayoutTab />
        </Tabs.Panel>
        <Tabs.Panel value="advantages" pt="md">
          <AdvantageLayoutTab />
        </Tabs.Panel>
        <Tabs.Panel value="disadvantages" pt="md">
          <DisadvantageLayoutTab />
        </Tabs.Panel>
        <Tabs.Panel value="action" pt="md">
          <ActionTabLayoutTab />
        </Tabs.Panel>
        <Tabs.Panel value="selfassessment" pt="md">
          <SelfAssessmentLayoutTab />
        </Tabs.Panel>
      </Tabs>
    </MyButtonModal>
  );
}
