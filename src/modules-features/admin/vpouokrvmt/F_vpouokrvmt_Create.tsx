// F_vpouokrvmt_Create.tsx
'use client';

import {MyButtonCreate, MyDateInput, MyNumberInput, MySelect, MyTextArea, MyTextInput} from "aq-fe-framework/components";
import { useForm } from "@mantine/form";

interface I_vpouokrvmt_Create {
    order?: number;
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
            order: undefined,
            cycleId: '',
            cycleIdRoute: '',
            cycleRouteName: '',
            startDate: null,
            endDate: null,
            note: '',
        },
        validate: {
            startDate: (value) => value ? null : 'Không được để trống',
            endDate: (value, values) => {
                if (!value) return 'Không được để trống';
                if (!values.startDate) return null;
                return value > values.startDate ? null : 'Ngày kết thúc phải lớn hơn ngày bắt đầu';
            }
        }
    });

    const cycleOptions = [
        { value: '2023-2028', label: '2023-2028' },
        { value: '2028-2033', label: '2028-2033' },
    ];

    return (
        <MyButtonCreate form={form} onSubmit={() => { }} objectName="Chi tiết lộ trình" title="Chi tiết lộ trình">
            <MyTextInput label='Mã lộ trình' {...form.getInputProps("cycleIdRoute")} />
            <MyTextInput label='Tên lộ trình' {...form.getInputProps("cycleRouteName")} />
            <MyDateInput label='Ngày bắt đầu' {...form.getInputProps("startDate")} />
            <MyDateInput label='Ngày kết thúc' {...form.getInputProps("endDate")} />
            <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
            <MySelect
                label='Mã chu kỳ'
                data={cycleOptions}
                {...form.getInputProps("cycleId")}
            />
        </MyButtonCreate>
    );
}