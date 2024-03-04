'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { isModalGift } from '../val/isModalGift';
import { IoWarningOutline } from 'react-icons/io5';
import { notifications } from '@mantine/notifications';

export default function ModalEditGift() {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalGift)

  async function AddVip() {
    setOpenModal(false)
    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "green",
      title: 'EDIT GIFT',
      message: 'Edit Gift Success',
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
          ANDA YAKIN INGIN MENGEDIT GIFT?
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

