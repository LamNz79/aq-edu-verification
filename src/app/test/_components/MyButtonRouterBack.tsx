"use client";
import { Button, ButtonProps } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface IMyButtonRouterBack extends ButtonProps {
  url?: string;
}

export default function MyButtonRouterBack({ url, ...rest }: IMyButtonRouterBack) {
  const router = useRouter();
  return (
    <Button
      variant="transparent"
      leftSection={<IconArrowLeft stroke={2} />}
      onClick={() => {
        if (url) {
          router.replace(url);
          return;
        }
        router.back();
      }}
      {...rest}
    ></Button>
  );
}
