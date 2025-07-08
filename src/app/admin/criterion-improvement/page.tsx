import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import CriterionImprovementTable from "@/modules-features/admin/ModuleCriterionImprovement/CriterionImprovementTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <CriterionImprovementTable />
    </MyPageContent>
  );
}
