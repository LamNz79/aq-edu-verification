'use client'
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import F_k25w91d9v2_Read from "@/modules-features/admin/k25w91d9v2/F_k25w91d9v2_Read";
import F_vcd16qt9lf_Read from "@/modules-features/admin/vcd16qt9lf/F_vcd16qt9lf_Read";
import { Container, Grid, Paper, Stack } from "@mantine/core";

export default function Page() {
    return (
        <MyPageContent
            canBack
            title="Ghi nhận kết quả đánh giá"
            status="Prototype"
            description="Ghi nhận kết quả đánh giá làm dữ liệu cho các nghiệp vụ khác khai thác."
        >
            <F_vcd16qt9lf_Read />
        </MyPageContent>
    );
}