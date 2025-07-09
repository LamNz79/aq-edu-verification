import { BarChart } from '@mantine/charts';
import { Center, Group, Paper, Stack, Text } from '@mantine/core';

export default function F_obf4m08gkx_ChartPired() {
    return (
        <Stack w={{ base: '100%' }}>
            <Stack gap={0} align='center'>
                <Center><Text fw={600} fz={18} pt={5}>Biểu đồ theo dõi phân bố minh chứng theo đơn vị</Text></Center>
                <Center><Text >so với ngày hết hạn đánh giá ngoài</Text></Center>
            </Stack>

            <Group gap={0} align='flex-start' wrap='nowrap' pt={25}>
                <Paper h={120} p={8} w={60} ta="center" mr={5}>Danh sách đơn vị</Paper>
                <BarChart
                    h={"450px"}
                    data={data}
                    withBarValueLabel
                    dataKey="donVi"
                    withLegend
                    orientation="vertical"
                    series={[
                        { name: 'tongSoMinhChung', label: 'Tổng số minh chứng', color: 'rgba(0, 143, 251, 0.85)' },
                        { name: 'soMinhChungConHan', label: 'Số minh chứng còn hạn', color: 'rgba(0, 227, 150, 0.85)' },
                        { name: 'soMinhChungHetHan', label: 'Số minh chứng hết hạn', color: 'rgba(254, 176, 25, 0.85)' },
                    ]}
                />
            </Group>
        </Stack>
    )
}

const data = [
    { donVi: 'Phòng Tổ chức', tongSoMinhChung: 100, soMinhChungConHan: 70, soMinhChungHetHan: 30 },
    { donVi: 'Phòng Đào tạo', tongSoMinhChung: 150, soMinhChungConHan: 105, soMinhChungHetHan: 45 },
    { donVi: 'Khoa CNTT', tongSoMinhChung: 180, soMinhChungConHan: 126, soMinhChungHetHan: 54 },
];
