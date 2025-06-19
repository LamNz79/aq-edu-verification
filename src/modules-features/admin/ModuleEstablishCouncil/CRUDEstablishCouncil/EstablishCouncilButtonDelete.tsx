"use client";
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { IEstablishCouncil } from "../interfaces";

export default function EstablishCouncilButtonDelete({
  establishCouncil,
}: {
  establishCouncil: IEstablishCouncil;
}) {
  return (
    <MyActionIconDelete
      contextData={establishCouncil.code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}
