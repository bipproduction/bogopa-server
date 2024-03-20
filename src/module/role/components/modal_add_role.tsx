'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { isModalRole } from '../val/isModalRole';
import { IoWarningOutline } from 'react-icons/io5';
import { notifications } from '@mantine/notifications';
import funAddRoleAdmin from '../fun/add_role';
import { funAddLogAdmin } from '@/module/log';

export default function ModalAddRole({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalRole)

  async function AddVip() {
    const insert = await funAddRoleAdmin({ body: data })
    await funAddLogAdmin({ act: 'CREATE', desc: 'User created role data', idContent: insert.data, tbContent: 'adminRole' })
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

