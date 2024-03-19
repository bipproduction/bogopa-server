'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Box, Center, Group, Switch, Table } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import funUpdateRoleAdmin from '../fun/upd_role';
import { notifications } from '@mantine/notifications';
import { funAddLogAdmin } from '@/module/log';

export default function TableRole({ data }: { data: any }) {
  const router = useRouter()
  const [isData, setData] = useState(data)

  async function onChangeActive(id: any, value: any) {
    console.log(id, value)
    await funUpdateRoleAdmin({ kat: 'active', body: { id: id, isActive: value } })
    const coba = data.find((x: any) => x.id === id).isActive = value
    await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated role data', idContent: id, tbContent: 'adminRole' })
    setData(coba)
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
              {data.map((v: any, i: any) => (
                <Table.Tr key={i}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>{v.name}</Table.Td>
                  <Table.Td >
                    <Switch size="lg" checked={v.isActive} onLabel="AKTIF" offLabel="NON AKTIF"
                      onChange={(val) => {
                        onChangeActive(v.id, val.currentTarget.checked);
                      }}
                    />
                  </Table.Td>
                  <Table.Td >
                    <Center>
                      <Group>
                        <ActionIcon variant="subtle" onClick={() => router.push("/role/edit/" + v.id)}>
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

