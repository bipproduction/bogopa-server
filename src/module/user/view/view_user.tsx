'use client'
import { Warna } from '@/module/_global';
import { Box, Table, Text } from '@mantine/core';
import React from 'react';

export default function ViewUser() {
  return (
    <>
      <Text fw={'bolder'} fz={35} c={Warna.biruTua}>
        User
      </Text>
      <Box style={{
        padding: '15px 25px',
        borderRadius: 10,
        border: '1px solid #dddddd'
      }}>
        <Text fw={'bolder'} fz={20} c={Warna.biruTua}>
          Daftar User
        </Text>
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>NAMA</Table.Th>
              <Table.Th>VALUE</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {/* <Table.Tbody>
            <Table.Tr>
              <Table.Td>Amalia</Table.Td>
              <Table.Td>10300</Table.Td>
            </Table.Tr>
          </Table.Tbody> */}
        </Table>
      </Box>
    </>
  );
}

