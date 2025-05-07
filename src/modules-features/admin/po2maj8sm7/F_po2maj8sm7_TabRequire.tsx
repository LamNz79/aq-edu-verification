"use client";

import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { AQButtonCreateByImportFile, AQButtonExportData, MyButton, MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import F_po2maj8sm7_CreateRequire from "./F_po2maj8sm7_CreateRequire";
import F_po2maj8sm7_DeleteRequire from "./F_po2maj8sm7_DeleteRequire";
import F_po2maj8sm7_UpdateRequire from "./F_po2maj8sm7_UpdateRequire";


export default function F_po2maj8sm7_TabRequire() {
    const [importData, setImportData] = useState(false);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });

    // Query to fetch the data
    const YeuCauQuery = useQuery<I_po2maj8sm7_TabRequire[]>({
        queryKey: ["F_po2maj8sm7_TabRequire"],
        queryFn: async () => {
            return mockData;
        },
    });

    const columns = useMemo<MRT_ColumnDef<I_po2maj8sm7_TabRequire>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "maTieuChuan" },
            { header: "Mã tiêu chí", accessorKey: "maTieuChi" },
            { header: "Tên tiêu chí", accessorKey: "tenTieuChi" },
            { header: "Mã yêu cầu/ mốc chuẩn", accessorKey: "maYeuCau" },
            { header: "Tên yêu cầu/ mốc chuẩn", accessorKey: "tenYeuCau" },
            { header: "Mô tả", accessorKey: "moTa" },
            { header: "Ghi chú", accessorKey: "ghiChu" },
        ],
        []
    );

    const exportConfig = {
        fields: [
            { header: "Mã tiêu chuẩn", fieldName: "maTieuChuan" },
            { header: "Mã tiêu chí", fieldName: "maTieuChi" },
            { header: "Tên tiêu chí", fieldName: "tenTieuChi" },
            { header: "Mã yêu cầu/ mốc chuẩn", fieldName: "maYeuCau" },
            { header: "Tên yêu cầu/ mốc chuẩn", fieldName: "tenYeuCau" },
            { header: "Mô tả", fieldName: "moTa" },
            { header: "Ghi chú", fieldName: "ghiChu" },
        ],
    };

    // Check query status
    if (YeuCauQuery.isLoading) return "Đang tải dữ liệu...";
    if (YeuCauQuery.isError) return "Không có dữ liệu...";

    return (
        <MyDataTable
            enableRowSelection={true}
            columns={columns}
            data={YeuCauQuery.data!}
            renderTopToolbarCustomActions={() => (
                <>
                    <F_po2maj8sm7_CreateRequire />
                    <AQButtonCreateByImportFile
                        setImportedData={setImportData}
                        form={form_multiple}
                        onSubmit={() => {
                            console.log(form_multiple.values);
                        }}
                    />
                    <AQButtonExportData
                        isAllData={true}
                        data={YeuCauQuery.data || []}
                        exportConfig={exportConfig}
                        objectName="dsYeuCau"
                    />
                    <MyButton crudType="delete">Xóa</MyButton>
                </>
            )}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <F_po2maj8sm7_UpdateRequire value={row.original} />
                        <F_po2maj8sm7_DeleteRequire id={row.original.id} context={row.original.maYeuCau!} />
                    </MyCenterFull>
                );
            }}
        />
    );
}













export interface I_po2maj8sm7_TabRequire {
    id: number;
    maTieuChuan: string;
    maTieuChi: string;
    tenTieuChi: string;
    maYeuCau: string;
    tenYeuCau: string;
    moTa: string;
    ghiChu?: string;
}

const mockData: I_po2maj8sm7_TabRequire[] = [
    {
        id: 1,
        maTieuChuan: "TC001",
        maTieuChi: "TC1.1",
        tenTieuChi: "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng, phù hợp với định hướng phát triển và được công bố công khai.",
        maYeuCau: "M001",
        tenYeuCau: "Chuẩn đầu ra của CTDT được xây dựng rà soát và điều chỉnh theo quy trình định trước; trong đó có sự tham gia của các BLQ",
        moTa: "Kế hoạch học tập toàn khóa",
        ghiChu: "",
    },
    {
        id: 2,
        maTieuChuan: "TC002",
        maTieuChi: "TC1.2",
        tenTieuChi: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên và người học.",
        maYeuCau: "M002",
        tenYeuCau: "CDR của CTDT được phát triển rõ ràng; phù hợp với mục tiêu của CTDT; sứ mạng; tầm nhìn và chiến lược của CSDT",
        moTa: "Kế hoạch học tập toàn khóa",
        ghiChu: "",
    },
];
