"use client"
import AQButtonCreateByImportFile from '@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile';
import MyCenterFull from '@/components/CenterFull/MyCenterFull';
import { MyDataTable } from '@/components/DataDisplay/DataTable/MyDataTable';
import { U0DateToDDMMYYYString } from '@/utils/date';
import { Button, Fieldset, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react';

import F_pjbnqwljej_Modal from './F_pjbnqwljej_Modal';
import MyFlexColumn from '@/components/Layouts/FlexColumn/MyFlexColumn';
import AQButtonExportData from '@/components/Buttons/ButtonCRUD/AQButtonExportData';
import { IconTrash } from '@tabler/icons-react';
import baseAxios from '@/api/baseAxios';
import { MyFieldset } from 'aq-fe-framework/components';

interface Evidence {
    code: string;              // Mã minh chứng
    name: string;              // Tên minh chứng
    fileCode: string;          // Mã file minh chứng
    validFrom: Date;           // Ngày hiệu lực
    validTo: Date;             // Ngày hết hạn
    fileUrl?: string;          // Đường dẫn file (nếu có)
    relatedUrl?: string;       // Đường dẫn liên kề (nếu có)
    status: "Còn hạn" | "Hết hạn"; // Trạng thái
}
interface F_pjbnqwljej_Read {
    id: number;
    codeTieuChuan: string;
    codeTieuChi: string;
    requireCode: string;
    requireName: string;
    result: string;
    reportDate: Date;
    deadlineDate: Date;
    personUpdate: string;
    updateDate: Date;
    evidences: Evidence[];
}
export default function F_pjbnqwljej_Read() {

    // const AllQuery = useQuery<F_4hi65qkj5n_Read[]>({
    //     queryKey: [`F_rdrmqcfvux_Read`],
    //     queryFn: async () => {
    //         const response = await baseAxios.get("/COESubject/GetAll");
    //         return response.data.data || [];
    //       }
    // });




    const form_multiple = useForm<any>({
        initialValues: {
            importedData: []
        },
    })



    const exportConfig = {
        fields: [
            {
                fieldName: "code",
                header: "Mã môn học"
            },
            {
                fieldName: "name",
                header: "Tên môn học"
            },

        ]
    };



    const columns: MRT_ColumnDef<F_pjbnqwljej_Read>[] = [
        { header: "Mã tiêu chuẩn", accessorKey: "codeTieuChuan" },
        { header: "Mã tiêu chí", accessorKey: "codeTieuChi" },
        { header: "Mã yêu cầu/mốc chuẩn", accessorKey: "requireCode" },
        { header: "Tên yêu cầu/mốc chuẩn", accessorKey: "requireName" },
        { header: "Kết quả", accessorKey: "result" },
        {
            header: "Ngày báo cáo giữa kì",
            accessorKey: "reportDate",
            accessorFn: row => U0DateToDDMMYYYString(row.reportDate),
        },
        {
            header: "Hạn hoàn thành cập nhật",
            accessorKey: "deadlineDate",
            accessorFn: row => U0DateToDDMMYYYString(row.deadlineDate),
        },
        { header: "Người cập nhật", accessorKey: "personUpdate" },
        {
            header: "Ngày cập nhật",
            accessorKey: "updateDate",
            accessorFn: row => U0DateToDDMMYYYString(row.updateDate),
        },
    ];


    // if (AllQuery.isLoading) return "Đang tải dữ liệu..."
    // if (AllQuery.isError) return "Không có dữ liệu..."
    return (
        <MyFieldset title={`Danh sách kết quả đánh giá yêu cầu/mốc chuẩn`}>

            <MyFlexColumn>
                <MyDataTable

                    enableRowSelection={true}
                    enableRowNumbers={true}
                    renderTopToolbarCustomActions={({ table }) => {
                        return (
                            <>
                                <Group>
                                    <Button color="green" >Lưu</Button>
                                    <AQButtonExportData
                                        isAllData={true}
                                        objectName="dm_mh"
                                        data={mockData || []}
                                        exportConfig={exportConfig}
                                    />
                                    <Button color="red" >Xóa</Button>
                                </Group>
                            </>
                        )
                    }}
                    columns={columns}
                    data={mockData || []}
                    renderRowActions={({ row }) => {
                        return (

                            <MyCenterFull>
                                <F_pjbnqwljej_Modal data={row.original} />

                            </MyCenterFull>
                        )
                    }}
                />
            </MyFlexColumn>
        </MyFieldset>
    )
}
const mockData: F_pjbnqwljej_Read[] = [
    {
        id: 1,
        codeTieuChuan: "TC01",
        codeTieuChi: "TC 1.1",
        requireCode: "M001",
        requireName: "Chuẩn đầu ra của CTĐT được xây dựng, rà soát và điều chỉnh theo quy trình định trước; trong đó có sự tham gia của các BLQ",
        result: "Đạt",
        reportDate: new Date("2025-04-15"),
        deadlineDate: new Date("2025-04-20"),
        personUpdate: "Nguyễn Văn A",
        updateDate: new Date("2025-05-01"),
        evidences: [
            {
                code: "MC0001",
                name: "Hình ảnh đề cương",
                fileCode: "F000521",
                validFrom: new Date("2025-01-01"),
                validTo: new Date("2025-04-30"),
                fileUrl: "/files/f000521.jpg",
                relatedUrl: "",
                status: "Hết hạn"
            },
            {
                code: "MC0006",
                name: "Video quá trình thực nghiệm",
                fileCode: "F000523",
                validFrom: new Date("2025-01-01"),
                validTo: new Date("2025-09-25"),
                fileUrl: "/files/f000523.mp4",
                relatedUrl: "",
                status: "Còn hạn"
            }
        ]
    },
    {
        id: 2,
        codeTieuChuan: "TC01",
        codeTieuChi: "TC 1.2",
        requireCode: "M001",
        requireName: "CDR của CTĐT được phát triển rõ ràng; phù hợp với mục tiêu của CTĐT; sứ mạng, tầm nhìn và chiến lược của CSDT",
        result: "Chưa đạt",
        reportDate: new Date("2025-04-10"),
        deadlineDate: new Date("2025-04-22"),
        personUpdate: "Trần Thị B",
        updateDate: new Date("2025-05-02"),
        evidences: [
            {
                code: "MC0002",
                name: "Video quá trình thực nghiệm",
                fileCode: "F000523",
                validFrom: new Date("2025-01-01"),
                validTo: new Date("2025-09-25"),
                fileUrl: "/files/f000523.mp4",
                relatedUrl: "",
                status: "Còn hạn"
            },
            {
                code: "MC0003",
                name: "Bản scan báo cáo",
                fileCode: "F000524",
                validFrom: new Date("2025-02-15"),
                validTo: new Date("2025-08-15"),
                fileUrl: "/files/f000524.pdf",
                relatedUrl: "",
                status: "Còn hạn"
            }
        ]
    },
    {
        id: 3,
        codeTieuChuan: "TC01",
        codeTieuChi: "TC 1.3",
        requireCode: "M001",
        requireName: "CDR của CTĐT được phổ biến đến các BLQ, giảng viên và NH hiểu rõ về CTĐT của CTĐT",
        result: "Đạt",
        reportDate: new Date("2025-04-18"),
        deadlineDate: new Date("2025-04-25"),
        personUpdate: "Lê Văn C",
        updateDate: new Date("2025-05-03"),
        evidences: [
            {
                code: "M001",
                name: "Ảnh chụp sản phẩm",
                fileCode: "F000525",
                validFrom: new Date("2025-03-01"),
                validTo: new Date("2025-06-01"),
                fileUrl: "/files/f000525.png",
                relatedUrl: "",
                status: "Còn hạn"
            }
        ]
    }
];


