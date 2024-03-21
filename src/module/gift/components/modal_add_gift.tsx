'use client'
import { Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { isModalGift } from '../val/isModalGift';
import { IoWarningOutline } from 'react-icons/io5';
import { notifications } from '@mantine/notifications';
import funAddGift from '../fun/add_gift';
import { funAddLogAdmin } from '@/module/log';

export default function ModalAddGift({ data, img, onSuccess }: { data: any, img: any, onSuccess: (val: any) => void }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalGift)

  async function AddVip() {
    const insert = await funAddGift({ body: data, img: img })
    await funAddLogAdmin({ act: 'CREATE', desc: 'User created data gift', idContent: insert.data, tbContent: 'gift' })
    onSuccess(true)
    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "green",
      title: 'SUCCESS!',
      message: 'You`ve successfully created new data',
    })
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

