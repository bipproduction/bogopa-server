'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Avatar, Box, Center, Group, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import { LiaEditSolid } from 'react-icons/lia'
import { useRouter } from 'next/navigation';

export default function TableGift({ data }: { data: any }) {
  const User = [
    {
      id: 1,
      name: 'Mawar',
      image: 'https://i.pravatar.cc/200?img=4',
      price: '6.000',
      tgl: '27, Februari 2024',
    },
    {
      id: 2,
      name: 'Topi',
      image: 'https://i.pravatar.cc/200?img=4',
      price: '10.000',
      tgl: '11, Februari 2024',
    },
    {
      id: 3,
      name: 'Singa',
      image: 'https://i.pravatar.cc/200?img=4',
      price: '1.050.000',
      tgl: '12, Februari 2024',
    },
    {
      id: 4,
      name: 'Moyet',
      image: 'https://i.pravatar.cc/200?img=4',
      price: '362.000',
      tgl: '12, Februari 2024',
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
            <Table.Thead >
              <Table.Tr >
                <Table.Th>NAME</Table.Th>
                <Table.Th>PRICE</Table.Th>
                <Table.Th>STATUS</Table.Th>
                <Table.Th>
                  <Center>
                    ACTION
                  </Center>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody  >
              {data.map((v: any, i: any) => (
                <Table.Tr key={i}>

                  <Table.Td>
                    <Group>
                      <Avatar style={{ cursor: "pointer" }} src={v.image} size='lg' mr={2} onClick={() => router.push('/gift/' + v.id)} />
                      <Box>
                        <Text fw={"bold"}>{v.name}</Text>
                        <Text c={"gray"} fz={14}>{v.tgl}</Text>
                      </Box>
                    </Group>
                  </Table.Td>
                  <Table.Td >{v.price}</Table.Td>
                  <Table.Td >
                    <Switch size="lg" onLabel="AKTIF" offLabel="NON AKTIF" />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                      <Group>
                        <ActionIcon variant="subtle" onClick={() => router.push("/gift/edit/" + v.id)}>
                          <LiaEditSolid size={30} />
                        </ActionIcon>
                      </Group>
                    </Center>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

