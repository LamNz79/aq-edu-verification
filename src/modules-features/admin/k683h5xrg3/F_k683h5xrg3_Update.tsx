'use client'
import { MyButton } from "@/components/Buttons/Button/MyButton";
import MyFieldset from "@/components/Inputs/Fieldset/MyFieldset";
import MyFlexColumn from "@/components/Layouts/FlexColumn/MyFlexColumn";
import { Grid, Group, TextInput} from "@mantine/core";
import UploadImage from "./F_FaviconUploader";
import { Form, useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
export interface I_k683h5xrg3{
    id?: number;
    maModule?: string;
    tenModule?: string;
    tenChuQuan?: string;
    email?: string;
    soDienThoai?: string;
    ngayDangKy?: Date;
    ngayHetHan?: Date;
    favicon?: string | File;
    logo?: string | File;
}
export default function F_k683h5xrg3_Update() {
    const form_multiple = useForm<I_k683h5xrg3>({
        initialValues: {
            maModule: '',
            tenModule: '',
            tenChuQuan: '',
            email: '',
            soDienThoai: '',
            ngayDangKy: undefined,
            ngayHetHan: undefined,
            favicon: undefined,
            logo: undefined,
          },
        validate: {
            email: (value) =>
            value && /^\S+@\S+$/.test(value) ? null : 'Email không hợp lệ',
            soDienThoai: (value) =>
            value && /^[0-9]{9,15}$/.test(value) ? null : 'Số điện thoại không hợp lệ',
            tenChuQuan: (value) => (value ? null : 'Tên đơn vị chủ quản không được để trống'),
        }
    });
    return (
        <MyFieldset title="Cập nhật thông tin đơn vị chủ quản">
        <Form form = {form_multiple} onSubmit={() => {}}>
            <MyFlexColumn gap="md">
            <Grid>
                <Grid.Col span={6}>
                <TextInput  label="Mã Module" placeholder="Nhập mã module" required />
                </Grid.Col>
                <Grid.Col span={6}>
                <TextInput label="Tên Module" placeholder="Nhập tên module" required />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={12}>
                    <TextInput label = "Tên đơn vị chủ quản" placeholder="Nhập tên đơn vị chủ quản" required />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={6}>
                    <TextInput label = "Email" placeholder="Nhập email" required />
                </Grid.Col>
                <Grid.Col span={6}>
                <TextInput label = "Số điện thoại" placeholder="Nhập số điện thoại" required />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={6}>
                    <DateInput label = "Ngày đăng ký" placeholder="Nhập ngày đăng ký" valueFormat="DD/MM/YYYY" required />
                </Grid.Col>
                <Grid.Col span={6}>
                    <DateInput label = "Ngày hết hạn" placeholder="Nhập ngày hết hạn" valueFormat="DD/MM/YYYY" required />
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={6}>
                    <UploadImage name="Favicon (16px x 16px)"/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <UploadImage name="Logo (330px x 115px)"/>
                </Grid.Col>
            </Grid>
        <Grid>
            <Grid.Col span={12}>
                <Group justify="flex-end" mt="md">
                    <MyButton crudType="save"/>
                </Group>
            </Grid.Col>
        </Grid>
        </MyFlexColumn>
        </Form>
        </MyFieldset>
    );
}