import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import SelfAssessmentForm04Table from "@/modules-features/admin/ModuleSelfAssessmentForm04/SelfAssessmentForm04Table";

export default function Page() {
  return (
    <MyPageContent canBack>
      <SelfAssessmentForm04Table />
    </MyPageContent>
  );
}
