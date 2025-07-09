"use client";

import {
    MyDateInput,
    MyTextArea,
    MyTextInput,
} from "aq-fe-framework/components";

export default function GenralInfoForm({ form }: { form: any }) {
    return (
        <>
            <MyTextInput mt="xs" label="Tiêu chuẩn" {...form.getInputProps("standardName")} readOnly/>
            <MyDateInput mt="xs" label="Ngày bắt đầu" {...form.getInputProps("startDate")} />
            <MyDateInput mt="xs" label="Ngày kết thúc" {...form.getInputProps("endDate")} />
            <MyTextArea mt="xs" maxRows={10} label="Ghi chú" {...form.getInputProps("note")} />
        </>
    );
}
