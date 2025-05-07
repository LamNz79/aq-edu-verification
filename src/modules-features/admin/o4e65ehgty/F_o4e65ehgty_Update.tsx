import { Accordion, Center, Flex, Grid, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  MyButton,
  MyButtonCreate,
  MyFieldset,
} from "aq-fe-framework/components";
import { useState } from "react";
import F_o4e65ehgty_History from "./F_o4e65ehgty_History";
import F_o4e65ehgty_ReportRow from "./F_o4e65ehgty_ReportRow";
import F_o4e65ehgty_Synthetic from "./F_o4e65ehgty_Synthetic";
import F_o4e65ehgty_TableProofSugestive from "./F_o4e65ehgty_TableProofSugestive";
import { useForm } from "@mantine/form";
export interface I_o4e65ehgty_Update {
  id: number;
  name?: string;
  content?: string;
  nguoiCapNhat?: string;
  ngayCapNhat?: Date;
  trangThai?: boolean;
}

export default function F_o4e65ehgty_Update() {
  const form = useForm();
  const disc = useDisclosure();
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <MyButtonCreate
      modalSize={"100%"}
      title="Chi tiết kỳ báo cáo"
      variant="transparent"
      label="Cập nhật"
      disclosure={disc}
      onSubmit={() => {}}
      form={form}
      leftSection={<></>}
    >
      <Grid>
        <Grid.Col span={{ base: 12, lg: openHistory ? 8 : 12 }}>
          <Flex gap={5}>
            <Text>Mốc chuẩn:</Text>
            <Text fw={"bold"}>
              CDT của CTDT được phổ biến đến các BLQ; giảng viên và NH hiểu rõ
              về CDT của CTDT
            </Text>
          </Flex>
          <MyFieldset
            title="Danh sách nội dung báo cáo"
            style={{ height: "400px", maxHeight: "400px", overflowY: "auto" }}
          >
            <Accordion defaultValue={`item-${mockData[0].id}`}>
              {mockData &&
                mockData.map((item, index) => {
                  return <F_o4e65ehgty_ReportRow item={item} key={item.name} />;
                })}
            </Accordion>
          </MyFieldset>
          <Center>
            <MyButton
              variant="transparent"
              crudType="default"
              onClick={() => setOpenHistory(!openHistory)}
            >
              Lịch sử cập nhật
            </MyButton>
          </Center>
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
    </MyButtonCreate>
  );
}

const mockData: I_o4e65ehgty_Update[] = [
  {
    id: 1,
    name: "Kế hoạch tổ chức thực hành, thực tập, tham quan thực tế",
    content: `   4.2 a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp,   
    4.2 b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá tình giảng dạy
    4.2 c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập doanh nghiệp/cơ sở liên quan
    4.2 d) Khuyến khích mời các chuyên gia, nhà quản lý thực tiễn tham gia giảng dạy, báo cáo chuyên đề`,
    nguoiCapNhat: "Tô Ngọc Lan",
    ngayCapNhat: new Date("2025-02-24"),
    trangThai: true,
  },
  {
    id: 22,
    name: "Đề cương chi tiết tất cả học phần trong CTDT được xây dựng đầy đủ theo quy định thông tin chung",
    content: `    4.2 a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp, 
    4.2 b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá tình giảng dạy
    4.2 c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập doanh nghiệp/cơ sở liên quan
    4.2 d) Khuyến khích mời các chuyên gia, nhà quản lý thực tiễn tham gia giảng dạy, báo cáo chuyên đề`,
    nguoiCapNhat: "Tô Ngọc Linh",
    ngayCapNhat: new Date("2025-02-25"),
    trangThai: true,
  },
  {
    id: 3,
    name: "Đề cương chi tiết tất cả học phần trong CTDT được xây dựng đầy đủ theo quy định mục tiêu học phần",
    content: `    4.2 a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp, 
    4.2 b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá tình giảng dạy
    4.2 c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập doanh nghiệp/cơ sở liên quan
    4.2 d) Khuyến khích mời các chuyên gia, nhà quản lý thực tiễn tham gia giảng dạy, báo cáo chuyên đề`,
    nguoiCapNhat: "Tô Ngọc Ly",
    ngayCapNhat: new Date("2025-02-26"),
    trangThai: true,
  },
  {
    id: 4,
    name: "Đề cương chi tiết tất cả học phần trong CTDT được xây dựng đầy đủ theo quy định CĐR học phần",
    content: `    4.2 a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp, 
    4.2 b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá tình giảng dạy
    4.2 c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập doanh nghiệp/cơ sở liên quan
    4.2 d) Khuyến khích mời các chuyên gia, nhà quản lý thực tiễn tham gia giảng dạy, báo cáo chuyên đề`,
    nguoiCapNhat: "Tô Ngọc Loan",
    ngayCapNhat: new Date("2025-02-27"),
    trangThai: true,
  },
  {
    id: 5,
    name: "Đề cương chi tiết tất cả học phần trong CTDT được xây dựng đầy đủ theo quy định nội dung chi tiết",
    content: `    4.2 a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực tiễn nghề nghiệp, 
    4.2 b) Sử dụng các tình huống, ví dụ thực tế, bài tập tình huống trong quá tình giảng dạy,
    4.2 c) Tổ chức các hoạt động tham quan thực tế, thực hành, thực tập doanh nghiệp/cơ sở liên quan,
    4.2 d) Khuyến khích mời các chuyên gia, nhà quản lý thực tiễn tham gia giảng dạy, báo cáo chuyên đề`,
    nguoiCapNhat: "Tô Ngọc Châu",
    ngayCapNhat: new Date("2025-02-27"),
    trangThai: false,
  },
];
