import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import SelfAssessmentPlanTable from "@/modules-features/admin/ModuleSelfAssessmentPlan/SelfAssessmentPlanTable";

export default function Page() {
    return (
        <MyPageContent>
            <SelfAssessmentPlanTable />
        </MyPageContent>
    );
}