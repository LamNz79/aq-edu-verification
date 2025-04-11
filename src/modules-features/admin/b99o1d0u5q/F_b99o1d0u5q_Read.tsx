'use client'
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
}

export default function F_b99o1d0u5q_Read() {
    const className = useQuery<I_b99o1d0u5q[]>({
        queryKey: ["F_b99o1d0u5q_Read"],
        queryFn: async () => {
            return mockData;
        }
    });
    const columns = useMemo<MRT_ColumnDef<I_b99o1d0u5q>[]>(() => [
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
    ], []);
    if (className.isLoading) return "Đang tải dữ liệu...";
    if (className.error) return "Lỗi tải dữ liệu";
    return (
        <MyFieldset title="Danh sách tiêu chí">
            <MyDataTable
                columns={columns}
                data={className.data!}
                enableRowActions
                //enableEditing
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <F_b99o1d0u5q_Update values={row.original} />
                        <F_b99o1d0u5q_Delete id={row.original.id!} />
                    </MyCenterFull>
                )}
                exportAble
                renderTopToolbarCustomActions={({ table }) => (
                    <Group>
                        <F_b99o1d0u5q_Update />
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
        moTa: "",
        chuKyBaoCao: "TC001",
        ngayBatDau: new Date("2021-01-01"),
        ghiChu: "TC001"
    }
]
