"use client";

import { SimpleGrid, Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import {
    MyCenterFull,
    MyDataTable,
    MyFileInput,
    MySelect,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import CouncilMemberDeleteButton from "./CouncilMemberDeleteButton";
import CouncilMemberCreateButton from "./CouncilMemberCreateButton";
import CouncilMemberDeleteListButton from "./CouncilMemberDeleteListButton";

export default function CouncilMemberTable() {

    const columns = useMemo<MRT_ColumnDef<CouncilMember>[]>(() => [
        { accessorKey: 'memberCode', header: 'Mã Thành viên' },
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
            data={councilMembers || []}
            renderTopToolbarCustomActions={({ table }) => {
                return (
                    <>
                        <CouncilMemberCreateButton />
                        <CouncilMemberDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)} />
                    </>
                );
            }}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <CouncilMemberDeleteButton id={row.original.id || 0} code={row.original.memberCode} />
                    </MyCenterFull>
                );
            }}
        />
    );
}


export interface CouncilMember {
    id: number;
    memberCode: string;
    fullName: string;
    academicTitle: string;
    position: string;
    department: string;
    role: string;
}


export const councilMembers: CouncilMember[] = [
    {
        memberCode: "HD001",
        fullName: "TS. Nguyễn Văn A",
        academicTitle: "Tiến sĩ",
        position: "Trưởng khoa CNTT",
        department: "Khoa Công nghệ Thông tin",
        role: "Chủ tịch Hội đồng",
        id: 1
    },
    {
        memberCode: "HD002",
        fullName: "PGS.TS. Lê Thị B",
        academicTitle: "Phó Giáo sư; Tiến sĩ",
        position: "Trưởng phòng ĐBCL",
        department: "Phòng Đảm bảo Chất lượng",
        role: "Phó Chủ tịch Hội đồng",
        id: 2
    },
    {
        memberCode: "HD003",
        fullName: "TS. Trần Văn C",
        academicTitle: "Tiến sĩ",
        position: "Giảng viên cao cấp",
        department: "Bộ môn Kỹ thuật Phần mềm",
        role: "Ủy viên Thường trực",
        id: 3
    },
    {
        memberCode: "HD004",
        fullName: "ThS. Phạm Thị D",
        academicTitle: "Thạc sĩ",
        position: "Phó trưởng khoa QTKD",
        department: "Khoa Quản trị Kinh doanh",
        role: "Thành viên",
        id: 4
    },
];

const roleOption = [
    "Chủ tịch Hội đồng",
    "Phó Chủ tịch Hội đồng",
    "Ủy viên Thường trực",
    "Thành viên"
]
