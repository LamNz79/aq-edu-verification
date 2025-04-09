import { Text } from '@mantine/core';
import baseAxios from '@/api/baseAxios';
import MyActionIconDelete from '@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete';
import React from 'react';

export default function F_4iahruyrpf_Delete({
  id,
  maLoai,
}: {
  id: number;
  maLoai: string;
}) {
  console.log(maLoai)
  return (
  
    
    <MyActionIconDelete
      title="Xác nhận xóa dữ liệu"
      contextData={maLoai} 
      onSubmit={async () => {
        await baseAxios.post(`/COEUnit/Delete`, {
          id: id,
          isEnabled: true,
        });
      }}
    />
  );
}
