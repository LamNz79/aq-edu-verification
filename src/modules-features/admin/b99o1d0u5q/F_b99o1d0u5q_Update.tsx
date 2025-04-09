'use client'
import MyActionIconUpdate from '@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate'
import MySelect from '@/components/Combobox/Select/MySelect';
import MyFieldset from '@/components/Inputs/Fieldset/MyFieldset';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
export interface I_b99o1d0u5q_Update {
    id: number;
    maTieuChuan: string;
    maTieuChi: string;
    tenTieuChi: string;
    moTa: string;
    chuKyBaoCao: string;
    ngayBatDau: Date;
    ghiChu: string;
}
export default function F_b99o1d0u5q_Delete({value}: {value: any}) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const className = useQuery<I_b99o1d0u5q_Update[]>({
        queryKey: ["I_b99o1d0u5q_data"],
        queryFn: async () => {
            return mockData;
        }
    });
    if (className.isLoading) return "Đang tải dữ liệu...";
    if (className.error) return "Lỗi tải dữ liệu";
    const form_multiple_input = useForm({
        initialValues: {
            maTieuChuan: value.maTieuChuan,
            maTieuChi: value.maTieuChi,
            tenTieuChi: value.tenTieuChi,
        }
    })
    return (
        <MyActionIconUpdate form={form_multiple_input} onSubmit={() => {}}>
            <MyFieldset title="Chi tiết danh sách tiêu chí">
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

                
            </MyFieldset>
        </MyActionIconUpdate>
    )
}
const mockData: I_b99o1d0u5q_Update[] = [
    {
      id: 1,
      maTieuChuan: "TC01",
      maTieuChi: "TC11",
      tenTieuChi:
        "Tầm nhìn và sứ mạng của cơ sở giáo dục được xác định rõ ràng, phù hợp với định hướng phát triển và được công bố công khai.",
      moTa: "",
      chuKyBaoCao: "6 tháng",
      ngayBatDau: new Date("2025-01-01"),
      ghiChu: ""
    },
    {
      id: 2,
      maTieuChuan: "TC02",
      maTieuChi: "TC12",
      tenTieuChi:
        "Cơ sở giáo dục xây dựng và phát triển văn hóa chất lượng, thể hiện qua các giá trị, niềm tin và hành vi của cán bộ, giảng viên, nhân viên và người học.",
      moTa: "",
      chuKyBaoCao: "6 tháng",
      ngayBatDau: new Date("2025-01-01"),
      ghiChu: ""
    },
    {
      id: 3,
      maTieuChuan: "TC03",
      maTieuChi: "TC13",
      tenTieuChi:
        "Cơ sở giáo dục có các chính sách và biện pháp cụ thể để thúc đẩy và duy trì văn hóa chất lượng trong toàn bộ hoạt động.",
      moTa: "",
      chuKyBaoCao: "6 tháng",
      ngayBatDau: new Date("2025-01-01"),
      ghiChu: ""
    },
    {
      id: 4,
      maTieuChuan: "TC04",
      maTieuChi: "TC14",
      tenTieuChi:
        "Cơ sở giáo dục thường xuyên đánh giá và cải tiến tầm nhìn, sứ mạng và văn hóa chất lượng để đáp ứng yêu cầu phát triển và hội nhập.",
      moTa: "",
      chuKyBaoCao: "6 tháng",
      ngayBatDau: new Date("2025-01-01"),
      ghiChu: ""
    },
    {
      id: 5,
      maTieuChuan: "TC05",
      maTieuChi: "TC15",
      tenTieuChi:
        "Cơ sở giáo dục có cơ chế thu thập và phản hồi ý kiến từ các bên liên quan về tầm nhìn, sứ mạng và văn hóa chất lượng.",
      moTa: "",
      chuKyBaoCao: "6 tháng",
      ngayBatDau: new Date("2025-01-01"),
      ghiChu: ""
    }
  ];
  