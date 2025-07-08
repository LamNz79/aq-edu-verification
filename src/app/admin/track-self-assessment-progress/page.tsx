"use client";

import MyPageContent from "@/components/Layouts/PageContent/MyPageContent";
import TrackSelfAssessmentProgressTable from "@/modules-features/admin/ModuleTrackSelfAssessmentProgress/TrackSelfAssessmentProgressTable";

export default function Page() {
  return (
    <MyPageContent canBack>
      <TrackSelfAssessmentProgressTable />
    </MyPageContent>
  );
}
