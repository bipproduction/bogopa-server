'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Avatar, Box, Button, Center, Group, Pagination, Table, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

export default function TableUser() {
  const User = [
    {
      id: 1,
      image: 'https://i.pravatar.cc/200?img=4',
      name: 'Doni Setiawan',
      phone: '08162980230820',
      tgl: '27, Februari 2024',
    },
    {
      id: 2,
      image: 'https://i.pravatar.cc/200?img=5',
      name: 'Lina Udin',
      phone: '08762980230821',
      tgl: '21, Februari 2024',
    },
    {
      id: 3,
      image: 'https://i.pravatar.cc/200?img=7',
      name: 'Dandi Agung',
      phone: '08262980230822',
      tgl: '25, Februari 2024',
    },
    {
      id: 4,
      image: 'https://i.pravatar.cc/200?img=9',
      name: 'Dona Wulandari',
      phone: '08562980230823',
      tgl: '16, Februari 2024',
    },

  ]
  const router = useRouter()
  return (
    <>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={20}>
          <Table  >
            <Table.Thead>
              <Table.Tr >
                <Table.Th>NAMA</Table.Th>
                <Table.Th>NO TELPON</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody  >
              {User.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td>
                    <Group style={{ cursor: "pointer" }} onClick={() => router.push('/user/' + v.id)}>
                      <Avatar  src={v.image} size='lg' mr={2} />
                      <Box>
                        <Text fw={"bold"}>{v.name}</Text>
                        <Text c={"gray"} fz={14}>{v.tgl}</Text>
                      </Box>
                    </Group>
                  </Table.Td>
                  <Table.Td >
                    <Text>{v.phone}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Box>
      </Box>
      <Group justify='flex-end' pt={20}>
        <Pagination total={10} />
      </Group>
    </>
  );
}
