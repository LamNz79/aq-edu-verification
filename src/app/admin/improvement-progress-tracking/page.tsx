import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ImprovementProgressTrackingTable from "@/modules-features/admin/ModuleImprovementProgressTracking/ImprovementProgressTrackingTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <ImprovementProgressTrackingTable />
    </MyPageContent>
  );
}
