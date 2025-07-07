"use client";
import EvalCriteriaFormRead from "@/modules-features/admin/ModuleExportEvaluationCriteriaForm/EvalCriteriaFormRead";
import { MyPageContent } from "aq-fe-framework/components";

//export-evaluation-criteria-form
export default function Page() {
    return(
        <MyPageContent>
            <EvalCriteriaFormRead/>
        </MyPageContent>
    )
}