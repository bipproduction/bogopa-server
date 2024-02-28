import { Box, Grid, Group, Table, Text } from '@mantine/core';
import React from 'react';
import { MdLiveTv } from 'react-icons/md';

export default function Live() {
  const User = [
    {
      id: 1,
      durasi: '23:01',
      tgl: '27, Februari 2024',
    },
    {
      id: 2,
      durasi: '13:01',
      tgl: '21, Februari 2024',
    },
    {
      id: 3,
      durasi: '11:01',
      tgl: '25, Februari 2024',
    },
    {
      id: 4,
      durasi: '09:01',
      tgl: '16, Februari 2024',
    },
  ]
  return (
    <>
      <Grid pb={20}>
        <Grid.Col span={3}>
          <Group gap={8} >
            <MdLiveTv size={25} color='gray' />
            <Text c={"gray"} pt={5}>Total Live</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={9} >
          <Text pt={5}>:  124 Live</Text>
        </Grid.Col>
      </Grid>
      <Box >
          <Table withRowBorders={false} >
            <Table.Thead>
              <Table.Tr >
                <Table.Th>TANGGAL LIVE</Table.Th>
                <Table.Th>DURASI LIVE</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody  >
              {User.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td >
                    <Text>{v.tgl}</Text>
                  </Table.Td>
                  <Table.Td >
                    <Text>{v.durasi}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Box>
    </>
  );
}

