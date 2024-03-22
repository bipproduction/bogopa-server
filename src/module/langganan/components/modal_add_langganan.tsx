'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { isModalLangganan } from '../val/isModalLangganan';
import { notifications } from '@mantine/notifications';
import { funAddLogAdmin } from '@/module/log';
import funAddLangganan from '../fun/add_langganan';

export default function ModalAddLangganan({ data, listHarga, onSuccess }: { data: any, listHarga: any, onSuccess: (val: any) => void }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalLangganan)

  async function AddVip() {
    const insert = await funAddLangganan({ body: data, harga: listHarga })
    await funAddLogAdmin({ act: 'CREATE', desc: 'User created langganan data', idContent: insert.data, tbContent: 'langganan' })
    setOpenModal(false)
    onSuccess(true)
    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "green",
      title: 'SUCCESS!',
      message: 'You`ve successfully created new data',
    })
  }
  return (
    <>
      <Box p={20}>
        <Group justify="center">
          <Avatar color="red" style={{ borderRadius: 100 }} size={80}>
            <IoWarningOutline size={50} />
          </Avatar>
        </Group>
        <Text fw={700} ta={"center"} mb={20} mt={20}>
          ARE YOU SURE YOU WANT TO SAVE NEW DATA?
        </Text>
        <Group justify="space-between" pt={10}>
          <Button
            radius={10}
            color="red"
            w={150}
            onClick={() => setOpenModal(false)}
          >
            NO
          </Button>
          <Button radius={10} color="green" w={150} onClick={() => AddVip()}>
            YES
          </Button>
        </Group>
      </Box>
    </>
  );
}

