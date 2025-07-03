"use client";
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import StandardsManagementTable from "@/modules-features/admin/ModuleStandardsManagement/StandardsManagementTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <StandardsManagementTable />
    </MyPageContent>
  );
}
