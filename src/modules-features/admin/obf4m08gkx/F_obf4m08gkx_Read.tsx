import { Card, Flex, Group, Paper, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import F_obf4m08gkx_ReportCycleProgressChart from './F_obf4m08gkx_ReportCycleProgressChart';
import F_obf4m08gkx_RequestOfUnitBarChart from './F_obf4m08gkx_RequestOfUnitBarChart';
import F_obf4m08gkx_ReportResultOfUnitBarChart from './F_obf4m08gkx_ReportResultOfUnitBarChart';
import F_obf4m08gkx_ReviewResultsBarChart from './F_obf4m08gkx_ReviewResultsBarChart';
import F_obf4m08gkx_UpdateRatePieChart from './F_obf4m08gkx_UpdateRatePieChart';
import F_obf4m08gkx_SyntheticRatePieChart from './F_obf4m08gkx_SyntheticRatePieChart';
import F_obf4m08gkx_DistributionProofOfUnitBarChart from './F_obf4m08gkx_DistributionProofOfUnitBarChart';
import F_obf4m08gkx_ExpiredProofBarChar from './F_obf4m08gkx_ExpiredProofBarChar';
import StatCard from './obf4m08gkx_StatCard';
import { IconCertificate, IconChecklist, IconFileCertificate, IconTargetArrow } from '@tabler/icons-react';


export default function F_obf4m08gkx_Read() {
    return (
        <>
            <SimpleGrid cols={4} spacing="lg" pt={20} pb={20}>
                <StatCard
                    title={'Tiêu chuẩn'}
                    value={'12/14'}
                    bg={'#d3f9d8'}
                    gradient={{ from: '#112A46', to: 'teal.7', deg: 45 }}
                    icons={<IconCertificate color='#112A46' />}
                />
                <StatCard
                    title={'Tiêu chí'}
                    value={'23/29'}
                    bg={'#f3d9fa'}
                    gradient={{ from: '#112A46', to: 'violet.7', deg: 45 }}
                    icons={<IconChecklist color='#112A46' />}
                />
                <StatCard
                    title={'Mốc chuẩn'}
                    value={'58/75'}
                    bg={'#d0ebff'}
                    gradient={{ from: '#112A46', to: 'cyan.7', deg: 45 }}
                    icons={<IconTargetArrow color='#112A46' />}
                />
                <StatCard
                    title={'Minh chứng'}
                    value={'586'}
                    bg={'#fff3bf'}
                    gradient={{ from: '#112A46', to: 'orange.8', deg: 45 }}
                    icons={<IconFileCertificate color='#112A46' />}
                />
            </SimpleGrid>

            <F_obf4m08gkx_ReportCycleProgressChart />

            <F_obf4m08gkx_ReviewResultsBarChart />

            <Group align='flex-start' pt={20} >
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_RequestOfUnitBarChart />
                </Paper>
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_ReportResultOfUnitBarChart />
                </Paper>
            </Group>
            <Group align='flex-start' pt={20}>
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_SyntheticRatePieChart />
                </Paper>
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_UpdateRatePieChart />
                </Paper>
            </Group>
            <Group align='flex-start' pt={20}>
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_ExpiredProofBarChar />
                </Paper>
                <Paper p={30} flex={1}>
                    <F_obf4m08gkx_DistributionProofOfUnitBarChart />
                </Paper>
            </Group>
        </>
    )
}