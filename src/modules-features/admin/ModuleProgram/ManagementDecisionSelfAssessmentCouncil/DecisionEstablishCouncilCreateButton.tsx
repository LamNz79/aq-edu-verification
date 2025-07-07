"use client";

import { Tabs } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MyButtonCreate } from "aq-fe-framework/components";
import { SelfAssessmentDecision } from "./DecisionEstablishCouncilTable";
import { IconInfoCircle, IconUsers, IconUserEdit, IconUserCog, IconChecklist } from "@tabler/icons-react";
import CouncilMemberTable from "./DecisionEstablishCouncilCreate/TabCouncilMember/CouncilMemberTable";
import GenralInfoForm from "./DecisionEstablishCouncilCreate/TabGenralInfo/GenralInfoForm";
import SecretaryTeamTable from "./DecisionEstablishCouncilCreate/TabSecretaryTeam/SecretaryTeamTable";
import WorkingGroupTable from "./DecisionEstablishCouncilCreate/TabWorkingGroup/WorkingGroupTable";
import WorkingGroupMemberTable from "./DecisionEstablishCouncilCreate/TabWorkingGroupMember/WorkingGroupMemberTable";

export default function DecisionEstablishCouncilCreateButton() {

    const form = useForm<SelfAssessmentDecision>({
        mode: 'uncontrolled',
        initialValues: {
            id: 0,
            decisionNumber: "",
            decisionDate: undefined,
            decisionTitle: "",
            appliedProgram: "",
            appliedCohort: "",
            signer: "",
            fileUrl: "",
            programCode: ""
        },
    });

    return (
        <MyButtonCreate
            form={form}
            modalSize={"100%"}
            onSubmit={() => { }}
            objectName="quyết định"
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
        </MyButtonCreate>
    );
}