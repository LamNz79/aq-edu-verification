"use client";
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { IEstablishCouncilViewModel } from "../interfaces";

export default function EstablishCouncilButtonDelete({
  establishCouncil,
}: {
  establishCouncil: IEstablishCouncilViewModel;
}) {
  return (
    <MyActionIconDelete
      contextData={establishCouncil.code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}
