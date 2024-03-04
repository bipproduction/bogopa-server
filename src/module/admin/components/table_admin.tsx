'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {LiaEditSolid} from 'react-icons/lia'
import {FiFolderPlus} from 'react-icons/fi'
import { useRouter } from 'next/navigation';

export default function TableAdmin() {
  const User = [
    {
      id: 1,
      role: 'User',
      name: 'Doni',
      phone: '08762980230820',
      email: 'inisial@gmail.com',
      jenisKelamin: "Laki-Laki"
    },
    {
      id: 2,
      role: 'User',
      name: 'Roni',
      phone: '08762923232',
      email: 'inisial@gmail.com',
      jenisKelamin: "Laki-Laki"
    },
    {
      id: 3,
      role: 'User',
      name: 'Risma',
      phone: '0871712871872',
      email: 'inisial@gmail.com',
      jenisKelamin: "Perempuan"
    },
    {
      id: 4,
      role: 'User',
      name: 'Desi',
      phone: '08189189211',
      email: 'inisial@gmail.com',
      jenisKelamin: "Perempuan"
    },
    {
      id: 6,
      role: 'User',
      name: 'Angga',
      phone: '08128289289',
      email: 'inisial@gmail.com',
      jenisKelamin: "Laki-Laki"
    },
    {
      id: 7,
      role: 'User',
      name: 'Dwi',
      phone: '08272973929',
      email: 'inisial@gmail.com',
      jenisKelamin: "Perempuan"
    },
    {
      id: 5,
      role: 'User',
      name: 'Lisa',
      phone: '081112612672',
      email: 'inisial@gmail.com',
      jenisKelamin: "Perempuan"
    },
    {
      id: 8,
      role: 'User',
      name: 'Dona',
      phone: '081112612672',
      email: 'inisial@gmail.com',
      jenisKelamin: "Perempuan"
    },
    {
      id: 9,
      role: 'User',
      name: 'Ahmad',
      phone: '081112612672',
      email: 'inisial@gmail.com',
      jenisKelamin: "Laki-Laki"
    },
    {
      id: 10,
      role: 'User',
      name: 'Dono',
      phone: '081112612672',
      email: 'inisial@gmail.com',
      jenisKelamin: "Laki-Laki"
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
                <Table.Th>NO</Table.Th>
                <Table.Th>NAMA</Table.Th>
                <Table.Th>ROLE</Table.Th>
                <Table.Th>PHONE</Table.Th>
                <Table.Th>JENIS KELAMIN</Table.Th>
                <Table.Th>EMAIL</Table.Th>
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
                  <Table.Td>{v.role}</Table.Td>
                  <Table.Td >{v.phone}</Table.Td>
                  <Table.Td >{v.jenisKelamin}</Table.Td>
                  <Table.Td >{v.email}</Table.Td>
                  <Table.Td >
                  <Switch size="lg" onLabel="AKTIF" offLabel="NON AKTIF" />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                    <Group>
                      <ActionIcon variant="subtle" onClick={() => router.push('/admin/edit/' + v.id)}>
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

