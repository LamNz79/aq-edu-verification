import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, rem, Text } from '@mantine/core';
import React from 'react'
export default function F_obf4m08gkx_ChartUnit() {
    const data = [
        { mocChuan: 'Tổng số mốc chuẩn', datatest1: 120 },
        { mocChuan: 'Số mốc chuẩn đã hoàn thành', datatest1: 200 },
        { mocChuan: 'Số mốc chuẩn chưa hoàn thành', datatest1: 150 },
    ];
    const data2 = [
        { mocChuan: 'Tổng số nội dung phụ trách', datatest1: 120 },
        { mocChuan: 'Số nội dung hoàn thành', datatest1: 200 },
        { mocChuan: 'Số nội dung chưa hoàn thành', datatest1: 150 },
    ];
    return (
        <Paper mt={20} p={20}>
            <Flex mt={20} justify={'space-between'}>
                <Box>
                    <Text>Biểu đồ theo dõi phân bố yêu cầu/ mốc chuẩn theo đơn vị</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={60}>Danh sách đơn vị</Paper>
                        <Box style={{ flex: 1 }} pl={10}>
                            <BarChart
                                h={300}
                                w={450}
                                orientation="vertical"
                                data={data}
                                // xAxisProps={{ padding: { left: 40, right: 40 } }}
                                withBarValueLabel
                                dataKey="mocChuan"
                                withLegend
                                series={[
                                    { name: 'datatest1', label: 'Số lượng', color: 'violet.6' },
                                ]}
                            />
                            {/* <Paper mt={20} py={2} px={10} w={480}>
                                Tổng số lương mốc chuẩn, Số mốc chuẩn đã hoàn thành, Số mốc chuẩn chưa hoàn thành
                            </Paper> */}
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Text>Biểu đồ theo dõi phân bố nội dung báo cáo theo đơn vị</Text>
                    <Flex mt={10}>
                        <Paper h={120} p={8} w={60}>Danh sách đơn vị</Paper>
                        <Box pl={10} mr={40}>
                            <BarChart
                                h={300}
                                w={400}
                                data={data2}
                                withBarValueLabel
                                dataKey="mocChuan"
                                withLegend
                                orientation="vertical"
                                series={[
                                    { name: 'datatest1', label: 'Số lượng', color: 'violet.6' },
                                ]}
                            />
                            {/* <Paper mt={20} py={2} px={10} w={480}>Tổng số nội dung phụ trách, số nội dung hoàn thành, số lượng nội dung chưa hoàn thành</Paper> */}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Paper>
    )
}
