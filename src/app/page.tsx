'use client'
import MyBoxesBackground from "@/components/Aceternity/BoxesBackground/MyBoxesBackground";
import useS0Auth from "@/stores/S0Auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter()
  const S0Auth = useS0Auth()
  useEffect(() => {
    if (S0Auth.state.token == "") {
      router.push("/auth/login")
      return
    }
    router.push("/admin/obf4m08gkx")

  }, [S0Auth.state.token])
  return (
    <MyBoxesBackground title="Hệ thống thông tin quản lí đào tạo ngắn hạn" />
  );
}
