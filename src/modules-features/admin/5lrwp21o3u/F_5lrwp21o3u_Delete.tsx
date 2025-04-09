'use client'

import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { MyButton } from "@/components/Buttons/Button/MyButton";


export default function F_5lrwp21o3u_Delete() {
    return (
        <MyButton crudType='delete'>Xóa</MyButton>
    );
}

export function F_5lrwp21o3u_Delete_Datarow({id}:{id:string}) {
    return (
        <MyActionIconDelete
            contextData={id}
            onSubmit={() => { }}>

         </MyActionIconDelete>
    );
}