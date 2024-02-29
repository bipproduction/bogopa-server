'use client'
import { Warna } from '@/module/_global';
import { Box, Grid, Group, Text } from '@mantine/core';
import React from 'react';
import { FaUserTag } from 'react-icons/fa';
import PieChartVip from '../components/pie_chart_vip';
import PieChartGift from '../components/pie_chart_gift';
import EchartTransaksi from '../components/echart_transaksi';
import TableTransaksiGift from '../components/table_transaksi_gift';
import TableTransaksiVip from '../components/table_transaksi_vip';
import { TbReportMoney } from "react-icons/tb";

export default function ViewTransaksi() {
  return (
    <>
      <Box>
        <Text fz={25} fw={'bold'} c={Warna.biruTua}>TRANSAKSI</Text>
      </Box>
      <Box pt={20}>

        <Grid gutter="25">
          <Grid.Col span={3}>
            <Box>
              <Box style={{
                border: `1px solid ${Warna.warnaBorder}`,
                borderRadius: 10,
                padding: 10,
                boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
              }} >
                <Text c={"grey"} pl={10} >Jumlah Transaksi</Text>
                <Group gap={8} pt={20} pb={20} justify='center'>
                  <FaUserTag size={25} color={Warna.pink} />
                  <Text c={"pink"} pt={5} fw={"bold"}>29 TRANSAKSI</Text>
                </Group>
              </Box>
            </Box>
            <Box pt={20}>
              <Box style={{
                border: `1px solid ${Warna.warnaBorder}`,
                borderRadius: 10,
                padding: 10,
                boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
              }} >
                <Text c={"grey"} pl={10} >Total Uang Transaksi</Text>
                <Group gap={8} pt={20} pb={20} justify='center'>
                  <TbReportMoney size={25} color={Warna.pink} />
                  <Text c={"pink"} pt={5} fw={"bold"}>4.909.089</Text>
                </Group>
              </Box>
            </Box>
            <Box pt={20}>
              <PieChartVip />
            </Box>
            <Box pt={20}>
              <PieChartGift />
            </Box>
          </Grid.Col>
          <Grid.Col span={9}>
            <EchartTransaksi />
            <Box pt={20}>
              <TableTransaksiGift />
            </Box>
            <Box pt={20}>
              <TableTransaksiVip />
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

