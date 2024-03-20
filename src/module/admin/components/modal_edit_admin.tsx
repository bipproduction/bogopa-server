'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import React from 'react';
import { isModalAdmin } from '../val/isModalAdmin';
import { IoWarningOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';
import { funAddLogAdmin } from '@/module/log';
import funUpdateAdmin from '../fun/upd_admin';

export default function ModalEditAdmin({ data }: { data: any }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalAdmin)

  async function AddVip() {
    const upd = await funUpdateAdmin({ kat: 'full', body: data })
    if (upd.success) {
      await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated data admin', idContent: data.id, tbContent: 'adminUser' })
      notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "green",
        title: 'SUCCESS!',
        message: 'You`ve successfully updated data',
      })
    } else {
      notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "red",
        title: 'ERROR!',
        message: upd.message,
      })
    }

    setOpenModal(false)
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

