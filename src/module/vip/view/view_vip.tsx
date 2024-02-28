'use client'
import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableVip from '../components/table_vip';
import { Warna } from '@/module/_global';
import { FiFolderPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ViewVip() {
  const router = useRouter()
  return (
    <>
      <Group justify='space-between'>
      <Box>
        <Text fz={30} c={Warna.biruTua}>VIP</Text>
      </Box>
        <Button  radius={"md"} leftSection={<FiFolderPlus/>} onClick={() => router.push('/vip/add')}>Create</Button>
      </Group>
      <Box pt={20}>
        <TableVip />
      </Box>
    </>
  );
}
