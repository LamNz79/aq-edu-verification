import { MyActionIconDelete } from "aq-fe-framework/components";

export default function ProgramEvalComments13Delete({
  id,
  curriculumName,
  phase,
}: {
  id: number;
  curriculumName: string;
  phase: string;
}) {
  return <MyActionIconDelete onSubmit={() => {}} contextData={curriculumName+" "+phase} />;
}
