import { Button, Flex } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { MyDataTable, MySelect } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { IForm04ActionPlanRowHistoryTable } from "./interface";

export default function Form04ActionPlanContent() {
  const [data, setData] = useState<IForm04ActionPlanRowHistoryTable[]>([
    ...mockData,
  ]);

  const addRowData = {
    id: -1,
    code: "",
    name: "",
    description: "",
    evaluator: "",
    date: "",
    isAddRow: true,
  };

  const handleChangeSelect = (value: string | null, rowIndex: number) => {
    const values = mockData.find((item) => item.code === value);
    if (values) {
      setData((prev) =>
        prev.map((item, index) => (index === rowIndex ? { ...values } : item))
      );
    }
  };

  const handleAdd = () => {
    setData((prev) => [...prev, mockData[0]]);
  };

  const handleDelete = (rowIndex: number) => {
    setData((prev) => prev.filter((_, index) => index !== rowIndex));
  };

  const tableData = [...data, addRowData];

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        header: "Mục tiêu",
        accessorKey: "name",
        size: 200,
        Cell: ({ row }) => {
          if (row.original.isAddRow) {
            return (
              <Button
                leftSection={<IconPlus size={16} />}
                variant="outline"
                size="sm"
                onClick={handleAdd}
                fullWidth
              >
                Thêm
              </Button>
            );
          }
          return (
            <MySelect
              value={row.original.code}
              onChange={(value) => handleChangeSelect(value, row.index)}
              data={mockData.map((item) => ({
                value: item.code,
                label: item.name,
              }))}
            />
          );
        },
      },
      { header: "Nội dung chi tiết", accessorKey: "description", size: 350 },
      { header: "Đơn vị; Người thực hiện", accessorKey: "evaluator" },
      { header: "Thời gian thực hiện hoặc hoàn thành", accessorKey: "date" },
      { header: "Ghi chú", accessorKey: "note", size: 120 },
    ],
    []
  );

  return (
    <Flex
      direction={"column"}
      style={{ width: "100%" }}
      title="Nội dung báo cáo hiện tại"
    >
      <MyDataTable
        data={tableData}
        columns={columns}
        initialState={{
          columnSizing: {
            "mrt-row-numbers": 60,
          },
        }}
        mantineTableContainerProps={{
          style: { height: "300px", overflowY: "auto" },
        }}
        renderRowActions={({ row }) => {
          if (row.original.isAddRow) return "";
          return (
            <Button
              color="red"
              variant="subtle"
              size="sm"
              onClick={() => handleDelete(row.index)}
            >
              <IconTrash />
            </Button>
          );
        }}
      />
    </Flex>
  );
}

const mockData: IForm04ActionPlanRowHistoryTable[] = [
  {
    id: 1,
    code: "MT1",
    name: "Khắc phục điểm tồn tại",
    description: "Tăng cường trồng cây cảnh tạo thêm không gian xanh",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Năm học 2022 - 2024",
  },
  {
    id: 2,
    code: "MT2",
    name: "Khắc phục điểm tồn tại",
    description:
      "Thiếu không gian sinh hoạt chung, bố trí thêm không gian sinh hoạt chung",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Năm học 2022 - 2024",
  },
  {
    id: 3,
    code: "MT3",
    name: "Khắc phục điểm tồn tại",
    description:
      "Thiếu không gian riêng yên tĩnh phục vụ nhu cầu nghiên cứu; bố trí thêm không gian riêng yên tĩnh phục vụ cho nhu cầu nghiên cứu dựa trên khảo sát nhu cầu sử dụng của CB-GV-NV",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Năm học 2022 - 2024",
  },
  {
    id: 4,
    code: "MT4",
    name: "Phát huy điểm mạnh",
    description:
      "Có nhu cầu/khả năng nâng cao môi trường làm việc cho giảng viên, bố trí thêm các phòng làm việc để các GV có môi trường làm việc thuận lợi",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Hằng năm",
  },
  {
    id: 5,
    code: "MT5",
    name: "Phát huy điểm mạnh",
    description:
      "Có khả năng/mong muốn nâng cao hiệu quả hoạt động tư vấn, hỗ trợ người học",
    evaluator: "Trường Đại học Đồng Nai",
    date: "Hằng năm",
  },
];
