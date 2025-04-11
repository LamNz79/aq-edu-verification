'use client'
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo, useState } from "react";
import { U0DateToDDMMYYYString } from "@/utils/date";
import { MyDataTable } from "@/components/DataDisplay/DataTable/MyDataTable";
import { Group } from "@mantine/core";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import AQButtonExportData from "@/components/Buttons/ButtonCRUD/AQButtonExportData";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import MySelect from "@/components/Combobox/Select/MySelect";

export interface I_z7xgafshhg {
    id?: number;
    maTieuChuan?: string;
    maTieuChi?: string;
    tenTieuChi?: string;
    chuKyBaoCao?: string;
    ngayBatDau?: Date;
    donViChuTri?: string;
}
export default function F_z7xgafshhg_Read() {
    const className = useQuery<I_z7xgafshhg[]>({
        queryKey: ["F_z7xgafshhg_Read"],
        queryFn: async () => {
            return mockData;
        }
    })
    const columns = useMemo<MRT_ColumnDef<I_z7xgafshhg>[]>(() => [
        {
            header: "Mã tiêu chuẩn",
            accessorKey: "maTieuChuan"
        },
        {
            header: "Mã tiêu chí",
            accessorKey: "maTieuChi"
        },
        {
            header: "Tên tiêu chí",
            accessorKey: "tenTieuChi"
        },
        {
            header: "Chu kỳ báo cáo",
            accessorKey: "chuKyBaoCao"
        },
        {
            header: "Ngày bắt đầu",
            accessorKey: "ngayBatDau",
            accessorFn(originalRow) {
                return U0DateToDDMMYYYString(new Date(originalRow.ngayBatDau!));
            },
        },
        {
            header: "Đơn vị chủ trì",
            accessorKey: "donViChuTri",
            Cell: ({ cell }) => {
                const [value, setValue] = useState<string>('Phòng');
                return (
                    <MySelect 
                    //label= "Chủ trì đơn vị"
                    data = {['Phòng', 'Khoa', 'Ban', 'Trung tâm']}
                    value = {value}
                    onChange = {(newValue: string | null) => {
                        if (newValue) setValue(newValue);
                    }}
                    styles={{
                        input: {
                          backgroundColor: '#B3DAB6',
                          color: 'black', // hoặc white nếu bạn muốn chữ trắng
                          border: '1px solid black',
                        },
                        dropdown: {
                          backgroundColor: '#B3DAB6',
                          
                        },
                      }}
                    />
                )
            }
        },
    ], []);
    const exportConfig = {
        fields: [
            { fieldName: "maTieuChuan", header: "Mã tiêu chuẩn" },
            { fieldName: "maTieuChi", header: "Mã tiêu chí" },
            { fieldName: "tenTieuChi", header: "Tên tiêu chí" },
            { fieldName: "chuKyBaoCao", header: "Chu kỳ báo cáo" },
            { fieldName: "ngayBatDau", header: "Ngày bắt đầu" },
            { fieldName: "donViChuTri", header: "Đơn vị chủ trì" }
        ]
    }

    if (className.isLoading) return "Đang tải dữ liệu...";
    if (className.error) return "Lỗi tải dữ liệu";
    return (
        <MyFieldset title={`Danh sách tiêu chí/ chỉ số`}>
            <MyDataTable
                enableRowSelection
                columns={columns}
                data={className.data!}
                mantineTableBodyCellProps={({ cell }) => ({
                    style: {
                        backgroundColor: cell.column.id === "donViChuTri" ? "#B3DAB6" : "transparent"
                    }
                })}
                renderTopToolbarCustomActions={(props) => {
                    return (
                        <Group>
                            <MyButton crudType="save" ></MyButton>
                            <AQButtonExportData 
                                isAllData={true} 
                                objectName={"Danh sách tiêu chí/ Chỉ số"} 
                                data={className.data!} 
                                exportConfig={exportConfig}
                            >
                            </AQButtonExportData>
                            <MyButton crudType="delete" >Xóa</MyButton>
                        </Group>
                    )
                }}
            />
        </MyFieldset>
        
    );

}
const mockData: I_z7xgafshhg[] = [
    {
        id: 1,
        maTieuChuan: "TC001",
        maTieuChi: "TC001",
        tenTieuChi: "TC001",
        chuKyBaoCao: "TC001",
        ngayBatDau: new Date("2021-01-01"),
        donViChuTri: "TC001"
    },
    {
        id: 1,
        maTieuChuan: "TC01",
        maTieuChi: "TC11",
        tenTieuChi: "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng, phù hợp với định hướng phát triển và được công bố công khai.",
        chuKyBaoCao: "6 tháng",
        ngayBatDau: new Date("2025-01-01"),
        donViChuTri: "Phòng tổ chức"
    },
    {
        id: 2,
        maTieuChuan: "TC02",
        maTieuChi: "TC12",
        tenTieuChi: "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng, thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên và người học.",
        chuKyBaoCao: "6 tháng",
        ngayBatDau: new Date("2025-01-01"),
        donViChuTri: "Phòng tổ chức"
    },
    {
        id: 3,
        maTieuChuan: "TC03",
        maTieuChi: "TC13",
        tenTieuChi: "Cơ sở giáo dục có các chính sách và biện pháp cụ thể để thúc đẩy và duy trì văn hóa chất lượng trong toàn bộ hoạt động.",
        chuKyBaoCao: "6 tháng",
        ngayBatDau: new Date("2025-01-01"),
        donViChuTri: "Phòng tổ chức"
    },
    {
        id: 4,
        maTieuChuan: "TC04",
        maTieuChi: "TC14",
        tenTieuChi: "Cơ sở giáo dục thường xuyên đánh giá và cải tiến tầm nhìn, sứ mạng và văn hóa chất lượng để đáp ứng yêu cầu phát triển và hội nhập.",
        chuKyBaoCao: "6 tháng",
        ngayBatDau: new Date("2025-01-01"),
        donViChuTri: "Phòng tổ chức"
    },
    {
        id: 5,
        maTieuChuan: "TC05",
        maTieuChi: "TC15",
        tenTieuChi: "Cơ sở giáo dục có cơ chế thu thập và phản hồi ý kiến từ các bên liên quan về tầm nhìn, sứ mạng và văn hóa chất lượng.",
        chuKyBaoCao: "6 tháng",
        ngayBatDau: new Date("2025-01-01"),
        donViChuTri: "Phòng tổ chức"
    }
]

