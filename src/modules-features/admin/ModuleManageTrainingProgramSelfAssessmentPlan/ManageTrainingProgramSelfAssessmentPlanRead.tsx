"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MyButton,
  MyButtonViewPDF,
  MyCenterFull,
  MyDataTable,
  MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { IManageTrainingProgramSelfAssessmentPlanInfoViewModel } from "./interface";
import { mockDataManageTrainingProgramSelfAssessmentPlan } from "./mockData";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";
import ManageTrainingProgramSelfAssessmentPlanDelete from "./ManageTrainingProgramSelfAssessmentPlanDelete";
import ManageTrainingProgramSelfAssessmentPlanCreateUpdate from "./ManageTrainingProgramSelfAssessmentPlanCreateUpdate";

export default function ManageTrainingProgramSelfAssessmentPlanRead() {
  const columns = useMemo<
    MRT_ColumnDef<IManageTrainingProgramSelfAssessmentPlanInfoViewModel>[]
  >(
    () => [
      {
        header: "Mã kế hoạch",
        accessorKey: "maKeHoach",
      },
      {
        header: "Tên kế hoạch",
        accessorKey: "tenKeHoach",
      },
      {
        header: "Chương trình Đào tạo áp dụng",
        accessorKey: "chuongTrinhDaoTaoApDung",
      },
      {
        header: "Khóa đào tạo áp dụng",
        accessorKey: "khoaDaoTaoApDung",
      },
      {
        header: "Bộ Tiêu chuẩn áp dụng",
        accessorKey: "boTieuChuanApDung",
      },
      {
        header: "Phiên bản Bộ Tiêu chuẩn",
        accessorKey: "phienBanBoTieuChuan",
      },
      {
        header: "Mục tiêu tự đánh giá",
        accessorKey: "mucTieuTuDanhGia",
      },
      {
        header: "Phạm vi tự đánh giá",
        accessorKey: "phamViTuDanhGia",
      },
      {
        header: "Ngày bắt đầu",
        accessorKey: "ngayBatDau",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
      {
        header: "Ngày kết thúc",
        accessorKey: "ngayKetThuc",
        Cell: ({ cell }) =>
          utils_date_dateToDDMMYYYString(new Date(cell.getValue<string>())),
      },
      {
        header: "Người ký",
        accessorKey: "nguoiKy",
      },
      {
        header: "File kế hoạch",
        accessorKey: "fileKeHoach",
        accessorFn: (row) => <MyButtonViewPDF />,
      },
      {
        header: "Quyết định Thành lập Hội đồng",
        accessorKey: "quyetDinhThanhLapHoiDong",
      },
    ],
    []
  );

  return (
    <MyFieldset title="Danh sách kế hoạch tự đánh giá">
      <MyDataTable
        columns={columns}
        data={mockDataManageTrainingProgramSelfAssessmentPlan}
        enableRowSelection
        renderTopToolbarCustomActions={() => (
          <MyCenterFull>
            <ManageTrainingProgramSelfAssessmentPlanCreateUpdate />
            <MyButton crudType="export">Export</MyButton>
            <MyButton crudType="delete">Xóa</MyButton>
          </MyCenterFull>
        )}
        renderRowActions={({ row }) => (
          <MyCenterFull>
            <ManageTrainingProgramSelfAssessmentPlanCreateUpdate
              values={row.original}
            />
            <ManageTrainingProgramSelfAssessmentPlanDelete
              id={row.original.maKeHoach ?? ""}
            />
          </MyCenterFull>
        )}
      />
    </MyFieldset>
  );
}
