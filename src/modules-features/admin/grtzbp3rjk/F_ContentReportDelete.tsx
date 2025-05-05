'use client'
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";


export default function F_ContentReport_Delete({ id, maTieuChuan }: { id: number , maTieuChuan: string}) {
    return <MyActionIconDelete onSubmit={() => { }} contextData={maTieuChuan}></MyActionIconDelete>
}

