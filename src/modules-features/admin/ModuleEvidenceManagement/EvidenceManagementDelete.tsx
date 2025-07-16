import { MyActionIconDelete } from "aq-fe-framework/components";

export default function EvidenceManagementDelete({ id, code}: { id: number; code: string }) {
  return (
    <MyActionIconDelete contextData={code} onSubmit={()=>{}} />
  )
}