"use client";

import { Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButton, MyButtonModal } from "aq-fe-framework/components";
import { IconInfoCircle, IconPencil, IconUserEdit } from "@tabler/icons-react";
import GenralInfoForm from "./TaskAssignmentGroupByCriteriaUpdate/TabGenralInfo/GenralInfoForm";
import { EvaluationPlan } from "./TaskAssignmentGroupByCriteriaTable";
import { useDisclosure } from "@mantine/hooks";
import AssignmentTaskTable from "./TaskAssignmentGroupByCriteriaUpdate/TabAssignmentTask/AssignmentTaskTable";

export default function DecisionEstablishCouncilUpdateButton({ values }: { values: EvaluationPlan }) {

    const dics = useDisclosure();

    const form = useForm<EvaluationPlan>({
        initialValues: values,
    });

    return (
        <MyButtonModal
            title="Chi tiết kế hoạch phân công"
            modalSize="100%"
            label="Cập nhật"
            leftSection={<IconPencil />}
            variant="outline"
            disclosure={dics}
            
        >
            <Tabs radius="md" defaultValue="general">
                <Tabs.List grow>
                    <Tabs.Tab
                        value="general"
                        leftSection={<IconInfoCircle size={16} />}
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        Thông tin chung
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="assignment-tasks"
                        leftSection={<IconUserEdit size={16} />}
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        Phân công nhiệm vụ
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                    <GenralInfoForm form={form} />
                </Tabs.Panel>

                <Tabs.Panel value="assignment-tasks">
                    <AssignmentTaskTable />
                </Tabs.Panel>
            </Tabs>
            <MyButton crudType="save" onClick={()=> {dics[1].close()}} />
        </MyButtonModal>
    );
}
