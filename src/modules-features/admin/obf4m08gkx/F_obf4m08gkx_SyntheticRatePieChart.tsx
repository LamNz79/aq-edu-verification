import { PieChart } from '@mantine/charts';
import { Box, Text, Group, Stack, Grid, Center } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_SyntheticRatePieChart() {

    return (
        <Stack w={{ base: '100%', sm: '47.5%' }}>
            <Text>Biểu đồ theo dõi tỷ lệ hoàn thành tổng hợp mốc chuẩn</Text>
            <Grid>
                <Grid.Col span={{ base: 8, sm: 8, md: 9 }}>
                    <Center>
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
                            pieProps={{
                                cx: "50%",
                                cy: "50%",
                                innerRadius: 0,
                                outerRadius: 130,
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

