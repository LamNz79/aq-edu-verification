"use client";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { Group } from "@mantine/core";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_7gdid7o8tk_Delete from "./F_7gdid7o8tk_Delete";
import { useQuery } from "@tanstack/react-query";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import MySelect from "@/components/Combobox/Select/MySelect";
import { MyButton } from "@/components/Buttons/Button/MyButton";

export interface I_7gdid7o8tk_Read {
    id: number;
    maTieuChuan: string;
    tenTieuChuan: string;
    donViChuTri: string;
}

export interface I_7gdid7o8tk_DonViChuTri {
    id: string;
    tenDonVi: string;
}

export default function F_7gdid7o8tk_Read() {
    const [selectedRow, setSelectedRow] = useState([]);

    // Sử dụng useQuery để lấy dữ liệu table
    const dataTableQuery = useQuery<I_7gdid7o8tk_Read[]>({
        queryKey: ["F_7gdid7o8tk_InputTraning"],
        queryFn: async () => {
            return [
                {
                    id: 1,
                    maTieuChuan: "TC01",
                    tenTieuChuan: "Tầm nhìn sứ mạng và văn hóa",
                    donViChuTri: "1",
                },
                {
                    id: 2,
                    maTieuChuan: "TC02",
                    tenTieuChuan: "Quản trị và quản lý",
                    donViChuTri: "2",
                },
                {
                    id: 3,
                    maTieuChuan: "TC03",
                    tenTieuChuan: "Đào tạo",
                    donViChuTri: "1",
                },
                {
                    id: 4,
                    maTieuChuan: "TC04",
                    tenTieuChuan: "Nghiên cứu khoa học",
                    donViChuTri: "2",
                },
                {
                    id: 5,
                    maTieuChuan: "TC05",
                    tenTieuChuan: "Đội ngũ giảng viên và nhân viên",
                    donViChuTri: "2",
                },
                {
                    id: 6,
                    maTieuChuan: "TC06",
                    tenTieuChuan: "Người học và hoạt động hỗ trợ người học",
                    donViChuTri: "2",
                },
                {
                    id: 7,
                    maTieuChuan: "TC07",
                    tenTieuChuan: "Cơ sở vật chất và trang thiết bị",
                    donViChuTri: "1",
                },
                {
                    id: 8,
                    maTieuChuan: "TC08",
                    tenTieuChuan: "Tài chính và quản lý tài chính",
                    donViChuTri: "1",
                },
                {
                    id: 9,
                    maTieuChuan: "TC09",
                    tenTieuChuan: "Hoạt động nghiên cứa khoa học và công nghệ",
                    donViChuTri: "1",
                },
                {
                    id: 10,
                    maTieuChuan: "TC10",
                    tenTieuChuan: "Hợp tác quốc tế",
                    donViChuTri: "1",
                },
            ];
        },
    });

    const selectData = [
        {
            id: "1",
            tenDonVi: "Phòng tổ chức",
        },
        {
            id: "2",
            tenDonVi: "Phòng quản lý",
        }
    ].map(e => ({
        value: e.id!.toString(),
        label: e.tenDonVi || '',
    })) ?? [];

    // column
    const columns = useMemo<MRT_ColumnDef<I_7gdid7o8tk_Read>[]>(
        () => [
            { header: "Mã tiêu chuẩn", accessorKey: "maTieuChuan" },
            { header: "Tên tiêu chuẩn", accessorKey: "tenTieuChuan" },
            {
                header: "Đơn vị chủ trì",
                accessorKey: "donViChuTri",
                id: "donViChuTri",
                Cell: ({ row }) => {
                    const { donViChuTri } = row.original;

                    return (
                        <MySelect
                            data={selectData}
                            defaultValue={donViChuTri}
                        />
                    );
                }

            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const exportConfig = {
        fields: [
            { fieldName: "id", header: "STT" },
            { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
            { fieldName: "tenTieuChuan", header: "Tên tiêu chuẩn" },
            { fieldName: "donViChuTri", header: "Đơn vị chủ trì" },
        ],
    };

    if (dataTableQuery.isLoading) return "Loading...";
    if (dataTableQuery.isError) return "Error...";

    return (
        <MyFlexColumn>
            <MyFieldset title={`Danh sách tiêu chuẩn`}>
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    setSelectedRow={setSelectedRow}
                    renderTopToolbarCustomActions={({ table }) => (
                        <Group>
                            <MyButton crudType="save"></MyButton>
                            <AQButtonExportData
                                isAllData={true}
                                objectName="DanhSachTieuChuan"
                                data={dataTableQuery.data!}
                                exportConfig={exportConfig}
                            />
                            <F_7gdid7o8tk_Delete selectedRow={selectedRow} />
                        </Group>
                    )}
                    columns={columns}
                    data={dataTableQuery.data!}
                />
            </MyFieldset>
        </MyFlexColumn>
    );
}
function userState(): [any, any] {
    throw new Error("Function not implemented.");
}

