"use client";

import EvidenceManagementTable from "@/modules-features/admin/ModuleEvidenceManagement/EvidenceManagementTable";
import { MyPageContent } from "aq-fe-framework/components";

export default function Page() {
  return (
    <MyPageContent title="Quản lý minh chứng">
      <EvidenceManagementTable />
    </MyPageContent>
  );
}
