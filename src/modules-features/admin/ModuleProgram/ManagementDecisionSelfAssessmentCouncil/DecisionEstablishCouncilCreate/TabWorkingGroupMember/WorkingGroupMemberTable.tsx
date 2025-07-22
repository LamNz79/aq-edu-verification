"use client";

import {
    MyCenterFull,
    MyDataTable,
    MySelect,
} from "aq-fe-framework/components";
import { MyButton } from "aq-fe-framework/core";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import WorkingGroupMemberCreateButton from "./WorkingGroupMemberCreateButton";
import WorkingGroupMemberDeleteButton from "./WorkingGroupMemberDeleteButton";
import WorkingGroupMemberDeleteListButton from "./WorkingGroupMemberDeleteListButton";

// Extend TableMeta to include updateRow
declare module "mantine-react-table" {
    interface TableMeta<TData extends Record<string, any>> {
        updateRow?: (rowIndex: number, newRow: Partial<TData>) => void;
    }
}

export interface WorkingGroupMember {
    id: number;
    groupCode: string;
    groupName: string;
    memberCode: string;
    fullName: string;
    degree: string;
    position: string;
    department: string;
    role: string;
}

export default function WorkingGroupMemberTable() {

    const columns = useMemo<MRT_ColumnDef<WorkingGroupMember>[]>(() => [
        {
            accessorKey: "groupCode",
            header: "Mã nhóm",
            Cell: ({ row, table }) => (
                <MySelect
                    defaultValue={row.original.groupCode}
                    data={workingGroupOption}
                />
            ),
        },
        {
            accessorKey: "groupName",
            header: "Tên nhóm",
        },
        {
            accessorKey: "memberCode",
            header: "Mã Thành viên",
        },
        {
            accessorKey: "fullName",
            header: "Họ và Tên",
        },
        {
            accessorKey: "degree",
            header: "Học hàm/Học vị",
        },
        {
            accessorKey: "position",
            header: "Chức danh",
        },
        {
            accessorKey: "department",
            header: "Đơn vị công tác",
        },
        {
            accessorKey: "role",
            header: "Vai trò",
            accessorFn: (row) => <MySelect defaultValue={row.role} data={roleOption} />
        },
    ], []);


    return (
        <MyDataTable
            enableRowSelection
            columns={columns}
            data={workingGroupMembers || []}
            renderTopToolbarCustomActions={({ table }) => {
                return (
                    <>
                        <WorkingGroupMemberCreateButton />
                        <MyButton actionType="import" />
                        <WorkingGroupMemberDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)} />
                    </>
                );
            }}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <WorkingGroupMemberDeleteButton id={row.original.id || 0} code={row.original.memberCode} />
                    </MyCenterFull>
                );
            }}
        />
    );
}



export const workingGroupMembers: WorkingGroupMember[] = [
    {
        groupCode: "NCT_TC1-3",
        groupName: "Nhóm Tiêu chí 1-3",
        memberCode: "NCT01",
        fullName: "TS. Phan Văn H",
        degree: "Tiến sĩ",
        position: "Trưởng Bộ môn",
        department: "Bộ môn Mạng Máy tính",
        role: "Nhóm trưởng",
        id: 1
    },
    {
        groupCode: "NCT_TC1-3",
        groupName: "Nhóm Tiêu chí 1-3",
        memberCode: "NCT02",
        fullName: "ThS. Trịnh Thị I",
        degree: "Thạc sĩ",
        position: "Giảng viên",
        department: "Phòng Đào tạo",
        role: "Thành viên",
        id: 2
    },
    {
        groupCode: "NCT_TC4-6",
        groupName: "Nhóm Tiêu chí 4-6",
        memberCode: "NCT03",
        fullName: "TS. Đỗ Văn K",
        degree: "Tiến sĩ",
        position: "Chuyên viên",
        department: "Phòng Khảo thí & ĐBCL",
        role: "Nhóm trưởng",
        id: 3
    },
    {
        groupCode: "NCT_TC4-6",
        groupName: "Nhóm Tiêu chí 4-6",
        memberCode: "NCT04",
        fullName: "CN. Bùi Thị L",
        degree: "Cử nhân",
        position: "Thủ thư",
        department: "Thư viện",
        role: "Thành viên",
        id: 4
    },
];


const roleOption = [
    "Nhóm trưởng",
    "Thành viên"
]


const workingGroups = [
    {
        code: "NCT_TC1-3",
        name: "Nhóm Tiêu chí 1-3",
    },
    {
        code: "NCT_TC4-6",
        name: "Nhóm Tiêu chí 4-6",
    }
];

const workingGroupOption = ["NCT_TC1-3", "NCT_TC4-6"];

const workingGroupRecord = workingGroups.reduce((acc, group) => {
    acc[group.code] = group.name;
    return acc;
}, {} as Record<string, string>);

