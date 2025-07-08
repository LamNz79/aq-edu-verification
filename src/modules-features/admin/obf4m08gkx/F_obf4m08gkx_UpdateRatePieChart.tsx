import { PieChart } from '@mantine/charts';
import { Box, Text, Group, Stack, Center, Grid } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_UpdateRatePieChart() {

    return (
        <Stack w={{ base: '100%' }}>
            <Stack gap={0} align='center'>
                <Center><Text fw={600} fz={18} pt={5}>Biểu đồ theo dõi tỷ lệ hoàn thành cập nhật nội dung báo cáo</Text></Center>
            </Stack>
            <Grid pt={30}>
                <Grid.Col span={{ base: 8, sm: 8, md: 9 }} >
                    <Center>
                        <PieChart
                            startAngle={90}
                            endAngle={-270}
                            h="35vh"
                            w='80%'
                            data={pieData}
                            withTooltip
                            withLabelsLine
                            labelsPosition="outside"
                            labelsType="value"
                            withLabels
                            pieProps={{
                                cx: "50%",
                                cy: "50%",
                                innerRadius: 0,
                                outerRadius: 110,
                                paddingAngle: 0
                            }}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col span={{ base: 4, sm: 4, md: 3 }}>
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
                </Grid.Col>
            </Grid>
        </Stack>
    );
}

const pieData = [
    {
        name: 'Số nội dung đã cập nhật',
        value: 170,
        color: 'rgba(0, 227, 150, 0.85)',
    },
    {
        name: 'Số nội dung chưa cập nhật',
        value: 343,
        color: '#fcbc19',
    },
];