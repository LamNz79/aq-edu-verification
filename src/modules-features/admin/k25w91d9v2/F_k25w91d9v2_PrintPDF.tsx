import { Text, Stack, Box } from "@mantine/core";
import {
  MyButtonPrintPDF,
} from "aq-fe-framework/components";
import React, { useState } from "react";

export default function F_k25w91d9v2_PrintPDF() {
  return (
    <>
      <MyButtonPrintPDF

        contentToPrint={
          <Stack gap="xl">
            {" "}
            <Box>
              <Text size="xl" ta="center" mt={"xl"}>
                BỘ GIÁO DỤC VÀ ĐÀO TẠO
              </Text>
              <Text size="xl" ta="center" td="underline">
                TRƯỜNG ĐẠI HỌC ABC
              </Text>
              <Text size="xl" ta="center">
                BÁO CÁO TỰ ĐÁNH GIÁ
              </Text>
            </Box>
            <Text ml="xl" size="xl" fw="bold">
              Bộ tiêu chuẩn: Thông tư 04/BGDDT.
            </Text>
            <Text ml="xl" size="xl" fw="bold">
              Tiêu chuẩn 10: Quản lí chất lượng chương trình đào tạo.
            </Text>
            <Text ml="xl" size="xl" fw="bold">
              Tiêu chí 10.1: Cơ chế quản lý chất lượng CTĐT được thiết lập
              và vận hành hiệu quả.
            </Text>
            <Text ml="xl" size="xl">
              10.1a) Có cơ cấu tổ chức (Hội đồng khoa học và đào tạo, đơn
              vị/cá nhân phụ trách đảm bảo chất lượng cấp khoa/CTĐT) và
              phân công trách nhiệm rõ ràng trong việc quản lí chất lượng
              CTĐT.
            </Text>
            <Text ml="xl" size="xl">
              ....
            </Text>
            <Box ta="right">
              <Box
                style={{ display: "inline-block", textAlign: "center" }}
              >
                <Text size="xl" mr="xl">
                  TP.HCM, ngày 22 tháng 04 năm 2025
                </Text>
                <Text size="xl" ta="center">
                  Người lập biểu
                </Text>
              </Box>
            </Box>
          </Stack>
        }
      >
        Xuất báo cáo
      </MyButtonPrintPDF>
    </>
  );
}
