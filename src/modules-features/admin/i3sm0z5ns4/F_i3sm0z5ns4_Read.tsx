'use client';

import MySelect from "@/components/Combobox/Select/MySelect";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";

interface Ii3sm0z5ns4_ReadProps {
    maTieuChuan: string;
    maTieuChi: string;
    maMocChuan: string;
    tenMocChuan: string;
    ghiChu: string;
    donViPhuTrach: string;
    nhanSuPhuTrach: string;
}

interface ISelectOption {
    label: string;
}

const mockDonViPhuTrach: ISelectOption[] = [
    {
        label: 'Phòng đào tạo',
    },
    {
        label: 'Phòng nhân sự',
    }
]

const mockNhanSuPhuTrach: ISelectOption[] = [
    {
        label: 'Nguyễn Văn A',
    },
    {
        label: 'Nguyễn Văn B',
    }
]

export default function F_i3sm0z5ns4_Read() {
    //===initiate===

    //===pseudo data===
    const donViPhuTrachQuery = useQuery<ISelectOption[]>({
        queryKey: ['Fi3sm0z5ns4_DonViPhuTrach_Read'],
        queryFn: async () => mockDonViPhuTrach,
    });

    const nhanSuPhuTrachQuery = useQuery<ISelectOption[]>({
        queryKey: ['Fi3sm0z5ns4_NhanSuPhuTrach_Read'],
        queryFn: async () => mockNhanSuPhuTrach,
    });
    
    //===function===
    const exportConfig = {
        fields: [
            { fieldName: 'maTieuChuan', header: 'Mã tiêu chuẩn'},
            { fieldName: 'maTieuChi', header: 'Mã tiêu chí' },
            { fieldName: 'maMocChuan', header: 'Mã mốc chuẩn' },
            { fieldName: 'tenMocChuan', header: 'Tên mốc chuẩn' },
            { fieldName: 'ghiChu', header: 'Ghi chú' },
            { fieldName: 'donViPhuTrach', header: 'Đơn vị phụ trách' },
            { fieldName: 'nhanSuPhuTrach', header: 'Nhân sự phụ trách' },
        ],
    };

    //===component===
    const danhSachBoTieuChuanColumns = useMemo<MRT_ColumnDef<Ii3sm0z5ns4_ReadProps>[]>(()=>[
        { fieldName: 'maTieuChuan', header: 'Mã tiêu chuẩn'},
        { fieldName: 'maTieuChi', header: 'Mã tiêu chí' },
        { fieldName: 'maMocChuan', header: 'Mã mốc chuẩn' },
        { fieldName: 'tenMocChuan', header: 'Tên mốc chuẩn' },
        { fieldName: 'ghiChu', header: 'Ghi chú' },
        { fieldName: 'donViPhuTrach', header: 'Đơn vị phụ trách', 
            Cell: ({ row }) => (
                <></>
            ),
        },
        { fieldName: 'nhanSuPhuTrach', header: 'Nhân sự phụ trách', 
            Cell: ({ row }) => (
                <></>
            ),
        },
    ],[]);

    return(
        <>
            <MyFieldset title="Danh sách mốc chuẩn">
                
            </MyFieldset>
        </>
    )
}