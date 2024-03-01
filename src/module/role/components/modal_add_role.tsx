'use client'
import { Alert, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from "react-simple-toasts"
import { Warna } from '@/module/_global';
import { isModalRole } from '../val/isModalRole';

export default function ModalAddRole() {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalRole)

  async function AddVip() {
    setOpenModal(false)
    toast("Create ROLE Success", { theme: "dark" })
  }
  return (
    <>
      <Box>
        <Alert color={'pink'} variant="light">
          <Text fw={700} ta={"center"} mb={20} mt={20} c={Warna.ungu}>
            ANDA YAKIN INGIN MENAMBAHKAN ROLE?
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

