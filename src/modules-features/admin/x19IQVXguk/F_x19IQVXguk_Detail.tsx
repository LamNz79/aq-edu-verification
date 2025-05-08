'use client';
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { Button, Group, Select, Text } from "@mantine/core";
import { MyButtonViewPDF } from "aq-fe-framework/components";
import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { useDisclosure } from "@mantine/hooks";
import { utils_date_dateToDDMMYYYString } from "@/utils/date";

// Interface định nghĩa dữ liệu
export interface I_x19IQVXguk_Read {
    id?: number;
    code?: string;
    name?: string;
    filecate?: string;
    effectDate?: Date;
    endDate?: Date;
    viewfile?: File;
    filelink?: File;
    updateDate?: Date;
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
                effectDate: new Date("2021-02-01"),
                endDate: new Date("2026-03-15"),
                viewfile: undefined,
                filelink: undefined,
                updateDate: new Date("2025-01-12T12:05:25"),
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
                fieldName: "effectDate",
            },
            {
                header: "Ngày hết hạn",
                fieldName: "endDate",
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

    const disclosure = useDisclosure(false)
    // Định nghĩa các cột của bảng
    const columns = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read>[]>(
        () => [
            { header: "Mã file", accessorKey: "code" },
            { header: "Tên file", accessorKey: "name" },
            { header: "Loại file", accessorKey: "filecate" },
            { header: "Ngày hiệu lực", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.effectDate!), 'YYYY-MM-DD') },
            { header: "Ngày hết hạn", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.endDate!), 'YYYY-MM-DD') },
            { header: "Xem file", accessorKey: "viewfile", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Link", accessorKey: "filelink", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            {
                header: "Ngày cập nhật",
                //    accessorKey: "updateDate", Cell: ({ row }) => {
                //         const d = row.original.updateDate;
                //         return <>{d?.utils_date_dateToDDMMYYYString("vi-VN", { hour12: false })}</>; // hiển thị dạng: 01/01/2024, 12:05:25
                //     },
                accessorFn: (row) => `${new Date(row.updateDate!).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })} ${new Date(row.updateDate!).toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}`


            },
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
            {
                header: "Ngày sử dụng",
                accessorFn: (row) => `${new Date(row.usedate!).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })} ${new Date(row.usedate!).toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
            },
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
            <Text>Mã minh chứng: MC00252</Text>
            <Text><strong>Tên minh chứng: bộ đề cương chi tiết tất cả các môn học phần của CTĐT</strong></Text>
            <Text>Danh sách phiên bản file minh chứng</Text>
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
            <Text>Nội dung sử dụng</Text>
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
