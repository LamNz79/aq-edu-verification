import { Group, Radio, Stack } from "@mantine/core";
import { MyButton, MyFieldset, MySelect } from "aq-fe-framework/components";
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
    try {
      notifications.show({
        title: "Thành công",
        message: "Xuất báo cáo thành công",
        color: "green",
      });
    } catch (error) {
      notifications.show({
        title: "Lỗi",
        message: "Có lỗi khi xuất báo cáo",
        color: "red",
      });
    }
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
                label="Chọn loại báo cáo"
                value={reportType}
                onChange={handleReportTypeChange}
              >
                <Group mt="xs">
                  <Radio value="1" label="Tất cả" />
                  <Radio value="2" label="Tiêu chuẩn" />
                  <Radio value="3" label="Tiêu chí" />
                  <Radio value="4" label="Yêu cầu/ mốc chuẩn" />
                </Group>
              </Radio.Group>
            </Group>

            <MyButton crudType="export" onClick={handleExportReport}>
              Xuất báo cáo
            </MyButton>
          </Group>

          {reportType === "2" && <StandardReport />}

          {reportType === "3" && <ReportByCriteria />}

          {reportType === "4" && <ReportByType />}
        </Stack>
      </MyFieldset>
    </>
  );
}
