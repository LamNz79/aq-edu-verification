'use client'

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import StandardTable from "@/modules-features/admin/ModuleStandard/StandardVersionHistory/StandardTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <StandardTable />
        </MyPageContent>
    );
}