import { Warna } from '@/module/_global';
import { Box, Divider, Grid, Group, Table, Text } from '@mantine/core';
import React from 'react';
import { MdLiveTv } from 'react-icons/md';
import { GiLovers } from "react-icons/gi";

export default function Dating() {
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
      <Grid>
        <Grid.Col span={3}>
          <Box>
            <Box style={{
              backgroundColor: '#E5E9F1',
              padding: 10,
              borderRadius: 10,
            }}>
              <Text c={"grey"} pl={10} >Total Metch</Text>
              <Group gap={8} pt={20} pb={20} justify='center'>
                <GiLovers size={25} color={Warna.pink} />
                <Text c={"pink"} pt={5}>429 Metch</Text>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={3}>
          <Box>
            <Box style={{
              backgroundColor: '#E5E9F1',
              padding: 10,
              borderRadius: 10,
            }}>
              <Text c={"grey"} pl={10} >Total Live</Text>
              <Group gap={8} pt={20} pb={20} justify='center'>
                <MdLiveTv size={25} color={Warna.pink} />
                <Text c={"pink"} pt={5}>429 Live</Text>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      <Box pt={20} pb={20}>
        <Divider />
      </Box>
      <Box bg={"#E5E9F1"} p={10} style={{borderRadius: 10}}>
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

