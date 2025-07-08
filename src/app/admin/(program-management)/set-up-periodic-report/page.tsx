'use client'
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import SetUpPeriodicReportTable from "@/modules-features/admin/ModuleProgram/SetUpPeriodicReport/SetUpPeriodicReportTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <SetUpPeriodicReportTable />
        </MyPageContent>
    )
}