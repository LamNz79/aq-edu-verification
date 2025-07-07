import { MyActionIcon } from "@/components/ActionIcons/ActionIcon/MyActionIcon";
import { MyActionIconDelete } from "aq-fe-framework/components";

export default function SelfAssessmentReportDelete({id, code}: {id: number, code: string}) {
    return (
        <MyActionIconDelete 
        contextData={code}
        onSubmit={() => {}} />
    )
}