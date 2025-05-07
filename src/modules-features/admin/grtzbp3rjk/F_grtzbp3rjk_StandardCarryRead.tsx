'use client'
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { useState } from "react"
import { MRT_ColumnDef } from "mantine-react-table"
import { utils_date_dateToDDMMYYYString } from "@/utils/date"
import { useEffect } from "react"
import { AQButtonExportData, MySelect } from "aq-fe-framework/components"
export interface I_grtzbp3rjk {
    id?: number
    maTieuChuan?: string; // Mã tiêu chuẩn
    maTieuChi?: string // Mã tiêu chí
    tenTieuChi?: string //Tên tiêu chí
    maYeuCau?: string //Mã yêu cầu
    tenYeuCau?: string //Tên yêu cầu
    ketQua?: string //Kết quả
    noiDungCaiTien?: string //Nội dung cần cải tiến
    nguoiPhuTrach?: string //người phụ trách
    donViPhuTrach?: string //Đơn vị phụ trách
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

export default function F_grtzbp3rjk_StandardCarryRead() {
    const standardCarryQuery = useQuery<I_grtzbp3rjk[]>({
        queryKey: [`ListOfStandardCarry`],
        queryFn: async () => [
            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.1",
                tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng, phù hợp với sứ mạng,"+
                "tầm nhìn và mục tiêu chiến lược của từng cơ sở đào tạo"+
                "và được phổ biến đến các bên liên quan",
                maYeuCau: "M001",
                tenYeuCau: "Chuẩn đầu ra của CTDT được xây dựng, rà soát và điều chỉnh theo quy định trước, trong"+
                "đó có sự tham gia của các BLQ",
                ketQua: "Đạt",
                noiDungCaiTien: "",
                nguoiPhuTrach: "Tô Ngọc Đạt",
                donViPhuTrach: "Phòng tổ chức",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },

            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.2",
                tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng",
                maYeuCau: "M001",
                tenYeuCau: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng",
                ketQua: "Không đạt",
                noiDungCaiTien: "Minh chứng chưa đúng nội dung báo cáo",
                nguoiPhuTrach: "Tô Ngọc Linh",
                donViPhuTrach: "Phòng đào tạo",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },

            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.3",
                tenTieuChi: "Chuẩn đầu ra của chương trình đào tạo được xây dựng rõ ràng",
                maYeuCau: "M001",
                tenYeuCau: "CDR của CTDT được phổ biến đến các BLQ; giảng viên và NH hiểu rõ về CDR của CTDT",
                ketQua: "Không đạt",
                noiDungCaiTien: "Minh chứng chưa đúng nội dung báo cáo",
                nguoiPhuTrach: "Tô Ngọc Linh",
                donViPhuTrach: "Phòng đào tạo",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },


        ],
    });

    const [tableData, setTableData] = useState<I_grtzbp3rjk[]>([]);

    useEffect(() => {
        if (standardCarryQuery.data) {
            setTableData(standardCarryQuery.data);
        }
    }, [standardCarryQuery.data]);

    const exportConfig = {
        fields: [
            { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
            { fieldName: "maTieuChi", header: "Mã tiêu chí" },
            { fieldName: "tenTieuChi", header: "Tên tiêu chí" },
            { fieldName: "maYeuCau", header: "Mã yêu cầu" },
            { fieldName: "tenYeuCau", header: "Tên yêu cầu" },
            { fieldName: "ketQua", header: "Kết quả" },
            { fieldName: "noiDungCaiTien", header: "Nội dung cải tiến" },
            { fieldName: "donViPhuTrach", header: "Đơn vị phụ trách" },
            { fieldName: "nguoiCapNhat", header: "Người cập nhật" },
            { fieldName: "ngayCapNhat", header: "Ngày cập nhật" },
        ]
    };

    const getDonViPhuTrach = (nguoiPhuTrach: string) => {
        switch (nguoiPhuTrach) {
            case "Tô Ngọc Linh":
                return "Phòng đào tạo";
            case "Tô Ngọc Lan":
                return "Phòng khảo thí";
            case "Tô Ngọc Đạt":
                return "Phòng tổ chức";
            default:
                return "Khác";
        }
    };

    const columns = useMemo<MRT_ColumnDef<I_grtzbp3rjk>[]>(() => [
        {
            header: "Mã tiêu chuẩn",
            accessorKey: "maTieuChuan",
        },
        {
            header: "Mã tiêu chí",
            accessorKey: "maTieuChi",
        },
        {
            header: "Tên tiêu chí",
            accessorKey: "tenTieuChi",
        },
        {
            header: "Mã yêu cầu/ mốc chuẩn",
            accessorKey: "maYeuCau",
        },
        {
            header: "Tên yêu cầu/ mốc chuẩn",
            accessorKey: "tenYeuCau",
        },
        {
            header: "Kết quả",
            accessorKey: "ketQua",
        },
        {
            header: "Nội dung cần khắc phục/ cải tiến",
            accessorKey: "noiDungCaiTien",
        },
        {
            header: "Người phụ trách",
            accessorKey: "nguoiPhuTrach",
            Cell: ({ row }) => (
                <MySelect
                    data={["Tô Ngọc Linh", "Tô Ngọc Lan", "Tô Ngọc Đạt"]}
                    value={tableData[row.index]?.nguoiPhuTrach}
                    onChange={(value) => {
                        const updated = [...tableData];
                        updated[row.index] = {
                            ...updated[row.index],
                            nguoiPhuTrach: value ?? "",
                            donViPhuTrach: getDonViPhuTrach(value as string),
                        };
                        setTableData(updated);
                    }}
                />
            ),
        },

        {
            header: "Đơn vị phụ trách",
            accessorKey: "donViPhuTrach",
        },


        {
            header: "Người cập nhật",
            accessorKey: "nguoiCapNhat",

        },
        {
            header: "Ngày cập nhật",
            accessorKey: "ngayCapNhat",
            accessorFn(originalRow) {
                return utils_date_dateToDDMMYYYString(new Date(originalRow.ngayCapNhat!));
            },

        },
    ], [tableData]);

    if (standardCarryQuery.isLoading) return "Đang tải dữ liệu...";
    if (standardCarryQuery.isError) return "Không có dữ liệu...";
    return (

        <MyDataTable
            enableRowNumbers={true}
            enableRowSelection={true}
            columns={columns}
            data={tableData}
            renderTopToolbarCustomActions={() =>

                <><AQButtonExportData
                    isAllData={true}
                    objectName="dsMocChuanPhuTrach"
                    data={tableData}
                    exportConfig={exportConfig} /></>

            }
        />


    );
}