'use client'
import { Warna } from '@/module/_global';
import { Box, Button, Center, Group, Input, Table, Text } from '@mantine/core';
import React from 'react';
import TableUser from '../components/table_user';
import { GoSearch } from "react-icons/go";

export default function ViewUser() {

  return (
    <>
      <Group >
        <Box>
          <Text fz={25} c={Warna.biruTua} fw={'bold'}>USER</Text>
        </Box>
      </Group>
      <Box pt={20}>
        <Group pb={10} justify="space-between">
          <Input radius={10} placeholder="Search by name, email or phone ..." leftSection={<GoSearch size={16} />} w={400} />
        </Group>
        <TableUser />
      </Box>
    </>
  );
}

