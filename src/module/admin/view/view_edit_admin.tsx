"use client"
import { Warna } from '@/module/_global';
import ButtonBack from '@/module/_global/components/button_back';
import { Box, Button, Modal, NumberInput, Select, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { DateInput } from '@mantine/dates';
import { useAtom } from 'jotai';
import { isModalAdmin } from '../val/isModalAdmin';
import ModalAddAdmin from '../components/modal_add_admin';

export default function ViewEditAdmin({id}: {id: string}) {
  const [openModal, setOpenModal] = useAtom(isModalAdmin)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={30} c={Warna.biruTua}>EDIT ADMIN</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Create Name' label="Name" />
            <Select placeholder='Pilih Role' label="Role" />
            <NumberInput placeholder='Create Phone' label="Phone" />
            <TextInput placeholder='Create Email' label="Email" />
            <TextInput placeholder='Create Password' label="Password" />
            <Box pt={10}>
              <Button fullWidth onClick={onConfirmation}>Submit</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalAddAdmin />
      </Modal>
    </>
  );
}

