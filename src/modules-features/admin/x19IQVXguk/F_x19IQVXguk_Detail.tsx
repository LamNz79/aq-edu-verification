'use client';
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { Button, Group, Select } from "@mantine/core";
import { MyButtonViewPDF } from "aq-fe-framework/components";
import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { useDisclosure } from "@mantine/hooks";

// Interface định nghĩa dữ liệu
export interface I_x19IQVXguk_Read {
    id?: number;
    code?: string;
    name?: string;
    filecate?: string;
    effect_date?: Date;
    end_date?: Date;
    viewfile?: File;
    filelink?: File;
    update_date?: Date;
    nguoicapnhat?: string;
    dvcapnhat?: string;
    status?: string;
}
export interface I_x19IQVXguk_Read2 {
    id?: number;
    codetc?: string;
    codetchi?: string;
    codeyc?: string;
    nd?: string;
    usedate?: Date;
    nguoisudung?: string;
    dvsudung?: string;
}

// Component hiển thị bảng dữ liệu
export default function F_x19IQVXguk_Read() {
    // Query lấy dữ liệu từ server
    const query = useQuery<I_x19IQVXguk_Read[]>({
        queryKey: ["F_x19IQVXguk_Read2"],
        queryFn: async () => [
            {
                id: 1,
                code: "F120001",
                name: "Quyết định ban hành đề cương",
                filecate: "PDF",
                effect_date: new Date("2021-02-01"),
                end_date: new Date("2026-03-15"),
                viewfile: undefined, 
                filelink: undefined,
                update_date: new Date("2025-01-12T12:05:25"),
                nguoicapnhat: "Tô Ngọc Bảo",
                dvcapnhat: "Phòng Tổ chức",
                status: "Còn hiệu lực",
              }
        ]
    });
    const query2 = useQuery<I_x19IQVXguk_Read2[]>({
        queryKey: ["F_x19IQVXguk_Read3"],
        queryFn: async () => [
            {
                id: 1,
                codetc: "TC001",
                codetchi: "TC01.01",
                codeyc: "MC0125",
                nd: "Bộ đề cương",
                usedate: new Date("2025-03-01T15:08:23"),
                nguoisudung: "Tô Ngọc Bảo",
                dvsudung: "Phòng Tổ chức",
              }
        ]
    });
    const exportConfig = {
        fields: [
            {
                header: "Mã file",
                fieldName: "code",
            },
            {
                header: "Tên file",
                fieldName: "name",
            },
            {
                header: "Loại file",
                fieldName: "filecate",
            },
            {
                header: "Ngày hiệu lực",
                fieldName: "effect_date",
            },
            {
                header: "Ngày hết hạn",
                fieldName: "end_date",
            },
            {
                header: "Xem file",
                fieldName: "viewfile",

            },
            {
                header: "Link",
                fieldName: "filelink",
            },
            {
                header: "Ngày cập nhật",
                fieldName: "update_date",
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

    const disclosure = useDisclosure(false)
    // Định nghĩa các cột của bảng
    const columns = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read>[]>(
        () => [
            { header: "Mã file", accessorKey: "code" },
            { header: "Tên file", accessorKey: "name" },
            { header: "Loại file", accessorKey: "filecate" },
            { header: "Ngày hiệu lực", accessorKey: "effect_date", Cell: ({ row }) => <>{row.original.effect_date?.toLocaleDateString()}</> },
            { header: "Ngày hết hạn", accessorKey: "end_date", Cell: ({ row }) => <>{row.original.end_date?.toLocaleDateString()}</> },
            { header: "Xem file", accessorKey: "viewfile", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Link", accessorKey: "filelink", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Ngày cập nhật", accessorKey: "update_date", Cell: ({ row }) => {
                const d = row.original.update_date;
                return <>{d?.toLocaleString("vi-VN", { hour12: false })}</>; // hiển thị dạng: 01/01/2024, 12:05:25
              }, },
            { header: "Người cập nhật", accessorKey: "nguoicapnhat" },
            { header: "Đơn vị cập nhật", accessorKey: "dvcapnhat" },
            { header: "Trạng thái", accessorKey: "status" },
        ],
        []
    );
    const columns2 = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read2>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "codetc" },
            { header: "Mã tiêu chí", accessorKey: "codetchi" },
            { header: "Mã yêu cầu/ mốc chuẩn", accessorKey: "codeyc" },
            { header: "Nội dung", accessorKey: "nd" },
            { header: "Ngày sử dụng", accessorKey: "usedate", Cell: ({ row }) => {
                const d = row.original.usedate;
                return <>{d?.toLocaleString("vi-VN", { hour12: false })}</>; // hiển thị dạng: 01/01/2024, 12:05:25
              }, },
            { header: "Người sử dụng", accessorKey: "nguoisudung" },
            { header: "Đơn vị sử dụng", accessorKey: "dvsudung" },
        ],
        []
    );
    
    // Xử lí trạng thái dữ liệu
    if (query.isLoading) return "Đang tải dữ liệu...";
    if (query.isError) return "Không có dữ liệu";

    return (
        
        <><MyButtonModal disclosure={disclosure} label="xem chi tiết" modalSize={"90%"} title="Chi tiết kỳ báo cáo">
            <label htmlFor="">Mã minh chứng: MC00252</label>
            <label htmlFor=""><strong>Tên minh chứng: bộ đề cương chi tiết tất cả các môn học phần của CTĐT</strong></label>
            <label htmlFor="">Danh sách phiên bản file minh chứng</label>
            <MyDataTable
                enableRowSelection={true}
                enableRowNumbers={true}
                columns={columns}
                data={query.data!}
                initialState={{
                    columnPinning: { right: ["print"] } // Cố định cột "In" bên phải
                }}
                renderTopToolbarCustomActions={() => (
                    <>

                    </>
                )} />
                 <label htmlFor="">Nội dung sử dụng</label>
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    columns={columns2}
                    data={query2.data!}
                    initialState={{
                        columnPinning: { right: ["print"] } // Cố định cót "In" bên phải
                    }}
                    renderTopToolbarCustomActions={() => (
                        <>

                        </>
                    )} />
        </MyButtonModal>
            </>
        
    );
}
