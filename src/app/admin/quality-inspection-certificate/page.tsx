'use client';

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import QualityInspectionCertificateTable from "@/modules-features/admin/ModuleQualityInspectionCertificate/QualityInspectionCertificateTable";

export default function Page() {
    return (
        <MyPageContent canBack>
            <QualityInspectionCertificateTable />
        </MyPageContent>
    )
}
