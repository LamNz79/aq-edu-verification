'use client'
import { MyDataTable } from '@/components/DataDisplay/DataTable/MyDataTable';
import { useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react'
import { Button, Group, Text } from '@mantine/core';
import MyFieldset from '@/components/Inputs/Fieldset/MyFieldset';
import { MyButton } from '@/components/Buttons/Button/MyButton';
import F_mc1b1zpbg6_Create from './F_mc1b1zpbg6_Create';
import MyCenterFull from '@/components/CenterFull/MyCenterFull';
import F_mc1b1zpbg6_Delete from './F_mc1b1zpbg6_Delete';
import F_mc1b1zpbg6_Update from './F_mc1b1zpbg6_Update';
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { IconTrash } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { MyButtonViewPDF } from 'aq-fe-framework/components';

interface IStandardSet {
    id: number;
    maBoTieuChuan: string;
    tenBoTieuChuan: string;
    tenBoTieuChuanEg: string;
    toChucKiemDinh: string;
    phienBan: string;
    namBanHanh: number;
    fileTieuChuan: string;
    chuKyDanhGiaLai: string; // Changed to string
    ghiChu: string;
}

const mockData: IStandardSet[] = [
    {
        id: 1,
        maBoTieuChuan: "AUN-QA",
        tenBoTieuChuan: "ASEAN University Network Quality Assurance",
        tenBoTieuChuanEg: "ASEAN University Network Quality Assurance",
        toChucKiemDinh: "AUN",
        phienBan: "4.0",
        namBanHanh: 2021,
        fileTieuChuan: "Quyết định số 432",
        chuKyDanhGiaLai: "5 năm", // Changed to string
        ghiChu: "Bộ tiêu chuẩn đánh giá chất lượng giáo dục đại học khu vực ASEAN",
    },
    {
        id: 2,
        maBoTieuChuan: "ABET",
        tenBoTieuChuan: "Accreditation Board for Engineering and Technology",
        tenBoTieuChuanEg: "Accreditation Board for Engineering and Technology",
        toChucKiemDinh: "ABET",
        phienBan: "2022-2023",
        namBanHanh: 2022,
        fileTieuChuan: "Quyết định số 432",
        chuKyDanhGiaLai: "6 năm", // Changed to string
        ghiChu: "Bộ tiêu chuẩn kiểm định chất lượng các chương trình kỹ thuật và công nghệ",
    },
];

export default function F_mc1b1zpbg6_Read() {
    const [importData, setImportData] = useState(false);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: []
        },
    });

    const exportConfig = {
        fields: [
            { fieldName: "id", header: "ID" },
            { fieldName: "maBoTieuChuan", header: "Mã bộ tiêu chuẩn" },
            { fieldName: "tenBoTieuChuan", header: "Tên bộ tiêu chuẩn" },
            { fieldName: "tenBoTieuChuanEg", header: "Tên bộ tiêu chuẩn Eg" },
            { fieldName: "toChucKiemDinh", header: "Tổ chức kiểm định" },
            { fieldName: "phienBan", header: "Phiên bản" },
            { fieldName: "namBanHanh", header: "Năm ban hành" },
            { fieldName: "fileTieuChuan", header: "File tiêu chuẩn" },
            { fieldName: "chuKyDanhGiaLai", header: "Chu kỳ đánh giá lại" },
            { fieldName: "ghiChu", header: "Ghi chú" },
        ],
    };

    const standardsQuery = useQuery<IStandardSet[]>({
        queryKey: [`F_mc1b1zpbg6_Read`],
        queryFn: async () => {
            // In a real application, replace this with actual API call
            // const response = await baseAxios.get("/Standards/GetAll");
            // return response.data.data || [];
            return mockData;
        },
        refetchOnWindowFocus: false,
    });


    const columns = useMemo<MRT_ColumnDef<IStandardSet>[]>(() => [
        { accessorKey: "maBoTieuChuan", header: "Mã bộ tiêu chuẩn" },
        { accessorKey: "tenBoTieuChuan", header: "Tên bộ tiêu chuẩn" },
        { accessorKey: "toChucKiemDinh", header: "Tổ chức kiểm định" },
        { accessorKey: "phienBan", header: "Phiên bản" },
        { accessorKey: "namBanHanh", header: "Năm ban hành" },
        {
            accessorKey: "file", header: "File tiêu chuẩn",
            accessorFn: (row) => <MyCenterFull><MyButtonViewPDF id={row.id} /></MyCenterFull>
        },
        { accessorKey: "chuKyDanhGiaLai", header: "Chu kỳ đánh giá lại" },
        { accessorKey: "ghiChu", header: "Ghi chú" },
    ], []);

    if (standardsQuery.isLoading) return <Text>Đang tải dữ liệu...</Text>;
    if (standardsQuery.isError) return <Text color="red">Không có dữ liệu...</Text>;

    return (
        <MyFieldset title='Danh sách bộ tiêu chuẩn'>
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={standardsQuery.data!}
                renderTopToolbarCustomActions={() => (
                    <Group>
                        <F_mc1b1zpbg6_Create />
                        <AQButtonCreateByImportFile
                            setImportedData={setImportData}
                            form={form_multiple}
                            onSubmit={() => console.log(form_multiple.values)}
                        >
                            Import
                        </AQButtonCreateByImportFile>
                        <AQButtonExportData
                            isAllData={true}
                            objectName="dsBoTieuChuan"
                            data={standardsQuery.data!}
                            exportConfig={exportConfig}
                        />
                        <Button leftSection={<IconTrash />} color="red">
                            Xóa
                        </Button>
                    </Group>
                )}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <F_mc1b1zpbg6_Update values={row.original} />
                        <F_mc1b1zpbg6_Delete id={row.original.maBoTieuChuan} />
                    </MyCenterFull>
                )}
            />
        </MyFieldset>
    )
}