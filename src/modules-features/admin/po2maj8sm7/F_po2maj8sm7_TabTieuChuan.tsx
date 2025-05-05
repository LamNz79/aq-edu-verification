"use client";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { AQButtonCreateByImportFile, AQButtonExportData, MyButton, MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import F_po2maj8sm7_CreateTieuChuan from "./F_po2maj8sm7_CreateTieuChuan";
import F_po2maj8sm7_UpdateTieuChuan from "./F_po2maj8sm7_UpdateTieuChuan";
import F_po2maj8sm7_DeleteTieuChuan from "./F_po2maj8sm7_DeleteTieuChuan";

export default function F_po2maj8sm7_TabTieuChuan() {
    const [importData, setImportData] = useState(false);

    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });

    // Query to fetch the data
    const TieuChuanQuery = useQuery<I_po2maj8sm7_TabTieuChuan[]>({
        queryKey: ["F_po2maj8sm7_TabTieuChuan"],
        queryFn: async () => {
            return mockData;
        },
    });

    const columns = useMemo<MRT_ColumnDef<I_po2maj8sm7_TabTieuChuan>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "maTieuChuan" },
            { header: "Tên tiêu chuẩn", accessorKey: "tenTieuChuan" },
            { header: "Tên tiêu chuẩn Eg", accessorKey: "tenTieuChuanEg" },
            { header: "Ghi chú", accessorKey: "ghiChu" },
        ],
        []
    );

    const exportConfig = {
        fields: [
            { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
            { fieldName: "tenTieuChuan", header: "Tên tiêu chuẩn" },
            { fieldName: "tenTieuChuanEg", header: "Tên tiêu chuẩn Eg" },
            { fieldName: "ghiChu", header: "Ghi chú" },
        ],
    };

    // Check query status
    if (TieuChuanQuery.isLoading) return "Đang tải dữ liệu...";
    if (TieuChuanQuery.isError) return "Không có dữ liệu...";

    return (
        <MyDataTable
            enableRowSelection={true}
            columns={columns}
            data={TieuChuanQuery.data!}
            renderTopToolbarCustomActions={() => (
                <>
                    <F_po2maj8sm7_CreateTieuChuan />
                    <AQButtonCreateByImportFile
                        setImportedData={setImportData}
                        form={form_multiple}
                        onSubmit={() => {
                            console.log(form_multiple.values);
                        }}
                    />
                    <AQButtonExportData
                        isAllData={true}
                        data={TieuChuanQuery.data || []}
                        exportConfig={exportConfig}
                        objectName="dsTieuChuan"
                    />
                    <MyButton crudType="delete">Xóa</MyButton>
                </>
            )}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <F_po2maj8sm7_UpdateTieuChuan value={row.original} />
                        <F_po2maj8sm7_DeleteTieuChuan id={row.original.id} context={row.original.maTieuChuan!}/>
                    </MyCenterFull>
                );
            }}
        />
    );
}













export interface I_po2maj8sm7_TabTieuChuan {
    id: number;
    maTieuChuan?: string;
    tenTieuChuan?: string;
    tenTieuChuanEg?: string;
    ghiChu?: string;
}

const mockData: I_po2maj8sm7_TabTieuChuan[] = [
    {
        id: 1,
        maTieuChuan: "TC001",
        tenTieuChuan: "Tiêu chuẩn 1",
        tenTieuChuanEg: "Standard 1",
        ghiChu: "",
    },
    {
        id: 2,
        maTieuChuan: "TC002",
        tenTieuChuan: "Tiêu chuẩn 2",
        tenTieuChuanEg: "Standard 2",
        ghiChu: "",
    },
    {
        id: 3,
        maTieuChuan: "TC003",
        tenTieuChuan: "Tiêu chuẩn 3",
        tenTieuChuanEg: "Standard 3",
        ghiChu: "",
    },
];
