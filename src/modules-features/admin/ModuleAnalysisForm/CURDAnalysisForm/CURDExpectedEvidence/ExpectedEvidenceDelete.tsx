import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";

export default function ExpectedEvidenceDelete({
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