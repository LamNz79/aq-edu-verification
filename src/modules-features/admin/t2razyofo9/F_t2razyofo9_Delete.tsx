import { utils_notification_show } from '@/utils/notification';
import { ActionIcon, Box, Button, Flex, Group, Modal, Text } from '@mantine/core';
import { IconAlertTriangleFilled, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
interface ConfirmButtonProps {
    maBoTieuChuan?: string;
}
export default function F_t2razyofo9_Delete({
    maBoTieuChuan
}: ConfirmButtonProps) {
    const [opened, setOpened] = useState(false);
    function handleDelete() {
        utils_notification_show({ crudType: "delete" })
    }
    return (
        <>
            <ActionIcon onClick={() => setOpened(true)} color="red">
                {<IconTrash />}
            </ActionIcon>
            <Modal opened={opened} onClose={() => setOpened(false)} title={'Xác nhận xóa dữ liệu ?'} centered>
                <Flex
                    justify={"space-between"}
                    align={"center"}
                >
                    <Box>
                        <IconAlertTriangleFilled color="#f59f00" size={50} width={'10%'} />
                    </Box>
                    <Text w={"90%"}>"Bạn sắp xóa dữ liệu"[{maBoTieuChuan}]". Hành động này không thể hoàn tác. Bạn chắc chắn muốn tiếp tục"</Text>
                </Flex>
                <Flex
                    mt={20}
                    justify="center"
                >
                    <Group>
                        <Button
                            color="red"
                            onClick={() => {
                                setOpened(false);
                                handleDelete();
                            }}
                        >
                            Xác nhận xóa
                        </Button>
                        <Button
                            variant='default'
                            onClick={() => {
                                setOpened(false);
                            }}
                        >
                            Hủy thao tác
                        </Button>
                    </Group>
                </Flex>
            </Modal>
        </>
    );
}