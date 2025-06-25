import useS0Auth from "@/stores/S0Auth";
import { Button } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function F0Logout() {
    const router = useRouter()
    const s0Auth = useS0Auth()
    return (
        <Button onClick={() => {
            s0Auth.setProperty("token", "")
            router.replace("/navigate")

        }} leftSection={<IconLogout />} fullWidth justify="start" variant="subtle">
            Đăng xuất
        </Button>
    )
}
