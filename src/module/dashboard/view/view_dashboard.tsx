import React from 'react';
import EchartTransaksiPerhari from '../components/echart_transaksi_perhari';
import { Box, SimpleGrid, Text } from '@mantine/core';
import EchartTotalUser from '../components/echart_total_user';
import EchartLive from '../components/echart_live';
import TotalUserBaru from '../components/total_user_baru';
import { Warna } from '@/module/_global';

export default function ViewDashboard() {
  return (
    <>
    <Box>
      <Text fz={30} c={Warna.biruTua}>DASHBOARD</Text>
    </Box>
    <SimpleGrid
     cols={{ base: 1, sm: 2, lg: 2 }}
     spacing={{ base: 10, sm: 'xl' }}
     verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
    <EchartTransaksiPerhari/>
    <EchartTotalUser/>
    <EchartLive/>
    <TotalUserBaru/>
    </SimpleGrid>
    </>
  );
}
