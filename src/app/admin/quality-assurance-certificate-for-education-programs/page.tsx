"use client";

import CertificateEducationProgramsTable from "@/modules-features/admin/ModuleCertificateEducationPrograms/CertificateEducationProgramsTable";
import { MyPageContent } from "aq-fe-framework/components";

export default function Page() {
  return (
    <MyPageContent title="Giấy Chứng nhận Kiểm định Chất lượng CTĐT">
      <CertificateEducationProgramsTable />
    </MyPageContent>
  );
}
