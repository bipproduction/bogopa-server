'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import React from 'react';
import { isModalAdmin } from '../val/isModalAdmin';
import { IoWarningOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { notifications } from '@mantine/notifications';

export default function ModalEditAdmin() {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalAdmin)

  async function AddVip() {
    setOpenModal(false)
    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "green",
      title: 'EDIT ADMIN',
      message: 'Edit Admin Success',
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
          ANDA YAKIN INGIN MENGEDIT ADMIN?
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

