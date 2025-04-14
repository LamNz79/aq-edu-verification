'use client';
import baseAxios from "@/api/baseAxios";
import MyActionIconUpdate from "@/components/ActionIcons/ActionIconCRUD/MyActionIconUpdate";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyNumberInput from '@/components/Inputs/NumberInput/MyNumberInput';
import MyTextInput from '@/components/Inputs/TextInput/MyTextInput';
import { useForm } from '@mantine/form';
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


//  Danh mục bậc đào tạo
export interface COETrainingLevel {
    id?: number;          // Unique identifier
    code?: string;
    name?: string;
    nameEg?: string;
    ghiChu?: string;
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

// Danh mục hệ đào tạo
export interface COETrainingSystem {
    id?: number;          // Unique identifier
    code?: string;
    name?: string;
    nameEg?: string;
    ghiChu?: string
    updatedBy?: string;
    updatedAt?: Date | undefined;
}

// Danh mục quy chế
export interface COERegulation {
    id?: number;
    code?: string;
    name?: string;
    base?: string;
    ghiChu?: string;
    nguoiCapNhat?: string;
    ngayCapNhat?: Date | undefined;
}

export interface I_zvib1md6z9_Update {
    id: number;
    code: string;
    name: string;
    nameEg: string;
    concurrencyStamp: string;
    isEnabled: boolean;
    coeRegulationId?: number | null,
    coeTrainingSystemId?: number | null;
    coeTrainingLevelId?: number | null;
    numSemestersMax?: number;
    numSemestersProgram?: number;
    numSemestersYear?: number;
    coeRegulation: COERegulation | null;
    coeTrainingLevel: COETrainingLevel | null;
    coeTrainingSystem: COETrainingSystem | null;

    nguoiCapNhat?: string;
    ngayCapNhat?: Date;
}

export default function F_zvib1md6z9_Update({ values }: { values: I_zvib1md6z9_Update }) {
    const [fileData, setFileData] = useState<any[]>([]);
        
        const form = useForm<I_zvib1md6z9_Update>({
            initialValues:values,
            validate: {
                name: (value) => value ? null : 'Không được để trống',
                code: (value) => value ? null : 'Không được để trống',
                coeRegulationId: (value) => (value ? null : "Không được để trống"),
                coeTrainingSystemId: (value) => (value ? null : "Không được để trống"),
                coeTrainingLevelId: (value) => (value ? null : "Không được để trống"),
                numSemestersMax: (value) => (value ? null : "Giá trị không hợp lệ"),
                numSemestersProgram: (value) => (value ? null : "Giá trị không hợp lệ"),
                numSemestersYear: (value) => (value ? null : "Giá trị không hợp lệ"),
                nameEg: (value) => (value ? null : "Giá trị không hợp lệ"),
            }
    });
    const COERegulationQuery = useQuery({
        queryKey: ["COERegulation_Read"],
        queryFn: async () => {
            const response = await baseAxios.get("/COERegulation/GetAll");
            return response.data.data || [];
        }
    });
    const COETrainingSystemQuery = useQuery({
        queryKey: ["COETrainingSystem_Read"],
        queryFn: async () => {
            const response = await baseAxios.get("/COETrainingSystem/GetAll");
            return response.data.data || [];
        }
    });
    const COETrainingLevelQuery = useQuery({
        queryKey: ["COETrainingLevel_Read"],
        queryFn: async () => {
            const response = await baseAxios.get("/COETrainingLevel/GetAll");
            return response.data.data || [];
        }
    });
        useEffect(() => {
            form.setValues(values);
        }, [values]);




return (
    <MyActionIconUpdate form={form} onSubmit={async (values) => {
        // console.log("Thêm thành công: ", form.values);
           await baseAxios.post("COEDegreeLevel/Update", form.values)
    }}
        >
        <MyTextInput label='Mã bậc hệ' {...form.getInputProps("code")} disabled />
        <MyTextInput label='Tên bậc hệ' {...form.getInputProps("name")} />
        <MyTextInput label='Tên bậc hệ Eg' {...form.getInputProps("nameEg")} />

        <MySelect
            error={form.errors.coeRegulationId}
            label="Quy chế"
            data={COERegulationQuery.isSuccess
                ? COERegulationQuery.data.map((reg: any) => ({
                    value: reg.id.toString(),
                    label: reg.name
                }))
                : []
            }
            defaultValue={form.values.coeRegulationId?.toString()}
            onChange={(value) => form.setFieldValue("coeRegulationId", Number(value))}
        />
        <MySelect label="Bậc đào tạo"
            data={COETrainingLevelQuery.isSuccess
                ? COETrainingLevelQuery.data.map((reg: any) => ({
                    value: reg.id.toString(),
                    label: reg.name
                }))
                : []
            }
            // Make it show the selected value
            defaultValue={form.values.coeTrainingLevelId?.toString()}
            onChange={(value) => form.setFieldValue("coeTrainingLevelId", Number(value))}
        />
        <MySelect label="Hệ đào tạo"
            data={COETrainingSystemQuery.isSuccess
                ? COETrainingSystemQuery.data.map((reg: any) => ({
                    value: reg.id.toString(),
                    label: reg.name
                }))
                : []
            }
            defaultValue={form.values.coeTrainingSystemId?.toString()}
            onChange={(value) => form.setFieldValue("coeTrainingSystemId", Number(value))}
        />
         <MyNumberInput min={0} label='Số học kỳ chương trình' {...form.getInputProps("numSemestersProgram")} />
         <MyNumberInput min={0} label='Số học kỳ tối đa' {...form.getInputProps("numSemestersMax")} />
         <MyNumberInput min={0} label='Số học kỳ năm học' {...form.getInputProps("numSemestersYear")} />
        

    </MyActionIconUpdate>
)
}




