'use client'
import MySelect from '@/components/Combobox/Select/MySelect'
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea'
import { useForm } from '@mantine/form'
import { MyActionIconUpdate } from 'aq-fe-framework/components'
import { I_grtzbp3rjk } from './F_grtzbp3rjk_StandardCarryRead'
import { useEffect } from 'react'


interface ContentReport {
    maYeuCau?: string
    noiDungCaiTien?: string
    nguoiPhuTrach?: string
}
export default function F_grtzbp3rjk_ContentReportUpdate({ data }: { data: I_grtzbp3rjk }) {
    const form = useForm<ContentReport>({
        initialValues: data,
        validate: {
            maYeuCau: (value) => value ? null : 'Không được để trống',
            noiDungCaiTien: (value) => value ? null : 'Không được để trống',
            nguoiPhuTrach: (value) => value ? null : 'Không được để trống',
        }
    })

    useEffect(() => {
        form.setValues(data)
    }, [data])

    return (
        <MyActionIconUpdate  form={form} onSubmit={() => { }} title='Chi tiết chu kỳ kiểm định'>
            <MySelect disabled label='Yêu cầu/Mốc chuẩn' data={['M001','M002','M003']} {...form.getInputProps("maYeuCau")} />
            <MyTextArea label="Nội dung" {...form.getInputProps("noiDungCaiTien")} />
            <MySelect label='Người phụ trách' data={["Tô Ngọc Linh", "Tô Ngọc Lan", "Tô Ngọc Đạt"]} {...form.getInputProps("nguoiPhuTrach")} />
        </MyActionIconUpdate>
    )
}


