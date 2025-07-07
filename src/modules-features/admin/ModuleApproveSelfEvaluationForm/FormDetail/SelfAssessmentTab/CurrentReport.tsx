import { Group, Radio } from "@mantine/core";
import { MyFieldset } from "aq-fe-framework/components";
import { useState } from "react";

export default function CurrentReport() {
  const [value, setValue] = useState("Đạt");
  return (
    <MyFieldset title="Nội dung báo cáo hiện tại">
      <Radio.Group
        name="selfAssessment1"
        label="Tự đánh giá"
        value={value}
        onChange={(value) => setValue(value)}
      >
        <Group gap="xl" mt={4}>
          <Radio value="Đạt" label="Đạt" />
          <Radio value="Không đạt" label="Không đạt" />
        </Group>
      </Radio.Group>
    </MyFieldset>
  );
}
