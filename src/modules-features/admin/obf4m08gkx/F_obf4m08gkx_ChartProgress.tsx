import { Progress, Tooltip, Stack, Paper, Box, Center, Flex, Text, Divider } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

const F_obf4m08gkx_ChartProgress: React.FC = () => {
    const progressValue = 60;

    return (
        <Paper mt={20} p={20} radius="md" withBorder>
            <Text fz={15} mb={10}>Tiến độ của chu kỳ báo cáo</Text>

            <Box pos="relative">
                <Progress value={progressValue} striped animated size={20} radius="xl" />
                <Box
                    pos="absolute"
                    left={`${progressValue}%`}
                    top={-40}
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <Center><Text fz={14}>Hiện tại</Text></Center>
                    <Center><IconChevronDown size={18} /></Center>
                </Box>
            </Box>
            <Flex mt={30} justify="space-between" align="flex-start" gap="xs" fz={14}>

                <Box w="20%" ta="center">
                    <Divider my="sm" size={'md'} />
                    Chuẩn bị báo cáo/ minh chứng nội bộ định kỳ<br />
                    Cải tiến/ khắc phục
                </Box>
                <Box w="20%" ta="center"><Divider my="sm" size={'md'} />Báo cáo giữa kỳ</Box>
                <Box w="25%" ta="center">
                    <Divider my="sm" size={'md'} />
                    Chuẩn bị báo cáo/ minh chứng nội bộ định kỳ
                </Box>
                <Box w="15%" ta="center"><Divider my="sm" size={'md'} />Tự đánh giá</Box>
                <Box w="15%" ta="center"><Divider my="sm" size={'md'} />Đánh giá ngoài</Box>
            </Flex>
        </Paper>
    );
};
export default F_obf4m08gkx_ChartProgress;
