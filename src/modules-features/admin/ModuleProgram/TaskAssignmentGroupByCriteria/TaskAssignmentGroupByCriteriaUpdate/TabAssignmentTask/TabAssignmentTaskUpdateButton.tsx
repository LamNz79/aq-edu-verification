"use client";

import {
    MyButtonModal,
    MyDataTable,
    MyDateInput,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";
import { MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { MyButton } from "@/components/Buttons/Button/MyButton";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconPlus } from "@tabler/icons-react";


import { useForm } from "@mantine/form";
import { MySelect } from "aq-fe-framework/core";
import { CriterionAssignment } from "./AssignmentTaskTable";

export default function TabAssignmentTaskUpdateButton({ values }: { values: CriterionAssignment }) {
    const dics = useDisclosure();

    const form = useForm({
        initialValues: {
            ...values
        },
    });


    return (
        <MyButtonModal
            disclosure={dics}
            title="Chi tiết nhóm công tác"
            modalSize="50%"
            label="Cập nhật"
            leftSection={<IconPencil />}
            variant="outline"
        >
            <MyTextInput label="Mã tiêu chí/Chỉ báo" {...form.getInputProps("criterionName")} readOnly />
            <MySelect data={memberSelectOption} label="Thành viên phụ trách" searchable {...form.getInputProps("memberCode")} />
            <MyDateInput label="Ngày bắt đầu" {...form.getInputProps("startDate")} />
            <MyDateInput label="Ngày kết thúc" {...form.getInputProps("endDate")} />
            <MyTextArea maxRows={10} label="Ghi chú" {...form.getInputProps("note")} />
            <MyButton crudType="save" onClick={()=> {dics[1].close()}}/>
        </MyButtonModal>
    );
}


const memberSelectOption = [
  { value: "VC003", label: "VC003 - TS. Trần Văn C" },
  { value: "VC009", label: "VC009 - ThS. Trịnh Thị I" },
  { value: "VC004", label: "VC004 - ThS. Phạm Thị D" },
  { value: "VC010", label: "VC010 - CN. Bùi Thị L" }
]
