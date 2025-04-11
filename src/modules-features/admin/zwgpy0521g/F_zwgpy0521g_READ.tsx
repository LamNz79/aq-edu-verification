'use client'
import { MyButton } from "@/components/Buttons/Button/MyButton";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Group, PasswordInput } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import F_zwgpy0521g_Update from "./F_zwgpy0521g_Update";
import F_zwgpy0521g_Delete from "./F_zwgpy0521g_Delete";

export interface I_zwgpy0521g {
    id?: number;
    phanHe?: string;
    hostMailServer?: string;
    outgoingPort?: number;
    incomingPort?: number;
    SSL?: boolean;
    userName?: string;
    password?: string;
}
export default function F_zwgpy0521g_Read() {
    const className = useQuery<I_zwgpy0521g[]>({
        queryKey: ["F_zwgpy0521g_Read"],
        queryFn: async () => {
            return mockData;
        }
    })
    const columns = useMemo<MRT_ColumnDef<I_zwgpy0521g>[]> (()=> [
        {
            header: "Phân hệ",
            accessorKey: "phanHe",
        }
        , 
        {
            header: "Host mail server",
            accessorKey: "hostMailServer",
        }, 
        {
            header: "Outgoing port",
            accessorKey: "outgoingPort",
        }, 
        {
            header: "Incoming port",
            accessorKey: "incomingPort",
        }, 
        {
            header: "SSL",
            accessorKey: "SSL",
            Cell: ({ cell }) => (
                cell.getValue() as boolean ? "true" : "false"
            )
        }, 
        {
            header: "Username",
            accessorKey: "userName",
        }, 
        {
            header: "Password",
            accessorKey: "password",
            Cell: ({ cell }) => (
                <PasswordInput value={cell.getValue() as string} readOnly />
            ),
        }
    ], [])
    if (className.isLoading) return "Đang tải dữ liệu...";
    if (className.isError) return "Lỗi tải dữ liệu";
    return (
        <MyFieldset title="Danh mục cấu hình mail">
            <MyDataTable
                enableRowSelection
                data = {className.data!}
                columns = {columns}
                renderTopToolbarCustomActions={({ table }) => (
                    <Group>
                        <MyButton crudType="create">
                            Thêm
                        </MyButton>
                        <MyButton crudType="import">
                            import
                        </MyButton>
                        <MyButton crudType="delete">
                            Xóa
                        </MyButton>
                    </Group>
                )}
                exportAble
                renderRowActions={({row})=>(
                    <MyCenterFull>
                    <F_zwgpy0521g_Update value={row.original}/>
                    <F_zwgpy0521g_Delete id={row.original.id!}/>
                    </MyCenterFull>
                    )
                }
            />
        </MyFieldset>
    );
}
const mockData: I_zwgpy0521g[] = [
        {
          phanHe: "Toàn hệ thống",
          hostMailServer: "smtp.gmail.com",
          outgoingPort: 589,
          incomingPort: 465,
          SSL: true,
          userName: "thanh@aqtech.vn",
          password: "password123"
        },
        {
          phanHe: "Phòng kế toán",
          hostMailServer: "smtp.office365.com",
          outgoingPort: 587,
          incomingPort: 993,
          SSL: true,
          userName: "ketoan@aqtech.vn",
          password: "office365pass"
        },
        {
          phanHe: "Phòng kỹ thuật",
          hostMailServer: "mail.aqtech.vn",
          outgoingPort: 465,
          incomingPort: 993,
          SSL: true,
          userName: "kythuat@aqtech.vn",
          password: "kythuatpass"
        },
        {
          phanHe: "Phòng nhân sự",
          hostMailServer: "smtp.mailtrap.io",
          outgoingPort: 2525,
          incomingPort: 143,
          SSL: false,
          userName: "nhansu@aqtech.vn",
          password: "mailtrap123"
        }
]