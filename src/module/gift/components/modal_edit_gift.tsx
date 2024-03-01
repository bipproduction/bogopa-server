'use client'
import { Alert, Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from "react-simple-toasts"
import { isModalGift } from '../val/isModalGift';
import { IoWarningOutline } from 'react-icons/io5';

export default function ModalEditGift() {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalGift)

  async function AddVip() {
    setOpenModal(false)
    toast("Edit GIFT Success", { theme: "dark" })
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

