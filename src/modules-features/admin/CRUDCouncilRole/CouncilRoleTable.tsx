"use client";
import { AQButtonExportData, MyButton, MyCenterFull, MyDataTable, MyFieldset } from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { notifications } from "@mantine/notifications";
import CouncilRoleCreateButton from "./CouncilRoleCreateButton";
import CouncilRoleDeleteButton from "./CouncilRoleDeleteButton";
import CouncilRoleDeleteListButton from "./CouncilRoleDeleteListButton";
import CouncilRoleUpdateButton from "./CouncilRoleUpdateButton";

export default function CouncilRoleTable() {

    const columns = useMemo<MRT_ColumnDef<ICouncilRole>[]>(() => [
        { header: "Mã vai trò", accessorKey: "code" },
        { header: "Tên vai trò", accessorKey: "name" },
        { header: "Ghi chú", accessorKey: "note" },
    ], []);

    const exportConfig = {
        fields: [
            { header: "Mã vai trò", fieldName: "code" },
            { header: "Tên vai trò", fieldName: "name" },
            { header: "Ghi chú", fieldName: "note" },
        ]
    };

    return (
        <MyFieldset title="Danh mục vai trò">
            <MyDataTable
                enableRowSelection
                enableRowNumbers={false}
                columns={columns}
                data={councilRoles}
                renderTopToolbarCustomActions={({ table }) => {
                    return (
                        <>
                            <CouncilRoleCreateButton />
                            <MyButton
                                crudType="import"
                                onClick={() => {
                                    notifications.show({
                                        title: "Chức năng đang được phát triển",
                                        message: "Sẽ được ra mắt trong thời gian tới",
                                    })
                                }}
                            />
                            <AQButtonExportData
                                isAllData
                                objectName="Danh sách vai trò trong hội đồng"
                                data={councilRoles}
                                exportConfig={exportConfig}
                            />
                            <CouncilRoleDeleteListButton
                                values={table.getSelectedRowModel().flatRows.flatMap((item) => item.original)}
                            />
                        </>
                    );
                }}
                renderRowActions={({ row, table }) =>
                    <MyCenterFull>
                        <CouncilRoleUpdateButton values={row.original} />
                        <CouncilRoleDeleteButton id={row.original.id || 0} code={row.original.code || ""} />
                    </MyCenterFull>
                }
            />
        </MyFieldset>
    );
}

export interface ICouncilRole {
    id?: number,
    code: string,
    name: string,
    note: string
}


const councilRoles: ICouncilRole[] = [
    {
        code: "CTHD",
        name: "Chủ tịch Hội đồng",
        note: "Đảm nhiệm vai trò lãnh đạo cao nhất trong Hội đồng; phê duyệt các quyết định cuối cùng",
    },
    {
        code: "TKHD",
        name: "Thư ký Hội đồng",
        note: "Hỗ trợ Chủ tịch; quản lý tài liệu và biên bản cuộc họp của Hội đồng",
    },
    {
        code: "TVTN",
        name: "Thành viên Trưởng nhóm",
        note: "Phụ trách điều hành và tổng hợp báo cáo của một nhóm tiêu chí cụ thể",
    },
    {
        code: "TVHD",
        name: "Thành viên Hội đồng",
        note: "Tham gia đánh giá; đóng góp ý kiến và biểu quyết theo phân công",
    },
    {
        code: "TVTDG",
        name: "Thành viên Tổ tự đánh giá",
        note: "Thu thập minh chứng; viết báo cáo tự đánh giá theo tiêu chí được phân công",
    },
];
