'use client'
import { MyButton } from "@/components/Buttons/Button/MyButton"
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { useState } from "react"
import { MRT_ColumnDef } from "mantine-react-table"
import { utils_date_dateToDDMMYYYString } from "@/utils/date"
import { useEffect } from "react"
import { AQButtonCreateByImportFile, AQButtonExportData, MyCenterFull, MySelect } from "aq-fe-framework/components"
import { I_grtzbp3rjk } from "./F_grtzbp3rjk_StandardCarryRead"
import { useForm } from "@mantine/form"
import F_grtzbp3rjk_ContentReportCreate from "./F_grtzbp3rjk_ContentReportCreate"
import F_grtzbp3rjk_ContentReportUpdate from "./F_grtzbp3rjk_ContentReportUpdate"
import F_grtzbp3rjk_ContentReportDelete from "./F_grtzbp3rjk_ContentReportDelete"
export default function F_grtzbp3rjk_ContentReportRead() {
    const [importData, setImportData] = useState(false);

    const form = useForm<any>({
        initialValues: {
            importedData: []
        }
    }
    );

    const contentReportQuery = useQuery<I_grtzbp3rjk[]>({
        queryKey: [`ListOfContentReport`],
        queryFn: async () => [
            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.1",
                maYeuCau: "M001",
                tenYeuCau:  "Chuẩn đầu ra của CTDT được xây dựng, rà soát và điều chỉnh theo quy định trước, trong"+
                "đó có sự tham gia của các BLQ",
                noiDungCaiTien: "Chính sách thu hút nhân tài",
                nguoiPhuTrach: "Tô Ngọc Đạt",
                donViPhuTrach: "Phòng tổ chức",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },

            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.2",
                maYeuCau: "M001",
                tenYeuCau: "CDR của CTDT được phát triển rõ ràng; phù hợp với mục tiêu của CTDT; sứ mạng, tầm nhìn chiến lược của CSDT",
                noiDungCaiTien: "Quy định về tạo điều kiện làm việc (phòng làm việc, trang thiết bị,...)",
                nguoiPhuTrach: "Tô Ngọc Linh",
                donViPhuTrach: "Phòng đào tạo",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },
            {
                maTieuChuan: "TC01",
                maTieuChi: "TC1.3",
                maYeuCau: "M001",
                tenYeuCau: "CDR của CTDT được phổ biến đến các BLQ; giảng viên và NH hiểu rõ về CDR của CTDT",
                noiDungCaiTien: "Quy chế chi tiêu nội bộ, chính sách lương, thưởng phụ cấp",
                nguoiPhuTrach: "Tô Ngọc Linh",
                donViPhuTrach: "Phòng đào tạo",
                nguoiCapNhat: "Quản trị viên",
                ngayCapNhat: new Date("2024-12-23")
            },
        ],
    });

    const [tableData, setTableData] = useState<I_grtzbp3rjk[]>([]);

    useEffect(() => {
        if (contentReportQuery.data) {
            setTableData(contentReportQuery.data);
        }
    }, [contentReportQuery.data]);

    const exportConfig = {
        fields: [
            { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
            { fieldName: "maTieuChi", header: "Mã tiêu chí" },
            { fieldName: "maYeuCau", header: "Mã yêu cầu" },
            { fieldName: "tenYeuCau", header: "Tên yêu cầu" },
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
            header: "Mã yêu cầu/ mốc chuẩn",
            accessorKey: "maYeuCau",
        },
        {
            header: "Tên yêu cầu/ mốc chuẩn",
            accessorKey: "tenYeuCau",
        },
        {
            header: "Nội dung",
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

    if (contentReportQuery.isLoading) return "Đang tải dữ liệu...";
    if (contentReportQuery.isError) return "Không có dữ liệu...";
    return (

        <MyDataTable
            enableRowNumbers={true}
            enableRowSelection={true}
            columns={columns}
            data={tableData}
            renderTopToolbarCustomActions={() =>

                <>
                    <F_grtzbp3rjk_ContentReportCreate />
                    <AQButtonCreateByImportFile
                        setImportedData={setImportData}
                        form={form}
                        onSubmit={() => { console.log(form.values) }}
                    />
                    <AQButtonExportData
                        isAllData={true}
                        objectName="dsNhomThi"
                        data={tableData}
                        exportConfig={exportConfig} />
                    <MyButton crudType="delete">Xóa</MyButton>
                </>

            }
            renderRowActions={({ row }) => (
                <MyCenterFull>
                    <F_grtzbp3rjk_ContentReportUpdate data={row.original} />
                    <F_grtzbp3rjk_ContentReportDelete id={row.original.id!} maTieuChuan={row.original.maTieuChuan!} />
                </MyCenterFull>
            )}
        />


    );
}