import { MyActionIconDelete } from "aq-fe-framework/components";

export default function EvidenceVersionsDelete({
  id,
  code,
}: {
  id: number | string;
  code: string;
}) {
  return (
    <MyActionIconDelete
      contextData={code}
      onSubmit={() => {
        console.log(id);
      }}
    />
  );
}
