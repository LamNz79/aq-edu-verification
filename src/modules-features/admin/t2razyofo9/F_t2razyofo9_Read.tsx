'use client';
import AQButtonCreateByImportFile from "@/components/Buttons/ButtonCRUD/AQButtonCreateByImportFile";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import F_t2razyofo9_Update from "./F_t2razyofo9_Update";
import F_t2razyofo9_Delete from "./F_t2razyofo9_Delete";
import F_t2razyofo9_Create from "./F_t2razyofo9_Create";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import MyButtonViewPDF from "@/components/Buttons/ButtonViewPDF/MyButtonViewPDF";

// Interface định nghĩa dữ liệu
export interface I_t2razyofo9 {
    id?: number;
    maBoTieuChuan?: string;
    tenBoTieuChuan?: string;
    toChucKiemDinh?: string;
    phienBan?: string;
    namBanHanh?: string;
    fileTieuChuan?: string;
    ghiChu?: string;
}

// Component hiển thị bảng dữ liệu
export default function F_t2razyofo9_Read() {

    const examDetailData = useQuery<I_t2razyofo9[]>({
        queryKey: ["TCBoTieuChuanData"],
        queryFn: async () => [
            {
                id: 1,
                maBoTieuChuan: "TC001",
                tenBoTieuChuan: "Bộ tiêu chuẩn Toán học",
                toChucKiemDinh: "Bộ Giáo Dục",
                phienBan: "1.0",
                namBanHanh: "2020",
                fileTieuChuan: "toan_hoc.xlsx",
                ghiChu: "Áp dụng cho khối kỹ thuật"
            },
            {
                id: 2,
                maBoTieuChuan: "TC002",
                tenBoTieuChuan: "Bộ tiêu chuẩn CNTT",
                toChucKiemDinh: "Hiệp hội CNTT Việt Nam",
                phienBan: "2.1",
                namBanHanh: "2022",
                fileTieuChuan: "cntt.xlsx",
                ghiChu: "Chuẩn đầu ra ngành công nghệ"
            },
            {
                id: 3,
                maBoTieuChuan: "TC003",
                tenBoTieuChuan: "Bộ tiêu chuẩn Kinh tế",
                toChucKiemDinh: "Viện Kinh tế Quốc gia",
                phienBan: "3.0",
                namBanHanh: "2023",
                fileTieuChuan: "kinh_te.xlsx",
                ghiChu: "Áp dụng cho chuyên ngành kế toán"
            },

        ],
    });

    const [fileData, setFileData] = useState<any[]>([]);
    const form_multiple = useForm<any>({
        initialValues: {
            importedData: []
        },
    })
    // Định nghĩa các cột của bảng
    const columns = useMemo<MRT_ColumnDef<I_t2razyofo9>[]>(
        () => [
            {
                header: "Mã bộ tiêu chuẩn",
                accessorKey: "maBoTieuChuan",
                size: 200
            },
            {
                header: "Tên bộ tiêu chuẩn",
                accessorKey: "tenBoTieuChuan",
                size: 300
            },
            {
                header: "Tổ chức kiểm định",
                accessorKey: "toChucKiemDinh",
                size: 250
            },
            {
                header: "Phiên bản",
                accessorKey: "phienBan",
                size: 150
            },
            {
                header: "Năm ban hành",
                accessorKey: "namBanHanh",
            },
            {
                header: "File tiêu chuẩn",
                accessorFn: (row) => {
                    return (
                        <MyCenterFull>
                            <MyButtonViewPDF id={row.id} />
                        </MyCenterFull>
                    )
                }
            },
            {
                header: "Ghi chú",
                accessorKey: "ghiChu",
                size: 300
            },
        ],
        []
    );

    // Xử lý trạng thái tải dữ liệu
    if (examDetailData.isLoading) return "Đang tải dữ liệu...";
    if (examDetailData.isError) return "Không có dữ liệu...";


    return (
        <MyFieldset title={"Danh sách bộ tiêu chuẩn"}>
            <MyDataTable
                enableRowSelection={true}
                columns={columns} // Các cột hiển thị
                data={examDetailData.data!}
                renderTopToolbarCustomActions={() => (
                    <>
                        <F_t2razyofo9_Create />
                        <AQButtonCreateByImportFile
                            setImportedData={setFileData}
                            onSubmit={
                                () => {
                                    console.log("data: ");
                                }
                            }
                            form={form_multiple}
                        ></AQButtonCreateByImportFile>
                        <Button color="teal">Export</Button>
                        <Button color="red">Xoá</Button>
                        {/* <F_vnyrext6ag_ExamSelect /> */}

                    </>
                )}
                renderRowActions={({ row }) => {
                    return (
                        <MyCenterFull>
                            <F_t2razyofo9_Update data={row.original} />
                            <F_t2razyofo9_Delete maBoTieuChuan={row.original.maBoTieuChuan} />
                        </MyCenterFull>
                    );
                }}
            />
        </MyFieldset>

    );
}
