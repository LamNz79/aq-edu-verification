"use client";
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ImprovementPlanTable from "@/modules-features/admin/ModuleImprovementPlan/ImprovementPlanTable";

export default function Page() {
    return(
        <MyPageContent>
            <ImprovementPlanTable/>
        </MyPageContent>
    )
}