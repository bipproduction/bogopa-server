'use client'
import { Box, Button, Group, Input, Text } from '@mantine/core';
import React from 'react';
import TableVip from '../components/table_vip';
import { Warna } from '@/module/_global';
import { FiFolderPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';

export default function ViewVip() {
  const router = useRouter()
  return (
    <>
      <Group >
        <Box>
          <Text fz={25} c={Warna.biruTua} fw={'bold'}>VIP</Text>
        </Box>
      </Group>
      <Box pt={20}>
        <Group pb={10} justify="space-between">
          <Input radius={10} placeholder="Search by name, email or phone ..." leftSection={<GoSearch size={16} />} w={400} />
          <Button radius={"md"} leftSection={<FiFolderPlus />} onClick={() => router.push('/vip/add')}>Create</Button>
        </Group>
        <TableVip />
      </Box>
    </>
  );
}
