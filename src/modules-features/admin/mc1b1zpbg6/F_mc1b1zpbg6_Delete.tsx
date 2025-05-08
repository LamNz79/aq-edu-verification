import MyActionIconDelete from '@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete';
import React from 'react';

export default function F_mc1b1zpbg6_Delete({ id }: { id: string }) {
    return (
        <MyActionIconDelete
            title="Xác nhận xóa bộ tiêu chuẩn"
            contextData={id}
            onSubmit={ () => {
                // Empty onSubmit handler
            }}
        />
    );
}