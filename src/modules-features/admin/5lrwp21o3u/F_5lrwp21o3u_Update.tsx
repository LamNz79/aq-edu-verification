'use client';

import { MyActionIconUpdate, MyTextArea, MyTextInput } from "aq-fe-framework/components";
import { useForm } from "@mantine/form";
import { I_5lrwp21o3u_Read } from "./F_5lrwp21o3u_Read";

export default function F_5lrwp21o3u_Update({ data }: { data: I_5lrwp21o3u_Read }) {

    const form = useForm<I_5lrwp21o3u_Read>({
        initialValues: data,
        validate: {
            code: code => code ? null : 'Không được để trống',
            name: name => name ? null : 'Không được để trống',
        }
    });

    return (
        <>
            <MyActionIconUpdate
                form={form}
                onSubmit={async () => { }}
                title='Chi tiết chu kỳ kiểm định'
            >
                <MyTextInput label='Mã chu kỳ' {...form.getInputProps("code")} />
                <MyTextInput label='Tên chu kỳ' {...form.getInputProps("name")} />
                <MyTextArea label='Ghi chú' {...form.getInputProps("note")} />
            </MyActionIconUpdate>
        </>
    )
}