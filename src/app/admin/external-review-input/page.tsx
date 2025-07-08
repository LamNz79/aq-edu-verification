import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import ExternalReviewInputTable from "@/modules-features/admin/ModuleExternalReviewInput/ExternalReviewInputTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <ExternalReviewInputTable />
    </MyPageContent>
  );
}
