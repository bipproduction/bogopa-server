import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableRole from '../components/table_role';
import { Warna } from '@/module/_global';
import { FiFolderPlus } from 'react-icons/fi';

export default function ViewRole() {
  return (
    <>
      <Group justify='space-between'>
      <Box>
        <Text fz={30} c={Warna.biruTua}>ROLE</Text>
      </Box>
        <Button  radius={"md"} leftSection={<FiFolderPlus/>}>Create</Button>
      </Group>
      <Box pt={20}>
        <TableRole />
      </Box>
    </>
  );
}

