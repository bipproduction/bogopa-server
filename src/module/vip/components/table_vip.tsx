'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {LiaEditSolid} from 'react-icons/lia'
import {FiFolderPlus} from 'react-icons/fi'

export default function TableVip() {
  const User = [
    {
      id: 1,
      name: 'Doni',
      datamulai: '22 Januari 2024',
      dataselesai: '22 Februari 2024',
    },
    {
      id: 2,
      name: 'Roni',
      datamulai: '23 Januari 2024',
      dataselesai: '23 Februari 2024',
    },
    {
      id: 3,
      name: 'Risma',
      datamulai: '30 Januari 2024',
      dataselesai: '30 Februari 2024',
    },
    {
      id: 4,
      name: 'Desi',
      datamulai: '22 Agustus 2024',
      dataselesai: '22 November 2024',
    },
    {
      id: 6,
      name: 'Angga',
      datamulai: '11 Juni 2024',
      dataselesai: '11 Juli 2024',
    },
    {
      id: 7,
      name: 'Dwi',
      datamulai: '12 Oktober 2024',
      dataselesai: '12 November 2024',
    },
    {
      id: 5,
      name: 'Lisa',
      datamulai: '22 Desember 2023',
      dataselesai: '22 Januari 2024',
    },
    {
      id: 8,
      name: 'Dona',
      datamulai: '22 Januari 2024',
      dataselesai: '22 Februari 2024',
    },
    {
      id: 9,
      name: 'Ahmad',
      datamulai: '22 Januari 2024',
      dataselesai: '22 Februari 2024',
    },
    {
      id: 10,
      name: 'Dono',
      datamulai: '22 Januari 2024',
      dataselesai: '22 Februari 2024',
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
                <Table.Th>WAKTU MULAI</Table.Th>
                <Table.Th>WAKTU SELESAI</Table.Th>
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
                  <Table.Td >{v.datamulai}</Table.Td>
                  <Table.Td >{v.dataselesai}</Table.Td>
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

