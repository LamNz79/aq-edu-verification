"use client";
import SelfAssessmentReportTable from "@/modules-features/admin/ModuleSelfAssessmentReport/SelfAssessmentReportTable";
import { MyPageContent } from "aq-fe-framework/components";

export default function Page() {
    return(
        <MyPageContent>
            <SelfAssessmentReportTable/>
        </MyPageContent>
    )
}