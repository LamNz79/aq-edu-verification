'use client';

import {MyButtonCreate, MyDateInput, MyTextArea, MyTextInput} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";

interface I_vpouokrvmt_Create {
    cycleId: string;
    cycleIdRoute: string;
    cycleRouteName: string;
    startDate: Date | null;
    endDate: Date | null;
    note?: string;
}

export default function F_vpouokrvmt_Create() {
    const form = useForm<I_vpouokrvmt_Create>({
        initialValues: {
            cycleId: '',
            cycleIdRoute: '',
            cycleRouteName: '',
            startDate: null,
            endDate: null,
            note: '',
        },
        validate: {
            cycleId: (value) => value ? null : 'Không được để trống',
            cycleIdRoute: (value) => value ? null : 'Không được để trống',
            cycleRouteName: (value) => value ? null : 'Không được để trống',
            // startDate: (value) => value ? null : 'Không được để trống',
            // endDate: (value) => value ? null : 'Không được để trống',
        }
    });

    return (
        <MyButtonCreate form={form} onSubmit={() => { }} objectName="Chi tiết lộ trình" title="Chi tiết lộ trình">
            <MyTextInput label='Mã chu kỳ' {...form.getInputProps("cycleId")} />
            <MyTextInput label='Mã lộ trình' {...form.getInputProps("cycleIdRoute")} />
            <MyTextInput label='Tên lộ trình' {...form.getInputProps("cycleRouteName")} />
            <MyDateInput label='Thời gian bắt đầu' {...form.getInputProps("startDate")} />
            <MyDateInput label='Thời gian kết thúc' {...form.getInputProps("endDate")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
        </MyButtonCreate>
    );
}