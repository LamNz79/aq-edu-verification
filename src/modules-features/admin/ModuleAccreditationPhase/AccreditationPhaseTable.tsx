import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react'
import AccreditationPhaseDeleteList from './AccreditationPhaseDeleteList';
import { MyFieldset, MyDataTable, AQButtonCreateByImportFile, AQButtonExportData, MyCenterFull } from 'aq-fe-framework/components';
import AccreditationPhaseCreateOrUpdate from './AccreditationPhaseCreateOrUpdate';
import AccreditationPhaseDelete from './AccreditationPhaseDelete';
import { Center } from '@mantine/core';
import { MyButton } from 'aq-fe-framework/core';
import { MRT_ColumnDef } from 'mantine-react-table';
import AccreditationRoadmapTable from './AccreditationRoadmapTable';

export default function AccreditationPhaseTable() {

    const form = useForm<any>({
        initialValues: {},
    });

    const query = useQuery<IAccreditationCycle[]>({
        queryKey: ["IAccreditationCycleQuery"],
        queryFn: async () => {
            return mockData ?? [];
        },
    });

    const columns = useMemo<MRT_ColumnDef<IAccreditationCycle>[]>(
    () =>[
        { header: "Mã Chương trình Đào tạo", accessorKey: "programCode" },
        { header: "Tên Chương trình Đào tạo", accessorKey: "programName" },
        { header: "Mã giai đoạn Kiểm định", accessorKey: "cycleCode" },
        { header: "Tên giai đoạn Kiểm định", accessorKey: "cycleName" },
        { header: "Ngày Bắt đầu", accessorKey: "startDate" },
        { header: "Ngày Kết thúc", accessorKey: "endDate" },
        { header: "Trạng thái", accessorKey: "status" },
        {
            header: "Lộ trình thực hiện",
            id: "AccreditationPaths",
            Cell: ( { row }) => <Center><AccreditationRoadmapTable/></Center>,
        }
    ],[]);

    const exportConfig = {
        fields: [
            { header: "Mã Chương trình Đào tạo", fieldName: "programCode" },
            { header: "Tên Chương trình Đào tạo", fieldName: "programName" },
            { header: "Mã giai đoạn Kiểm định", fieldName: "cycleCode" },
            { header: "Tên giai đoạn Kiểm định", fieldName: "cycleName" },
            { header: "Ngày Bắt đầu", fieldName: "startDate" },
            { header: "Ngày Kết thúc", fieldName: "endDate" },
            { header: "Trạng thái", fieldName: "status" },
        ]
    };

    return (
        <MyFieldset title={"Danh sách giai đoạn kiểm định"}>
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
                        <AccreditationPhaseCreateOrUpdate />
                        <AQButtonCreateByImportFile onSubmit={() => { }} form={form} />
                        <AQButtonExportData
                            isAllData={false}
                            objectName={"DanhSachGiaiDoanKiemDinh"}
                            data={query.data || []}
                            exportConfig={exportConfig}
                        />
                        <AccreditationPhaseDeleteList
                            values={table
                                .getSelectedRowModel()
                                .flatRows.flatMap((item) => item.original)}
                        />
                    </>
                )}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <AccreditationPhaseCreateOrUpdate data={row.original} />
                        <AccreditationPhaseDelete
                            id={row.original.id}
                            label={row.original.programCode}
                        />
                    </MyCenterFull>
                )}
            />
        </MyFieldset>
    )
}


export interface IAccreditationCycle {
    id: number;
    programCode: string;         // Mã Chương trình Đào tạo
    programName: string;         // Tên Chương trình Đào tạo
    cycleCode: string;           // Mã giai đoạn Kiểm định
    cycleName: string;           // Tên giai đoạn Kiểm định
    startDate: string;           // Ngày Bắt đầu giai đoạn ("yyyy-MM-dd")
    endDate: string;             // Ngày Kết thúc giai đoạn ("yyyy-MM-dd")
    status: string;              // Trạng thái
    note?: string;               // Ghi chú (nullable)
}

export const mockData: IAccreditationCycle[] = [
    {
        id: 1,
        programCode: "CNTT",
        programName: "Công nghệ Thông tin",
        cycleCode: "CNTT_K20_Đợt1",
        cycleName: "Kiểm định CNTT Khóa 20 (2025-2030)",
        startDate: "2025-07-01",
        endDate: "2030-06-30",
        status: "Đang thực hiện",
        note: ""
    },
    {
        id: 2,
        programCode: "QTKD",
        programName: "Quản trị Kinh doanh",
        cycleCode: "QTKD_K21_Đợt1",
        cycleName: "Kiểm định QTKD Khóa 21 (2026-2031)",
        startDate: "2026-07-01",
        endDate: "2031-06-30",
        status: "Chưa bắt đầu",
        note: ""
    }
];


