"use client";

import { Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyActionIconUpdate } from "aq-fe-framework/components";
import { SelfAssessmentDecision } from "./DecisionEstablishCouncilTable";
import { IconChecklist, IconInfoCircle, IconUserCog, IconUserEdit, IconUsers } from "@tabler/icons-react";
import GenralInfoForm from "./DecisionEstablishCouncilUpdate/TabGenralInfo/GenralInfoForm";
import CouncilMemberTable from "./DecisionEstablishCouncilUpdate/TabCouncilMember/CouncilMemberTable";
import SecretaryTeamTable from "./DecisionEstablishCouncilUpdate/TabSecretaryTeam/SecretaryTeamTable";
import WorkingGroupTable from "./DecisionEstablishCouncilUpdate/TabWorkingGroup/WorkingGroupTable";
import WorkingGroupMemberTable from "./DecisionEstablishCouncilUpdate/TabWorkingGroupMember/WorkingGroupMemberTable";

export default function DecisionEstablishCouncilUpdateButton({ values }: { values: SelfAssessmentDecision }) {

    const form = useForm<SelfAssessmentDecision>({
        initialValues: values,
    });

    return (
        <MyActionIconUpdate
            title="Chi tiết quyết định"
            modalSize="100%"
            form={form}
            onSubmit={() => { }}
        >
            <Tabs variant="outline" radius="md" defaultValue="general">
                <Tabs.List grow justify="space-between">
                    <Tabs.Tab value="general" leftSection={<IconInfoCircle size={16} />}>
                        Thông tin chung
                    </Tabs.Tab>

                    <Tabs.Tab value="council-members" leftSection={<IconUsers size={16} />}>
                        Thành viên hội đồng
                    </Tabs.Tab>

                    <Tabs.Tab value="secretary-team" leftSection={<IconUserEdit size={16} />}>
                        Thành viên ban thư ký
                    </Tabs.Tab>

                    <Tabs.Tab value="working-group" leftSection={<IconUserCog size={16} />}>
                        Nhóm công tác
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="working-group-members"
                        leftSection={<IconChecklist size={16} />}
                    >
                        Danh sách thành viên nhóm công tác
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="general">
                    <GenralInfoForm form={form} />
                </Tabs.Panel>

                <Tabs.Panel value="council-members">
                    <CouncilMemberTable />
                </Tabs.Panel>

                <Tabs.Panel value="secretary-team">
                    <SecretaryTeamTable />
                </Tabs.Panel>

                <Tabs.Panel value="working-group">
                    <WorkingGroupTable />
                </Tabs.Panel>

                <Tabs.Panel value="working-group-members">
                    <WorkingGroupMemberTable />
                </Tabs.Panel>
            </Tabs>
        </MyActionIconUpdate>
    );
}
