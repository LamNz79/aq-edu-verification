import { Flex, Grid, GridCol, Group, Text } from "@mantine/core";
import {
  IconCaretDownFilled,
  IconSquareCheckFilled,
  IconSquareRoundedMinusFilled,
} from "@tabler/icons-react";
import { MyButton, MyFieldset } from "aq-fe-framework/components";
import { useState } from "react";
import F_o4e65ehgty_TableProof from "./F_o4e65ehgty_TableProof";
import { I_o4e65ehgty_Update } from "./F_o4e65ehgty_Update";

export default function F_o4e65ehgty_ReportRow({
  isFirstRow = false,
  item,
}: {
  isFirstRow?: boolean;
  item: I_o4e65ehgty_Update;
}) {
  const open = useState<boolean>(isFirstRow);

  return (
    <Group flex={1} mb={10}>
      <Grid w={"100%"}>
        <Grid.Col span={{ base: 12, md: 12, lg: 5 }}>{item.name}</Grid.Col>
        <Grid.Col span={{ base: 12, md: 2, lg: 2 }}>
          <Flex>
            <Text w={"120px"}>{item?.nguoiCapNhat}</Text>
            <MyButton variant="transparent" crudType="default">
              {item.trangThai ? (
                <IconSquareCheckFilled color="green" />
              ) : (
                <IconSquareRoundedMinusFilled color="red" />
              )}
            </MyButton>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
          <Flex justify={"start"} align={"center"}>
            <Text>{`Cập nhật ngày 21/02/2025 15:25:30`}</Text>
            <MyButton
              variant="transparent"
              crudType="default"
              onClick={() => open[1](!open[0])}
            >
              <IconCaretDownFilled />
            </MyButton>
          </Flex>
        </Grid.Col>
      </Grid>
      {open[0] && (
        <Grid w={"100%"}>
          <GridCol mt={14} span={6}>
            <MyFieldset h={"380px"} style={{ overflowY: "auto" }}>
              <Text>
                4.2.a) Phương pháp dạy và học gắn lý thuyết với thực hành, thực
                tiễn nghề nghiệp.
              </Text>
              <Text>
                4.2.b) Phương pháp đánh giá kết quả học tập của sinh viên.
              </Text>
              <Text>4.2.c) Phương pháp quản lý và tổ chức đào tạo.</Text>
              <Text>
                4.2.d) Phương pháp nghiên cứu khoa học và chuyển giao công nghệ.
              </Text>
              <Text>4.2.e) Phương pháp đảm bảo chất lượng đào tạo.</Text>
              <Text>4.2.f) Phương pháp phát triển chương trình đào tạo.</Text>
              <Text>
                4.2.g) Phương pháp quản lý sinh viên và hỗ trợ học tập.
              </Text>
              <Text>4.2.h) Phương pháp phát triển đội ngũ giảng viên.</Text>
              <Text>
                4.2.i) Phương pháp quản lý cơ sở vật chất và trang thiết bị.
              </Text>
              <Text>4.2.j) Phương pháp hợp tác quốc tế trong đào tạo.</Text>
            </MyFieldset>
          </GridCol>
          <GridCol span={6}>
            <F_o4e65ehgty_TableProof />
          </GridCol>
        </Grid>
      )}
    </Group>
  );
}
