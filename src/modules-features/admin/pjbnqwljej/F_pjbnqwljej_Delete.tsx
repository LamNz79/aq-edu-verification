import baseAxios from "@/api/baseAxios"
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete"

export default function F_4hi65qkj5n_Delete({ id }: { id: number }) {
    return <MyActionIconDelete onSubmit={() => baseAxios.post("/COESubject/delete", { id: id })} />
}
