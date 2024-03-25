'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { isModalLangganan } from '../val/isModalLangganan';
import { notifications } from '@mantine/notifications';
import funUpdateLangganan from '../fun/upd_langganan';
import { funAddLogAdmin } from '@/module/log';

export default function ModalEditLangganan({ data, harga }: { data: any, harga: any }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalLangganan)

  async function AddVip() {
    await funUpdateLangganan({ kat: 'full', body: data, harga: harga })
    await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated langganan data', idContent: data.id, tbContent: 'langganan' })
    setOpenModal(false)
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
      <Box p={20}>
        <Group justify="center">
          <Avatar color="red" style={{ borderRadius: 100 }} size={80}>
            <IoWarningOutline size={50} />
          </Avatar>
        </Group>
        <Text fw={700} ta={"center"} mb={20} mt={20}>
          ARE YOU SURE YOU WANT TO SAVE CHANGES?
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
