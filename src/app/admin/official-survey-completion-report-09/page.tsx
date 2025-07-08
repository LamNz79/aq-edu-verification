'use client';
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import OfficialSurveyCompletionReportTable from "@/modules-features/admin/ModuleOfficialSurveyCompletionReport09/OfficialSurveyCompletionReportTable";

export default function Page() {
    return (
        <MyPageContent>
            <OfficialSurveyCompletionReportTable />
        </MyPageContent>
    );
}