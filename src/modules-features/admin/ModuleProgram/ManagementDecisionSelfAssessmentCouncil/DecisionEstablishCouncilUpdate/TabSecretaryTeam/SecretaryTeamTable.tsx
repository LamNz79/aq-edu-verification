"use client";

import {
    MyCenterFull,
    MyDataTable,
    MySelect,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import SecretaryTeamDeleteButton from "./SecretaryTeamDeleteButton";
import SecretaryTeamCreateButton from "./SecretaryTeamCreateButton";
import SecretaryTeamDeleteListButton from "./SecretaryTeamDeleteListButton";

export interface SecretaryMember {
    id: number;
    code: string;
    fullName: string;
    academicTitle: string;
    position: string;
    department: string;
    role: string;
}

export default function SecretaryTeamTable() {

    const columns = useMemo<MRT_ColumnDef<SecretaryMember>[]>(() => [
        { accessorKey: 'code', header: 'Mã Thành viên' },
        { accessorKey: 'fullName', header: 'Họ và Tên' },
        { accessorKey: 'academicTitle', header: 'Học hàm/Học vị' },
        { accessorKey: 'position', header: 'Chức danh' },
        { accessorKey: 'department', header: 'Đơn vị công tác' },
        {
            accessorKey: 'role',
            header: 'Vai trò',
            accessorFn: (row) => <MySelect defaultValue={row.role} data={roleOption} />
        },
    ], []);


    return (
        <MyDataTable
            enableRowSelection
            columns={columns}
            data={secretaryMembers || []}
            renderTopToolbarCustomActions={({ table }) => {
                return (
                    <>
                        <SecretaryTeamCreateButton />
                        <SecretaryTeamDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)} />
                    </>
                );
            }}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <SecretaryTeamDeleteButton id={row.original.id || 0} code={row.original.code} />
                    </MyCenterFull>
                );
            }}
        />
    );
}

export const secretaryMembers: SecretaryMember[] = [
    {
        code: "BTK01",
        fullName: "ThS. Hoàng Thị E",
        academicTitle: "Thạc sĩ",
        position: "Chuyên viên ĐBCL",
        department: "Phòng Đảm bảo Chất lượng",
        role: "Trưởng Ban Thư ký",
        id: 1
    },
    {
        code: "BTK02",
        fullName: "CN. Nguyễn Văn F",
        academicTitle: "Cử nhân",
        position: "Chuyên viên Phòng ĐBCL",
        department: "Phòng Đảm bảo Chất lượng",
        role: "Thành viên Ban Thư ký",
        id: 2
    },
    {
        code: "BTK03",
        fullName: "CN. Lê Thị G",
        academicTitle: "Cử nhân",
        position: "Thư ký Khoa CNTT",
        department: "Khoa Công nghệ Thông tin",
        role: "Thành viên Ban Thư ký",
        id: 3
    },
];

const roleOption = [
    "Trưởng Ban Thư ký",
    "Thành viên Ban Thư ký"
]
