import { Group, Radio, Stack } from "@mantine/core";
import {
  MyFieldset,
  MySelect,
} from "aq-fe-framework/components";
import React, { useState } from "react";
import F_k25w91d9v2_PrintPDF from "./F_k25w91d9v2_PrintPDF";
import { F_k25w91d9v2_StandardReport } from "./F_k25w91d9v2_StandardReport";
import { F_k25w91d9v2_ReportByCriteria } from "./F_k25w91d9v2_ReportByCriteria";
import { F_k25w91d9v2_ReportByType } from "./F_k25w91d9v2_ReportByType";

export default function F_k25w91d9v2_Read() {
  const [reportType, setReportType] = useState<string>("1");

  const handleReportTypeChange = (value: string) => {
    setReportType(value);
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
            {reportType === "1" && <F_k25w91d9v2_PrintPDF />}
          </Group>

          {reportType === "2" && <F_k25w91d9v2_StandardReport />}

          {reportType === "3" && <F_k25w91d9v2_ReportByCriteria />}

          {reportType === "4" && <F_k25w91d9v2_ReportByType />}
        </Stack>
      </MyFieldset>
    </>
  );
}
