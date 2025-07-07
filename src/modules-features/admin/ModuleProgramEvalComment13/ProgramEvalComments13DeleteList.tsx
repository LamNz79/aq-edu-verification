import {  MyButtonDeleteList } from "aq-fe-framework/components";

export default function ProgramEvalComments13DeleteList({ values }: { values: any }) {
    return (
        <MyButtonDeleteList
            disabled={values.length === 0}
            contextData={values.map((item: any) => item.curriculumName+" - "+item.phase).join(", ")}
            onSubmit={() => { }}
        />
    )
}
