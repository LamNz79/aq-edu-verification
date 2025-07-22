import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import CouncilRoleTable from "@/modules-features/admin/CRUDCouncilRole/CouncilRoleTable";

export default function Page() {
  return (
    <MyPageContent title="Danh mục vai trò trong hội đồng" canBack>
      <CouncilRoleTable />
    </MyPageContent>
  );
}
