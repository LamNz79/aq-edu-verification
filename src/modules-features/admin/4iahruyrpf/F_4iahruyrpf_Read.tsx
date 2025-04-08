'use client'
import { MyDataTable } from '@/components/DataDisplay/DataTable/MyDataTable';
import { useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useEffect, useMemo, useState } from 'react'
import { Group, Text } from '@mantine/core';
import MyFieldset from '@/components/Inputs/Fieldset/MyFieldset';
import { MyButton } from '@/components/Buttons/Button/MyButton';
import F_4iahruyrpf_Create from './F_4iahruyrpf_Create';
import MyCenterFull from '@/components/CenterFull/MyCenterFull';
import F_4iahruyrpf_Delete from './F_4iahruyrpf_Delete';
import F_4iahruyrpf_Update from './F_4iahruyrpf_Update';



interface I4iahruyrpfViewModal {
    chon: boolean;
    stt: number;
    maLoai: string;
    tenLoai: string;
    ghiChu: string;
    thaoTac: string;
}

const mockData: I4iahruyrpfViewModal[] = [
    {
        chon: false,
        stt: 1,
        maLoai: "QD",
        tenLoai: "Quyết định",
        ghiChu: "",
        thaoTac: "Sửa / Xóa",
    },
    {
        chon: false,
        stt: 2,
        maLoai: "BC",
        tenLoai: "Báo cáo",
        ghiChu: "",
        thaoTac: "Sửa / Xóa",
    },
    {
        chon: false,
        stt: 3,
        maLoai: "BB",
        tenLoai: "Biên bản",
        ghiChu: "",
        thaoTac: "Sửa / Xóa",
    },
];

export default function F_4iahruyrpf_Read() {

    const evidenceUseQuery = useQuery<I4iahruyrpfViewModal[]>({
        queryKey: [`F_4iahruyrpf_Read`],
        queryFn: async () => mockData,
        refetchOnWindowFocus: false,
    });
    const [selectedRow, setSelectedRow] = useState<number[]>([]);

    useEffect(() => {
        if (evidenceUseQuery.data && evidenceUseQuery.data.length > 0) {
            setSelectedRow([evidenceUseQuery.data[0].stt]);
        }
    }, [evidenceUseQuery.data]);

    const columns = useMemo<MRT_ColumnDef<I4iahruyrpfViewModal>[]>(() => [

        { accessorKey: "chon", header: "Chọn" },
        { accessorKey: "stt", header: "STT" },
        { accessorKey: "maLoai", header: "Mã loại minh chứng" },
        { accessorKey: "tenLoai", header: "Tên loại minh chứng" },
        { accessorKey: "ghiChu", header: "Ghi chú" },
        { accessorKey: "thaoTac", header: "Thao tác" },
    ], []);

    if (evidenceUseQuery.isLoading) return <Text>Đang tải dữ liệu...</Text>;
    if (evidenceUseQuery.isError) return <Text color="red">Không có dữ liệu...</Text>;

    return (
        <MyFieldset title='Danh mục loại minh chứng'>
            <MyDataTable

                exportAble
                columns={columns}
                data={evidenceUseQuery.data!}
                renderTopToolbarCustomActions={() => (

                    <Group>
                        <F_4iahruyrpf_Create />
                        <MyButton crudType='delete' />
                        <MyButton crudType='import' />

                    </Group>


                )}
                renderRowActions={({ row }) => (
                    <MyCenterFull>
                        <F_4iahruyrpf_Update />
                        <F_4iahruyrpf_Delete />
                    </MyCenterFull>
                )

                } />

        </MyFieldset>
    )
}
