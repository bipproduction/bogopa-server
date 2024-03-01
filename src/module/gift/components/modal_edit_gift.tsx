'use client'
import { Alert, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from "react-simple-toasts"
import { Warna } from '@/module/_global';
import { isModalGift } from '../val/isModalGift';

export default function ModalEditGift() {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalGift)

  async function AddVip() {
    setOpenModal(false)
    toast("Edit GIFT Success", { theme: "dark" })
  }
  return (
    <>
      <Box>
        <Alert color={'pink'} variant="light">
          <Text fw={700} ta={"center"} mb={20} mt={20} c={Warna.ungu}>
            ANDA YAKIN INGIN EDIT GIFT?
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
        </Alert>
      </Box>
    </>
  );
}

