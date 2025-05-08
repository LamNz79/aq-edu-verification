'use client';

import { AQButtonCreateByImportFile, AQButtonExportData, MyDataTable,MyFieldset,MyCenterFull, MyButton,} from "aq-fe-framework/components";
import { U0DateToDDMMYYYString } from "@/utils/date";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_5lrwp21o3u_Create from "./F_5lrwp21o3u_Create";
import F_5lrwp21o3u_Update from "./F_5lrwp21o3u_Update";
import { Checkbox } from "@mantine/core";
import F_5lrwp21o3u_Delete from "./F_5lrwp21o3u_Delete";

interface IDandSachBoTieuChuanRead {
    cycleId: string; // Mã chu kỳ
    cycleName: string; // Tên chu kỳ
    startDate: Date; // Ngày bắt đầu
    endDate: Date; // Ngày kết thúc
    isRepeat: boolean; // Có lặp lại hay không
    note?: string; // Ghi chú
}

//===pseudo code===
const mockDanhSachBoTieuChuan: IDandSachBoTieuChuanRead[] = [
    {
        cycleId: '01-CB',
        cycleName: 'Chuẩn bị kiểm định cải tiến khắc phục kỳ trước',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-04-30'),
        isRepeat: true,
        note: '',
    },
    {
        cycleId: '02-CB',
        cycleName: 'Chuẩn bị báo cáo cải tiến',
        startDate: new Date('2026-05-01'),
        endDate: new Date('2026-06-30'),
        isRepeat: true,
        note: '',
    },
    {
        cycleId: '03-CB',
        cycleName: 'Cải tiến, khắc phục đánh giá',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2028-12-30'),
        isRepeat: true,
        note: '',
    },
    {
        cycleId: '04-CB',
        cycleName: 'Tự đánh giá',
        startDate: new Date('2028-01-01'),
        endDate: new Date('2028-06-30'),
        isRepeat: false,
        note: '',
    },
    {
        cycleId: '05-CB',
        cycleName: 'Đánh giá ngoài',
        startDate: new Date('2024-07-01'),
        endDate: new Date('2028-12-30'),
        isRepeat: true,
        note: '',
    },
];

export default function F_5lrwp21o3u_Read() {
    //===implement===
    const [importData, setImportData] = useState(false);

    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    });

    //===pseudo code===
    const danhSachBoTieuChuanQuery = useQuery<IDandSachBoTieuChuanRead[]>({
        queryKey: ['F_5lrwp21o3u_Read'],
        queryFn: async () => mockDanhSachBoTieuChuan,
    });

    //===function===
    const exportConfig = {
        fields: [
            { fieldName: 'cycleId', header: 'Mã chu kỳ' },
            { fieldName: 'cycleName', header: 'Tên chu kỳ' },
            { fieldName: 'startDate', header: 'Thời gian bắt đầu' },
            { fieldName: 'endDate', header: 'Thời gian kết thúc' },
            { fieldName: 'isRepeat', header: 'Lặp lại' },
            { fieldName: 'note', header: 'Ghi chú' },
        ],
    };

    //===component===
    const danhSachBoTieuChuanColumns = useMemo<MRT_ColumnDef<IDandSachBoTieuChuanRead>[]>(()=>[
        {
            header: 'Mã chu kỳ',
            accessorKey: 'cycleId',
        },
        {
            header: 'Tên chu kỳ',
            accessorKey: 'cycleName',
        },
        {
            header: 'Thời gian bắt đầu',
            accessorFn: (row) => U0DateToDDMMYYYString(new Date(row.startDate!)),
        },
        {
            header: 'Thời gian kết thúc',
            accessorFn: (row) => U0DateToDDMMYYYString(new Date(row.endDate!)),
        },
        {
            header: 'Lặp lại',
            accessorKey: 'isRepeat',
            Cell: ({ row }) => (
                <Checkbox 
                    checked={row.original.isRepeat}
                    readOnly
                />
            ),
        },
        {
            header: 'Ghi chú',
            accessorKey: 'note',
        },
    ],[]);

    //===query stage condition===
    if (danhSachBoTieuChuanQuery.isLoading) {
        return "Đang tải dữ liệu...";
    }

    if (danhSachBoTieuChuanQuery.isError) {
        return "Lỗi Tải dữ liệu!";
    }

    return(
        <>
            <MyFieldset title="Danh sách chu kỳ kiểm định">
                <MyDataTable
                    enableRowSelection={true}
                    columns={danhSachBoTieuChuanColumns}
                    data={danhSachBoTieuChuanQuery.data || []}
                    renderTopToolbarCustomActions={() => 
                        <>
                            <F_5lrwp21o3u_Create/>
                            <AQButtonCreateByImportFile
                            setImportedData={setImportData}
                            form={form}
                            onSubmit={() => { console.log(form.values) }}/>
                            <AQButtonExportData 
                            isAllData={true}
                            data={danhSachBoTieuChuanQuery.data!}
                            exportConfig={exportConfig}
                            objectName="danhSachChuKyKiemDinh"/>
                            <MyButton crudType='delete'>Xóa</MyButton>
                        </>
                    }
                    renderRowActions={({row}) => (
                        <MyCenterFull>
                            <F_5lrwp21o3u_Update data={row.original}/>
                            <F_5lrwp21o3u_Delete id={row.original.cycleId}/>
                        </MyCenterFull>
                    )}
                />
            </MyFieldset>
        </>
    );
}