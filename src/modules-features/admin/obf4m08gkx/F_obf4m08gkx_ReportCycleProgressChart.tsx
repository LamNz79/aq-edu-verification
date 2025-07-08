import { Progress, Paper, Box, Center, Flex, Text, Divider, Group, Stack } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';

const F_obf4m08gkx_ReportCycleProgressChart: React.FC = () => {
    const progressValue = 40;

    return (
        <Paper mt={20} p={20} radius="md" withBorder>
            <Stack gap={0} align='center' pb={60}>
                <Center><Text fw={600} fz={18} pt={5}>Tiến độ của chu kỳ báo cáo</Text></Center>
            </Stack>
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
                    <Box w="68%" ta="center" mr="2%"  >
                        <Divider my="sm" size={'xl'} color="green" />
                        Tự đánh giá
                    </Box>
                    <Box w="28%" ta="center" mr="2%">
                        <Divider my="sm" size={'xl'} color="green" />
                        Đánh giá ngoài
                    </Box>
                </Group>
                <Flex w="80%" direction="column" fz={14}>
                    <Group gap={0} align='flex-start'>
                        <Box w="30%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'xl'} color="yellow" />
                            Chuẩn bị báo cáo/ minh chứng nội bộ định kỳ <br />
                            Cải tiến khắc phục
                        </Box>
                        <Box w="15%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'xl'} />
                            Báo cáo giữa kỳ
                        </Box>
                        <Box w="30%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'xl'} />
                            Chuẩn bị báo cáo minh chứng nội bộ định kỳ
                        </Box>
                        <Box w="15%" ta="center" mr="0.5%">
                            <Divider my="sm" size={'xl'} />
                            Tự đánh giá
                        </Box>
                        <Box w="8%" ta="center">
                            <Divider my="sm" size={'xl'} />
                            Đánh giá ngoài
                        </Box>
                    </Group>
                    <Box
                        w="100%"
                        style={{
                            position: 'relative',
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            margin: '1rem 0',
                        }}
                    >
                        {/* Middle gradient line */}
                        <Box
                            style={{
                                width: '100%',
                                height: 4,
                                background: "linear-gradient(to top, #228be6 80%, transparent 100%)",
                                borderRadius: 0,
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                        />
                        
                        {/* Left cap */}
                        <Box
                            style={{
                                width: 4,
                                height: 12,
                                background: "#228be6",
                                borderRadius: "2px 0 0 2px",
                                position: 'absolute',
                                left: 0,
                                top: 0,
                            }}
                        />
                        {/* Right cap */}
                        <Box
                            style={{
                                width: 4,
                                height: 12,
                                background: "#228be6",
                                borderRadius: "0 2px 2px 0",
                                position: 'absolute',
                                right: 0,
                                top: 0,
                            }}
                        />
                        <Center w={"100%"} pt={40}>Chu kỳ hiện tại</Center>
                    </Box>
                </Flex>
            </Flex>
        </Paper>
    );
};
export default F_obf4m08gkx_ReportCycleProgressChart;
