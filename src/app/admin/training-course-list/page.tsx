"use client";

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import TrainingCourseListTable from "@/modules-features/admin/ModuleTrainingCourseList/TrainingCourseListTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <TrainingCourseListTable />
    </MyPageContent>
  );
}
