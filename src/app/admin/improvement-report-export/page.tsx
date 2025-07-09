import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ImprovementReportExportTable from "@/modules-features/admin/ModuleImprovementReportExport/ImprovementReportExportTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <ImprovementReportExportTable />
    </MyPageContent>
  );
}
