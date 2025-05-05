"use client";

import { MyFieldset, MyTab } from "aq-fe-framework/components";
import { Tabs } from "@mantine/core";
import F_po2maj8sm7_TabTieuChi from "./F_po2maj8sm7_TabTieuChi";
import F_po2maj8sm7_TabTieuChuan from "./F_po2maj8sm7_TabTieuChuan";
import F_po2maj8sm7_TabYeuCau from "./F_po2maj8sm7_TabYeuCau";

export default function F_po2maj8sm7_Read() {
    const tabData = [
        { label: "Tiêu chuẩn" },
        { label: "Tiêu chí" },
        { label: "Yêu cầu" },
    ];
    
    return (
        <MyFieldset title="Cấu trúc bộ tiêu chuẩn">
            <MyTab tabList={tabData}>
                <Tabs.Panel value="Tiêu chuẩn">
                    <F_po2maj8sm7_TabTieuChuan />
                </Tabs.Panel>
                <Tabs.Panel value="Tiêu chí">
                    <F_po2maj8sm7_TabTieuChi />
                </Tabs.Panel>
                <Tabs.Panel value="Yêu cầu">
                    <F_po2maj8sm7_TabYeuCau />
                </Tabs.Panel>
            </MyTab>
        </MyFieldset>
    );
}
