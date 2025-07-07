import { Checkbox } from "@mantine/core";
import { MyButton, MyCenterFull, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

export interface IFormEvidence {
  id: number;
  code: string;
  name: string;
  status: string;
  used: boolean;
}

export default function FileEvidenceListTable({ data }: { data: IFormEvidence[] }) {
  const columns: MRT_ColumnDef<IFormEvidence>[] = [
    { header: "Mã minh chứng", accessorKey: "code", size: 140 },
    { header: "Tên minh chứng", accessorKey: "name", size: 300 },
    { header: "Trạng thái hiệu lực", accessorKey: "status", size: 210 },
    {
      header: "Đã sử dụng",
      accessorKey: "used",
      accessorFn: (row) => (
        <MyCenterFull>
          <Checkbox checked={row.used} readOnly />
        </MyCenterFull>
      ),
      size: 160,
    },
    {
      header: "Thao tác",
      accessorKey: "action",
      accessorFn: (row) => (
        <MyCenterFull>
          <MyButton variant="transparent" crudType="default">
            Xem chi tiết
          </MyButton>
        </MyCenterFull>
      ),
      size: 120,
    },
  ];
  return (
    <MyFieldset title="File minh chứng">
      <MyDataTable
        data={data}
        columns={columns}
        enableRowSelection={false}
        enableRowNumbers={false}
        initialState={{ columnPinning: { right: ["action"] } }}
        mantineTableContainerProps={{ style: { height: "180px", overflowY: "scroll" } }}
      />
    </MyFieldset>
  );
}
