import { useState } from "react";
import { FileInput, Image, Group, Stack, Text } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

interface FaviconUploaderProps {
  name: string;
}

export default function FaviconUploader({ name }: FaviconUploaderProps) {
  const [favicon, setFavicon] = useState<File | null>(null);

  return (
    <Stack>
      <Text size="sm">{name}</Text>
      <Group align="center">
        <FileInput
          placeholder="Upload"
          accept="image/png,image/jpeg"
          rightSection={<IconUpload size={16} />}
          value={favicon}
          onChange={setFavicon}
          style={{ flex: 1 }}
        />
        {favicon && (
          <Image
            src={URL.createObjectURL(favicon)}
            width={8}
            height={8}
            alt=""
            radius="xs"
            style={{ border: "1px solid #ccc", padding: 2 }}
          />
        )}
      </Group>
    </Stack>
  );
}
