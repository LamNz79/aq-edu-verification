import { Accordion, Grid, Text } from "@mantine/core";
import { MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import {
  IForm04ActionPlanRowHistory,
  IForm04ActionPlanRowHistoryTable,
} from "./interface";

export default function Form04ActionPlanRow({
  data,
}: {
  data: IForm04ActionPlanRowHistory;
}) {
  const columns = useMemo<MRT_ColumnDef<IForm04ActionPlanRowHistoryTable>[]>(
    () => [
      { header: "Mục tiêu", accessorKey: "name", size: 120 },
      { header: "Nội dung", accessorKey: "description", size: 350 },
      { header: "Đơn vị; Người thực hiện", accessorKey: "evaluator" },
      { header: "Thời gian thực hiện hoặc hoàn thành", accessorKey: "date" },
      { header: "Ghi chú", accessorKey: "note", size: 120 },
    ],
    []
  );
  return (
    <Accordion.Item value={`${data?.id}`}>
      <Accordion.Control>
        <Grid>
          <Grid.Col span={3}>
            <Text size="sm" c="green" fw={600}>
              {data.name}
            </Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm">Ngày cập nhật: {data.ngayCapNhat}</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm">Người cập nhật: {data.nguoiCapNhat}</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text size="sm" span>
              Tự đánh giá:{" "}
              <Text span c={data.status === true ? "green" : "red"} fw={600}>
                {data.status ? "Đạt" : "Không đạt"}
              </Text>
            </Text>
          </Grid.Col>
        </Grid>
      </Accordion.Control>
      <Accordion.Panel>
        <MyDataTable
          data={mockData}
          columns={columns}
          initialState={{
            columnSizing: {
              "mrt-row-numbers": 60,
            },
          }}
          mantineTableContainerProps={{
            style: { height: "180px", overflowY: "auto" },
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

const mockData: IForm04ActionPlanRowHistoryTable[] = [
  {
    id: "1",
    code: "MT1",
    name: "Khắc phục điểm tồn tại",
    description:
      "Nhà trường tăng cường một số chậu cây cảnh tạo thêm không gian xanh. Bố trí thêm không gian sinh hoạt chung và không gian riêng yên tĩnh phục vụ cho nhu cầu nghiên cứu dựa trên khảo sát nhu cầu sử dụng của CB-GV-NV.",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Năm học 2022–2024",
    note: "",
  },
  {
    id: "2",
    code: "MT2",
    name: "Phát huy điểm mạnh",
    description:
      "Nhà trường tiến hành bố trí thêm các phòng làm việc để các GV có môi trường làm việc thuận lợi, nâng cao hiệu quả hoạt động tư vấn; hỗ trợ người học.",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Hằng năm",
    note: "",
  },
];
