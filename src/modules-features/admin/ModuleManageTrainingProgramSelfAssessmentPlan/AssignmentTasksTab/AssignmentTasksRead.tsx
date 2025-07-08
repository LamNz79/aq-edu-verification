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
  IAssignmentTasksInfoViewModel,
  IManageTrainingProgramSelfAssessmentPlanInfoViewModel,
} from "../interface";
import { mockDataAssignmentTasks } from "../mockData";
import AssignmentTasksDelete from "./AssignmentTasksDelete";
import AssignmentTasksCreateUpdate from "./AssignmentTasksCreateUpdate";

export default function AssignmentTasksRead({
  values,
}: {
  values?: IManageTrainingProgramSelfAssessmentPlanInfoViewModel;
}) {
  const columns = useMemo<MRT_ColumnDef<IAssignmentTasksInfoViewModel>[]>(
    () => [
      {
        header: "Tiêu chuẩn",
        accessorKey: "tieuChuan",
      },
      {
        header: "Nhóm công tác",
        accessorKey: "nhomCongTac",
      },
      {
        header: "Thời gian thu thập thông tin và minh chứng (Dự kiến)",
        accessorKey: "thoiGianThuThapThongTinVaMinhChung",
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
      data={values ? mockDataAssignmentTasks : []}
      enableRowSelection
      renderTopToolbarCustomActions={() => (
        <MyCenterFull>
          <AssignmentTasksCreateUpdate />
          <MyButton crudType="delete">Xóa</MyButton>
        </MyCenterFull>
      )}
      renderRowActions={({ row }) => (
        <MyCenterFull>
          <AssignmentTasksCreateUpdate values={row.original} />
          <AssignmentTasksDelete id={row.original.tieuChuan ?? ""} />
        </MyCenterFull>
      )}
    />
  );
}
