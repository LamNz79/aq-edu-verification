'use client';

import { AQButtonCreateByImportFile, AQButtonExportData, MyButton, MyDataTable, MyFieldset, } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_txn1uriow1_Create from "./F_txn1uriow1_Create";
import F_txn1uriow1_Update from "./F_txn1uriow1_Update";
import F_txn1uriow1_Delete from "./F_txn1uriow1_Delete";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { Group } from "@mantine/core";

interface Itxn1uriow1_ReadDanhSachMocChuan {
    maTieuChuan: string; // mã tiêu chuẩn
    maTieuChi: string; // mã tiêu chí
    tenTieuChi: string; // tên tiêu chí
    maMocChuan: string; // mã mốc chuẩn
    tenMocChuan: string; // tên mốc chuẩn
    moTa: string; // mô tả
    ghiChu: string // Ghi chú
}

const mockData: Itxn1uriow1_ReadDanhSachMocChuan[] = [
    {
        maTieuChuan: 'TC01',
        maTieuChi: 'TC1.1',
        tenTieuChi: 'pla pla pla pla',
        maMocChuan: 'M001',
        tenMocChuan: 'pla pla pla pla',
        moTa: 'Kế hoạch học tập toàn khoa',
        ghiChu: ''
    },
    {
        maTieuChuan: 'TC01',
        maTieuChi: 'TC1.2',
        tenTieuChi: 'pla pla pla pla',
        maMocChuan: 'M001',
        tenMocChuan: 'pla pla pla pla',
        moTa: 'Kế hoạch học tập toàn khoa',
        ghiChu: ''
    },
]

export default function F_txn1uriow1_Read() {
    //===initiate===
    const [importData, setImportData] = useState(false);
    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    });

    //===Pseudo data===
    const danhSachMocChuanQuery = useQuery({
        queryKey: ['F_txn1uriow1_ReadQuery'],
        queryFn: async () => mockData
    });

    //===config===
    const exportConfig = {
        fields: [
            {
                fieldName: "maTieuChuan",
                header: "Mã tiêu chuẩn"
            },
            {
                fieldName: "maTieuChi",
                header: "Mã tiêu chí"
            },
            {
                fieldName: "tenTieuChi",
                header: "Tên tiêu chí"
            },
            {
                fieldName: "maMocChuan",
                header: "Mã mốc chuẩn"
            },
            {
                fieldName: "tenMocChuan",
                header: "Tên mốc chuẩn"
            },
            {
                fieldName: "moTa",
                header: "Mô tả"
            },
            {
                fieldName: "ghiChu",
                header: "Ghi chú"
            },
        ]
    }

    //===function===
    const danhMucBoDemColumns = useMemo<MRT_ColumnDef<Itxn1uriow1_ReadDanhSachMocChuan>[]>(() => [
        {
            accessorKey: "maTieuChuan",
            header: "Mã tiêu chuẩn"
        },
        {
            accessorKey: "maTieuChi",
            header: "Mã tiêu chí"
        },
        {
            accessorKey: "tenTieuChi",
            header: "Tên tiêu chí"
        },
        {
            accessorKey: "maMocChuan",
            header: "Mã mốc chuẩn"
        },
        {
            accessorKey: "tenMocChuan",
            header: "Tên mốc chuẩn"
        },
        {
            accessorKey: "moTa",
            header: "Mô tả"
        },
        {
            accessorKey: "ghiChu",
            header: "Ghi chú"
        },
    ], []);

    //===handlers===
    if (danhSachMocChuanQuery.isLoading) return "Đang tải...";
    if (danhSachMocChuanQuery.isError) return "Có lỗi xảy ra!";

    return (
        <>
            <MyFieldset title="Danh sách mốc chuẩn">
                <MyDataTable
                    columns={danhMucBoDemColumns}
                    data={danhSachMocChuanQuery.data!}
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    renderTopToolbarCustomActions={() =>
                        <>
                            <F_txn1uriow1_Create />
                            <AQButtonCreateByImportFile
                                setImportedData={setImportData}
                                form={form}
                                onSubmit={() => console.log(form.values)}

                            />
                            <AQButtonExportData
                                exportConfig={exportConfig}
                                data={danhSachMocChuanQuery.data!}
                                isAllData={true}
                                objectName={'Danh sách mốc chuẩn'}
                            />
                            <MyButton crudType="delete">Xóa</MyButton>
                        </>
                    }
                    renderRowActions={({ row }) =>
                        <>
                            <Group>
                                <F_txn1uriow1_Update data={row.original} />
                                <F_txn1uriow1_Delete id={row.original.maTieuChuan} />
                            </Group>
                        </>
                    }
                />
            </MyFieldset>
        </>
    );
}