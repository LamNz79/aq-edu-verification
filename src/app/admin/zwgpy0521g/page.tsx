'use client';

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import F_zwgpy0521g_Read from "@/modules-features/admin/zwgpy0521g/F_zwgpy0521g_Read";

export default function Page() {
  return (
    <MyPageContent canBack title="Danh mục cấu hình mail">
      <F_zwgpy0521g_Read />
    </MyPageContent>
  );
}
