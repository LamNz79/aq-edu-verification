"use client";

import { Button, Group } from "@mantine/core";
import {
  AQButtonCreateByImportFile,
  AQButtonExportData,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { I_EvidenceForecast } from "../interfaces";
import { useForm } from "@mantine/form";
import UpdateModalRequirementCreate from "./UpdateModalForecastCreate";
import UpdateModalRequirementUpdate from "./UpdateModalForecastUpdate";
import UpdateModalRequirementTableDeleteListButton from "./UpdateModalForecastTableDeleteListButton";
import UpdateModalForecastTableDeleteButton from "./UpdateModalForecastTableDeleteButton";
import { notifications } from "@mantine/notifications";
import { IconTableExport } from "@tabler/icons-react";

type Props = {
  data: I_EvidenceForecast[];
};

export default function UpdateModalForecastTable({ data }: Props) {
  const form_multiple = useForm({
    initialValues: {},
  });

  const columns = useMemo<MRT_ColumnDef<I_EvidenceForecast>[]>(
    () => [
      { header: "Mã Tiêu chuẩn", accessorKey: "criteriaGroupCode" },
      { header: "Mã Tiêu chí", accessorKey: "criteriaCode" },
      { header: "Mã Minh chứng", accessorKey: "evidenceCode" },
      { header: "Tên Minh chứng", accessorKey: "evidenceName", size: 300 },
      {
        header: "Trực thuộc minh chứng",
        accessorKey: "evidenceBelongToCode",
      },
      {
        header: "Số - ngày ban hành - thời điểm khảo sát",
        accessorKey: "issuedInfo",
        size: 240,
      },
      { header: "Nơi ban hành", accessorKey: "issuingDept" },
      { header: "Ghi chú", accessorKey: "note", size: 250 },
    ],
    []
  );

  return (
    <MyFieldset title="Danh danh yêu cầu">
      <MyFlexColumn>
        <MyDataTable
          enableRowSelection
          enableRowNumbers
          data={data || []}
          columns={columns}
          renderRowActions={({ row }) => (
            <MyCenterFull>
              <UpdateModalRequirementUpdate data={row.original as I_EvidenceForecast} />
              <UpdateModalForecastTableDeleteButton id={row.original.id} code={row.original.code} />
            </MyCenterFull>
          )}
          renderTopToolbarCustomActions={(table) => (
            <Group>
              <UpdateModalRequirementCreate />
              <AQButtonCreateByImportFile
                form={form_multiple}
                onSubmit={() => console.log(form_multiple.values)}
              />
              <Button
              leftSection={<IconTableExport />}
              color="teal"
              size="sm"
              radius="sm"
              onClick={() => {
                notifications.show({
                  title: "Thông báo",
                  message:
                    "Chức năng này đang được phát triển, vui lòng quay lại sau.",
                  color: "blue",
                  autoClose: 5000,
                });
              }}
            >
              Export
            </Button>
              <UpdateModalRequirementTableDeleteListButton values={table.table.getSelectedRowModel().flatRows.flatMap(item => item.original)} />
            </Group>
          )}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}
