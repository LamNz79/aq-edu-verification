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
import { IStandardsConfigCriteriaViewModel } from "../interface";
import StandardsConfigCriteriaCreate from "./StandardsConfigCriteriaCreate";
import StandardsConfigCriteriaUpdate from "./StandardsConfigCriteriaUpdate";
import StandardsConfigCriteriaDelete from "./StandardsConfigCriteriaDelete";

export default function StandardsConfigCriteriaTable() {
  const Query = useQuery({
    queryKey: ["StandardsConfigCriteriaTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<IStandardsConfigCriteriaViewModel>[]>(
    () => [
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "standardCode",
      },
      {
        header: "Mã tiêu chí",
        accessorKey: "code",
      },
      {
        header: "Tên tiêu chí",
        accessorKey: "name",
        size: 400,
      },
      {
        header: "Minh chứng gợi ý",
        accessorKey: "suggested",
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
          <StandardsConfigCriteriaCreate />
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
          <StandardsConfigCriteriaUpdate data={row.original} />
          <StandardsConfigCriteriaDelete
            code={row.original.code}
            id={row.original.id}
          />
        </MyCenterFull>
      )}
    />
  );
}

const mockData: IStandardsConfigCriteriaViewModel[] = [
  {
    id: "1",
    standardCode: "TC01",
    code: "TC1.1",
    name: "Tâm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng. phù hợp với định hướng phát triển và được công bố công khai.",
    suggested: "Văn bản về sứ mạng, tầm nhìn, mục tiêu chiến lược của CSGDDH",
    note: "",
  },
  {
    id: "2",
    standardCode: "TC02",
    code: "TC1.2",
    name: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị niềm tin và hành vi của cán bộ giảng viên, nhân viên và người học.",
    suggested: "",
    note: "",
  },
  {
    id: "3",
    standardCode: "TC03",
    code: "TC1.3",
    name: "Cơ sở giáo dục có các chính sách và biện pháp cụ thể để thúc đẩy và duy trì văn hóa chất lượng trong toàn bộ hoạt động",
    suggested: "",
    note: "",
  },
  {
    id: "4",
    standardCode: "TC04",
    code: "TC1.4",
    name: "Cơ sở giáo dục thường xuyên đánh giá và cải tiến tầm nhìn. sứ mạng và văn hóa chất lượng để đáp ứng yêu cầu phát triển và hội nhập.",
    suggested: "",
    note: "",
  },
  {
    id: "5",
    standardCode: "TC05",
    code: "TC1.5",
    name: "Cơ sở giáo dục có cơ chế thu thập và phản hồi ý kiến từ các bên liên quan về tầm nhìn. sứ mạng và văn hóa chất lượng.",
  },
];
