'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Button, Center, Group, Pagination, Table, Text } from '@mantine/core';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

export default function TableTransaksi() {
  const User = [
    {
      id: 1,
      name: 'Doni',
      status: 'Pending',
      price: '120.000'
    },
    {
      id: 2,
      name: 'Roni',
      status: 'Selesai',
      price: '120.000'
    },
    {
      id: 3,
      name: 'Risma',
      status: 'Pending',
      price: '120.000'
    },
    {
      id: 4,
      name: 'Desi',
      status: 'Pending',
      price: '120.000'
    },
    {
      id: 6,
      name: 'Angga',
      status: 'Selesai',
      price: '120.000'
    },
    {
      id: 7,
      name: 'Dwi',
      status: 'Pending',
      price: '120.000'
    },
    {
      id: 5,
      name: 'Lisa',
      status: 'Pending',
      price: '120.000'
    },
    {
      id: 8,
      name: 'Dona',
      status: 'Selesai',
      price: '120.000'
    },
    {
      id: 9,
      name: 'Ahmad',
      status: 'Selesai',
      price: '120.000'
    },
    {
      id: 10,
      name: 'Dono',
      status: 'Pending',
      price: '120.000'
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
                <Table.Th>TOTAL PROCE</Table.Th>
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
                  <Table.Td>{v.name}</Table.Td>
                  <Table.Td >{v.price}</Table.Td>
                  <Table.Td >{v.status}</Table.Td>
                  <Table.Td >
                    <Center>
                    <ActionIcon variant="subtle">
                      <AiOutlineFileSearch size={30}/>
                      </ActionIcon>
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

