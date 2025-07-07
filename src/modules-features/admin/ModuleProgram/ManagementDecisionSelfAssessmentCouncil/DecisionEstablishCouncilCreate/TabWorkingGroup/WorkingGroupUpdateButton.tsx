"use client";

import { useForm } from "@mantine/form";
import {
    MyActionIconModal,
    MyButton,
    MySelect,
    MyTextInput,
} from "aq-fe-framework/components";
import { WorkingGroup } from "./WorkingGroupTable";
import { useDisclosure } from "@mantine/hooks";

export default function WorkingGroupUpdateButton({ values }: { values: WorkingGroup }) {
    const disc = useDisclosure();

    const form = useForm<WorkingGroup>({
        initialValues: values,
    });

    return (
        <MyActionIconModal
            crudType="update"
            title="Chi tiết nhóm công tác"
            onSubmit={() => { }}
            disclosure={disc}
        >
            <MySelect
                data={workingGroupOption}
                label="Mã nhóm"
                {...form.getInputProps("code")}
                onChange={(value) => {
                    form.setFieldValue("code", value || "");
                    form.setFieldValue("name", value ? workingGroupRecord[value] : "");
                }}
            />
            <MyTextInput label="Tên nhóm" {...form.getInputProps("name")} />
            <MyButton crudType="save" onClick={()=>{disc[1].close()}}/>
        </MyActionIconModal>
    );
}

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
