import { PieChart } from '@mantine/charts';
import { Box, Text, Group, Stack } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_SyntheticRatePieChart() {

    return (
        <Stack w={{ base: '100%', sm: '47.5%' }}>
            <Text>Biểu đồ theo dõi tỷ lệ hoàn thành tổng hợp mốc chuẩn</Text>
            <Group gap={0} align='flex-start' wrap='nowrap'>
                <PieChart
                    startAngle={90}
                    endAngle={-270}
                    h="60vh"
                    w='80%'
                    data={pieData}
                    withTooltip
                    withLabelsLine
                    labelsPosition="outside"
                    labelsType="value"
                    withLabels
                />
                <Box ml={10}>
                    {pieData.map((item) => (
                        <Group key={item.name} mb={5} wrap='nowrap'>
                            <div
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: item.color,
                                    borderRadius: 50,
                                }}
                            />
                            <Text size="sm">{item.name}</Text>
                        </Group>
                    ))}
                </Box>
            </Group>
        </Stack>
    );
}

const pieData = [
    {
        name: 'Số mốc chuẩn đã cập nhật',
        value: 313,
        color: 'rgba(0, 227, 150, 0.85)',
    },
    {
        name: 'Số mốc chuẩn chưa cập nhật',
        value: 123,
        color: '#fcbc19',
    },
];

