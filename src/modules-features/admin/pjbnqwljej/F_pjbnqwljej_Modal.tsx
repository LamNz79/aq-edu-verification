"use client"
import baseAxios from '@/api/baseAxios';
import { MRT_ColumnDef } from 'mantine-react-table';
import { Fieldset, Group, Text, Textarea } from '@mantine/core';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { MyButtonModal, MyDataTable, MyFieldset, MyTextEditor } from 'aq-fe-framework/components';
import { useEffect, useState } from 'react';
import MyFlexColumn from '@/components/Layouts/FlexColumn/MyFlexColumn';
import MyButtonViewPDF from '@/components/Buttons/ButtonViewPDF/MyButtonViewPDF';
import { U0DateToDDMMYYYString } from '@/utils/date';
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

export default function F_rdrmqcfvux_Update({ data }: { data: F_pjbnqwljej_Read }) {
    const disclosure = useDisclosure();


    const evidenceColumns: MRT_ColumnDef<Evidence>[] = [
        {
            header: "Mã minh chứng",
            accessorKey: "code",
        },
        {
            header: "Tên minh chứng",
            accessorKey: "name",
        },
        {
            header: "Mã file minh chứng",
            accessorKey: "fileCode",
        },
        {
            header: "Ngày hiệu lực",
            accessorFn: row => U0DateToDDMMYYYString(row.validFrom),
            id: "validFrom",
        },
        {
            header: "Ngày hết hạn",
            accessorFn: row => U0DateToDDMMYYYString(row.validTo),
            id: "validTo",
        },
        {
            header: "Xem file",
            enableSorting: false,
            size: 90,
            mantineTableBodyCellProps: {
                align: 'center',
            },
            accessorFn: (row) =>
                row.fileUrl == null || row.fileUrl == "" ? "" : <MyButtonViewPDF />,
        },
        {
            header: "Xem liên kết",
            accessorKey: "relatedUrl",
            // Cell: ({ cell }) => {
            //     const url = cell.getValue();
            //     return url ? (
            //         <a href={url} target="_blank" rel="noopener noreferrer">Xem</a>
            //     ) : null;
            // },
        },
        {
            header: "Trạng thái",
            accessorKey: "status",
        }
    ];


    const form = useForm<F_pjbnqwljej_Read>({

        initialValues: data,
    });




    return (
        <MyButtonModal disclosure={disclosure} variant='subtle' modalSize={"80%"} label='Xem' title='Chi tiết khắc phục/ cải tiến'>
            <MyFlexColumn gap={0} mb={5}>
                <Text>Kết quả: {data.result}</Text>
                <Text>Nội dung cần khắc phục/ cải tiến: Minh chứng chưa đúng nội dung báo cáo</Text>
            </MyFlexColumn>

            <MyFlexColumn mt={10}>
                <Text>Tổng hợp báo cáo yêu cầu/ mốc chuẩn</Text>
                <MyTextEditor autoHiddenToolBar onChange={() => { }}></MyTextEditor>
            </MyFlexColumn>

            <MyFieldset title="Danh sách minh chứng">
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    columns={evidenceColumns}
                    data={data.evidences || []}
                /></MyFieldset>
        </ MyButtonModal>
    )
}

