'use client';

import {MyActionIconUpdate, MyDateInput, MyTextArea, MyTextInput} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";

interface I_vpouokrvmt_Update {
    order?: number;
    cycleId?: string;
    cycleIdRoute?: string;
    cycleRouteName?: string;
    startDate?: Date;
    endDate?: Date;
    note?: string;
}

export default function F_vpouokrvmt_Update({data}: {data: I_vpouokrvmt_Update}) {
    const form = useForm<I_vpouokrvmt_Update>({
        initialValues: data,
        validate: {
            cycleId: (value) => value ? null : 'Không được để trống',
            cycleIdRoute: (value) => value ? null : 'Không được để trống',
            cycleRouteName: (value) => value ? null : 'Không được để trống',
            // startDate: (value) => value ? null : 'Không được để trống',
            // endDate: (value) => value ? null : 'Không được để trống',
        }
    });

    return (
        <MyActionIconUpdate  title="Chi tiết lộ trình" form={form} onSubmit={async() => { }}>
            <MyTextInput label='Mã chu kỳ' {...form.getInputProps("cycleId")} />
            <MyTextInput label='Mã lộ trình' {...form.getInputProps("cycleIdRoute")} />
            <MyTextInput label='Tên lộ trình' {...form.getInputProps("cycleRouteName")} />
            <MyDateInput label='Thời gian bắt đầu' {...form.getInputProps("startDate")} />
            <MyDateInput label='Thời gian kết thúc' {...form.getInputProps("endDate")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
        </MyActionIconUpdate>
    );
}