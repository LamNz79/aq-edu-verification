'use client';

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ProgramListTable from "@/modules-features/admin/ModuleProgram/ProgramList/ProgramListTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <ProgramListTable />
        </MyPageContent>
    )
}
