"use client";
import { Button, ButtonProps } from "@mantine/core";
import { IconArrowBack, IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface IMyButtonRouterBack extends ButtonProps {
  url?: string;
  label?: string;
}

export default function MyButtonRouterBack({
  url,
  label,
  ...rest
}: IMyButtonRouterBack) {
  const router = useRouter();
  return (
    <Button
      variant="default"
      className="bg-transparent border-none"
      onClick={() => (url ? router.replace(url) : router.back())}
      {...rest}
    >
      <IconArrowLeft size={16} />
    </Button>
  );
}
