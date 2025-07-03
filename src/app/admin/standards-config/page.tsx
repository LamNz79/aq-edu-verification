"use client";
import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import StandardsConfigLayout from "@/modules-features/admin/ModuleStandardsConfig/StandardsConfigLayout";

export default function Page() {
  return (
    <MyPageContent canBack>
      <StandardsConfigLayout />
    </MyPageContent>
  );
}
