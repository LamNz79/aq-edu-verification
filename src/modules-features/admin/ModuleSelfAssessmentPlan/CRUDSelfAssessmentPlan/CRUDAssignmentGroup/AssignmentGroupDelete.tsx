import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";

export default function AssignmentGroupButtonDelete({
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
