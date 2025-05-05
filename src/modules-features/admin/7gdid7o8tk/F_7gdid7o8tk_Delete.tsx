'use client'
import { MyButton, } from "@/components/Buttons/Button/MyButton";
import { MyButtonModal } from "@/components/Buttons/ButtonModal/MyButtonModal";
import { Alert, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAlertTriangleFilled } from "@tabler/icons-react";


export default function F_7gdid7o8tk_Delete({ selectedRow }: { selectedRow: any }) {
    const disc = useDisclosure();
    return <MyButtonModal crudType="delete" title="Xác nhận xóa dữ liệu?" disclosure={disc}>
        <Alert variant="transparent" color="yellow" radius="xs" title="" icon={<IconAlertTriangleFilled />}>
            Bạn sắp xóa dữ liệu <Text span c={'red'}>{selectedRow.length + " dòng"}</Text>. Hành động này không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục?
        </Alert>
        <Group grow>
            <MyButton
                crudType="delete"
                onClick={disc[1].close}
            />
            <MyButton
                crudType="cancel"
                onClick={disc[1].close}
            />
        </Group>
    </MyButtonModal>
}

