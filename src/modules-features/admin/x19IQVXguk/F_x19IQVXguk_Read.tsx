'use client';
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { Button, Select } from "@mantine/core";
import { AQButtonCreateByImportFile, MyButtonViewPDF, MyCenterFull } from "aq-fe-framework/components";
import F_x19IQVXguk_Detail from "./F_x19IQVXguk_Detail";
import F_x19IQVXguk_Upload from "./F_x19IQVXguk_Upload";
import { Form } from "@mantine/form";
import F_x19IQVXguk_Create from "./F_x19IQVXguk_Create";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";

// Interface định nghĩa dữ liệu
export interface I_x19IQVXguk_Read {
    original: any;
    id?: number;
    code?: string;
    name?: string;
    filecode?: string;
    filename?: string;
    viewfile?: File;
    filelink?: File;
    effectDate?: Date;
    endDate?: Date;
    updateDate?: Date;
    nguoicapnhat?: string;
    dvcapnhat?: string;
    status?: string;
    filedetail?: string;
    uploadfile?: string;
}

// Component hiển thị bảng dữ liệu
export default function F_x19IQVXguk_Read() {
    // Query lấy dữ liệu từ server
    const query = useQuery<I_x19IQVXguk_Read[]>({
        queryKey: ["khominhchung"],
        queryFn: async () => [
            {
                id: 1,
                code: "MC0001",
                name: "Tầm nhìn",
                filecode: "F0012",
                filename: "Quyết định xác định tầm nhìn chiến lược 5 năm tới",
                viewfile: undefined, // hoặc bạn có thể để null nếu cần
                filelink: undefined,
                effectDate: new Date("2023-02-01"),
                endDate: new Date("2026-04-03"),
                updateDate: new Date("2025-01-12T12:05:25"),
                nguoicapnhat: "Tô Ngọc Bảo",
                dvcapnhat: "Phòng Tổ chức",
                status: "Còn hiệu lực",
              }
        ]
    });
    const exportConfig = {
        fields: [
            {
                header: "Mã minh chứng",
                fieldName: "code",
            },
            {
                header: "Tên minh chứng",
                fieldName: "name",
            },
            {
                header: "Mã file",
                fieldName: "filecode",
            },
            {
                header: "Tên file",
                fieldName: "filename",
            },
            {
                header: "Xem file",
                fieldName: "viewfile",

            },
            {
                header: "Link file",
                fieldName: "filelink",
            },
            {
                header: "Ngày hiệu lực",
                fieldName: "effectDate",
            },
            {
                header: "Ngày hết hạn",
                fieldName: "endDate",
            },
            {
                header: "Ngày cập nhật",
                fieldName: "updateDate",
            },
            {
                header: "Người cập nhật",
                fieldName: "nguoicapnhat",
            },
            {
                header: " đơn vị cập nhật",
                fieldName: "dvcapnhat",
            },
            {
                header: "Trạng thái",
                fieldName: "status",
            },
        ]
    };

    // Định nghĩa các cột của bảng
    const columns = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read>[]>(
        () => [
            { header: "Mã minh chứng", accessorKey: "code" },
            { header: "Tên minh chứng", accessorKey: "name" },
            { header: "Mã file", accessorKey: "filecode" },
            { header: "	Tên file", accessorKey: "filename" },
            { header: "Xem file", accessorKey: "viewfile", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Link file", accessorKey: "filelink", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Ngày hiệu lực", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.effectDate!), 'YYYY-MM-DD') },
            { header: "Ngày hết hạn", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.endDate!), 'YYYY-MM-DD') },
            { header: "Ngày cập nhật", 
                accessorFn: (row) => `${new Date(row.updateDate!).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })} ${new Date(row.updateDate!).toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}`

             },
            { header: "Người cập nhật", accessorKey: "nguoicapnhat" },
            { header: "Đơn vị cập nhật", accessorKey: "dvcapnhat" },
            { header: "Trạng thái", accessorKey: "status" },
            { header: "Xem chi tiết", accessorFn: (row) => <F_x19IQVXguk_Detail data={row.original} /> },
            { header: "Upload file minh chứng", accessorFn: (row) => <F_x19IQVXguk_Upload data={row.original} /> },
        ],
        []
    );
    
    // Xử lí trạng thái dữ liệu
    if (query.isLoading) return "Đang tải dữ liệu...";
    if (query.isError) return "Không có dữ liệu";

    return (
        <MyFieldset legend="Danh sách minh chứng" title="Danh sách minh chứng">
        <MyDataTable
            enableRowSelection={true}
            enableRowNumbers={true}
            columns={columns}
            data={query.data!}
            initialState={{
                columnPinning: { right: ["print"] } // Cố định cột "In" bên phải
            }}
            renderTopToolbarCustomActions={() =>
                <>
                    <AQButtonExportData
                        isAllData={true}
                        objectName="dmgiaychungnhan"
                        data={query.data!}
                        exportConfig={exportConfig}
                    />
                    <F_x19IQVXguk_Create/>
                </>
            }
            exportConfig={exportConfig}
        />
        </MyFieldset>
    );
}
