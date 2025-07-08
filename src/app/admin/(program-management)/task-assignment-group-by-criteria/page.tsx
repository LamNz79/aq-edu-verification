'use client'
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import TaskAssignmentGroupByCriteriaTable from "@/modules-features/admin/ModuleProgram/TaskAssignmentGroupByCriteria/TaskAssignmentGroupByCriteriaTable";


export default function Page() {
    return (
        <MyPageContent canBack>
            <TaskAssignmentGroupByCriteriaTable />
        </MyPageContent>
    )
}