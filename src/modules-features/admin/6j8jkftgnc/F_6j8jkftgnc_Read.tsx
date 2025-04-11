'use client';

import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_6j8jkftgnc_Delete_Datarow from "./F_6j8jkftgnc_Delete_Datarow";
import F_6j8jkftgnc_Create from "./F_6j8jkftgnc_Create";

interface F6j8jkftgnc_ReadProps {
    maBoDem: string; // mã bộ đếm
    tenBoDem: string; // tên bộ đếm
    loaiNghiepVu: string; // loại nghiệp vụ
    loadiDoiTuong: string; // loại đối tượng
}

const mockData: F6j8jkftgnc_ReadProps[] = [
    {
        maBoDem: 'HSTS',
        tenBoDem: 'Mã hồ sơ thí sinh',
        loaiNghiepVu: 'Hồ sơ thí sinh',
        loadiDoiTuong: 'Toàn trường',
    }
]

export default function F_6j8jkftgnc_Read() {
    //===initiate===
    const [importData, setImportData] = useState(false);
    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    });

    //===Pseudo data===
    const danhMucBoDemQuery = useQuery({
        queryKey: ['F_6j8jkftgnc_ReadQuery'],
        queryFn: async () => mockData
    });

    //===config===
    const exportConfig = {
        fields:[
            {
                fieldName: "maBoDem", 
                header: "Mã bộ đếm"
            },
            {
                fieldName: "tenBoDem", 
                header: "Tên bộ đếm"
            },
            {
                fieldName: "loaiNghiepVu", 
                header: "Loại nghiệp vụ"
            },
            {
                fieldName: "loaiDoiTuong", 
                header: "Loại đối tượng"
            },
        ]
    }

    //===function===
    const danhMucBoDemColumns = useMemo<MRT_ColumnDef<F6j8jkftgnc_ReadProps>[]>(() => [    
        {
            accessorKey: 'maBoDem',
            header: 'Mã bộ đếm',
        },
        {
            accessorKey: 'tenBoDem',
            header: 'Tên bộ đếm',
        },
        {
            accessorKey: 'loaiNghiepVu',
            header: 'Loại nghiệp vụ',
        },
        {
            accessorKey: 'loaiDoiTuong',
            header: 'Loại đối tượng',
        },
    ], []);

    //===handlers===
    if (danhMucBoDemQuery.isLoading) return "Đang tải...";
    if (danhMucBoDemQuery.isError) return "Có lỗi xảy ra!";

    return(
        <>
            <MyDataTable
                columns={danhMucBoDemColumns}
                data={danhMucBoDemQuery.data!}
                enableRowSelection={true}
                enableRowNumbers={true}
                renderTopToolbarCustomActions={()=>
                <>
                    <F_6j8jkftgnc_Create/>
                    <AQButtonCreateByImportFile 
                        setImportedData={setImportData}
                        form={form}
                        onSubmit={() => console.log(form.values) }

                    />
                    <AQButtonExportData
                        exportConfig={exportConfig}
                        data={danhMucBoDemQuery.data!}
                        isAllData={true}
                        objectName={'Danh sách bộ đếm'}
                    />
                    <></>
                </>
                }
                renderRowActions={({ row }) => 
                <>

                    <F_6j8jkftgnc_Delete_Datarow id={row.original.maBoDem}/>
                </>
                }
            />
        </>
    );
}