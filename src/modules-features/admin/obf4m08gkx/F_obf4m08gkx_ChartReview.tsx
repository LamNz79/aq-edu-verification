import { BarChart } from '@mantine/charts';
import { Box, Flex, Paper, Text } from '@mantine/core';
import React from 'react';

export default function F_obf4m08gkx_ChartReview() {

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
                                { name: 'datatest1', label: 'Số lượng mốc chuẩn đạt', color: 'rgba(0, 143, 251, 0.85)' },
                                { name: 'datatest2', label: 'Số lượng mốc chuẩn đạt cần cải tiến', color: 'rgba(0, 227, 150, 0.85)' },
                                { name: 'datatest3', label: 'Số lượng mốc chuẩn không đạt', color: 'rgba(254, 176, 25, 0.85)' },
                            ]}
                        />
                    </Box>
                </Flex>
            </Box>
        </Paper>
    );
}

const data = [
    { mocChuan: 'TC1', datatest1: 120, datatest2: 130, datatest3: 150, },
    { mocChuan: 'TC2', datatest1: 126, datatest2: 134, datatest3: 170, },
    { mocChuan: 'TC3', datatest1: 120, datatest2: 130, datatest3: 150, },
    { mocChuan: 'TC4', datatest1: 120, datatest2: 140, datatest3: 160, },
];