import { BarChart, PieChart } from '@mantine/charts';
import { Box, Flex, Paper, Text, Group, RingProgress, Stack } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_ChartComplete() {


    return (
        <Paper p={30} mt={20}>
            <Group gap={"5%"}>
                <Stack w={{ base: '100%', sm: '47.5%' }}>
                    <Text>Biểu đồ theo dõi tỷ lệ hoàn thành tổng hợp mốc chuẩn</Text>
                    <Group gap={0} align='flex-start' wrap='nowrap'>
                        <PieChart
                            h={300}
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
                                    <Box
                                        style={{
                                            width: 12,
                                            height: 12,
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
                <Stack w={{ base: '100%', sm: '47.5%' }}>
                    <Text>Biểu đồ theo dõi tỷ lệ hoàn thành cập nhật nội dung báo cáo</Text>
                    <Group gap={0} align='flex-start' wrap='nowrap'>
                        <PieChart
                            h={300}
                            w='80%'
                            data={pieData1}
                            withTooltip
                            withLabelsLine
                            labelsPosition="outside"
                            labelsType="value"
                            withLabels
                        />
                        <Box ml={10}>
                            {pieData1.map((item) => (
                                <Group key={item.name} mb={5} wrap='nowrap'>
                                    <Box
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
            </Group>
        </Paper>
    );
}


const data1 = [
    { month: 'Tháng 1', datatest1: 100, datatest2: 0 },
    { month: 'Tháng 2', datatest1: 130, datatest2: 0 },
    { month: 'Tháng 3', datatest1: 100, datatest2: 0 },
    { month: 'Tháng 4', datatest1: 130, datatest2: 0 },
    { month: 'Tháng 5', datatest1: 125, datatest2: 100 },
    { month: 'Tháng 6', datatest1: 140, datatest2: 30 },
    { month: 'Tháng 7', datatest1: 160, datatest2: 150 },
];

const data2 = [
    { month: 'Tháng 1', datatest1: 120, datatest2: 80 },
    { month: 'Tháng 2', datatest1: 150, datatest2: 95 },
    { month: 'Tháng 3', datatest1: 100, datatest2: 95 },
    { month: 'Tháng 4', datatest1: 130, datatest2: 120 },
    { month: 'Tháng 5', datatest1: 125, datatest2: 100 },
    { month: 'Tháng 6', datatest1: 140, datatest2: 130 },
    { month: 'Tháng 7', datatest1: 160, datatest2: 150 },
];

const pieData = [
    {
        name: 'Số mốc chuẩn đã cập nhật',
        label: 'Nghỉ tại trường',
        value: data1.reduce((acc, cur) => acc + cur.datatest1, 0),
        color: 'rgba(0, 227, 150, 0.85)',
    },
    {
        name: 'Số mốc chuẩn chưa cập nhật',
        label: 'Nghỉ tại nhà',
        value: data1.reduce((acc, cur) => acc + cur.datatest2, 0),
        color: '#fcbc19',
    },
];

const pieData1 = [
    {
        name: 'Số nội dung đã cập nhật',
        label: 'Nghỉ tại trường',
        value: data2.reduce((acc, cur) => acc + cur.datatest1, 0),
        color: 'rgba(0, 227, 150, 0.85)',
    },
    {
        name: 'Số nội dung chưa cập nhật',
        label: 'Nghỉ tại nhà',
        value: data2.reduce((acc, cur) => acc + cur.datatest2, 0),
        color: '#fcbc19',
    },
];