'use client'
import { Interface } from "readline";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { U0DateToDDMMYYYString } from "@/utils/date";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import F_b99o1d0u5q_Delete from "./F_b99o1d0u5q_Delete";
import F_b99o1d0u5q_Update from "./F_b99o1d0u5q_Update";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { useForm } from "@mantine/form";
import { Group } from "@mantine/core";
export interface I_b99o1d0u5q {
    id?: number;
    maTieuChuan?: string;
    maTieuChi?: string;
    tenTieuChi?: string;
    moTa?: string;
    chuKyBaoCao?: string;
    ngayBatDau?: Date;
    ghiChu?: string;
    nguoiCapNhat?: string;
    ngayCapNhat?: Date;
    //thaoTac?: string;
}

export default function F_b99o1d0u5q() {
    const className = useQuery<I_b99o1d0u5q[]>({
        queryKey: ["I_b99o1d0u5q_data"],
        queryFn: async () => {
            return mockData;
        }
    });
    const columns = useMemo<MRT_ColumnDef<I_b99o1d0u5q>[]> ( ()=>[
        {
            header: "Mã tiêu chuẩn",
            accessorKey: "maTieuChuan"
        },
        {
            header: "Mã tiêu chí",  
            accessorKey: "maTieuChi"
        },
        {
            header: "Tên tiêu chí",
            accessorKey: "tenTieuChi"
        },
        {
            header: "Mô tả",
            accessorKey: "moTa"
        },
        {
            header: "Chu kỳ báo cáo",
            accessorKey: "chuKyBaoCao"
        },
        {
            header: "Ngày bắt đầu chu kỳ",
            accessorKey: "ngayBatDau",
            accessorFn(originalRow) {
                return U0DateToDDMMYYYString(new Date(originalRow.ngayBatDau!));
            },
        },
        {
            header: "Ghi chú",
            accessorKey: "ghiChu",
        },
        {
            header: "Người cập nhật",
            accessorKey: "nguoiCapNhat",
            enableHiding: true,
            size: 1
        },
        {
            header: "Ngày cập nhật",
            accessorKey: "ngayCapNhat",
            accessorFn(originalRow) {
                return U0DateToDDMMYYYString(new Date(originalRow.ngayCapNhat!));
            },
            enableHiding: true,
            size: 1
        }
    ], []);
    if (className.isLoading) return "Đang tải dữ liệu...";
    if (className.error) return "Lỗi tải dữ liệu";
    return (
        <MyFieldset title="Danh sách tiêu chí">
            <MyDataTable
                columns = {columns}
                data = {className.data!}
                initialState={{
                    columnVisibility: {
                        nguoiCapNhat: false,
                        ngayCapNhat: false
                    }
                }}
                enableRowActions
                //enableEditing
                renderRowActions={({ row }) => [
                    <MyCenterFull>
                         <F_b99o1d0u5q_Update value = {row.original}/>
                         <F_b99o1d0u5q_Delete id = {row.original.id!}/>
                    </MyCenterFull>
                ]}
                exportAble
                renderTopToolbarCustomActions={({table}) => (
                    <Group>
                        <MyButton crudType="create">
                            Thêm 
                        </MyButton>
                        <MyButton crudType="import">
                            Import
                        </MyButton>
                        <MyButton crudType="delete">
                            Xóa
                        </MyButton>                    
                    </Group>
                )}

            />
        </MyFieldset>
    )
}
const mockData: I_b99o1d0u5q[] = [
    {
        id: 1,
        maTieuChuan: "TC001",
        maTieuChi: "TC001",
        tenTieuChi: "TC001",
        moTa:"" ,
        chuKyBaoCao: "TC001",
        ngayBatDau: new Date("2021-01-01"),
        ghiChu: "TC001"
    }
]
