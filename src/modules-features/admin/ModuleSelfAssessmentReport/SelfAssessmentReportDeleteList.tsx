import { MyButton } from "@/components/Buttons/Button/MyButton";
import { MyButtonDeleteList } from "aq-fe-framework/components";

export default function SelfAssessmentReportDeleteList({ values }: { values: any }) {
    return (
        <MyButtonDeleteList
            disabled={values.length === 0}
            contextData={values.map((item: any) => item.curriculum).join(", ")}
            onSubmit={() => { }}
        />
    )
}