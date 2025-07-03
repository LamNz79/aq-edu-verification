import { MyActionIconDelete } from "aq-fe-framework/components";
import { IStandardManagementViewModel } from "./interface";

export default function StandardsManagementDelete({
  data,
}: {
  data: IStandardManagementViewModel;
}) {
  return (
    <MyActionIconDelete
      contextData={data.code}
      onSubmit={() => {}}
    ></MyActionIconDelete>
  );
}