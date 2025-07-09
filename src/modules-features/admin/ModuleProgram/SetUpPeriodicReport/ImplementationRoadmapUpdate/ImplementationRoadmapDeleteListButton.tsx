import { MyButtonDeleteList } from "aq-fe-framework/components";

export default function ImplementationRoadmapDeleteListButton({ values }: { values: any }) {
    return (
        <MyButtonDeleteList
            disabled={values.length === 0}
            contextData={values.map((item: any) => item.roadmapCode).join(", ")}
            onSubmit={() => { }}
        />
    )
}