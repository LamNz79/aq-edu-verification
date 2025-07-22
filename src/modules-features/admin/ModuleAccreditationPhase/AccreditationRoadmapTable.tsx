import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { MyFieldset, MyDataTable, AQButtonCreateByImportFile, AQButtonExportData, MyCenterFull } from 'aq-fe-framework/components';
import { MyButtonModal } from 'aq-fe-framework/core'
import { MRT_ColumnDef } from 'mantine-react-table';
import React, { useMemo } from 'react'
import AccreditationRoadmapCreateOrUpdate from './AccreditationRoadmapCreateOrUpdate';
import AccreditationRoadmapDelete from './AccreditationRoadmapDelete';
import AccreditationRoadmapDeleteList from './AccreditationRoadmapDeleteList';

export default function AccreditationRoadmapTable() {
    const disclosure = useDisclosure();
    const form = useForm<any>({
        initialValues: {},
    });

    const query = useQuery<IRoadmapDetail[]>({
        queryKey: ["IRoadmapQuery"],
        queryFn: async () => {
            return mockData ?? [];
        },
    });

    const columns = useMemo<MRT_ColumnDef<IRoadmapDetail>[]>(
        () => [
            { header: "Mã giai đoạn Kiểm định", accessorKey: "cycleCode" },
            { header: "Mã Lộ trình", accessorKey: "roadmapCode" },
            { header: "Tên Lộ trình", accessorKey: "roadmapName" },
            { header: "Thời gian Bắt đầu", accessorKey: "startDate" },
            { header: "Thời gian Kết thúc", accessorKey: "endDate" },
            { header: "Ghi chú", accessorKey: "note" }
        ], []);


    const exportConfig = {
        fields: [
            { fieldName: "cycleCode", header: "Mã giai đoạn Kiểm định" },
            { fieldName: "roadmapCode", header: "Mã Lộ trình" },
            { fieldName: "roadmapName", header: "Tên Lộ trình" },
            { fieldName: "startDate", header: "Thời gian Bắt đầu" },
            { fieldName: "endDate", header: "Thời gian Kết thúc" },
            { fieldName: "note", header: "Ghi chú" }
        ]
    };


    return (
        <MyButtonModal 
        disclosure={disclosure}
        
        modalProps={{
            size:"100%",
        }}
        buttonProps={{
            children: "Cập nhật",
            color: "orange",
        }}
        >
            <MyFieldset title={"Danh sách lộ trình kiểm định"}>
                <MyDataTable
                    isError={query.isError}
                    isLoading={query.isLoading}
                    columns={columns}
                    data={query.data || []}
                    enableRowSelection
                    enableColumnFilters
                    enableRowNumbers
                    renderTopToolbarCustomActions={({ table }) => (
                        <>
                            <AccreditationRoadmapCreateOrUpdate />
                            <AQButtonCreateByImportFile onSubmit={() => { }} form={form} />
                            <AQButtonExportData
                                isAllData={false}
                                objectName={"DanhSachLoTrinhKiemDinh"}
                                data={query.data || []}
                                exportConfig={exportConfig}
                            />
                            <AccreditationRoadmapDeleteList
                                values={table
                                    .getSelectedRowModel()
                                    .flatRows.flatMap((item) => item.original)}
                            />
                        </>
                    )}
                    renderRowActions={({ row }) => (
                        <MyCenterFull>
                            <AccreditationRoadmapCreateOrUpdate data={row.original} />
                            <AccreditationRoadmapDelete
                                id={row.original.id}
                                label={row.original.cycleCode}
                            />
                        </MyCenterFull>
                    )}
                />
            </MyFieldset>
        </MyButtonModal>
    )
}

export interface IRoadmapDetail {
    id: number;
    cycleCode: string;         // Mã giai đoạn Kiểm định
    roadmapCode: string;       // Mã Lộ trình
    roadmapName: string;       // Tên Lộ trình
    startDate: string;         // Thời gian Bắt đầu ("yyyy-MM-dd")
    endDate: string;           // Thời gian Kết thúc ("yyyy-MM-dd")
    note?: string;             // Ghi chú (nullable)
    order?: string;            // Thứ tự (nullable, nếu dùng để nhập)
}

export const mockData: IRoadmapDetail[] = [
    {
        id: 1,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "01-TDG",
        roadmapName: "Tự đánh giá (Viết báo cáo)",
        startDate: "2025-07-01",
        endDate: "2026-03-31",
        note: "Chuẩn bị báo cáo tự đánh giá"
    },
    {
        id: 2,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "02-DGNG",
        roadmapName: "Đánh giá ngoài",
        startDate: "2026-04-01",
        endDate: "2026-06-30",
        note: "Đón đoàn đánh giá ngoài"
    },
    {
        id: 3,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "03-CTCL",
        roadmapName: "Cải tiến chất lượng (Giai đoạn 1)",
        startDate: "2026-07-01",
        endDate: "2028-12-31",
        note: "Thực hiện các khuyến nghị"
    },
    {
        id: 4,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "04-BCGK",
        roadmapName: "Báo cáo giữa chu kỳ (Biểu 15)",
        startDate: "2028-01-01",
        endDate: "2028-06-30",
        note: "Báo cáo tiến độ cải tiến"
    },
    {
        id: 5,
        cycleCode: "CNTT_K20_Đợt1",
        roadmapCode: "05-CTCL2",
        roadmapName: "Cải tiến chất lượng (Giai đoạn 2)",
        startDate: "2029-01-01",
        endDate: "2030-06-30",
        note: "Tiếp tục cải tiến"
    }
];
