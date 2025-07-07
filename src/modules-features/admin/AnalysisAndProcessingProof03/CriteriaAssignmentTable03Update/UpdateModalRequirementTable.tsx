"use client";
import { Group, Text } from "@mantine/core";
import {
  MyButton,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
  MyFlexColumn,
  MyTextArea,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { I_Requirement } from "../interfaces";
import UpdateModalRequirementTableDeleteButton from "./UpdateModalForecastTableDeleteButton";

type Props = {
  data: I_Requirement[];
};

export default function UpdateModalRequirementTable({
  data,
}: Props) {
  const columns = useMemo<MRT_ColumnDef<I_Requirement>[]>(
    () => [
      { header: "Mã yêu cầu", accessorKey: "code", size: 180, accessorFn(originalRow) {
        return (
          <MyCenterFull>
            <Text>{originalRow.code}</Text>
            </MyCenterFull>
        );
      }, },
      { header: "Yêu cầu", accessorKey: "description", size: 280 },
      {
        header: "Các câu hỏi đặt ra (Mốc chuẩn tham chiếu)",
        accessorKey: "outputStandard",
        size: 380,
        accessorFn(originalRow) {
          return <MyTextArea
          pt={5}
          pb={5}
            minRows={5}
            maxRows={5}
            placeholder="Câu hỏi đặt ra"
            defaultValue={originalRow.outputStandard}
            onChange={(value) => {}}
          />
        },
      },
      {
        header: "Cần thu thập",
        accessorKey: "collectEvidence",
        size: 300,
        accessorFn(originalRow) {
          return (
            <MyTextArea
            pt={5}
          pb={5}
            minRows={5}
            maxRows={5}
              placeholder="Cần thu thập"
              defaultValue={originalRow.collectEvidence}
              onChange={(value) => {}}
            />
          );
        },
      },
      {
        header: "Nơi thu thập",
        size: 300,
        accessorKey: "collectPlace",
        Cell: ({ cell }) => (
          <MyTextArea
          pt={5}
          pb={5}
            minRows={5}
            maxRows={5}
            placeholder="Nơi thu thập"
            defaultValue={cell.getValue<string>()}
            onChange={(value) => {}}
          />
        ),
      },
      {
        header: "Phương pháp thu thập",
        accessorKey: "collectMethod",
        size: 300,
        Cell: ({ cell }) => (
          <MyTextArea
          pt={5}
          pb={5}
            minRows={5}
            maxRows={5}
            placeholder="Phương pháp thu thập"
            defaultValue={cell.getValue<string>()}
            onChange={(value) => {}}
          />
        ),
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh danh yêu cầu">
      <MyFlexColumn>
        <MyDataTable
          enableRowSelection
          enableRowNumbers={false}
          data={data || []}
          columns={columns}
          renderRowActions={({ row }) => (
            <MyCenterFull>
              <UpdateModalRequirementTableDeleteButton
                id={row.original.id}
                code={row.original.code}
              />
            </MyCenterFull>
          )}
          renderTopToolbarCustomActions={() => (
            <Group>
              <MyButton ml={10} color="green" crudType="save">
                Lưu
              </MyButton>
            </Group>
          )}
        />
      </MyFlexColumn>
    </MyFieldset>
  );
}
