'use client'
import { Warna } from '@/module/_global';
import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableAdmin from '../components/table_admin';
import { FiFolderPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ViewAdmin() {
  const router = useRouter()
  return (
    <>
      <Group justify='space-between'>
        <Box>
          <Text fz={30} c={Warna.biruTua}>ADMIN</Text>
        </Box>
        <Button radius={"md"} leftSection={<FiFolderPlus />} onClick={() => router.push("/admin/add")} >Create</Button>
      </Group>
      <Box pt={20}>
        <TableAdmin />
      </Box>
    </>
  );
}

