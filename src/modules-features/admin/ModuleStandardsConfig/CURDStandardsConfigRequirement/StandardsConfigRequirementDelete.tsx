import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";

export default function StandardsConfigRequirementDelete({
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
