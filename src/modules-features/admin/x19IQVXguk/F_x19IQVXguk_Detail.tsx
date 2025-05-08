'use client';
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";
import { Text } from "@mantine/core";
import { MyButtonModal, MyButtonViewPDF, MyDataTable } from "aq-fe-framework/components";
import { useDisclosure } from "@mantine/hooks";
import { utils_date_dateToDDMMYYYString } from "aq-fe-framework/utils";

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
export default function F_x19IQVXguk_Detail() {
    const disclosure = useDisclosure(false)

    // Query lấy dữ liệu từ server
    const query = useQuery<I_x19IQVXguk_Read[]>({
        queryKey: ["F_x19IQVXguk_Detail"],
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

    // Định nghĩa các cột của bảng
    const columnListFile = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read>[]>(
        () => [
            { header: "Mã file", accessorKey: "code" },
            { header: "Tên file", accessorKey: "name" },
            { header: "Loại file", accessorKey: "filecate" },
            { header: "Ngày hiệu lực", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.effectDate!)) },
            { header: "Ngày hết hạn", accessorFn: (row) => utils_date_dateToDDMMYYYString(new Date(row.endDate!)) },
            { header: "Xem file", accessorKey: "viewfile", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
            { header: "Link", accessorKey: "filelink", Cell: ({ row }) => <MyButtonViewPDF label="Xem" /> },
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
        ],
        []
    );
    const columnsDateUse = useMemo<MRT_ColumnDef<I_x19IQVXguk_Read2>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "codetc" },
            { header: "Mã tiêu chí", accessorKey: "codetchi" },
            { header: "Mã yêu cầu/ mốc chuẩn", accessorKey: "codeyc" },
            { header: "Nội dung", accessorKey: "nd" },
            {
                header: "Ngày sử dụng",
                accessorFn: (row) => {
                    const date = utils_date_dateToDDMMYYYString(row.usedate!);
                    const time = row.usedate!.toLocaleTimeString("VI");
                    return `${date} ${time}`
                }
            },
            { header: "Người sử dụng", accessorKey: "nguoisudung" },
            { header: "Đơn vị sử dụng", accessorKey: "dvsudung" },
        ],
        []
    );

    // Xử lí trạng thái dữ liệu
    if (query.isLoading) return "Đang tải dữ liệu...";
    if (query.isError) return "Không có dữ liệu";

    return (<>
        <MyButtonModal disclosure={disclosure} label="Xem" modalSize={"90%"} title="Chi tiết kỳ báo cáo">
            <Text>Mã minh chứng: MC00252</Text>
            <Text><strong>Tên minh chứng: Bộ đề cương chi tiết tất cả các môn học phần của CTĐT</strong></Text>
            <Text>Danh sách phiên bản file minh chứng</Text>
            <MyDataTable
                enableRowSelection={true}
                enableRowNumbers={true}
                columns={columnListFile}
                data={query.data!}
            />
            <Text>Nội dung sử dụng</Text>
            <MyDataTable
                enableRowSelection={true}
                enableRowNumbers={true}
                columns={columnsDateUse}
                data={query2.data!}
            />
        </MyButtonModal>
    </>);
}
