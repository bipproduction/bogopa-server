'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { LiaEditSolid } from 'react-icons/lia';

export default function TableRole() {
  const User = [
    {
      id: 1,
      name: 'Doni',
    },
    {
      id: 2,
      name: 'Roni',
    },
    {
      id: 3,
      name: 'Risma',
    },
    {
      id: 4,
      name: 'Desi',
    },
    {
      id: 6,
      name: 'Angga',
    },
    {
      id: 7,
      name: 'Dwi',
    },
    {
      id: 5,
      name: 'Lisa',
    },
    {
      id: 8,
      name: 'Dona',
    },
    {
      id: 9,
      name: 'Ahmad',
    },
    {
      id: 10,
      name: 'Dono',
    },
  ]
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
                <Table.Th>NO</Table.Th>
                <Table.Th>ROLE</Table.Th>
                <Table.Th>NON AKTIF</Table.Th>
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
                  <Table.Td>{v.name}</Table.Td>
                  <Table.Td >
                  <Switch size="lg" onLabel="AKTIF" offLabel="NON AKTIF" />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                    <Group>
                      <ActionIcon variant="subtle">
                      <LiaEditSolid size={30}/>
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
        <Group justify='flex-end' pt={20}>
        <Pagination total={10} />
        </Group>
    </>
  );
}

