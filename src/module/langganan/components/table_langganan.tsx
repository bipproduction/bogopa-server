'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Anchor, Box, Button, Center, Group, Pagination, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import { LiaEditSolid } from 'react-icons/lia'
import { useRouter } from 'next/navigation';
import { funAddLogAdmin } from '@/module/log';
import { notifications } from '@mantine/notifications';
import funUpdateLangganan from '../fun/upd_langganan';

export default function TableLangganan({ data }: { data: any }) {
  const router = useRouter()

  async function onChangeActive(id: any, value: any) {
    await funUpdateLangganan({ kat: 'active', body: { id: id, isActive: value } })
    const coba = data.find((x: any) => x.id === id).isActive = value
    await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated langganan data', idContent: id, tbContent: 'langganan' })
    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "green",
      title: 'SUCCESS!',
      message: 'You`ve successfully updated data',
    })
  }

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
                <Table.Th>LANGGANAN</Table.Th>
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
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td >
                    <Anchor onClick={() => router.push('/langganan/' + v.id)}>
                      {v.name}
                    </Anchor>
                  </Table.Td>
                  <Table.Td >
                    <Switch size="lg" checked={v.isActive} onLabel="ACTIVE" offLabel="NON ACTIVE"
                      onChange={(val) => {
                        onChangeActive(v.id, val.currentTarget.checked);
                      }}
                    />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                      <Group>
                        <ActionIcon variant="subtle" onClick={() => router.push('/langganan/edit/' + v.id)} >
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

