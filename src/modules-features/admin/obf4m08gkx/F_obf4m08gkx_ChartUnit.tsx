
import { BarChart } from '@mantine/charts';
import { Box, Flex, Grid, Group, Paper, Stack, Text } from '@mantine/core';



export default function F_obf4m08gkx_ChartUnit() {


    return (
        <Paper p={30} mt={20}>
            <Group gap={"5%"}>
                <Stack w={{ base: '100%', sm: '47.5%' }}>
                    <Text>Biểu đồ theo dõi phân bố yêu cầu/ mốc chuẩn theo đơn vị</Text>
                    <Group gap={0} align='flex-start' wrap='nowrap'>
                        <Paper h={120} p={8} w='10%' miw={60} mr="5%">Danh sách đơn vị</Paper>
                        <BarChart
                            w='80%'
                            h={300}
                            orientation="vertical"
                            data={data}
                            withBarValueLabel
                            dataKey="donViMocChuan"
                            withLegend
                            series={[
                                { name: 'datatest1', label: 'Số lượng', color: 'rgba(0, 143, 251, 0.85)' },
                            ]}
                        />
                    </Group>
                </Stack>
                <Stack w={{ base: '100%', sm: '47.5%' }}>
                    <Text>Biểu đồ theo dõi phân bố nội dung báo cáo theo đơn vị</Text>
                    <Group gap={0} align='flex-start' wrap='nowrap'>
                        <Paper h={120} p={8} miw={60} w='10%' mr="5%">Danh sách đơn vị</Paper>
                        <BarChart
                            h={300}
                            w='80%'
                            data={data2}
                            withBarValueLabel
                            dataKey="mocChuan"
                            withLegend
                            orientation="vertical"
                            series={[
                                { name: 'datatest1', label: 'Số lượng', color: 'rgba(0, 143, 251, 0.85)' },
                            ]}
                        />
                    </Group>
                </Stack>
            </Group>
        </Paper>
    );
}


const data = [
    { donViMocChuan: 'Tổng số mốc chuẩn', datatest1: 120 },
    { donViMocChuan: 'Số mốc chuẩn đã hoàn thành', datatest1: 200 },
    { donViMocChuan: 'Số mốc chuẩn chưa hoàn thành', datatest1: 150 },
];

const data2 = [
    { mocChuan: 'Tổng số nội dung phụ trách', datatest1: 120 },
    { mocChuan: 'Số nội dung hoàn thành', datatest1: 200 },
    { mocChuan: 'Số nội dung chưa hoàn thành', datatest1: 150 },
];