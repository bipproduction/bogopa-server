import { Warna } from '@/module/_global';
import { Box, Divider, Grid, Group, Table, Text } from '@mantine/core';
import React from 'react';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";

export default function Transaksi() {
  const User = [
    {
      id: 1,
      total_harga: 'Rp.30.000',
      tgl: '27, Februari 2024',
      dibeli: 'VIP'
    },
    {
      id: 2,
      total_harga: 'Rp.145.000',
      tgl: '21, Februari 2024',
      dibeli: 'GOLD'
    },
    {
      id: 3,
      total_harga: 'Rp.134.000',
      tgl: '25, Februari 2024',
      dibeli: 'PREMIUM'
    },
    {
      id: 4,
      total_harga: 'Rp.320.000',
      tgl: '16, Februari 2024',
      dibeli: 'VIP'
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
              <Text c={"grey"} pl={10} >Total Transaksi</Text>
              <Group gap={8} pt={20} pb={20} justify='center'>
                <FaMoneyBillTransfer size={25} color={Warna.pink} />
                <Text c={"pink"} >29 Transaksi</Text>
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
              <Table.Th>TANGGAL TRANSAKSI</Table.Th>
              <Table.Th>PEMBELIAN</Table.Th>
              <Table.Th>TOTAL HARGA</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody  >
            {User.map((v, i) => (
              <Table.Tr key={i}>
                <Table.Td >
                  <Text>{v.tgl}</Text>
                </Table.Td>
                <Table.Td >
                  <Text>{v.dibeli}</Text>
                </Table.Td>
                <Table.Td >
                  <Text>{v.total_harga}</Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
    </>
  );
}
