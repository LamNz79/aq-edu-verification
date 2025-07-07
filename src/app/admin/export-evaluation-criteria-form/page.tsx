"use client";
import EvalCriteriaFormTable from "@/modules-features/admin/ModuleExportEvaluationCriteriaForm/EvalCriteriaFormTable";
import { MyPageContent } from "aq-fe-framework/components";

//export-evaluation-criteria-form
export default function Page() {
    return(
        <MyPageContent>
            <EvalCriteriaFormTable/>
        </MyPageContent>
    )
}