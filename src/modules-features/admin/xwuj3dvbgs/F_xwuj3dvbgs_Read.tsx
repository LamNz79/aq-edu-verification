'use client'
import { MyButton } from "@/components/Buttons/Button/MyButton"
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { MRT_ColumnDef } from "mantine-react-table"
import { U0DateToDDMMYYYString } from "@/utils/date"
import { Box, Button, Grid, Paper, Select } from "@mantine/core"
import { Text } from "@mantine/core"
import { IconTrash } from '@tabler/icons-react';
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset"
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput"
import { useState } from "react";
import { initialize } from "next/dist/server/lib/render-server"
import { useForm } from "@mantine/form"
import MySelect from "@/components/Combobox/Select/MySelect"
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData"
import MyDateInput from "@/components/Inputs/DateInput/MyDateInput"
export interface I_xwuj3dvbgs {
    id?: number; // STT
    standardCode?: string; // Mã tiêu chuẩn
    criteriaCode?: string; // Mã tiêu chí
    requirementCode?: string; // Mã yêu cầu
    requirementName?: string; // Tên yêu cầu    
    result?: "Đạt" | "Không đạt" | "Cần cải tiến"; // Kết quả
    note?: string; // Ghi chú
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;

    midtermReportDate?: Date | undefined; // Ngày báo cáo giữa kỳ
    finishUpdateDate?: Date | undefined; // Ngày hoàn thành cập nhật
}

const exportConfig = {
    fields: [
        { fieldName: "standardCode", fieldLabel: "Mã tiêu chuẩn", header: "Mã tiêu chuẩn" },
        { fieldName: "criteriaCode", fieldLabel: "Mã tiêu chí", header: "Mã tiêu chí" },
        { fieldName: "requirementCode", fieldLabel: "Mã yêu cầu", header: "Mã yêu cầu" },
        { fieldName: "requirementName", fieldLabel: "Tên yêu cầu", header: "Tên yêu cầu" },
        { fieldName: "result", fieldLabel: "Kết quả", header: "Kết quả" },
        { fieldName: "note", fieldLabel: "Ghi chú", header: "Ghi chú" },
        { fieldName: "midtermReportDate", fieldLabel: "Ngày báo cáo giữa kỳ", header: "Ngày báo cáo giữa kỳ" },
        { fieldName: "finishUpdateDate", fieldLabel: "Ngày hoàn thành cập nhật", header: "Ngày hoàn thành cập nhật" },
    ]
};

export default function F_xwuj3dvbgs_Read() {

    const ListOfresultQuery = useQuery<I_xwuj3dvbgs[]>({
        queryKey: [`ListOfresultQuery`],
        queryFn: async () => [
            {
                id: 1,
                standardCode: "TC001",
                criteriaCode: "C001",
                requirementCode: "R001",
                requirementName: "Chuẩn đầu ra của CTDT được xây dựng rà soát và điều chính theo quy trình định trước trong đó có sự tham gia của các BLQ",
                result: "Đạt",
                note: "Hoàn thành tốt nhiệm vụ",
                midtermReportDate: new Date(),
                finishUpdateDate: new Date(),

            },
            {
                id: 2,
                standardCode: "TC002",
                criteriaCode: "C002",
                requirementCode: "R002",
                requirementName: "CDR của CTDT được phát triển rõ ràng; phù hợp với mục tiêu của CTDT; sứ mạng; tầm nhìn và chiến lược của CSDT",
                result: "Không đạt",
                note: "Cần cải thiện hiệu suất làm việc",
                midtermReportDate: new Date(),
                finishUpdateDate: new Date(),
            },
            {
                id: 3,
                standardCode: "TC003",
                criteriaCode: "C003",
                requirementCode: "R003",
                requirementName: "CDT của CTDT được phổ biến đến các BLQ, giảng viên và NH hiểu rõ về CDT của CTDT",
                result: "Cần cải tiến",
                note: "Đang trong quá trình cải tiến",
                midtermReportDate: new Date(),
                finishUpdateDate: new Date(),
            },
        ],
    });

    const columns = useMemo<MRT_ColumnDef<I_xwuj3dvbgs>[]>(() => [
        {
            header: "Mã tiêu chuẩn",
            accessorKey: "standardCode",
        },
        {
            header: "Mã tiêu chí",
            accessorKey: "criteriaCode",
        },
        {
            header: "Mã yêu cầu/ mốc chuẩn",
            accessorKey: "requirementCode",
        },
        {
            header: "Tên yêu cầu / mốc chuẩn",
            accessorKey: "requirementName",
        },
        {
            header: "Kết quả",
            accessorKey: "result",
        },
        {
            header: "Nội dung cần khắc phục/ cải tiến",
            accessorKey: "note",
        },

        {
            header: "Ngày báo cáo giữa kỳ",
            accessorKey: "midtermReportDate",
            Cell: ({ cell }) => <MyDateInput defaultValue={cell.getValue() as Date | undefined}></MyDateInput>,

        },
        {
            header: "Ngày hoàn thành cập nhật",
            accessorKey: "finishUpdateDate",
            Cell: ({ cell }) => <MyDateInput defaultValue={cell.getValue() as Date | undefined}></MyDateInput>,
        },

        {
            header: "Người cập nhật",
            accessorKey: "nguoiCapNhat",
            enableColumnVisibility: false,
        },
        {
            header: "Ngày cập nhật",
            accessorKey: "ngayCapNhat",
            Cell: ({ cell }) => <Text>{U0DateToDDMMYYYString(cell.getValue<Date>())}</Text>,
            enableColumnVisibility: false,
        },
    ], []);
    if (ListOfresultQuery.isLoading) return "Đang tải dữ liệu...";
    if (ListOfresultQuery.isError) return "Không có dữ liệu...";


    return (
        <>
            <Paper p={"md"}>
                <Box>
                    <MyFieldset mt="20" title='Danh sách kết quả đánh giá yêu cầu/ mốc chuẩn'>
                        <Grid>
                            <Grid.Col>

                                <MyDataTable
                                    enableRowSelection={true}
                                    columns={columns}
                                    data={ListOfresultQuery.data!}
                                    renderTopToolbarCustomActions={() =>
                                        <>
                                            <Button color="green" >Lưu</Button>
                                            <AQButtonExportData
                                                isAllData={true}
                                                objectName="dmTHPB"
                                                data={ListOfresultQuery.data!}
                                                exportConfig={exportConfig}
                                            />
                                            <Button color="red" leftSection={<IconTrash />}>Xóa</Button>
                                        </>
                                    }
                                />
                            </Grid.Col>
                        </Grid>
                    </MyFieldset>
                </Box>
            </Paper></>
    );
}