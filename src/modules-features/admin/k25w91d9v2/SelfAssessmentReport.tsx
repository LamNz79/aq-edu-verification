import { Text, Group, Radio, Stack, Box } from "@mantine/core";
import {
  MyButton,
  MyButtonPrintPDF,
  MyFieldset,
  MySelect,
} from "aq-fe-framework/components";
import React, { useState } from "react";
import { StandardReport } from "./StandardReport";
import { ReportByCriteria } from "./ReportByCriteria";
import { ReportByType } from "./ReportByType";
import { notifications } from "@mantine/notifications";
import { ComboboxItem } from "@mantine/core";

export default function SelfAssessmentReport() {
  const [reportType, setReportType] = useState<string>("1");

  const handleReportTypeChange = (value: string) => {
    setReportType(value);
  };

  const handleExportReport = async () => {
    // try {
    //   notifications.show({
    //     title: "Thành công",
    //     message: "Xuất báo cáo thành công",
    //     color: "green",
    //   });
    // } catch (error) {
    //   notifications.show({
    //     title: "Lỗi",
    //     message: "Có lỗi khi xuất báo cáo",
    //     color: "red",
    //   });
    // }
    return (
      <MyButtonPrintPDF contentToPrint={<h1>hello</h1>}>Xuất</MyButtonPrintPDF>
    );
  };

  return (
    <>
      <MyFieldset title="Xuất báo cáo tự đánh giá">
        <Stack>
          <Group justify="space-between">
            <Group gap={"lg"}>
              <MySelect
                label="Chọn kỳ báo cáo"
                placeholder="Chọn kỳ báo cáo"
                defaultValue={"1"}
                data={[
                  { value: "1", label: "2025.01 - Kỳ 1 năm 2025" },
                  { value: "2", label: "2025.02 - Kỳ 2 năm 2025" },
                ]}
              />

              <Radio.Group
                label="Chọn kiểu xuất"
                value={reportType}
                onChange={handleReportTypeChange}
              >
                <Group mt="xs">
                  <Radio value="1" label="Toàn bộ" />
                  <Radio value="2" label="Tiêu chuẩn" />
                  <Radio value="3" label="Tiêu chí" />
                  <Radio value="4" label="Yêu cầu/ mốc chuẩn" />
                </Group>
              </Radio.Group>
            </Group>
            {/* 
            <MyButton crudType="export" onClick={handleExportReport}>
              Xuất báo cáo
            </MyButton> */}
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
          </Group>

          {reportType === "2" && <StandardReport />}

          {reportType === "3" && <ReportByCriteria />}

          {reportType === "4" && <ReportByType />}
        </Stack>
      </MyFieldset>
    </>
  );
}
