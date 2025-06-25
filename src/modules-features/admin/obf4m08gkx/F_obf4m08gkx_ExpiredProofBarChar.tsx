
import { Group, Paper, Stack, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { month: 'Còn hạn', soLuongMinhChung: 120 },
    { month: 'Trước tháng 1', soLuongMinhChung: 120 },
    { month: 'Trước tháng 2', soLuongMinhChung: 100 },
    { month: 'Trước tháng 3', soLuongMinhChung: 130 },
    { month: 'Trước tháng 4', soLuongMinhChung: 90 },
    { month: 'Trước tháng 5', soLuongMinhChung: 140 },
    { month: 'Trước tháng 6', soLuongMinhChung: 150 },
    { month: 'Hơn 6 tháng', soLuongMinhChung: 120 },
];


export default function F_obf4m08gkx_ChartPired() {
    return (
        <Stack w={{ base: '100%', sm: '47.5%' }}>
            <Text h={50}>Biểu đồ theo dõi thời gian hết hạn hiệu lực của minh chứng so với ngày hoàn thành đánh giá ngoài cuối cho kỳ</Text>
            <Group gap={0} align='flex-start' wrap='nowrap'>
                <Paper h={120} p={8} w={60} ta="center">Số lượng minh chứng</Paper>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} margin={{ bottom: 50 }}>
                        <CartesianGrid horizontal={true} vertical={false} stroke="#eee" strokeDasharray="3 3" />
                        <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 10 }} />
                        <YAxis axisLine={false} tick={{ fontSize: 13 }}/>
                        <Tooltip
                            formatter={(value, name) => {
                                return [`${value}`, "Số lượng minh chứng"];
                            }}
                        />
                        <Bar dataKey="soLuongMinhChung" fill="rgba(0, 143, 251, 0.85)" label={<CustomBarLabel />} />
                    </BarChart>
                </ResponsiveContainer>
            </Group>
        </Stack>
    )
}

const CustomBarLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <text
      x={x + width / 2}
      y={y - 8} // Di chuyển lên trên đầu cột
      fill="#000"
      textAnchor="middle"
      fontSize={12}
      fontWeight={500}
    >
      {value}
    </text>
  );
};