"use client";

import {
    MyButton,
    MyButtonModal,
    MyCenterFull,
    MyDataTable,
    MyDateInput,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconPlus } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { MySelect } from "aq-fe-framework/core";
import ImplementationRoadmapDeleteListButton from "./ImplementationRoadmapDeleteListButton";
import ImplementationRoadmapDeleteButton from "./ImplementationRoadmapDeleteButton";
import ImplementationRoadmapUpdateButton from "./ImplementationRoadmapUpdateButton";
import ImplementationRoadmapCreateButton from "./ImplementationRoadmapCreateButton";

export interface AccreditationRoadmap {
    id: number;
    index?: number;             // Thứ tự   
    cycleCode: string;         // Mã Chu kỳ Kiểm định
    roadmapCode: string;       // Mã Lộ trình 
    roadmapName: string;       // Tên Lộ trình
    startDate?: string;         // Thời gian Bắt đầu (Dự kiến)
    endDate?: string;           // Thời gian Kết thúc (Dự kiến)
    note: string;              // Ghi chú
}


export default function ImplementationRoadmapUpdateButtonModal() {
    const dics = useDisclosure();

    const columns = useMemo<MRT_ColumnDef<AccreditationRoadmap>[]>(() => [
        { accessorKey: "index", header: "Thứ tự" },
        { accessorKey: "cycleCode", header: "Mã Chu kỳ Kiểm định" },
        { accessorKey: "roadmapCode", header: "Mã Lộ trình" },
        { accessorKey: "roadmapName", header: "Tên Lộ trình" },
        { accessorKey: "startDate", header: "Thời gian Bắt đầu (Dự kiến)" },
        { accessorKey: "endDate", header: "Thời gian Kết thúc (Dự kiến)" },
        { accessorKey: "note", header: "Ghi chú" },
    ], []);

    return (
        <MyButtonModal
            disclosure={dics}
            title="Danh sách lộ trình kiểm định"
            modalSize="100%"
            label="Cập nhật"
            leftSection={<IconPencil />}
            variant="outline"
        >
            <MyDataTable
                enableRowSelection
                enableRowNumbers={false}
                columns={columns}
                data={accreditationRoadmaps || []}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <ImplementationRoadmapCreateButton />
                            <MyButton crudType="import" />
                            <MyButton crudType="export" />
                            <ImplementationRoadmapDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)} />
                        </>
                    );
                }}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <ImplementationRoadmapUpdateButton values={row.original} />
                        <ImplementationRoadmapDeleteButton id={row.original.id || 0} code={row.original.roadmapCode} />
                    </MyCenterFull>
                )}
            />
        </MyButtonModal>
    );
}

export const accreditationRoadmaps: AccreditationRoadmap[] = [
    {
        index: 1,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "01-TDG",
        roadmapName: "Tự đánh giá (Viết báo cáo)",
        startDate: "2025-07-01",
        endDate: "2026-03-31",
        note: "Chuẩn bị báo cáo tự đánh giá",
        id: 1
    },
    {
        index: 2,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "02-DGNG",
        roadmapName: "Đánh giá ngoài",
        startDate: "2026-04-01",
        endDate: "2026-06-30",
        note: "Đón đoàn đánh giá ngoài",
        id: 2
    },
    {
        index: 3,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "03-CTCL",
        roadmapName: "Cải tiến chất lượng (Giai đoạn 1)",
        startDate: "2026-07-01",
        endDate: "2028-12-31",
        note: "Thực hiện các khuyến nghị",
        id: 3
    },
    {
        index: 4,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "04-BCGK",
        roadmapName: "Báo cáo giữa chu kỳ (Biểu 15)",
        startDate: "2028-01-01",
        endDate: "2028-06-30",
        note: "Báo cáo tiến độ cải tiến",
        id: 4
    },
    {
        index: 5,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "05-CTCL2",
        roadmapName: "Cải tiến chất lượng (Giai đoạn 2)",
        startDate: "2029-01-01",
        endDate: "2030-06-30",
        note: "Tiếp tục cải tiến",
        id: 5
    },
];
