'use client'

import { MyActionIconDelete} from "aq-fe-framework/components";

export default function F_vpouokrvmt_Delete({ id,code }: { id: number, code: string }) {
    return (
        <MyActionIconDelete onSubmit={() => { }} contextData={code}/>
    )
}