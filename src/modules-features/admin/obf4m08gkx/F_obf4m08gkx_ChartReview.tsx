import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react'

export default function F_obf4m08gkx_ChartReview() {
    const data = [
        { month: 'Tháng 1', datatest1: 120, datatest2: 80 },
        { month: 'Tháng 2', datatest1: 150, datatest2: 95 },
    ];
    return (
        <Paper mt={20} p={20}>
            <Box>
                <Text>Biểu đồ theo dõi kết quả đánh giá</Text>
                <Flex mt={10}>
                    <Paper h={170} p={8} w={60}>Số lượng yêu cầu mốc chuẩn</Paper>
                    <Box style={{ flex: 1 }}>
                        <BarChart
                            h={400}
                            data={data}
                            dataKey="month"
                            withLegend
                            series={[
                                { name: 'datatest1', label: 'Chất lượng tốt', color: 'violet.6' },
                                { name: 'datatest2', label: 'Bình thường', color: 'blue.6' },
                            ]}
                        />
                        <Paper mt={20} py={2} px={10} w={1010}>
                            Danh sách tiêu chuẩn: Số lượng mốc chuẩn, Số lượng mốc chuẩn đạt, Số lượng đạt cần cải tiến, Số lượng không đạt
                        </Paper>
                    </Box>
                </Flex>
            </Box>
        </Paper>
    )
}
