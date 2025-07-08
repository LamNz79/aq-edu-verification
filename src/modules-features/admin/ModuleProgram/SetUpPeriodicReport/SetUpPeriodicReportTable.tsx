"use client";
import {
    MyButton,
    MyButtonViewPDF,
    MyCenterFull,
    MyDataTable,
    MyFieldset,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import SetUpPeriodicReportDeleteButton from "./SetUpPeriodicReportDeleteButton";
import SetUpPeriodicReportUpdateButton from "./SetUpPeriodicReportUpdateButton";
import SetUpPeriodicReportCreateButton from "./SetUpPeriodicReportCreateButton";
import SetUpPeriodicReportDeleteListButton from "./SetUpPeriodicReportDeleteListButton";
import ImplementationRoadmapUpdateButtonModal from "./ImplementationRoadmapUpdate/ImplementationRoadmapUpdateButtonModal";

export interface AccreditationCycle {
    id: number;
    programCode: string;     // Mã Chương trình Đào tạo
    programName: string;     // Tên Chương trình Đào tạo
    cycleCode: string;       // Mã Chu kỳ Kiểm định
    cycleName: string;       // Tên Chu kỳ Kiểm định
    startDate?: string;       // Ngày Bắt đầu Chu kỳ
    endDate?: string;         // Ngày Kết thúc Chu kỳ
    status: string;          // Trạng thái Chu kỳ
    note?: string
}


export default function SetUpPeriodicReportTable() {

    const columns = useMemo<MRT_ColumnDef<AccreditationCycle>[]>(
        () => [
            { accessorKey: "programCode", header: "Mã Chương trình Đào tạo" },
            { accessorKey: "programName", header: "Tên Chương trình Đào tạo" },
            { accessorKey: "cycleCode", header: "Mã Chu kỳ Kiểm định" },
            { accessorKey: "cycleName", header: "Tên Chu kỳ Kiểm định" },
            { accessorKey: "startDate", header: "Ngày Bắt đầu Chu kỳ" },
            { accessorKey: "endDate", header: "Ngày Kết thúc Chu kỳ" },
            { accessorKey: "status", header: "Trạng thái Chu kỳ" },
            {
                header: "Lộ trình thực hiện",
                accessorFn: () => <ImplementationRoadmapUpdateButtonModal/>
            },
        ],
        []
    );

    return (
        <MyFieldset title="Danh sách chu kỳ kiểm định">
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={accreditationCycles || []}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <SetUpPeriodicReportCreateButton />
                            <MyButton crudType="import" />
                            <MyButton crudType="export" />
                            <SetUpPeriodicReportDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}/>
                        </>
                    );
                }}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <SetUpPeriodicReportUpdateButton values={row.original} />
                        <SetUpPeriodicReportDeleteButton id={row.original.id || 0} code={row.original.cycleCode} />
                    </MyCenterFull>
                )}
            />
        </MyFieldset>
    );
}


export const accreditationCycles: AccreditationCycle[] = [
    {
        programCode: "CNTT",
        programName: "Công nghệ Thông tin",
        cycleCode: "CNTT_K20_Đợt1",
        cycleName: "Kiểm định CNTT Khóa 20 (2025-2030)",
        startDate: "2025-07-01",
        endDate: "2030-06-30",
        status: "Đang thực hiện",
        id: 1
    },
    {
        programCode: "QTKD",
        programName: "Quản trị Kinh doanh",
        cycleCode: "QTKD_K21_Đợt1",
        cycleName: "Kiểm định QTKD Khóa 21 (2026-2031)",
        startDate: "2026-07-01",
        endDate: "2031-06-30",
        status: "Chưa bắt đầu",
        id: 2
    }
];

