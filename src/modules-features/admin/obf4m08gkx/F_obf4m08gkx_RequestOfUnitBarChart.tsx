
import { BarChart } from '@mantine/charts';
import { Group, Paper, Stack, Text } from '@mantine/core';



export default function F_obf4m08gkx_RequestOfUnitBarChart() {

    return (
        <Stack w={{ base: '100%', sm: '47.5%' }}>
            <Text>Biểu đồ theo dõi phân bố yêu cầu/ mốc chuẩn theo đơn vị</Text>
            <Group gap={0} align='flex-start' wrap='nowrap'>
                <Paper h={120} p={8} w={60} ta="center">Danh sách đơn vị</Paper>
                <BarChart
                    h="60vh"
                    orientation="vertical"
                    data={data}
                    withBarValueLabel
                    dataKey="donVi"
                    withLegend
                    series={[
                        { name: 'tongSoLuongMocChuan', label: 'Tổng số lượng mốc chuẩn', color: 'rgba(0, 143, 251, 0.85)' },
                        { name: 'soLuongMocChuanHoanThanh', label: 'Số mốc chuẩn đã hoàn thành', color: 'rgba(0, 227, 150, 0.85)' },
                        { name: 'soLuongMocChuanChuaHoanThanh', label: 'Số mốc chuẩn chưa hoàn thành', color: 'rgba(254, 176, 25, 0.85)' },
                    ]}
                />
            </Group>
        </Stack>
    );
}


const data = [
    { donVi: 'Phòng tổ chức', tongSoLuongMocChuan: 120, soLuongMocChuanHoanThanh: 80, soLuongMocChuanChuaHoanThanh: 40 },
    { donVi: 'Phòng đào tạo', tongSoLuongMocChuan: 200, soLuongMocChuanHoanThanh: 80, soLuongMocChuanChuaHoanThanh: 120 },
    { donVi: 'Khoa CNTT', tongSoLuongMocChuan: 150, soLuongMocChuanHoanThanh: 80, soLuongMocChuanChuaHoanThanh: 70 },
];