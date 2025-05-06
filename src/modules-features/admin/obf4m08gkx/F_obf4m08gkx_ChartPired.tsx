import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react'
export default function F_obf4m08gkx_ChartPired() {
    const data = [
        { month: 'Tháng 1', datatest1: 120, datatest2: 80 },
        { month: 'Tháng 2', datatest1: 150, datatest2: 95 },
    ];
    return (
        <Paper mt={20} p={20}>
            <Flex mt={20} justify={'space-between'}>
                <Box>
                    <Text h={50}>Biểu đồ theo dõi thời hạn hiệu lực của minh chứng so với ngày hoàn thành đó</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={80}>Số lượng minh chứng</Paper>
                        <Box style={{ flex: 1 }}>
                            <BarChart
                                h={300}
                                w={450}
                                data={data}
                                dataKey="month"
                                withLegend
                                series={[
                                    { name: 'datatest1', label: 'Chất lượng tốt', color: 'violet.6' },
                                    { name: 'datatest2', label: 'Bình thường', color: 'blue.6' },
                                ]}
                            />
                            <Paper mt={20} py={2} px={10} w={480}>
                                Còn hạn, Trước 1 tháng, trước 2 tháng, trước 3 tháng, trước 4 tháng, trước 5 tháng, trước 6 tháng, Hơn 6 tháng
                            </Paper>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Text h={50}>Biểu đồ theo dõi phân bố minh chứng theo đơn vị so với ngày hết hạn đánh giá ngoài</Text>
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
                            <Paper mt={20} py={2} px={10} w={480}>Tổng số minh chứng, Số minh chứng còn hạn, Số minh chứng hết hạn</Paper>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Paper>
    )
}
