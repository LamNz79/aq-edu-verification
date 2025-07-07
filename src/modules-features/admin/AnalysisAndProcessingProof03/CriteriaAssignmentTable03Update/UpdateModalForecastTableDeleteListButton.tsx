'use client'
import { MyButtonDeleteList } from "aq-fe-framework/components";

export default function UpdateModalRequirementTableDeleteListButton({ values }: { values: any }) {
    return (
        <MyButtonDeleteList
            disabled={values.length === 0}
            contextData={values.map((item: any) => item.code).join(", ")}
            onSubmit={() => { }}
        />
    )
}

