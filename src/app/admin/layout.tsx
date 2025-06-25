import { BasicAppShell } from "@/components/Layouts/BasicAppShell/BasicAppShell";
import { menuData_Institutional } from "@/data/menuData_Institutional";
import { menuData_Program } from "@/data/menuData_Program";
import { useS_Global } from "@/stores/useS_Global";
import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
    const store = useS_Global()
    return <BasicAppShell menu={store.state.accreditationType == "Institutional" ? menuData_Institutional : menuData_Program}>{children}</BasicAppShell>;
}


