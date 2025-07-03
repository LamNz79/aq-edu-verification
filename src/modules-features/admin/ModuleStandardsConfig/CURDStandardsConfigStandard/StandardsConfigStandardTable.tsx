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
import { IStandardsConfigStandardViewModel } from "../interface";
import StandardsConfigStandardCreate from "./StandardsConfigStandardCreate";
import StandardsConfigStandardUpdate from "./StandardsConfigStandardUpdate";
import StandardsConfigStandardDelete from "./StandardsConfigStandardDelete";

export default function StandardsConfigStandardTable() {
  const Query = useQuery({
    queryKey: ["StandardsConfigStandardTable"],
    queryFn: async () => {
      return mockData;
    },
    refetchOnWindowFocus: false,
  });

  const columns = useMemo<MRT_ColumnDef<IStandardsConfigStandardViewModel>[]>(
    () => [
      {
        header: "Mã tiêu chuẩn",
        accessorKey: "code",
      },
      {
        header: "Tên tiêu chuẩn",
        accessorKey: "name",
        size: 300,
      },
      {
        header: "Tên tiêu chuẩn Eg",
        accessorKey: "nameEg",
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
          <StandardsConfigStandardCreate />
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
          <StandardsConfigStandardUpdate data={row.original} />
          <StandardsConfigStandardDelete
            code={row.original.code}
            id={row.original.id}
          />
        </MyCenterFull>
      )}
    />
  );
}

const mockData: IStandardsConfigStandardViewModel[] = [
  {
    id: "1",
    code: "TC01",
    name: "Tầm nhìn, sứ mạng và văn hóa",
    nameEg: "",
    note: "",
  },
  {
    id: "2",
    code: "TC02",
    name: "Quản trị và quản lý",
    nameEg: "",
    note: "",
  },
  {
    id: "3",
    code: "TC03",
    name: "Đào tạo",
    nameEg: "",
    note: "",
  },
  {
    id: "4",
    code: "TC04",
    name: "Nghiên cứu khoa học",
    nameEg: "",
    note: "",
  },
  {
    id: "5",
    code: "TC05",
    name: "Đội ngũ giảng viên và nhân viên",
    nameEg: "",
    note: "",
  },
  {
    id: "6",
    code: "TC06",
    name: "Người học và hoạt động hỗ trợ người học",
    nameEg: "",
    note: "",
  },
  {
    id: "7",
    code: "TC07",
    name: "Cơ sở vật chất và trang thiết bị",
    nameEg: "",
    note: "",
  },
  {
    id: "8",
    code: "TC08",
    name: "Tài chính và quản lý tài chính",
    nameEg: "",
    note: "",
  },
  {
    id: "9",
    code: "TC09",
    name: "Hoạt động nghiên cứu khoa học và công nghệ",
    nameEg: "",
    note: "",
  },
  {
    id: "10",
    code: "TC10",
    name: "Hợp tác quốc tế",
    nameEg: "",
    note: "",
  },
];
