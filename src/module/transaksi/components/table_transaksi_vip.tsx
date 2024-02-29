  'use client'
  import { Warna } from '@/module/_global';
  import { ActionIcon, Anchor, Box, Button, Center, Group, Pagination, Table, Text } from '@mantine/core';
  import { useRouter } from 'next/navigation';
  import React from 'react';
  import { AiOutlineFileSearch } from 'react-icons/ai';
  
  export default function TableTransaksiVip() {
    const User = [
      {
        id: 1,
        no_trans: '1278937238',
        total_harga: "Rp.616.801",
        tgl: '27 Desember 2023',
        user: 'Doni',
      },
      {
        id: 2,
        no_trans: '873293927',
        total_harga: "Rp.566.000",
        tgl: '7 Januari 2024',
        user: 'Roni',
      },
      {
        id: 3,
        no_trans: '7278937238',
        total_harga: "Rp.215.898",
        tgl: '22 Januari 2024',
        user: 'Risma',
      },
      {
        id: 4,
        no_trans: '38728392',
        total_harga: "Rp.100.000",
        tgl: '11 Januari 2024',
        user: 'Desi',
      },
      {
        id: 6,
        no_trans: '782372922',
        total_harga: "Rp.322.901",
        tgl: '25 Januari 2024',
        user: 'Angga',
      },
    ]
  
    const router = useRouter()
  
    return (
      <>
        <Box style={{
          border: `1px solid ${Warna.warnaBorder}`,
          borderRadius: 10,
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
        }}>
          <Box p={20}>
            <Text c={Warna.pink} fw={"bold"} pb={10}>LIST TRANSAKSI VIP</Text>
            <Table  >
              <Table.Thead >
                <Table.Tr >
                  <Table.Th>NO</Table.Th>
                  <Table.Th c={Warna.ungu}>NOMOR TRANSAKSI</Table.Th>
                  <Table.Th>USER</Table.Th>
                  <Table.Th>TOTAL HARGA</Table.Th>
                  <Table.Th>TANGGAL</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody  >
                {User.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>
                    <Anchor c={Warna.ungu} onClick={() => router.push('/transaksi/' + v.id)}>
                      {v.no_trans}
                      </Anchor>
                    </Table.Td>
                    <Table.Td >{v.user}</Table.Td>
                    <Table.Td >{v.total_harga}</Table.Td>
                    <Table.Td >{v.tgl}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
        </Box>
        <Group justify='flex-end' pt={20}>
          <Pagination total={10} color={Warna.pink} />
        </Group>
      </>
    );
  }
  
  