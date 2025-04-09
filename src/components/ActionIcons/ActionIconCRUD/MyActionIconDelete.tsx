import { MyButton } from "@/components/Buttons/Button/MyButton";
import { utils_notification_show } from "@/utils/notification";
import { Group, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ComponentProps, useState } from "react";
import { MyActionIconModal } from "../ActionIconModal/MyActionIconModal";
import { Highlight } from '@mantine/core';

interface IActionIconDelete extends Omit<ComponentProps<typeof MyActionIconModal>, "disclosure"> {
    onSubmit: () => void;
    onSuccess?: () => void;
    onError?: () => void;
    contextData?: string;
    loading?: boolean;
}

export default function MyActionIconDelete({
    onSubmit,
    onSuccess,
    onError,
    contextData,
    ...rest
}: IActionIconDelete) {
    const queryClient = useQueryClient();
    const disc = useDisclosure();
    const loadingState = useState()


    const mutation = useMutation({
        mutationFn: async () => await onSubmit(),
        onSuccess: () => {
            if (onSuccess) {
                onSuccess()
                return
            }
            queryClient.invalidateQueries();
            utils_notification_show({ crudType: "delete" });
            disc[1].close();
        },
        onError: () => {
            if (onError) {
                onError()
                return
            }
        },
    });
 
    function handleCLick() {
        mutation.mutate();
    }
    return (
        <MyActionIconModal
            disclosure={disc}
            crudType="delete"
            {...rest}
        >
            <Highlight  color="red" highlight={[contextData||""]}>
            {'Bạn sắp xóa dữ liệu ${contextData}. Hành động này không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục?'}
            </Highlight>
                
        
            <Group grow>
                <MyButton
                    crudType="delete"
                    onClick={handleCLick}
                    loading={loadingState[0]}
                />
                <MyButton
                    crudType="cancel"
                    onClick={disc[1].close}
                />
            </Group>
        </MyActionIconModal>
    );
}
