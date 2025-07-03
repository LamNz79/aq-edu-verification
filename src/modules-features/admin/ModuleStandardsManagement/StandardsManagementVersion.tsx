import { MyButton } from "@/components/Buttons/Button/MyButton";
import { Center, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { MyCheckbox, MyDataTable } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IStandardManagementViewModel } from "./interface";
import StandardsManagementDelete from "./StandardsManagementDelete";
import StandardsManagementVersionCreate from "./StandardsManagementVersionCreate";
import StandardsManagementVersionUpdate from "./StandardsManagementVersionUpdate";

export default function StandardsManagementVersion({
  data,
}: {
  data: IStandardManagementViewModel[];
}) {
  const [opened, { open, close }] = useDisclosure(false);

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
        header: "Trạng thái hiệu lực",
        accessorKey: "status",
        Cell: ({ row }) => (
          <MyCheckbox checked={row.original.status} onChange={() => {}} />
        ),
      },
    ],
    []
  );

  return (
    <>
      <MyButton color="green" leftSection={<IconPlus />} onClick={open}>
        Thêm phiên bản
      </MyButton>
      <Modal
        size="80%"
        opened={opened}
        title="Danh sách phiên bản bộ tiêu chuẩn"
        onClose={close}
      >
        <MyDataTable
          enableRowSelection={true}
          enableRowNumbers={true}
          renderTopToolbarCustomActions={() => (
            <StandardsManagementVersionCreate />
          )}
          columns={columns}
          data={data || []}
          renderRowActions={({ row }) => (
            <Center style={{ gap: "10px" }}>
              <StandardsManagementVersionUpdate data={row.original} />
              <StandardsManagementDelete data={row.original} />
            </Center>
          )}
        />
      </Modal>
    </>
  );
}
