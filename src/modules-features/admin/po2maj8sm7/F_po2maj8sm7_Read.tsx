"use client";

import { MyFieldset, MyTab } from "aq-fe-framework/components";
import { Tabs } from "@mantine/core";
import F_po2maj8sm7_TabCriteria from "./F_po2maj8sm7_TabCriteria";
import F_po2maj8sm7_TabRequire from "./F_po2maj8sm7_TabRequire";
import F_po2maj8sm7_TabStandard from "./F_po2maj8sm7_TabStandard";

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
                    <F_po2maj8sm7_TabStandard />
                </Tabs.Panel>
                <Tabs.Panel value="Tiêu chí">
                    <F_po2maj8sm7_TabCriteria />
                </Tabs.Panel>
                <Tabs.Panel value="Yêu cầu">
                    <F_po2maj8sm7_TabRequire />
                </Tabs.Panel>
            </MyTab>
        </MyFieldset>
    );
}
