import { BarChart } from '@mantine/charts';
import { Box, Center, Flex, Paper, Stack, Text } from '@mantine/core';
import React from 'react';

const series = [
    { name: 'soLuongMocChuan', label: 'Số lượng mốc chuẩn', color: 'var(--mantine-color-cyan-6)' },
    { name: 'soLuongMocChuanDat', label: 'Số lượng mốc chuẩn đạt', color: 'rgba(0, 143, 251, 0.85)' },
    { name: 'soLuongMocChuanCanCaiTien', label: 'Số lượng mốc chuẩn đạt cần cải tiến', color: 'rgba(0, 227, 150, 0.85)' },
    { name: 'soLuongMocChuanKhongDat', label: 'Số lượng mốc chuẩn không đạt', color: 'rgba(254, 176, 25, 0.85)' },
]


export default function F_obf4m08gkx_ReviewResultsBarChart() {

    return (
        <Paper mt={20} p={20}>
            <Box>
                <Stack gap={0} align='center'>
                    <Center><Text fw={600} fz={18} pt={5}>Biểu đồ theo dõi kết quả đánh giá</Text></Center>
                </Stack>
                <Flex mt={10} pt={30}>
                    <Paper h={170} p={8} w={60} ta="center">
                        Số lượng yêu cầu mốc chuẩn
                    </Paper>
                    <Box style={{ flex: 1 }}>
                        <BarChart
                            h={400}
                            data={data}
                            dataKey="tieuChuan"
                            withLegend
                            withBarValueLabel
                            series={series}
                        />
                    </Box>
                </Flex>
            </Box>
        </Paper>
    );
}

const data = [
    { tieuChuan: 'TC1', soLuongMocChuan: 400, soLuongMocChuanDat: 100, soLuongMocChuanCanCaiTien: 150, soLuongMocChuanKhongDat: 150 },
    { tieuChuan: 'TC2', soLuongMocChuan: 420, soLuongMocChuanDat: 130, soLuongMocChuanCanCaiTien: 140, soLuongMocChuanKhongDat: 150 },
    { tieuChuan: 'TC3', soLuongMocChuan: 440, soLuongMocChuanDat: 160, soLuongMocChuanCanCaiTien: 140, soLuongMocChuanKhongDat: 140 },
    { tieuChuan: 'TC4', soLuongMocChuan: 460, soLuongMocChuanDat: 190, soLuongMocChuanCanCaiTien: 130, soLuongMocChuanKhongDat: 140 },
];