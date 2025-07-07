import { MyActionIconDelete } from "aq-fe-framework/components";

export default function CriteriaReportAssignmentDelete({
  id,
  course,
  criterionCode,
}: {
  id: number;
  course: string;
  criterionCode: string;
}) {
  return <MyActionIconDelete onSubmit={() => {}} contextData={course+"-"+criterionCode} />;
}
