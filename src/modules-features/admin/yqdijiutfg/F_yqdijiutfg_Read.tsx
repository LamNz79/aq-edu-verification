"use client";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_yqdijiutfg_Create from "./F_yqdijiutfg_Create";
import F_yqdijiutfg_Update from "./F_yqdijiutfg_Update";
import F_yqdijiutfg_Delete from "./F_yqdijiutfg_Delete";
import { AQButtonCreateByImportFile, AQButtonExportData, MyButton, MyCenterFull, MyDataTable, MyFieldset } from "aq-fe-framework/components";

export interface I_yqdijiutfg_Read {
    maTieuchuan?: string; // Mã tiêu chuẩn
    tenTieuChuan?: string; // Tên tiêu chuẩn
    tenTieuChuanEg?: string; // Tên tiêu chuẩn tiếng Anh
    ghiChu?: string; // Ghi chú
}

const mockData: I_yqdijiutfg_Read[] = [
    {
        maTieuchuan: "TC001",
        tenTieuChuan: "Tiêu chuẩn 1",
        tenTieuChuanEg: "Standard 1",
        ghiChu: "Ghi chú cho tiêu chuẩn 1",
    },
    {
        maTieuchuan: "TC002",
        tenTieuChuan: "Tiêu chuẩn 2",
        tenTieuChuanEg: "Standard 2",
        ghiChu: "Ghi chú cho tiêu chuẩn 2",
    },
    {
        maTieuchuan: "TC003",
        tenTieuChuan: "Tiêu chuẩn 3",
        tenTieuChuanEg: "Standard 3",
        ghiChu: "Ghi chú cho tiêu chuẩn 3",
    },
];

export default function F_yqdijiutfg_Read() {
    const [importData, setImportData] = useState(false);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });
    const form = useForm<I_yqdijiutfg_Read>({
        initialValues: {},
    });

    // Query to fetch the data
    const query = useQuery<I_yqdijiutfg_Read[]>({
        queryKey: ["F_yqdijiutfg_Read"],
        queryFn: async () => {
            return mockData;
        },
    });

    const columns = useMemo<MRT_ColumnDef<I_yqdijiutfg_Read>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "maTieuchuan" },
            { header: "Tên tiêu chuẩn", accessorKey: "tenTieuChuan" },
            { header: "Tên tiêu chuẩn Eg", accessorKey: "tenTieuChuanEg" },
            { header: "Ghi chú", accessorKey: "ghiChu" },
        ],
        []
    );

    const exportConfig = {
        fields: [
            { fieldName: "maTieuchuan", header: "Mã tiêu chuẩn" },
            { fieldName: "tenTieuChuan", header: "Tên tiêu chuẩn" },
            { fieldName: "tenTieuChuanEg", header: "Tên tiêu chuẩn Eg" },
            { fieldName: "ghiChu", header: "Ghi chú" },
        ],
    };

    // Check query status
    if (query.isLoading) return "Đang tải dữ liệu...";
    if (query.isError) return "Không có dữ liệu...";

    return (
        <MyFieldset title="Danh sách tiêu chuẩn">
            <MyDataTable
                enableRowSelection={true}
                columns={columns}
                data={query.data!}
                renderTopToolbarCustomActions={() => (
                    <>
                        <F_yqdijiutfg_Create />
                        <AQButtonCreateByImportFile
                            setImportedData={setImportData}
                            form={form_multiple}
                            onSubmit={() => {
                                console.log(form_multiple.values);
                            }}
                        />
                        <AQButtonExportData
                            isAllData={true}
                            data={query.data || []}
                            exportConfig={exportConfig}
                            objectName="dsTieuChuan"
                        />
                        <MyButton crudType="delete">Xóa</MyButton>
                    </>
                )}
                renderRowActions={({ row }) => {
                    return (
                        <MyCenterFull>
                            <F_yqdijiutfg_Update value={row.original} />
                            <F_yqdijiutfg_Delete id={row.original.maTieuchuan!} context={row.original.maTieuchuan!} />
                        </MyCenterFull>
                    );
                }}
            />
        </MyFieldset>
    );
}