'use client';

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ApproveReportTable from "@/modules-features/admin/ModuleApproveReport/ApproveReportTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <ApproveReportTable />
        </MyPageContent>
    )
}
