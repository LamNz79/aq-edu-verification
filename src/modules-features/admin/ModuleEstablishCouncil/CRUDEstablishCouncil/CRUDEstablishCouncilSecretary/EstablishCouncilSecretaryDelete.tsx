"use client";
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { IEstablishCouncilMemberViewModel } from "../../interfaces";

export default function EstablishCouncilSecretaryDelete({
  establishCouncilMember,
}: {
  establishCouncilMember: IEstablishCouncilMemberViewModel;
}) {
  return (
    <MyActionIconDelete
      contextData={establishCouncilMember.code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}
