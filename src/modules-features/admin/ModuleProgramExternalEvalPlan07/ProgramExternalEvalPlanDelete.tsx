import { MyActionIconDelete } from "aq-fe-framework/components";

export default function ProgramExternalEvalPlanDelete({
  id,
  code,
}: {
  id: number;
  code: string;
}) {
  return <MyActionIconDelete onSubmit={() => {}} contextData={code} />;
}
