'use client'
import { useState } from "react"
import { Tabs } from "@mantine/core"
import F_grtzbp3rjk_StandardCarryRead from "./F_grtzbp3rjk_StandardCarryRead"
import MySelect from "@/components/Combobox/Select/MySelect"
import F_grtzbp3rjk_ContentReportRead from "./F_grtzbp3rjk_ContentReportRead"
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset"

export default function F_grtzbp3rjk_Read() {
    const [activeTab, setActiveTab] = useState<string | null>("moc_chuan_phu_trach");

    return (
        <MyFieldset title="Thiết lập nhiệm vụ báo cáo định kỳ" >
            <MySelect data={["Tô Ngọc Báo", "Tô Ngọc Lâm"]}
                defaultValue={"Tô Ngọc Báo"}
                label="Người phụ trách yêu cầu/ mốc chuẩn"
                w={500}>


            </MySelect>
            <Tabs
                mt={20}
                color="teal"
                variant="pills"
                defaultValue="moc_chuan_phu_trach"
                value={activeTab}
                onChange={setActiveTab}
            >
                <Tabs.List>
                    <Tabs.Tab
                        value="moc_chuan_phu_trach"
                        style={{
                            backgroundColor: activeTab === "moc_chuan_phu_trach" ? "teal" : "rgba(85, 83, 83, 0.2)",
                            color: activeTab === "moc_chuan_phu_trach" ? "white" : "black",
                        }}
                    >
                        Danh sách mốc chuẩn phụ trách
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="noi_dung_bao_cao"
                        style={{
                            backgroundColor: activeTab === "noi_dung_bao_cao" ? "teal" : "rgba(85, 83, 83, 0.2)",
                            color: activeTab === "noi_dung_bao_cao" ? "white" : "black",
                        }}
                    >
                        Danh sách nội dung cần báo cáo
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="moc_chuan_phu_trach">
                    <F_grtzbp3rjk_StandardCarryRead />
                </Tabs.Panel>

                <Tabs.Panel value="noi_dung_bao_cao">
                    <F_grtzbp3rjk_ContentReportRead />
                </Tabs.Panel>

            </Tabs>
        </MyFieldset>
    );
}