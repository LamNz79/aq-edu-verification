import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_ChartReview() {
    const data = [
        { mocChuan: 'Số lượng mốc chuẩn', datatest1: 120 },
        { mocChuan: 'Số lượng mốc chuẩn đạt', datatest1: 200 },
        { mocChuan: 'Số lượng đạt cần cải tiến', datatest1: 150 },
        { mocChuan: 'Số lượng không đạt', datatest1: 150 },
    ];

    return (
        <Paper mt={20} p={20}>
            <Box>
                <Text>Biểu đồ theo dõi kết quả đánh giá</Text>
                <Flex mt={10}>
                    <Paper h={170} p={8} w={60}>
                        Số lượng yêu cầu mốc chuẩn
                    </Paper>
                    <Box style={{ flex: 1 }}>
                        <BarChart
                            h={400}
                            data={data}
                            dataKey="mocChuan"
                            withLegend
                            withBarValueLabel
                            series={[
                                { name: 'datatest1', label: 'Số lượng', color: 'blue.6' },
                            ]}
                        />
                    </Box>
                </Flex>
            </Box>
        </Paper>
    );
}