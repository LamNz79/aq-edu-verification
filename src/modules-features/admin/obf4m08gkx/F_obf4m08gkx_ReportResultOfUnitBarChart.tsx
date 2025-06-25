
import { BarChart } from '@mantine/charts';
import { Group, Paper, Stack, Text } from '@mantine/core';

export default function F_obf4m08gkx_ReportResultOfUnitBarChart() {

    return (
        <Stack w={{ base: '100%', sm: '47.5%' }}>
            <Text>Biểu đồ theo dõi phân bố nội dung báo cáo theo đơn vị</Text>
            <Group gap={0} align='flex-start' wrap='nowrap'>
                <Paper h={120} p={8} w={60} ta="center">Danh sách đơn vị</Paper>
                <BarChart
                    h="60vh"
                    data={data}
                    withBarValueLabel
                    dataKey="donVi"
                    withLegend
                    orientation="vertical"
                    series={[
                        { name: 'tongSoNoiDungPhuTrach', label: 'Tổng số nội dung phụ trách', color: 'rgba(0, 143, 251, 0.85)' },
                        { name: 'soNoiDungHoanThanh', label: 'Số nội dung hoàn thành', color: 'rgba(0, 227, 150, 0.85)' },
                        { name: 'soNoiDungChuaHoanThanh', label: 'Số nội dung chưa hoàn thành', color: 'rgba(254, 176, 25, 0.85)' },
                    ]}
                />
            </Group>
        </Stack>
    );
}

const data = [
  { donVi: 'Phòng Tổ chức', tongSoNoiDungPhuTrach: 120, soNoiDungHoanThanh: 90, soNoiDungChuaHoanThanh: 30 },
  { donVi: 'Phòng Đào tạo', tongSoNoiDungPhuTrach: 160, soNoiDungHoanThanh: 110, soNoiDungChuaHoanThanh: 50 },
  { donVi: 'Khoa CNTT', tongSoNoiDungPhuTrach: 200, soNoiDungHoanThanh: 150, soNoiDungChuaHoanThanh: 50 },
];
