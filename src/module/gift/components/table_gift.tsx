'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {LiaEditSolid} from 'react-icons/lia'
import {FiFolderPlus} from 'react-icons/fi'

export default function TableGift() {
  const User = [
    {
      id: 1,
      name: 'Doni',
      price: '32.000'
    },
    {
      id: 2,
      name: 'Roni',
      price: '200.000'
    },
    {
      id: 3,
      name: 'Risma',
      price: '50.000'
    },
    {
      id: 4,
      name: 'Desi',
      price: '62.000'
    },
    {
      id: 6,
      name: 'Angga',
      price: '80.000'
    },
    {
      id: 7,
      name: 'Dwi',
      price: '120.000'
    },
    {
      id: 5,
      name: 'Lisa',
      price: '890.000'
    },
    {
      id: 8,
      name: 'Dona',
      price: '100.000'
    },
    {
      id: 9,
      name: 'Linda',
      price: '20.000'
    },
    {
      id: 10,
      name: 'Ilham',
      price: '15.000'
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
                <Table.Th>PRICE</Table.Th>
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
                  <Table.Td >{v.price}</Table.Td>
                  <Table.Td >
                  <Switch size="lg" onLabel="AKTIF" offLabel="NON AKTIF" />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                    <Group>
                      <ActionIcon variant="subtle">
                      <LiaEditSolid size={30}/>
                      </ActionIcon>
                      <ActionIcon variant="subtle">
                      <AiOutlineFileSearch size={30}/>
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

