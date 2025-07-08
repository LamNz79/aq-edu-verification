"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyCenterFull,
  MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import {
  IManageTrainingProgramSelfAssessmentPlanInfoViewModel,
  IResourceMobilizationInfoViewModel,
} from "../interface";
import { mockDataResourceMobilization } from "../mockData";
import AssignmentTasksDelete from "../AssignmentTasksTab/AssignmentTasksDelete";
import ResourceMobilizationTabCreateUpdate from "./ResourceMobilizationTabCreateUpdate";

export default function ResourceMobilizationTabRead({
  values,
}: {
  values?: IManageTrainingProgramSelfAssessmentPlanInfoViewModel;
}) {
  const columns = useMemo<MRT_ColumnDef<IResourceMobilizationInfoViewModel>[]>(
    () => [
      {
        header: "Tiêu chuẩn",
        accessorKey: "tieuChuan",
      },
      {
        header: "Hoạt động",
        accessorKey: "hoatDong",
      },
      {
        header: "Các nguồn lực cần huy động",
        accessorKey: "cacNguonLucCanHuyDong",
      },
      {
        header: "Thời điểm cần huy động",
        accessorKey: "thoiDiemCanHuyDong",
      },
      {
        header: "Ghi chú",
        accessorKey: "ghiChu",
      },
    ],
    []
  );

  return (
    <MyDataTable
      columns={columns}
      data={values ? mockDataResourceMobilization : []}
      enableRowSelection
      renderTopToolbarCustomActions={() => (
        <MyCenterFull>
          <ResourceMobilizationTabCreateUpdate />
          <MyButton crudType="delete">Xóa</MyButton>
        </MyCenterFull>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <ResourceMobilizationTabCreateUpdate values={row.original} />
          <AssignmentTasksDelete id={row.original.tieuChuan ?? ""} />
        </MyCenterFull>
      )}
    />
  );
}
