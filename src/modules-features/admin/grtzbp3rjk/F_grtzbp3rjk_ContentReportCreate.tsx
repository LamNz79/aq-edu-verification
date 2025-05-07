'use client'
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate'
import MySelect from '@/components/Combobox/Select/MySelect'
import MyTextArea from '@/components/Inputs/TextArea/MyTextArea'
import { useForm } from '@mantine/form'


interface ContentReport {
    maYeuCau?: string
    noiDungCaiTien?: string
    nguoiPhuTrach?: string
}
export default function F_grtzbp3rjk_ContentReportCreate() {
    const form = useForm<ContentReport>({
        initialValues: {
            maYeuCau: 'M001',
            noiDungCaiTien: "",
            nguoiPhuTrach: "",
           
        },
        validate: {
            maYeuCau: (value) => value ? null : 'Không được để trống',
            noiDungCaiTien: (value) => value ? null : 'Không được để trống',
            nguoiPhuTrach: (value) => value ? null : 'Không được để trống',
        }
    })

    return (
        <MyButtonCreate label="Thêm" form={form} onSubmit={() => { }} title='Chi tiết chu kỳ kiểm định'>
            <MySelect label='Yêu cầu/Mốc chuẩn' data={['M001','M002','M003']} {...form.getInputProps("maYeuCau")} />
            <MyTextArea label="Nội dung" {...form.getInputProps("noiDungCaiTien")} />
            <MySelect label='Người phụ trách' data={["Tô Ngọc Linh", "Tô Ngọc Lan", "Tô Ngọc Đạt"]} {...form.getInputProps("nguoiPhuTrach")} />
        </MyButtonCreate>
    )
}


