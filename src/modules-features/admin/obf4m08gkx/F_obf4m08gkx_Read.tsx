import { Box, Card, Flex, Group, Paper, Progress, Text, Tooltip } from '@mantine/core'
import React from 'react'
import F_obf4m08gkx_ChartUnit from './F_obf4m08gkx_ChartUnit';
import F_obf4m08gkx_ChartComplete from './F_obf4m08gkx_ChartComplete';
import F_obf4m08gkx_ChartPired from './F_obf4m08gkx_ChartPired';
import F_obf4m08gkx_ChartReview from './F_obf4m08gkx_ChartReview';
import F_obf4m08gkx_ChartProgress from './F_obf4m08gkx_ChartProgress';

export default function F_obf4m08gkx_Read() {
    return (
        <Paper p={20}>
            <Flex
                justify={'space-between'}
                align={'center'}
            >
                <Card shadow="xl" w={'24%'} padding="lg" bg={'#d3f9d8'} radius="md" withBorder>
                    <Text fz={30}>Tiêu chuẩn</Text>
                    <Text fz={30} fw={'bold'}>12/14</Text>
                </Card>
                <Card shadow="xl" w={'24%'} padding="lg" bg={'#f3d9fa'} radius="md" withBorder>
                    <Text fz={30}>Tiêu chí</Text>
                    <Text fz={30} fw={'bold'}>23/29</Text>
                </Card>
                <Card shadow="xl" w={'24%'} padding="lg" bg={'#d0ebff'} radius="md" withBorder>
                    <Text fz={30}>Mốc chuẩn</Text>
                    <Text fz={30} fw={'bold'}>58/75</Text>
                </Card>
                <Card shadow="xl" w={'24%'} padding="lg" bg={'#fff3bf'} radius="md" withBorder>
                    <Text fz={30}>Minh chứng</Text>
                    <Text fz={30} fw={'bold'}>586</Text>
                </Card>
            </Flex>
            <F_obf4m08gkx_ChartProgress />
            <F_obf4m08gkx_ChartReview />
            <F_obf4m08gkx_ChartUnit />
            <F_obf4m08gkx_ChartComplete />
            <F_obf4m08gkx_ChartPired />
        </Paper>
    )
}