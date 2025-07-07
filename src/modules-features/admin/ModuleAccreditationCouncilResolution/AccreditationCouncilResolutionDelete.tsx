import { MyActionIconDelete } from "aq-fe-framework/components";

export default function AccreditationCouncilResolutionDelete({
  id,
  resolutionNumber,
}: {
  id: number;
  resolutionNumber: string;
}) {
  return <MyActionIconDelete onSubmit={() => {}} contextData={resolutionNumber} />;
}