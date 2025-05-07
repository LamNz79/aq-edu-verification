import { BarChart, PieChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react'
export default function F_obf4m08gkx_ChartComplete() {
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
            value: data2.reduce((acc, cur) => acc + cur.datatest1, 0),
            color: 'violet.6',
        },
        {
            name: 'Số mốc chuẩn chưa cập nhật',
            label: 'Nghỉ tại nhà',
            value: data2.reduce((acc, cur) => acc + cur.datatest2, 0),
            color: 'blue.6',
        },
    ];
    const pieData1 = [
        {
            name: 'Số nội dung đã cập nhật',
            label: 'Nghỉ tại trường',
            value: data2.reduce((acc, cur) => acc + cur.datatest1, 0),
            color: 'violet.6',
        },
        {
            name: 'Số nội dung chưa cập nhật',
            label: 'Nghỉ tại nhà',
            value: data2.reduce((acc, cur) => acc + cur.datatest2, 0),
            color: 'blue.6',
        },
    ];
    return (
        <Paper mt={20} p={20}>
            <Flex mt={20} justify={'space-between'}>
                <Box>
                    <Text>Biểu đồ theo dõi tỷ lệ hoàn thành tổng hợp mốc chuẩn</Text>
                    <Flex mt={10}>
                        <Box style={{ flex: 1 }}>
                            <PieChart
                                h={300}
                                w={450}
                                data={pieData}
                                withTooltip
                                withLabelsLine labelsPosition="outside" labelsType="value" withLabels
                            />
                            {/* <Paper mt={20} py={2} px={10} w={"100%"}>
                                Số mốc chuẩn đã cập nhật/ số mốc chuẩn chưa cập nhật
                            </Paper> */}
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Text>Biểu đồ theo dõi tỷ lệ hoàn thành cập nhật nội dung báo cáo</Text>
                    <Flex mt={10}>
                        <Box>
                            <PieChart
                                h={300}
                                w={450}
                                data={pieData1}
                                withTooltip
                                withLabelsLine labelsPosition="outside" labelsType="value" withLabels
                            />
                            {/* <Paper mt={20} py={2} px={10} w={"100%"}>Số nội dung đã cập nhật/ số nội dung chưa cập nhật</Paper> */}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Paper>
    )
}
