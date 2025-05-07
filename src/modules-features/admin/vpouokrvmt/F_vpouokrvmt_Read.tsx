'use client';

import { AQButtonCreateByImportFile, AQButtonExportData, MyDataTable, MyFieldset, MyCenterFull, MyButton } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";
import F_vpouokrvmt_Create from "./F_vpouokrvmt_Create";
import F_vpouokrvmt_Delete from "./F_vpouokrvmt_Delete";
import F_vpouokrvmt_Update from "./F_vpouokrvmt_Update";



interface I_vpouokrvmt_Read {
    order?: number; // Thứ tự
    cycleId?: string; // Mã chu kỳ
    cycleIdRoute?: string; // Mã lộ trình
    cycleRouteName?: string; // Tên lộ trình
    startDate?: Date; // Thời gian bắt đầu
    endDate?: Date; // Thời gian kết thúc
    note?: string; // Ghi chú
}


const mockData: I_vpouokrvmt_Read[] = [
    {
        order: 1,
        cycleId: '2023-2028',
        cycleIdRoute: 'O1-CB',
        cycleRouteName: 'Chuẩn bị kiểm định cải tiến khắc phục kỳ trước',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-04-30'),
        note: '',
    },
    {
        order: 2,
        cycleId: '2023-2028',
        cycleIdRoute: 'O2-CB',
        cycleRouteName: 'Chuẩn bị báo cáo cải tiến',
        startDate: new Date('2026-05-01'),
        endDate: new Date('2026-06-30'),
        note: '',
    },
    {
        order: 3,
        cycleId: '2023-2028',
        cycleIdRoute: 'O3-CB',
        cycleRouteName: 'Cải tiến, khắc phục đánh giá',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2028-12-30'),
        note: '',
    },
    {
        order: 4,
        cycleId: '2023-2028',
        cycleIdRoute: 'O4-CB',
        cycleRouteName: 'Tự đánh giá',
        startDate: new Date('2028-01-01'),
        endDate: new Date('2028-06-30'),
        note: '',
    },
    {
        order: 5,
        cycleId: '2023-2028',
        cycleIdRoute: 'O5-CB',
        cycleRouteName: 'Đánh giá ngoài',
        startDate: new Date('2024-07-01'),
        endDate: new Date('2028-12-30'),
        note: '',
    },
];

export default function F_vpouokrvmt_Read() {
    const [importData, setImportData] = useState(false);

    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    });

    //===pseudo code===
    const query = useQuery<I_vpouokrvmt_Read[]>({
        queryKey: ['F_vpouokrvmt_Read'],
        queryFn: async () => mockData,
    });

    const exportConfig = {
        fields: [
            { fieldName: 'order', header: 'Thứ tự' },
            { fieldName: 'cycleId', header: 'Mã chu kỳ' },
            { fieldName: 'cycleIdRoute', header: 'Mã lộ trình' },
            { fieldName: 'cycleIdRouteName', header: 'Tên lộ trình' },
            { fieldName: 'startDate', header: 'Thời gian bắt đầu' },
            { fieldName: 'endDate', header: 'Thời gian kết thúc' },
            { fieldName: 'note', header: 'Ghi chú' },
        ],
    };

    const columns = useMemo<MRT_ColumnDef<I_vpouokrvmt_Read>[]>(() => [
        {
            header: 'Thứ tự',
            accessorKey: 'order',
        },
        {
            header: 'Mã chu kỳ',
            accessorKey: 'cycleId',
        },
        {
            header: 'Mã lộ trình',
            accessorKey: 'cycleIdRoute',
        },
        {
            header: 'Tên lộ trình',
            accessorKey: 'cycleRouteName',
        },
        {
            header: 'Thời gian bắt đầu',
            accessorFn: (row) => utils_date_dateToDDMMYYYString(row.startDate!),
        },
        {
            header: 'Thời gian kết thúc',
            accessorFn: (row) => utils_date_dateToDDMMYYYString(row.endDate!),
        },
        {
            header: 'Ghi chú',
            accessorKey: 'note',
        },
    ], []);

    if (query.isLoading) return "Đang tải dữ liệu..."
    if (query.isError) return "Có lỗi xảy ra!"

    return (
        <>
            <MyFieldset title="Danh sách lộ trình">
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={false}
                    columns={columns}
                    data={query.data || []}
                    renderTopToolbarCustomActions={() =>
                        <>
                            <F_vpouokrvmt_Create />
                            <AQButtonCreateByImportFile
                                setImportedData={setImportData}
                                form={form}
                                onSubmit={() => { console.log(form.values) }} />
                            <AQButtonExportData
                                isAllData={true}
                                data={query.data!}
                                exportConfig={exportConfig}
                                objectName="danhSachLoTrinh" />
                            <MyButton >Xóa</MyButton>
                        </>
                    }
                    renderRowActions={({ row }) => (
                        <MyCenterFull>
                            <F_vpouokrvmt_Update data={row.original} />
                            <F_vpouokrvmt_Delete id={row.original.order!} code={row.original.cycleIdRoute!} />
                        </MyCenterFull>
                    )}
                />
            </MyFieldset>
        </>
    );
}