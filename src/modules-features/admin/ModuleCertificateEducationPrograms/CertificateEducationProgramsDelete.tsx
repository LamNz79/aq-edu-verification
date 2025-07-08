import { MyActionIconDelete } from "aq-fe-framework/components";

export default function CertificateEducationProgramsDelete({ id, code }: { id?: number, code?: string }) {
  return (
    <MyActionIconDelete contextData={code} onSubmit={() => {
      console.log(id);
    }} />
  );
}