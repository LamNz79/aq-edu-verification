"use client";

import {
    MyButtonModal,
    MyDataTable,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";

export interface Staff {
    code: string;
    fullName: string;
    academicTitle: string;
    position: string;
    department: string;
}


export default function WorkingGroupMemberCreateButton() {
    const dics = useDisclosure();

    const columns = useMemo<MRT_ColumnDef<Staff>[]>(() => [
        { accessorKey: 'code', header: 'Mã viên chức' },
        { accessorKey: 'fullName', header: 'Họ và Tên' },
        { accessorKey: 'academicTitle', header: 'Học hàm/Học vị' },
        { accessorKey: 'position', header: 'Chức danh' },
        { accessorKey: 'department', header: 'Đơn vị công tác' },
    ], []);


    return (
        <MyButtonModal
            disclosure={dics}
            title="Danh sách viên chức"
            label="Thêm"
            modalSize="100%"
            leftSection={<IconPlus />}
        >
            <MyDataTable
                enableRowSelection
                enableRowNumbers={false}
                columns={columns}
                data={staffMembers || []}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <MyButton crudType="create">Chọn</MyButton>
                        </>
                    );
                }}
            />
        </MyButtonModal>
    );
}

export const staffMembers: Staff[] = [
    {
        code: "VC001",
        fullName: "TS. Nguyễn Văn A",
        academicTitle: "Tiến sĩ",
        position: "Trưởng khoa",
        department: "Khoa Công nghệ Thông tin",
    },
    {
        code: "VC002",
        fullName: "PGS.TS. Lê Thị B",
        academicTitle: "Phó Giáo sư; Tiến sĩ",
        position: "Phó trưởng phòng",
        department: "Phòng Đảm bảo Chất lượng",
    },
    {
        code: "VC003",
        fullName: "TS. Trần Văn C",
        academicTitle: "Tiến sĩ",
        position: "Giảng viên cao cấp",
        department: "Bộ môn Kỹ thuật Phần mềm",
    },
    {
        code: "VC004",
        fullName: "ThS. Phạm Thị D",
        academicTitle: "Thạc sĩ",
        position: "Phó trưởng khoa",
        department: "Khoa Quản trị Kinh doanh",
    },
    {
        code: "VC005",
        fullName: "ThS. Hoàng Thị E",
        academicTitle: "Thạc sĩ",
        position: "Chuyên viên",
        department: "Phòng Đảm bảo Chất lượng",
    },
    {
        code: "VC006",
        fullName: "CN. Nguyễn Văn F",
        academicTitle: "Cử nhân",
        position: "Chuyên viên",
        department: "Phòng Đào tạo Đại học",
    },
    {
        code: "VC007",
        fullName: "CN. Lê Thị G",
        academicTitle: "Cử nhân",
        position: "Thư ký",
        department: "Khoa Công nghệ Thông tin",
    },
    {
        code: "VC008",
        fullName: "TS. Phan Văn H",
        academicTitle: "Tiến sĩ",
        position: "Trưởng Bộ môn",
        department: "Bộ môn Mạng Máy tính",
    },
    {
        code: "VC009",
        fullName: "ThS. Trịnh Thị I",
        academicTitle: "Thạc sĩ",
        position: "Giảng viên",
        department: "Bộ môn Khoa học Máy tính",
    },
    {
        code: "VC010",
        fullName: "CN. Bùi Thị L",
        academicTitle: "Cử nhân",
        position: "Thủ thư",
        department: "Thư viện",
    },
];


