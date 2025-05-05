'user client'
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
import F_o4e65ewrwy_Create from "./F_o4e65ewrwy_Create"
import F_o4e65ewrwy_Update from "./F_o4e65ewrwy_Update"
import F_o4e65ewrwy_Delete from "./F_o4e65ewrwy_Delete"
import MyCenterFull from "@/components/CenterFull/MyCenterFull"
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile"
import { useForm } from "@mantine/form"
export interface I_o4e65ewrwy {
    id?: number; // STT
    agentCode?: string //Mã đơn vị
    agentName?: string //Tên đơn vị
    agentType?: string //Loại đơn vị
    affiliatedOf?:string //Trực thuộc
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}
export default function F_o4e65ewrwy_Read() 
{
    const [fileData, setFileData] = useState<any[]>([]);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: []
        },
    });
       const ListOfagentDirectoryQuery = useQuery<I_o4e65ewrwy[]>({
               queryKey: [`ListOfagentDirectoryQuery`],
               queryFn: async () => [
                   {
                       id: 1,
                       agentCode:"K.CNTT",
                       agentName:"Khoa Công nghệ thông tin",
                       agentType:"Khoa",
                       affiliatedOf:"Bộ môn cơ sở dữ liệu",
                       nguoiCapNhat: "Quản trị viên",
                       ngayCapNhat: new Date("2024-12-23")
                   },
                   {
                    id: 1,
                    agentCode:"K.CNTT.DL",
                    agentName:"Bộ môn cơ sở dữ liệu",
                    agentType:"Bộ môn",
                    affiliatedOf:"Khoa Công nghệ thông tin",
                    nguoiCapNhat: "Quản trị viên",
                    ngayCapNhat: new Date("2024-12-23")
                },
               
       
               ],
           });
           const columns = useMemo<MRT_ColumnDef<I_o4e65ewrwy>[]>(() => [
                       
                       {
                           header: "Mã đơn vị",
                           accessorKey: "agentCode",
                       },
                       {
                           header: "Tên đơn vị",
                           accessorKey: "agentName",
                       },
                       {
                           header: "Loại đơn vị",
                           accessorKey: "agentType",
                       },
                       {
                            header: "Trực thuộc",
                            accessorKey: "affiliatedOf",
                        },
                       {
                           header: "Người cập nhật",
                           accessorKey: "nguoiCapNhat",
               
                       },
                       {
                           header: "Ngày cập nhật",
                           accessorKey: "ngayCapNhat",
                           accessorFn(originalRow) {
                               return U0DateToDDMMYYYString(new Date(originalRow.ngayCapNhat!));
                           },
               
                       },
                   ], []);
                   if (ListOfagentDirectoryQuery.isLoading) return "Đang tải dữ liệu...";
                   if (ListOfagentDirectoryQuery.isError) return "Không có dữ liệu...";
 
        return (
            <>
            <Paper p={"md"}>
            <Box>
                    <MyFieldset mt="20"title='Danh mục đơn vị'>
                        <Grid>
                            <Grid.Col>

                                <MyDataTable
                                    enableRowSelection={true}
                                    columns={columns}
                                    data={ListOfagentDirectoryQuery.data!}
                                    renderTopToolbarCustomActions={() => 
                                    <>
                                    <>
                                    <F_o4e65ewrwy_Create onSubmit={() => { }} />
                                    <MyButton crudType="import"></MyButton>
                                    </>
                                    <MyButton crudType="export"></MyButton>
                                            <Button color="red" leftSection={<IconTrash />}>Xóa</Button></>} 
                                        renderRowActions={({ row }) => (
                                            <MyCenterFull>
                                                <F_o4e65ewrwy_Update data={row.original} />
                                                <F_o4e65ewrwy_Delete id={row.original.id!} agentCode={row.original.agentCode!} />
                                            </MyCenterFull>
                                        )}
                                        
                                        />
                            </Grid.Col>
                        </Grid>
                    </MyFieldset>
                </Box>
                </Paper></>
            );
}