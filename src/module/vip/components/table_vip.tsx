'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Anchor, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { LiaEditSolid } from 'react-icons/lia'
import { FiFolderPlus } from 'react-icons/fi'
import { useRouter } from 'next/navigation';

export default function TableVip() {
  const router = useRouter()
  const User = [
    {
      id: 1,
      name: 'Gold',
    },
    {
      id: 2,
      name: 'Premium',
    },
    {
      id: 3,
      name: 'VIP',
    },
  ]
  return (
    <>

      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={20}>
          <Table  >
            <Table.Thead >
              <Table.Tr >
                <Table.Th>NO</Table.Th>
                <Table.Th>NAMA</Table.Th>
                <Table.Th>STATUS</Table.Th>
                <Table.Th>
                  <Center>
                    ACTION
                  </Center>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody  >
              {User.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td >
                    <Anchor onClick={() => router.push('/vip/detail/' + v.id)}>
                    {v.name}
                    </Anchor>
                  </Table.Td>
                  <Table.Td >
                    <Switch size="lg" onLabel="AKTIF" offLabel="NON AKTIF" />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                      <Group>
                        <ActionIcon variant="subtle" onClick={() => router.push('/vip/edit/' + v.id)} >
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

