import { MyButton } from "@/components/Buttons/Button/MyButton";
import { Checkbox } from "@mantine/core";
import { MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";

export interface IReportEvidence {
  id: number;
  code: string;
  name: string;
  status: string;
  used: boolean;
}

export default function FileEvidenceListTable({ data }: { data: IReportEvidence[] }) {
  const columns: MRT_ColumnDef<IReportEvidence>[] = [
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
    <MyDataTable
      data={data}
      columns={columns}
      enableRowSelection={false}
      enableRowNumbers={false}
      initialState={{ columnPinning: { right: ["action"] } }}
      mantineTableContainerProps={{ style: { height: "200px", overflowY: "scroll" } }}
    />
  );
}
