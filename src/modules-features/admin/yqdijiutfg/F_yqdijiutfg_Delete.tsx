import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";

export default function F_yqdijiutfg_Delete({ id, context }: { id: string; context: string }) {
    return <MyActionIconDelete contextData={`${context} (ID: ${id})`} onSubmit={() => {}} />;
}