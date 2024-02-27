'use client'
import { Warna } from '@/module/_global';
import { Box, Text } from '@mantine/core';
import React from 'react';
import TableTransaksi from '../components/table_transaksi';

export default function ViewTransaksi() {
  return (
    <>
    <Box>
      <Text fz={30} c={Warna.biruTua}>TRANSAKSI</Text>
    </Box>
    <Box pt={20}>
      <TableTransaksi />
    </Box>
  </>
  );
}

