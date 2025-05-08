'use client'
import MyActionIconUpdate from '@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate';
import MyButtonCreate from '@/components/Buttons/ButtonCRUD/MyButtonCreate';
import MySelect from '@/components/Combobox/Select/MySelect';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';
export interface I_b99o1d0u5q {
    maTieuChuan: string;
    maTieuChi: string;
    tenTieuChi: string;
    tenTieuChiEg: string;
    moTa: string;
    chuKyBaoCao: string;
    ngayBatDau: Date;
    ghiChu: string;
}
export default function F_b99o1d0u5q_Delete({ values }: { values?: any }) {
    const [selectedDate, setSelectedDate] = useState<string | null>();
    const form_multiple_input = useForm({
        initialValues: values ? {
            maTieuChuan: values.maTieuChuan,
            maTieuChi: values.maTieuChi,
            tenTieuChi: values.tenTieuChi,
            tenTieuChiEg: values.tenTieuChiEg,
            moTa: values.moTa,
            chuKyBaoCao: values.chuKyBaoCao,
            ngayBatDau: values.ngayBatDau,
            ghiChu: values.ghiChu,
        } :
            {
                maTieuChuan: "",
                maTieuChi: "",
                tenTieuChi: "",
                tenTieuChiEg: "",
                moTa: "",
                chuKyBaoCao: "",
                ngayBatDau: new Date(),
                ghiChu: "",
            }
    })
    if (values) {
        return (
            <MyActionIconUpdate<I_b99o1d0u5q> title="Chi tiết danh sách tiêu chí" form={form_multiple_input} onSubmit={() => { }}>
                    <MySelect
                        label="Tiêu chuẩn"
                        searchable
                        data={[
                            { value: 'TC01', label: 'TC01 - Tổ chức và quản trị' },
                            { value: 'TC02', label: 'TC02 - Đào tạo và học tập' },
                            { value: 'TC03', label: 'TC03 - Nghiên cứu khoa học' },
                        ]}
                        value={form_multiple_input.values.maTieuChuan}
                        onChange={(val) => form_multiple_input.setFieldValue('maTieuChuan', val)}
                        error={form_multiple_input.errors.maTieuChuan}>
                    </MySelect>
                    <MyTextInput
                        label="Mã tiêu chí/ chỉ số"
                        name="maTieuChi"
                        placeholder="Mã tiêu chí"
                        required
                    />
                    <MyTextInput
                        label="Tên tiêu chí/ chỉ số"
                        name="tenTieuChi"
                        placeholder="Tên tiêu chí"
                        required
                    />
                    <MyTextInput
                        label="Tên tiêu chí Eg"
                        name="tenTieuChiEg"
                        placeholder=""
                    //required
                    />
                    <MyTextInput
                        label="Mô tả"
                        name="moTa"
                        placeholder="Mô tả"
                    />
                    <MySelect defaultValue="6 tháng" label="Chu kỳ" data={[
                        { value: '3 tháng', label: '3 tháng' },
                        { value: '6 tháng', label: '6 tháng (mặc định)' },
                        { value: '12 tháng', label: '12 tháng' },
                        { value: 'Không chu kỳ', label: 'Không chu kỳ' },
                    ]}>
                    </MySelect>
                    <DateTimePicker
                        value={selectedDate}
                        onChange={setSelectedDate}
                        label="Ngày bắt đầu chu kỳ"
                        placeholder="Chọn ngày"
                        valueFormat="DD/MM/YYYY"
                    />
                    <MyTextInput
                        label='Ghi chú'
                        name='ghiChu'
                        placeholder=""
                    />
            </MyActionIconUpdate>
        )
    }
    return (
        <MyButtonCreate<I_b99o1d0u5q> title="Chi tiết danh sách tiêu chí" form={form_multiple_input} onSubmit={() => { }}>
                <MySelect
                    label="Tiêu chuẩn"
                    searchable
                    data={[
                        { value: 'TC01', label: 'TC01 - Tổ chức và quản trị' },
                        { value: 'TC02', label: 'TC02 - Đào tạo và học tập' },
                        { value: 'TC03', label: 'TC03 - Nghiên cứu khoa học' },
                    ]}
                    value={form_multiple_input.values.maTieuChuan}
                    onChange={(val) => form_multiple_input.setFieldValue('maTieuChuan', val)}
                    error={form_multiple_input.errors.maTieuChuan}>
                </MySelect>
                <MyTextInput
                    label="Mã tiêu chí/ chỉ số"
                    name="maTieuChi"
                    placeholder="Mã tiêu chí"
                    required
                />
                <MyTextInput
                    label="Tên tiêu chí/ chỉ số"
                    name="tenTieuChi"
                    placeholder="Tên tiêu chí"
                    required
                />
                <MyTextInput
                    label="Tên tiêu chí Eg"
                    name="tenTieuChiEg"
                    placeholder=""
                //required
                />
                <MyTextInput
                    label="Mô tả"
                    name="moTa"
                    placeholder="Mô tả"
                />
                <MySelect defaultValue="6 tháng" label="Chu kỳ" data={[
                    { value: '3 tháng', label: '3 tháng' },
                    { value: '6 tháng', label: '6 tháng (mặc định)' },
                    { value: '12 tháng', label: '12 tháng' },
                    { value: 'Không chu kỳ', label: 'Không chu kỳ' },
                ]}>
                </MySelect>
                <DateTimePicker
                    value={selectedDate}
                    onChange={setSelectedDate}
                    label="Ngày bắt đầu chu kỳ"
                    placeholder="Chọn ngày"
                    valueFormat="DD/MM/YYYY"
                />
                <MyTextInput
                    label='Ghi chú'
                    name='ghiChu'
                    placeholder=""
                />
        </MyButtonCreate>
    )

}
