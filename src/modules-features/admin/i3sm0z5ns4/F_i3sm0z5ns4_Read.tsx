'use client';

import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";

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

    return(
        <>
            <MyFieldset title="Danh sách mốc chuẩn">
                
            </MyFieldset>
        </>
    )
}