"use client";

import {
    MyCenterFull,
    MyDataTable,
    MySelect,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import WorkingGroupDeleteButton from "./WorkingGroupDeleteButton";
import WorkingGroupDeleteListButton from "./WorkingGroupDeleteListButton";
import WorkingGroupCreateButton from "./WorkingGroupCreateButton";
import WorkingGroupUpdateButton from "./WorkingGroupUpdateButton";

export interface WorkingGroup {
    id: number;
    code: string;
    name: string;
}

export default function WorkingGroupTable() {

    const columns = useMemo<MRT_ColumnDef<WorkingGroup>[]>(() => [
        { accessorKey: 'code', header: 'Mã nhóm' },
        { accessorKey: 'name', header: 'Tên nhóm' },
    ], []);


    return (
        <MyDataTable
            enableRowSelection
            columns={columns}
            data={workingGroups || []}
            renderTopToolbarCustomActions={({ table }) => {
                return (
                    <>
                        <WorkingGroupCreateButton />
                        <WorkingGroupDeleteListButton values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)} />
                    </>
                );
            }}
            renderRowActions={({ row }) => {
                return (
                    <MyCenterFull>
                        <WorkingGroupUpdateButton values={row.original}/>
                        <WorkingGroupDeleteButton id={row.original.id || 0} code={row.original.code} />
                    </MyCenterFull>
                );
            }}
        />
    );
}

export const workingGroups: WorkingGroup[] = [
    {
        code: "NCT_TC1-3",
        name: "Nhóm Tiêu chí 1-3",
        id: 1
    },
    {
        code: "NCT_TC1-3",
        name: "Nhóm Tiêu chí 1-3",
        id: 2
    },
    {
        code: "NCT_TC4-6",
        name: "Nhóm Tiêu chí 4-6",
        id: 3
    },
    {
        code: "NCT_TC4-6",
        name: "Nhóm Tiêu chí 4-6",
        id: 4
    },
];
