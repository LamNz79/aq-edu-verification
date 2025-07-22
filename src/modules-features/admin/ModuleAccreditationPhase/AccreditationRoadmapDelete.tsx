import { MyActionIconDelete } from "aq-fe-framework/components";

export default function AccreditationRoadmapDelete({
  id,
  label,
}: {
  id: number;
  label: string;
}) {
  return <MyActionIconDelete onSubmit={() => { }} contextData={label} />;
}