import { MyActionIconDelete } from "aq-fe-framework/components";

export default function AssignmentTasksDelete({ id }: { id: string }) {
  return (
    <MyActionIconDelete contextData={id} onSubmit={() => { /* Add your submit logic here */ }} />
  )
}