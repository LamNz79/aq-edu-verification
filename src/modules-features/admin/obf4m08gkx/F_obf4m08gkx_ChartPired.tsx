import { BarChart } from '@mantine/charts';
import { Box, Flex, Group, Paper, Text } from '@mantine/core';
import React from 'react'
export default function F_obf4m08gkx_ChartPired() {
    const data1 = [
        { month: 'Còn hạn', datatest1: 120 },
        { month: 'Trước tháng 1', datatest1: 120 },
        { month: 'Trước tháng 2', datatest1: 100 },
        { month: 'Trước tháng 3', datatest1: 130 },
        { month: 'Trước tháng 4', datatest1: 90 },
        { month: 'Trước tháng 5', datatest1: 140 },
        { month: 'Trước tháng 6', datatest1: 150 },
        { month: 'Hơn 6 tháng', datatest1: 120 },

    ];
    const data = [
        { mocChuan: 'Tổng số minh chứng', datatest1: 120 },
        { mocChuan: 'Số minh chứng còn hạn', datatest1: 200 },
        { mocChuan: 'Số minh chứng hết hạn', datatest1: 150 },
    ];
    return (
        <Paper mt={20} p={20}>
            <Flex mt={20} justify={"space-between"} >
                <Box>
                    <Text h={50}>Biểu đồ theo dõi thời hạn hiệu lực của minh chứng so với ngày hoàn thành đó</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={80}>Số lượng minh chứng</Paper>
                        <Box style={{ flex: 1 }}>
                            <BarChart
                                h={300}
                                data={data1}
                                withBarValueLabel
                                dataKey="month"
                                withLegend
                                series={[
                                    { name: 'datatest1', label: 'Số lượng còn hạn', color: 'violet.6' },
                                ]}
                            />
                            {/* <Paper mt={20} py={2} px={10} w={"100%"}>
                                Còn hạn, Trước 1 tháng, trước 2 tháng, trước 3 tháng, trước 4 tháng, trước 5 tháng, trước 6 tháng, Hơn 6 tháng
                            </Paper> */}
                        </Box>
                    </Flex>
                </Box>
                <Box ml={10}>
                    <Text h={50}>Biểu đồ theo dõi phân bố minh chứng theo đơn vị so với ngày hết hạn đánh giá ngoài</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={60}>Danh sách đơn vị</Paper>
                        <Box ml={10}>
                            <BarChart
                                h={300}
                                w={450}
                                data={data}
                                withBarValueLabel
                                dataKey="mocChuan"
                                withLegend
                                orientation="vertical"
                                series={[
                                    { name: 'datatest1', label: 'Số lượng', color: 'violet.6' },
                                ]}
                            />
                            {/* <Paper mt={20} py={2} px={10} w={"100%"}>Tổng số minh chứng, Số minh chứng còn hạn, Số minh chứng hết hạn</Paper> */}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Paper>
    )
}
