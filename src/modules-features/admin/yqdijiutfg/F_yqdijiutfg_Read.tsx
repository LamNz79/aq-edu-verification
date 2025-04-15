"use client";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_yqdijiutfg_Create from "./F_yqdijiutfg_Create";
import F_yqdijiutfg_Update from "./F_yqdijiutfg_Update";
import F_yqdijiutfg_Delete from "./F_yqdijiutfg_Delete";

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
            { header: "Tên tiêu chuẩn (English)", accessorKey: "tenTieuChuanEg" },
            { header: "Ghi chú", accessorKey: "ghiChu" },
        ],
        [query.data]
    );

    const exportConfig = {
        fields: [
            { fieldName: "maTieuchuan", header: "Mã tiêu chuẩn" },
            { fieldName: "tenTieuChuan", header: "Tên tiêu chuẩn" },
            { fieldName: "tenTieuChuanEg", header: "Tên tiêu chuẩn (English)" },
            { fieldName: "ghiChu", header: "Ghi chú" },
        ],
    };

    // Check query status
    if (query.isLoading) return "Đang tải dữ liệu...";
    if (query.isError) return "Không có dữ liệu...";

    return (
        <MyFlexColumn title="Danh sách tiêu chuẩn">
            <MyDataTable<I_yqdijiutfg_Read>
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
                            <F_yqdijiutfg_Delete id={row.original.maTieuchuan!} />
                        </MyCenterFull>
                    );
                }}
            />
        </MyFlexColumn>
    );
}