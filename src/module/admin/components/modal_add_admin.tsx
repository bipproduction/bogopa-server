'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { isModalAdmin } from '../val/isModalAdmin';
import { IoWarningOutline } from "react-icons/io5";
import { notifications } from '@mantine/notifications';
import funAddAdmin from '../fun/add_admin';
import { funAddLogAdmin } from '@/module/log';

export default function ModalAddAdmin({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalAdmin)

  async function AddVip() {
    const insert = await funAddAdmin({ body: data })
    if (insert.success) {
      await funAddLogAdmin({ act: 'CREATE', desc: 'User created data admin', idContent: insert.data, tbContent: 'adminUser' })
      onSuccess(true)
      notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "green",
        title: 'SUCCESS!',
        message: 'You`ve successfully created new data',
      })
    } else {
      notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "red",
        title: 'ERROR!',
        message: insert.messsage,
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

