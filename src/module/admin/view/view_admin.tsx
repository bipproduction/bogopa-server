import { Warna } from '@/module/_global';
import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableAdmin from '../components/table_admin';
import { FiFolderPlus } from 'react-icons/fi';

export default function ViewAdmin() {
  return (
    <>
      <Group justify='space-between'>
        <Box>
          <Text fz={30} c={Warna.biruTua}>ADMIN</Text>
        </Box>
        <Button radius={"md"} leftSection={<FiFolderPlus />}>Create</Button>
      </Group>
      <Box pt={20}>
        <TableAdmin />
      </Box>
    </>
  );
}

