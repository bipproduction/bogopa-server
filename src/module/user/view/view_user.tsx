'use client'
import { Warna } from '@/module/_global';
import { Box, Button, Center, Group, Table, Text } from '@mantine/core';
import React from 'react';
import TableUser from '../components/table_user';

export default function ViewUser() {

  return (
    <>
      <Box>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>USER</Text>
      </Box>
      <Box pt={20}>
        <TableUser />
      </Box>
    </>
  );
}

