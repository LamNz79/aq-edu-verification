import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";

export default function SelfAssessmentPlanButtonDelete({
  code,
  id,
}: {
  code: string;
  id: string;
}) {
  return (
    <MyActionIconDelete
      contextData={code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}
