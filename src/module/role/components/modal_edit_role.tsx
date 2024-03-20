'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { isModalRole } from '../val/isModalRole';
import { IoWarningOutline } from 'react-icons/io5';
import { notifications } from '@mantine/notifications';
import funUpdateRoleAdmin from '../fun/upd_role';
import { funAddLogAdmin } from '@/module/log';

export default function ModalEditRole({ data }: { data: any }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalRole)

  async function AddVip() {
    await funUpdateRoleAdmin({ kat: 'full', body: data })
    await funAddLogAdmin({ act: 'UPDATE', desc: 'User updated role data', idContent: data.id, tbContent: 'adminRole' })
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

