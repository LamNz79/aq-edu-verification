'use client';

import { AQButtonCreateByImportFile, AQButtonExportData, MyDataTable, MyFieldset, MyButton } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_5lrwp21o3u_Create from "./F_5lrwp21o3u_Create";
import F_5lrwp21o3u_Update from "./F_5lrwp21o3u_Update";
import F_5lrwp21o3u_Delete from "./F_5lrwp21o3u_Delete";
import { Group } from "@mantine/core";


export default function F_5lrwp21o3u_Read() {
    const [importData, setImportData] = useState(false);

    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    });

    const danhChuKyKiemDinhQuery = useQuery<I_5lrwp21o3u_Read[]>({
        queryKey: ['F_5lrwp21o3u_Read'],
        queryFn: async () => mockDanhSachChuKyKiemDinh,
    });

    const exportConfig = {
        fields: [
            { fieldName: 'code', header: 'Mã chu kỳ' },
            { fieldName: 'name', header: 'Tên chu kỳ' },
            { fieldName: 'note', header: 'Ghi chú' },
        ],
    };

    const danhSachBoTieuChuanColumns = useMemo<MRT_ColumnDef<I_5lrwp21o3u_Read>[]>(() => [
        {
            header: 'Mã chu kỳ',
            accessorKey: 'code',
        },
        {
            header: 'Tên chu kỳ',
            accessorKey: 'name',
        },
    ], []);

    //===query stage condition===
    if (danhChuKyKiemDinhQuery.isLoading) {
        return "Đang tải dữ liệu...";
    }

    if (danhChuKyKiemDinhQuery.isError) {
        return "Lỗi Tải dữ liệu!";
    }

    return (
        <>
            <MyFieldset title="Danh mục chu kỳ kiểm định">
                <MyDataTable
                    enableRowSelection={true}
                    columns={danhSachBoTieuChuanColumns}
                    data={danhChuKyKiemDinhQuery.data || []}
                    renderTopToolbarCustomActions={() =>
                        <>
                            <F_5lrwp21o3u_Create />
                            <AQButtonCreateByImportFile
                                setImportedData={setImportData}
                                form={form}
                                onSubmit={() => { console.log(form.values) }} />
                            <AQButtonExportData
                                isAllData={true}
                                data={danhChuKyKiemDinhQuery.data!}
                                exportConfig={exportConfig}
                                objectName="danhSachChuKyKiemDinh" />
                            <MyButton crudType='delete'>Xóa</MyButton>
                        </>
                    }
                    renderRowActions={({ row }) => (
                        <Group>
                            <F_5lrwp21o3u_Update data={row.original} />
                            <F_5lrwp21o3u_Delete id={row.original.id} contextData={row.original.code} />
                        </Group>
                    )}
                />
            </MyFieldset>
        </>
    );
}












export interface I_5lrwp21o3u_Read {
    id: string;
    code: string; // Mã chu kỳ
    name: string; // Tên chu kỳ
    note?: string; // Ghi chú
}

const mockDanhSachChuKyKiemDinh: I_5lrwp21o3u_Read[] = [
    {
        id: '01-CB',
        code: '2023-2028',
        name: 'Giai đoạn 2023 - 2028',
        note: '',
    },
];