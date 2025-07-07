'use client'
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import DecisionEstablishCouncilTable from "@/modules-features/admin/ModuleProgram/ManagementDecisionSelfAssessmentCouncil/DecisionEstablishCouncilTable";


export default function Page() {
    return (
        <MyPageContent canBack>
            <DecisionEstablishCouncilTable />
        </MyPageContent>
    )
}