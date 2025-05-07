"use client";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { AQButtonCreateByImportFile, AQButtonExportData, MyButton, MyCenterFull, MyDataTable } from "aq-fe-framework/components";
import F_po2maj8sm7_CreateCriteria from "./F_po2maj8sm7_CreateCriteria";
import F_po2maj8sm7_DeleteCriteria from "./F_po2maj8sm7_DeleteCriteria";
import F_po2maj8sm7_UpdateCriteria from "./F_po2maj8sm7_UpdateCriteria";

export default function F_po2maj8sm7_TabCriteria() {
    const [importData, setImportData] = useState(false);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });

    // Query to fetch the data
    const tieuChiQuery = useQuery<I_po2maj8sm7_TabCriteria[]>({
        queryKey: ["F_po2maj8sm7_TabCriteria"],
        queryFn: async () => {
            return mockData;
        },
    });

    const columns = useMemo<MRT_ColumnDef<I_po2maj8sm7_TabCriteria>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "maTieuChuan" },
            { header: "Mã tiêu chí", accessorKey: "maTieuChi" },
            { header: "Tên tiêu chí", accessorKey: "tenTieuChi" },
            { header: "Minh chứng gợi ý", accessorKey: "minhChungGoiY" },
            { header: "Ghi chú", accessorKey: "ghiChu" },
        ],
        []
    );

    const exportConfig = {
        fields: [
            { header: "Mã tiêu chuẩn", fieldName: "maTieuChuan" },
            { header: "Mã tiêu chí", fieldName: "maTieuChi" },
            { header: "Tên tiêu chí", fieldName: "tenTieuChi" },
            { header: "Minh chứng gợi ý", fieldName: "minhChungGoiY" },
            { header: "Ghi chú", fieldName: "ghiChu" },
        ],
    };

    // Check query status
    if (tieuChiQuery.isLoading) return "Đang tải dữ liệu...";
    if (tieuChiQuery.isError) return "Không có dữ liệu...";

    return (
        <MyDataTable
            enableRowSelection={true}
            columns={columns}
            data={tieuChiQuery.data!}
            renderTopToolbarCustomActions={() => (
                <>
                    <F_po2maj8sm7_CreateCriteria />
                    <AQButtonCreateByImportFile
                        setImportedData={setImportData}
                        form={form_multiple}
                        onSubmit={() => {
                            console.log(form_multiple.values);
                        }}
                    />
                    <AQButtonExportData
                        isAllData={true}
                        data={tieuChiQuery.data || []}
                        exportConfig={exportConfig}
                        objectName="dsTieuChi"
                    />
                    <MyButton crudType="delete">Xóa</MyButton>
                </>
            )}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <F_po2maj8sm7_UpdateCriteria value={row.original} />
                        <F_po2maj8sm7_DeleteCriteria id={row.original.id} context={row.original.maTieuChi!} />
                    </MyCenterFull>
                );
            }}
        />
    );
}













export interface I_po2maj8sm7_TabCriteria {
    id: number;
    maTieuChuan: string;
    maTieuChi: string;
    tenTieuChi: string;
    tenTieuChiEg?: string;
    minhChungGoiY?: string;
    ghiChu?: string;
}

const mockData: I_po2maj8sm7_TabCriteria[] = [
    {
        id: 1,
        maTieuChuan: "TC001",
        maTieuChi: "TC1.1",
        tenTieuChi: "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng. phù hợp với định hướng phát triển và được công bố công khai.",
        tenTieuChiEg: "Eg",
        minhChungGoiY: "Văn bản về sứ mạng tầm nhìn. mục tiêu chiến lược của CSGDĐH",
        ghiChu: "",
    },
    {
        id: 2,
        maTieuChuan: "TC002",
        maTieuChi: "TC1.2",
        tenTieuChi: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên và người học.",
        minhChungGoiY: "",
        ghiChu: "",
    },
];
