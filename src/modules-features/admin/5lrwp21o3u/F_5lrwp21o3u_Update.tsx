'use client';

import { MyActionIconUpdate, MyDateInput, MyTextInput } from "aq-fe-framework/components";
import { Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";

interface IChiTietChuKyKiemDinhUpdate {
    cycleId: string; // Mã chu kỳ
    cycleName: string; // Tên chu kỳ
    startDate: Date; // Ngày bắt đầu
    endDate: Date; // Ngày kết thúc
    isRepeat: boolean; // Có lặp lại hay không
    note?: string; // Ghi chú
}
export default function F_5lrwp21o3u_Update({ data }: { data: IChiTietChuKyKiemDinhUpdate }) {

    const form = useForm<IChiTietChuKyKiemDinhUpdate>({
        initialValues: data,
        validate: {
            cycleId: (cId: string) => cId ? null : 'Không được để trống',
            cycleName: (cName: string) => cName ? null : 'Không được để trống',
            startDate: (sDate: Date) => sDate ? null : 'Không được để trống',
            endDate: (eDate: Date) => eDate ? null : 'Không được để trống',
        }
    });

    return (
        <>
            <MyActionIconUpdate
                form={form}
                onSubmit={async () => { }}
            >
                <MyTextInput label='Mã chu kỳ' {...form.getInputProps("cycleId")} />
                <MyTextInput label='Tên chu kỳ' {...form.getInputProps("cycleName")} />
                <MyDateInput label='Ngày bắt đầu' {...form.getInputProps("startDate")} />
                <MyDateInput label='Ngày kết thúc' {...form.getInputProps("endDate")} />
                <MyTextInput label='Ghi chú' {...form.getInputProps("note")} />
                <Checkbox label='Lặp lại' {...form.getInputProps("isRepeat")} />
            </MyActionIconUpdate>
        </>
    )
}