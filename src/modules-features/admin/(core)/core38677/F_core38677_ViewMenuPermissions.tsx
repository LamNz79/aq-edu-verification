'use client'
import baseAxios from "@/api/baseAxios";
import MyCenterFull from "@/components/CenterFull/MyCenterFull";
import { groupToTwoLevels, I0LinkItem, utils_layout_getItemsWithoutLinks } from "@/components/Layouts/BasicAppShell/BasicAppShell";
import MyFlexRow from "@/components/Layouts/FlexRow/MyFlexRow";
import { OBJECT_COlORS } from "@/constants/object/color";
import { menuData } from "@/data/menuData_Institutional";
import { Checkbox, Flex, ScrollArea, Table, Text } from "@mantine/core";
import { IconEdit, IconEyeUp, IconFileExport, IconPlus, IconPrinter, IconTrash } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useS_core83092, { I_core83092_RolePermission, utils_core83092_mergePage } from "../core83092/useS_core83092";

const title = "Danh sách chức năng"
export default function F_core38677_ViewMenuPermissions() {
    const store = useS_core83092()
    const query = useGetUserPermission()
    const list = useState<I0LinkItem[]>([])
    useEffect(() => {
        list[1](groupToTwoLevels(menuData))
    }, [])

    useEffect(() => {
        if (!query.data) return
        store.setProperty("rolePermissions", query.data)

    }, [query.data])
    if (list[0]?.length == 0) return "Đang tải..."
    return (
        <ScrollArea.Autosize h={'70vh'} >
            <Table>
                <Table.Thead
                    bg={"light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))"}
                    style={{
                        position: 'sticky',
                        top: 0, zIndex: 1,
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px solid var(--mantine-color-gray-4)',
                    }}>
                    <Table.Tr>
                        <Table.Th>{title}</Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isRead")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isRead", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>Xem<IconEyeUp color={"gray"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isCreate")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isCreate", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>Thêm<IconPlus color={"blue"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isUpdate")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isUpdate", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>Sửa<IconEdit color={"var(--mantine-color-yellow-8)"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isDelete")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isDelete", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>Xóa<IconTrash color={"var(--mantine-color-red-8)"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isPrint")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isPrint", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>In<IconPrinter color={"var(--mantine-color-cyan-8)"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                        <Table.Th >
                            <Flex gap={3} direction={"column"} justify={"center"} align={"center"}>
                                <Checkbox checked={store.isAllPermission("isExport")} onChange={(e) => {
                                    store.toogleAllPermissionWithType("isExport", e.target.checked)
                                }}></Checkbox>
                                <MyFlexRow gap={3}>Xuất<IconFileExport color={"var(--mantine-color-green-8)"} /></MyFlexRow>
                            </Flex>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody bg={"light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))"}>
                    {list[0]?.map((item, idx) => {
                        if (item.links == undefined) return (
                            <Table.Tr key={idx}>
                                <Table.Td>{item.label}</Table.Td>
                                <Table.Td >
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                                <Table.Td>
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                                <Table.Td>
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                                <Table.Td>
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                                <Table.Td>
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                                <Table.Td>
                                    <MyCenterFull>
                                        <Checkbox />
                                    </MyCenterFull>
                                </Table.Td>
                            </Table.Tr>
                        )

                        return (
                            <React.Fragment key={idx}>
                                <Table.Tr key={item.label}>
                                    <Table.Td
                                        colSpan={7}
                                        bg={OBJECT_COlORS.mantineBackgroundBlueLight}>
                                        <Text fs={"oblique"} size="sm" fw={"bold"}>
                                            {item.label}
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>
                                {item.links.map((item, idx) =>
                                    <Table.Tr key={idx}>
                                        <Table.Td>{item.label}</Table.Td>
                                        <Table.Td >
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isRead || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isRead: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                        <Table.Td>
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isCreate || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isCreate: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                        <Table.Td>
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isUpdate || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isUpdate: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                        <Table.Td>
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isDelete || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isDelete: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                        <Table.Td>
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isPrint || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isPrint: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                        <Table.Td>
                                            <MyCenterFull>
                                                <Checkbox
                                                    checked={store.findByPageId(item.pageId!)?.isExport || false}
                                                    onChange={(e) => {
                                                        store.updatePermission(item.pageId!, {
                                                            isExport: e.target.checked
                                                        })
                                                    }}
                                                />
                                            </MyCenterFull>
                                        </Table.Td>
                                    </Table.Tr>
                                )}
                            </React.Fragment>
                        )
                    })}
                </Table.Tbody>
            </Table>
        </ScrollArea.Autosize>
    )
}

function useGetUserPermission() {
    const store = useS_core83092()
    const query = useQuery<I_core83092_RolePermission[]>({
        queryKey: ['F_7p4mh9d75x_AuthorizationTable', store.state.roleId],
        queryFn: async () => {
            const result = await baseAxios.get('/Role/GetRolePermission?roleId=' + store.state.roleId)
            const menudataFinal = utils_layout_getItemsWithoutLinks(menuData)
            if (result.data.data.length == 0) {
                const final = menudataFinal.map((item) => ({
                    pageId: item.pageId,
                    isRead: false,
                    isCreate: false,
                    isUpdate: false,
                    isDelete: false,
                    isExport: false,
                    isPrint: false,
                }) as I_core83092_RolePermission)
                return final.filter(item => item.pageId != undefined)
            }
            const menuDataFromAPI = result.data.data
            const mergedArray = utils_core83092_mergePage(menudataFinal, menuDataFromAPI).map(item => ({
                pageId: item.pageId,
                isCreate: item.isCreate || false,
                isRead: item.isRead || false,
                isUpdate: item.isUpdate || false || false,
                isDelete: item.isDelete,
                isPrint: item.isPrint || false,
                isExport: item.isExport || false
            }) as I_core83092_RolePermission).filter(item => item.pageId != undefined)
            return mergedArray
        },
        enabled: store.state.roleId != 0,
        refetchOnWindowFocus: false
    })
    return query
}


