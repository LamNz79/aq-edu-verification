import { Card, Flex, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import F_obf4m08gkx_ReportCycleProgressChart from './F_obf4m08gkx_ReportCycleProgressChart';
import F_obf4m08gkx_RequestOfUnitBarChart from './F_obf4m08gkx_RequestOfUnitBarChart';
import F_obf4m08gkx_ReportResultOfUnitBarChart from './F_obf4m08gkx_ReportResultOfUnitBarChart';
import F_obf4m08gkx_ReviewResultsBarChart from './F_obf4m08gkx_ReviewResultsBarChart';
import F_obf4m08gkx_UpdateRatePieChart from './F_obf4m08gkx_UpdateRatePieChart';
import F_obf4m08gkx_SyntheticRatePieChart from './F_obf4m08gkx_SyntheticRatePieChart';
import F_obf4m08gkx_DistributionProofOfUnitBarChart from './F_obf4m08gkx_DistributionProofOfUnitBarChart';
import F_obf4m08gkx_ExpiredProofBarChar from './F_obf4m08gkx_ExpiredProofBarChar';

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
            <F_obf4m08gkx_ReportCycleProgressChart />
            <F_obf4m08gkx_ReviewResultsBarChart />
            <Paper p={30} mt={20}>
                <Group gap={"5%"} align='flex-start'>
                    <F_obf4m08gkx_RequestOfUnitBarChart />
                    <F_obf4m08gkx_ReportResultOfUnitBarChart />
                </Group>
            </Paper>
            <Paper p={30} mt={20}>
                <Group gap={"5%"} align='flex-start'>
                    <F_obf4m08gkx_SyntheticRatePieChart />
                    <F_obf4m08gkx_UpdateRatePieChart />
                </Group>
            </Paper>
            <Paper p={30} mt={20}>
                <Group gap={"5%"} align='flex-start'>
                    <F_obf4m08gkx_ExpiredProofBarChar/>
                    <F_obf4m08gkx_DistributionProofOfUnitBarChart/>
                </Group>
            </Paper>
        </Paper>
    )
}