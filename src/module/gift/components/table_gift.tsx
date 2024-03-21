'use client'
import { Warna } from '@/module/_global';
import { ActionIcon, Avatar, Box, Center, Group, Switch, Table, Text } from '@mantine/core';
import React from 'react';
import { LiaEditSolid } from 'react-icons/lia'
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { funAddLogAdmin } from '@/module/log';
import funUpdateGift from '../fun/upd_gift';

export default function TableGift({ data }: { data: any }) {
  const router = useRouter()

  async function onChangeActive(id: any, value: any) {
    await funUpdateGift({ kat: 'active', body: { id: id, isActive: value } })
    const coba = data.find((x: any) => x.id === id).isActive = value
    await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated data gift', idContent: id, tbContent: 'gift' })
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
                      <Avatar style={{ cursor: "pointer" }} src={`/api/img/gift/${v.img}`} size='lg' mr={2} onClick={() => router.push('/gift/' + v.id)} />
                      <Box>
                        <Text fw={"bold"}>{v.name}</Text>
                        <Text c={"gray"} fz={14}>{v.tgl}</Text>
                      </Box>
                    </Group>
                  </Table.Td>
                  <Table.Td >Rp. {Intl.NumberFormat("id-ID").format(Number(v.price))}</Table.Td>
                  <Table.Td >
                    <Switch size="lg" onLabel="ACTIVE" offLabel="NON ACTIVE" 
                    checked={v.isActive}
                    onChange={(val) => {
                      onChangeActive(v.id, val.currentTarget.checked);
                    }}/>
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

