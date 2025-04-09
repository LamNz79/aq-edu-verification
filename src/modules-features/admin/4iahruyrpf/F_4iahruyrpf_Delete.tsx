import { Text } from '@mantine/core';
import baseAxios from '@/api/baseAxios';
import MyActionIconDelete from '@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete';
import React from 'react';

export default function F_4iahruyrpf_Delete({id }: { id: string }) {
  


  return (
  
    
    <MyActionIconDelete
      title="Xác nhận xóa dữ liệu"
      contextData={id} 
      onSubmit={async () => {
        await baseAxios.post(`/COEUnit/Delete`, {
          id: id,
          isEnabled: true,
        });
      }}
    />
  );
}
