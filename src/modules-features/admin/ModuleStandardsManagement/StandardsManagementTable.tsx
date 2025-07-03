"use client";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IStandardManagementViewModel } from "./interface";
import MyButtonViewPDF from "@/components/Buttons/ButtonViewPDF/MyButtonViewPDF";
import {
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { Center, Group } from "@mantine/core";
import { IconTableExport, IconTrash, IconUpload } from "@tabler/icons-react";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import { useQuery } from "@tanstack/react-query";
import StandardsManagementCreate from "./StandardsManagementCreate";
import StandardsManagementUpdate from "./StandardsManagementUpdate";
import StandardsManagementVersion from "./StandardsManagementVersion";
import StandardsManagementDelete from "./StandardsManagementDelete";

export default function StandardsManagementTable() {
  const Query = useQuery({
    queryKey: ["standards-management"],
    queryFn: () => {
      return mockData;
    },
  });

  const columns = useMemo<MRT_ColumnDef<IStandardManagementViewModel>[]>(
    () => [
      {
        header: "Mã Bộ Tiêu chuẩn",
        accessorKey: "code",
      },
      {
        header: "Tên Bộ Tiêu chuẩn",
        accessorKey: "name",
      },
      {
        header: "Mô tả Bộ Tiêu chuẩn",
        accessorKey: "description",
        size: 300,
      },
      {
        header: "Ngày ban hành Gốc",
        accessorKey: "date",
      },
      {
        header: "Tên Phiên bản (Gốc)",
        accessorKey: "nameVersion",
      },
      {
        header: "File đính kèm",
        accessorKey: "fileDetail.fileName",
        Cell: ({ row }) => (
          <MyCenterFull>
            <MyButtonViewPDF />
          </MyCenterFull>
        ),
      },
    ],
    []
  );

  return (
    <MyFieldset title={`Danh sách bộ tiêu chuẩn`}>
      <MyDataTable
        data={Query.data || []}
        enableRowSelection={true}
        enableRowNumbers={true}
        columns={columns}
        renderTopToolbarCustomActions={() => (
          <Group>
            <StandardsManagementCreate />
            <StandardsManagementVersion data={Query.data || []} />
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
          <Center style={{ gap: "10px" }}>
            <StandardsManagementUpdate data={row.original} />
            <StandardsManagementDelete data={row.original} />
          </Center>
        )}
      />
    </MyFieldset>
  );
}

const mockData: IStandardManagementViewModel[] = [
  {
    id: "1",
    code: "TT04_2025",
    date: "2025-01-04",
    name: "Thông tư 04/2025/TT-BGDĐT",
    description:
      "Quy định về loại kiểm định chất lượng chương trình đào tạo các trình độ của giáo dục đại học.",
    nameVersion: "Phiên bản gốc",
    status: true,
    descriptionVersion: "Phiên bản gốc của bộ tiêu chuẩn",
    filePath: "TT04_2025.pdf",
  },
  {
    id: "2",
    code: "TT12_2017",
    date: "2017-05-19",
    name: "hông tư 12/2017/TT-BGDĐT",
    description: "Quy định về loại đánh giá chất lượng cơ sở giáo dục đại học.",
    nameVersion: "Phiên bản gốc",
    status: true,
    descriptionVersion: "Phiên bản gốc của bộ tiêu chuẩn",
    filePath: "TT12_2017.pdf",
  },
  {
    id: "3",
    code: "AUNQA_2020",
    date: "2025-01-06",
    name: "AUN-QA Version 4.0",
    description:
      "Loại đánh giá chất lượng chương trình đào tạo khu vực Đông Nam Á, phiên bản mới nhất.",
    nameVersion: "Version 4.0",
    status: true,
    descriptionVersion: "Phiên bản gốc của bộ tiêu chuẩn",
    filePath: "AUNQA_2020.pdf",
  },
  {
    id: "4",
    code: "ABET_2023",
    date: "2023-01-01",
    name: "ABET Criteria for Accrediting Engineering Programs ",
    description:
      "Loại kiểm định các chương trình kỹ thuật của ABET, áp dụng cho các CTĐT đạt chuẩn quốc tế.",
    nameVersion: "2023-2024",
    status: true,
    descriptionVersion: "Phiên bản gốc của bộ tiêu chuẩn",
    filePath: "ABET_2023.pdf",
  },
];
