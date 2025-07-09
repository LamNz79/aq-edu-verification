'use client'
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import EvidenceCollectionReviewTable from "@/modules-features/admin/ModuleProgram/EvidenceCollectionReview/EvidenceCollectionReviewTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <EvidenceCollectionReviewTable />
        </MyPageContent>
    )
}