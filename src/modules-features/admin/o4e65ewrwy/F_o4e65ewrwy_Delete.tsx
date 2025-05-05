'use client'
import baseAxios from "@/api/baseAxios";
import MyActionIconDelete from "@/components/ActionIcons/ActionIconCRUD/MyActionIconDelete";
import MySelect from "@/components/Combobox/Select/MySelect";
import MyTextInput from "@/components/Inputs/TextInput/MyTextInput";
import { Modal, SimpleGrid } from "@mantine/core";
import { IconInfoTriangle } from '@tabler/icons-react';
import { useState } from "react";

export default function F12_6Delete({ id, agentCode }: { id: number ,agentCode :string }) {

    return <MyActionIconDelete contextData={agentCode} title="Xác nhận xóa dữ liệu ?" onSubmit={() => { }} >
    </MyActionIconDelete>
}

