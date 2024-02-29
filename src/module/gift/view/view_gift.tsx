import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableGift from '../components/table_gift';
import { Warna } from '@/module/_global';
import { FiFolderPlus } from 'react-icons/fi';

export default function ViewGift() {
  return (
    <>
      <Group justify='space-between'>
        <Box>
          <Text fz={25} c={Warna.biruTua} fw={'bold'}>GIFT</Text>
        </Box>
        <Button radius={"md"} leftSection={<FiFolderPlus />}>Create</Button>
      </Group>
      <Box pt={20}>
        <TableGift />
      </Box>
    </>
  );
}

