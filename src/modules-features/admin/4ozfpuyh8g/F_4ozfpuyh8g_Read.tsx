"use client";
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { Button, Checkbox, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_4ozfpuyh8g_Create from "./F_4ozfpuyh8g_Create";
import F_4ozfpuyh8g_Delete from "./F_4ozfpuyh8g_Delete";
import F_4ozfpuyh8g_Update from "./F_4ozfpuyh8g_Update";
import { useQuery } from "@tanstack/react-query";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";

export interface I_4ozfpuyh8g_Read {
    id: number;
    thuTu: number; // Thứ tự
    danhGia: string; // Đánh giá
    xepLoaiTiengAnh: string; // Xếp loại tiếng Anh
    diem: number; // Điểm
    note: string;
    isNotAchieved: boolean; // Là không đạt?
}

export default function F_4ozfpuyh8g_Read() {
    const [importData, setImportData] = useState(false);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: [],
        },
    });

    const form = useForm<I_4ozfpuyh8g_Read>({
        initialValues: {
            id: 0,
            thuTu: 0,
            danhGia: "",
            xepLoaiTiengAnh: "",
            diem: 0,
            isNotAchieved: false,
            note: "",
        },
    });

    // Sử dụng useQuery để lấy dữ liệu
    const ratingScaleQuery = useQuery<I_4ozfpuyh8g_Read[]>({
        queryKey: ["F_4ozfpuyh8g_InputTraning"],
        queryFn: async () => {
            return [
                {
                    id: 1,
                    thuTu: 1,
                    danhGia: "Đạt xuất sắc",
                    xepLoaiTiengAnh: "",
                    diem: 9,
                    isNotAchieved: false,
                    note: "",
                },
                {
                    id: 2,
                    thuTu: 2,
                    danhGia: "Đạt tốt",
                    xepLoaiTiengAnh: "",
                    diem: 8,
                    isNotAchieved: false,
                    soLuongDaDangKy: 6,
                    laKhongThi: false,
                    note: "",
                },
                {
                    id: 3,
                    thuTu: 3,
                    danhGia: "Đạt",
                    xepLoaiTiengAnh: "",
                    diem: 7,
                    isNotAchieved: false,
                    note: "",
                },
                {
                    id: 4,
                    thuTu: 4,
                    danhGia: "Đạt một phần",
                    xepLoaiTiengAnh: "",
                    diem: 6,
                    isNotAchieved: false,
                    note: "",
                },
                {
                    id: 5,
                    thuTu: 5,
                    danhGia: "Không đạt",
                    xepLoaiTiengAnh: "",
                    diem: 0,
                    isNotAchieved: true,
                    note: "",
                },
            ];
        },
    });

    const columns = useMemo<MRT_ColumnDef<I_4ozfpuyh8g_Read>[]>(
        () => [
            { header: "Thứ tự", accessorKey: "thuTu" },
            { header: "Đánh giá", accessorKey: "danhGia" },
            { header: "Xếp loại tiếng Anh", accessorKey: "xepLoaiTiengAnh" },
            { header: "Điểm >=", accessorKey: "diem" },
            {
                header: "Không đạt",
                accessorKey: "isNotAchieved",
                id: "isNotAchieved",
                Cell: ({ row }) => {
                    const { isNotAchieved } = row.original;
                    return <Checkbox defaultChecked={isNotAchieved} />;
                },
            },
        ],
        []
    );

    const exportConfig = {
        fields: [
            { fieldName: "id", header: "STT" },
            { fieldName: "thuTu", header: "Thứ tự" },
            { fieldName: "danhGia", header: "Đánh giá" },
            { fieldName: "xepLoaiTiengAnh", header: "Xếp loại tiếng Anh" },
            { fieldName: "diem", header: "Điểm >=" },
            { fieldName: "isNotAchieved", header: "Không đạt" },
        ],
    };

    if (ratingScaleQuery.isLoading) return "Loading...";
    if (ratingScaleQuery.isError) return "Error..";

    return (
        <MyFlexColumn>
            <MyFieldset title={`Thang đánh giá`}>
                <MyDataTable
                    enableRowSelection={true}
                    enableRowNumbers={true}
                    renderTopToolbarCustomActions={({ table }) => (
                        <Group>
                            <F_4ozfpuyh8g_Create />
                            <AQButtonCreateByImportFile
                                setImportedData={setImportData}
                                form={form_multiple}
                                onSubmit={() => console.log(form_multiple.values)}
                            >
                                Import
                            </AQButtonCreateByImportFile>
                            <AQButtonExportData
                                isAllData={true}
                                objectName="dsClass"
                                data={ratingScaleQuery.data!}
                                exportConfig={exportConfig}
                            />
                            <Button leftSection={<IconTrash />} color="red">
                                Xóa
                            </Button>
                        </Group>
                    )}
                    columns={columns}
                    data={ratingScaleQuery.data || []}
                    renderRowActions={({ row }) => (
                        <MyCenterFull>
                            <F_4ozfpuyh8g_Update data={row.original} />
                            <F_4ozfpuyh8g_Delete id={row.original.id!} />
                        </MyCenterFull>
                    )}
                />
            </MyFieldset>
        </MyFlexColumn>
    );
}
