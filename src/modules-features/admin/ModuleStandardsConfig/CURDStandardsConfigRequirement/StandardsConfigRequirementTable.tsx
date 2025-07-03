import { Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyCenterFull,
  MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IStandardsConfigRequirementViewModel } from "../interface";
import StandardsConfigRequirementCreate from "./StandardsConfigRequirementCreate";
import StandardsConfigRequirementUpdate from "./StandardsConfigRequirementUpdate";
import StandardsConfigRequirementDelete from "./StandardsConfigRequirementDelete";

export default function StandardsConfigRequirementTable() {
  const Query = useQuery({
    queryKey: ["StandardsConfigRequirementTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<IStandardsConfigRequirementViewModel>[]>(
    () => [
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "criteriaCode",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "criteriaName",
        size: 400,
      },
      {
        header: "Mã yêu cầu/mốc chuẩn",
        accessorKey: "code",
      },
      {
        header: "Tên yêu cầu/mốc chuẩn",
        accessorKey: "name",
        size: 400,
      },
      {
        header: "Mô tả",
        accessorKey: "description",
        size: 300,
      },
      {
        header: "Ghi chú",
        accessorKey: "note",
      },
    ],
    []
  );

  return (
    <MyDataTable
      columns={columns}
      enableRowSelection={true}
      enableRowNumbers={true}
      data={Query.data || []}
      renderTopToolbarCustomActions={() => (
        <Group>
          <StandardsConfigRequirementCreate />
          <MyButton color="green" leftSection={<IconUpload />}>
            Import
          </MyButton>
          <MyButton color="teal" leftSection={<IconTableExport />}>
            Export
          </MyButton>
          <MyButton color="red" leftSection={<IconTrash />}>
            Xóa
          </MyButton>
        </Group>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <StandardsConfigRequirementUpdate data={row.original} />
          <StandardsConfigRequirementDelete
            code={row.original.code}
            id={row.original.id}
          />
        </MyCenterFull>
      )}
    />
  );
}

const mockData: IStandardsConfigRequirementViewModel[] = [
  {
    id: "1",
    standardCode: "TC01",
    criteriaCode: "TC1.1",
    criteriaName: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    code: "M001",
    name: "Chuẩn đầu ra của CTDT được xây dựng; ra soát và điều chỉnh theo quy trình định trước, trong đó có sự tham gia của các BLO",
    description: "Kế hoạch học tập toàn khóa",
  },
  { 
    id: "2",
    standardCode: "TC01",
    criteriaCode: "TC1.2",
    criteriaName: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    code: "M001",
    name: "CDR của CTDT được phát triển rõ ràng; phù hợp với mục tiêu của CTDT, sứ mạng; tầm nhìn và chiến lược của CSDT",
    description: "Kế hoạch học tập toàn khóa",
  },
  { 
    id: "3",
    standardCode: "TC01",
    criteriaCode: "TC1.3",
    criteriaName: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng, tầm nhìn và mục tiêu chiến lược của từng sơ sở đào tạo và được phổ biến đến các bên liên quan",
    code: "M001",
    name: "DT của CTDT được phổ biến đến các BLQ, giảng viên và NH hiểu rõ về CDT của CDT",
    description: "Kế hoạch học tập toàn khóa",
  },
]; 
