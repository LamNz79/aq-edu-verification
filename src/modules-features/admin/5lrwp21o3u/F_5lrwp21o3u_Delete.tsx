'use client'

import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import { MyButton } from "@/components/Buttons/Button/MyButton";


export default function F_5lrwp21o3u_Delete() {
    return (
        <MyButton crudType='delete' />
    );
}

export function F_5lrwp21o3u_Delete_Datarow({id}:{id:string}) {
    return (
        <MyActionIconDelete
            content="Xác nhận xóa dữ liệu?"
            contextData={id}
            onSubmit={() => { }}>

         </MyActionIconDelete>
    );
}