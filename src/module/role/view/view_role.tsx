'use client'
import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableRole from '../components/table_role';
import { Warna } from '@/module/_global';
import { FiFolderPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ViewRole() {
  const router = useRouter()
  return (
    <>
      <Group justify='space-between'>
      <Box>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>ROLE</Text>
      </Box>
        <Button  radius={"md"} leftSection={<FiFolderPlus/>} onClick={()=>router.push('/role/add')}>Create</Button>
      </Group>
      <Box pt={20}>
        <TableRole />
      </Box>
    </>
  );
}

