'use client';
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { AQButtonExportData, MyButtonViewPDF, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import F_x19IQVXguk_Detail from "./F_x19IQVXguk_Detail";
import F_x19IQVXguk_Upload from "./F_x19IQVXguk_Upload";
import F_x19IQVXguk_Create from "./F_x19IQVXguk_Create";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";

// Interface định nghĩa dữ liệu
export interface I_x19IQVXguk_Read {
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
            { header: "Ngày hiệu lực", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.effectDate!)) },
            { header: "Ngày hết hạn", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.endDate!)) },
            {
                header: "Ngày cập nhật",
                accessorFn: (row) => {
                    const date = utils_date_dateToDDMMYYYString(row.updateDate!); 
                    const time = row.updateDate!.toLocaleTimeString("VI"); 
                    return `${date} ${time}`
                }
            },
            { header: "Người cập nhật", accessorKey: "nguoicapnhat" },
            { header: "Đơn vị cập nhật", accessorKey: "dvcapnhat" },
            { header: "Trạng thái", accessorKey: "status" },
            { header: "Xem chi tiết", accessorKey: "detail" , accessorFn: (row) => <F_x19IQVXguk_Detail /> },
            { header: "Upload file minh chứng", accessorKey: "uploadfile" , accessorFn: (row) => <F_x19IQVXguk_Upload /> },
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
          initialState={{ columnPinning: { right: ["status", "detail", "uploadfile"] } }}
                renderTopToolbarCustomActions={() =>
                    <>
                        <AQButtonExportData
                            isAllData={true}
                            objectName="dmgiaychungnhan"
                            data={query.data!}
                            exportConfig={exportConfig}
                        />
                        <F_x19IQVXguk_Create />
                    </>
                }
            />
        </MyFieldset>
    );
}
