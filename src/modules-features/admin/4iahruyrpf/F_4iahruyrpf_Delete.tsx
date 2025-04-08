import baseAxios from '@/api/baseAxios';
import MyActionIconDelete from '@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete';
import { MyButton } from '@/components/Buttons/Button/MyButton'
import { MyButtonModal } from '@/components/Buttons/ButtonModal/MyButtonModal';
import { Alert, Center, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertTriangleFilled } from '@tabler/icons-react';
import React from 'react'

export default function F_4iahruyrpf_Delete({id}:{id: number}) {

  return (
<MyActionIconDelete title="Xác nhận xóa dữ liệu"onSubmit={async () => {
        await baseAxios.post(`/COEUnit/Delete`, {
            id: id,
            isEnabled: true
        });
    }}></MyActionIconDelete>
  )
}
