import { Accordion, Flex, Grid, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import {
  MyActionIconModal,
  MyButton,
  MyFieldset,
} from "aq-fe-framework/components";
import { useState } from "react";
import F_o4e65ehgty_History from "./F_o4e65ehgty_History";
import F_o4e65ehgty_ReportRow from "./F_o4e65ehgty_ReportRow";
import F_o4e65ehgty_Synthetic from "./F_o4e65ehgty_Synthetic";
import F_o4e65ehgty_TableProofSugestive from "./F_o4e65ehgty_TableProofSugestive";
export interface I_o4e65ehgty_Update {
  id: number;
  name?: string;
  content?: string;
  nguoiCapNhat?: string;
  ngayCapNhat?: string;
  trangThai?: boolean;
}

export default function F_o4e65ehgty_Update() {
  const disc = useDisclosure();
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <MyActionIconModal
      modalSize={"full"}
      variant="transparent"
      title="Chi tiết kỳ báo cáo"
      icon={
        <Group color="yollow">
          <IconEdit />
        </Group>
      }
      disclosure={disc}
    >
      <Grid>
        <Grid.Col span={{ base: 12, lg: openHistory ? 8 : 12 }}>
          <Flex gap={5}>
            <Text>Mốc chuẩn:</Text>
            <Text fw={"bold"}>Đảm bảo chất lượng nghiên cứu khoa học</Text>
          </Flex>
          <MyFieldset
            title="Danh sách nội dung báo cáo"
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            <Accordion defaultValue={`item-${mockData[0].id}`}>
              {mockData &&
                mockData.map((item, index) => {
                  return (
                    <F_o4e65ehgty_ReportRow
                      item={item}
                      key={item.name}
                    />
                  );
                })}
            </Accordion>
          </MyFieldset>
          <Group>
            <MyButton
              variant="transparent"
              crudType="default"
              onClick={() => setOpenHistory(!openHistory)}
            >
              Lịch sử cập nhật
            </MyButton>
          </Group>
          <Grid w={"100%"}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <F_o4e65ehgty_Synthetic />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <F_o4e65ehgty_TableProofSugestive />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        {openHistory && (
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <F_o4e65ehgty_History turnOff={() => setOpenHistory(false)} />
          </Grid.Col>
        )}
      </Grid>
    </MyActionIconModal>
  );
}

const mockData: I_o4e65ehgty_Update[] = [
  {
    id: 1,
    name: "Kế hoạch tổ chức thực hành, thực tập, tham quan thực tế",
    content:
      "4.2 a) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế, 3.2 b) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế",
    nguoiCapNhat: "Tô Ngọc Lan",
    ngayCapNhat: "2025-02-24",
    trangThai: true,
  },
  {
    id: 22,
    name: "Báo cáo kết quả nghiên cứu khoa học",
    content:
      "4.2 a) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế, 3.2 b) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế",
    nguoiCapNhat: "Nguyễn Văn A",
    ngayCapNhat: "2025-02-25",
    trangThai: true,
  },
  {
    id: 3,
    name: "Kế hoạch phát triển đội ngũ giảng viên",
    content:
      "4.2 a) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế, 3.2 b) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế",
    nguoiCapNhat: "Trần Thị B",
    ngayCapNhat: "2025-02-26",
    trangThai: false,
  },
  {
    id: 4,
    name: "Báo cáo đánh giá chất lượng giảng dạy",
    content:
      "4.2 a) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế, 3.2 b) Phương pháp tổ chức thực hành, thực tập, tham quan thực tế",
    nguoiCapNhat: "Lê Văn C",
    ngayCapNhat: "2025-02-27",
    trangThai: true,
  },
];
