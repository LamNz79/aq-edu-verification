import { Progress, Paper, Box, Center, Flex, Text, Divider, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

const F_obf4m08gkx_ReportCycleProgressChart: React.FC = () => {
    const progressValue = 40;

    return (
        <Paper mt={20} p={20} radius="md" withBorder>
            <Text fz={15} mb={10}>Tiến độ của chu kỳ báo cáo</Text>

            <Box pos="relative">
                <Progress value={progressValue} color='rgba(0, 143, 251, 0.85)' striped animated size={20} radius="xl" />
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
            <Flex mt={5} justify="space-between" align="flex-start" fz={14}>
                <Group w="20%" gap={0} align='flex-start'>
                    <Box w="68%" ta="center" mr="2%">
                        <Divider my="sm" size={'md'} />
                        Tự đánh giá
                    </Box>
                    <Box w="28%" ta="center" mr="2%">
                        <Divider my="sm" size={'md'} />
                        Đánh giá ngoài
                    </Box>
                </Group>
                <Flex w="80%" direction="column" fz={14}>
                    <Group gap={0} align='flex-start'>
                        <Box w="30%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'md'} />
                            Chuẩn bị báo cáo/ minh chứng nội bộ định kỳ <br />
                            Cải tiến khắc phục
                        </Box>
                        <Box w="15%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'md'} />
                            Báo cáo giữa kỳ
                        </Box>
                        <Box w="30%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'md'} />
                            Chuẩn bị báo cáo minh chứng nội bộ định kỳ
                        </Box>
                        <Box w="15%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'md'} />
                            Tự đánh giá
                        </Box>
                        <Box w="8%" ta="center">
                            <Divider my="sm" size={'md'} />
                            Đánh giá ngoài
                        </Box>
                    </Group>
                    <Box ta="center" w="100%">
                        <Divider my="sm" size={'md'} />
                        Chu kỳ hiện tại
                    </Box>
                </Flex>
            </Flex>
        </Paper>
    );
};
export default F_obf4m08gkx_ReportCycleProgressChart;
