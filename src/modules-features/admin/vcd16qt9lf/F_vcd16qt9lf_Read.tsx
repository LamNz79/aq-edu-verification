'use client'
import { MyButton } from "@/components/Buttons/Button/MyButton"
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { useState } from "react"
import { MRT_ColumnDef } from "mantine-react-table"
import { U0DateToDDMMYYYString } from "@/utils/date"
import { Box, Button, Fieldset, Flex, Grid, GridCol, Group, Paper, Select, Tabs } from "@mantine/core"
import { Text } from "@mantine/core"
import { IconPhoto, IconMessageCircle, IconSettings, IconTrash } from '@tabler/icons-react';
import MySelect from "@/components/Combobox/Select/MySelect"
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData"
import AQSelectTableByOpenModal from "@/components/Buttons/ButtonModal/AQSelectTableByOpenModal"

import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset"
import MyCenterFull from "@/components/CenterFull/MyCenterFull"
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile"
import { useForm } from "@mantine/form"
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput"
export interface I_vcd16qt9lf {
    id?: number; // STT
    standardCode?: string; // Mã tiêu chuẩn
    criteriaCode?: string; // Mã tiêu chí
    requirementCode?: string; // Mã yêu cầu
    requirementName?: string; // Tên yêu cầu    
    result?: "Đạt" | "Không đạt" | "Cần cải tiến"; // Kết quả
    note?: string; // Ghi chú
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

export default function F_vcd16qt9lf_Read() 
{
    const [fileData, setFileData] = useState<any[]>([]);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: []
        },
    });
    const ListOfresultQuery = useQuery<I_vcd16qt9lf[]>({
         queryKey: [`ListOfresultQuery`],
         queryFn: async () => [
             {
              id: 1,
              standardCode: "TC001",
              criteriaCode: "C001",
              requirementCode: "R001",
              requirementName: "Yêu cầu 1",
              result: "Đạt",
              note: "Hoàn thành tốt nhiệm vụ",
             },
             {
              id: 2,
              standardCode: "TC002",
              criteriaCode: "C002",
              requirementCode: "R002",
              requirementName: "Yêu cầu 2",
              result: "Không đạt",
              note: "Cần cải thiện hiệu suất làm việc",
             },
             {
              id: 3,
              standardCode: "TC003",
              criteriaCode: "C003",
              requirementCode: "R003",
              requirementName: "Yêu cầu 3",
              result: "Cần cải tiến",
              note: "Đang trong quá trình cải tiến",
             },
         ],
        });
           const columns = useMemo<MRT_ColumnDef<I_vcd16qt9lf>[]>(() => [
                       {
                           header: "STT",
                           accessorKey: "id",
                       },
                       {
                           header: "Mã tiêu chuẩn",
                           accessorKey: "standardCode",
                       },
                       {
                           header: "Mã tiêu chí",
                           accessorKey: "criteriaCode",
                       },
                       {
                           header: "Mã yêu cầu",
                           accessorKey: "requirementCode",
                       },
                       {
                           header: "Tên yêu cầu",
                           accessorKey: "requirementName",
                       },
                       {
                           header: "Kết quả",
                           accessorKey: "result",
                           Cell: ({ cell, row, table }) => (
                               <Select
                                   data={[
                                       { value: "Đạt", label: "Đạt" },
                                       { value: "Không đạt", label: "Không đạt" },
                                       { value: "Cần cải tiến", label: "Cần cải tiến" },
                                   ]}
                                   value={cell.getValue<string>()}
                                   onChange={(value) => {
                                       
                                   }}
                               />
                           ),
                       },
                       {
                           header: "Ghi chú",
                           accessorKey: "note",
                            Cell: ({ cell, row, table }) => (
                                 <MyTextInput
                                      value={cell.getValue<string>()}
                                      onChange={(event) => {
                                      }}
                                 />
                            ),
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
                    <MyFieldset mt="20"title='Danh sách kết quả đánh giá yêu cầu/ mốc chuẩn'>
                        <Grid>
                            <Grid.Col>

                                <MyDataTable
                                    enableRowSelection={true}
                                    columns={columns}
                                    data={ListOfresultQuery.data!}
                                    renderTopToolbarCustomActions={() => 
                                    <>
                                    <>
                                    </>
                                    <MyButton crudType="export"></MyButton>
                                    <Button color="red" leftSection={<IconTrash />}>Xóa</Button></>} 
                                        
                                        />
                            </Grid.Col>
                        </Grid>
                    </MyFieldset>
                </Box>
                </Paper></>
            );
}