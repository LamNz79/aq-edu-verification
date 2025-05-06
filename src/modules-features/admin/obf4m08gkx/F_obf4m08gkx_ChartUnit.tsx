import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react'
export default function F_obf4m08gkx_ChartUnit() {
    const data = [
        { month: 'Tháng 1', datatest1: 120, datatest2: 80 },
        { month: 'Tháng 2', datatest1: 150, datatest2: 95 },
    ];
    return (
        <Paper mt={20} p={20}>
            <Flex mt={20} justify={'space-between'}>
                <Box>
                    <Text>Biểu đồ theo dõi phân bố yêu cầu/ mốc chuẩn theo đơn vị</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={60}>Danh sách đơn vị</Paper>
                        <Box style={{ flex: 1 }}>
                            <BarChart
                                h={300}
                                w={450}
                                orientation="vertical"
                                data={data}
                                dataKey="month"
                                withLegend
                                series={[
                                    { name: 'datatest1', label: 'Chất lượng tốt', color: 'violet.6' },
                                    { name: 'datatest2', label: 'Bình thường', color: 'blue.6' },
                                ]}
                            />
                            <Paper mt={20} py={2} px={10} w={480}>
                                Tổng số lương mốc chuẩn, Số mốc chuẩn đã hoàn thành, Số mốc chuẩn chưa hoàn thành
                            </Paper>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Text>Biểu đồ theo dõi phân bố nội dung báo cáo theo đơn vị</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={60}>Danh sách đơn vị</Paper>
                        <Box>
                            <BarChart
                                h={300}
                                w={450}
                                data={data}
                                dataKey="month"
                                withLegend
                                orientation="vertical"
                                series={[
                                    { name: 'datatest1', label: 'Chất lượng tốt', color: 'violet.6' },
                                    { name: 'datatest2', label: 'Bình thường', color: 'blue.6' },
                                ]}
                            />
                            <Paper mt={20} py={2} px={10} w={480}>Tổng số nội dung phụ trách, số nội dung hoàn thành, số lượng nội dung chưa hoàn thành</Paper>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Paper>
    )
}
