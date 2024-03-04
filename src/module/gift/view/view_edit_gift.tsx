"use client"
import { ButtonBack, Warna } from '@/module/_global';
import { Box, Button, FileInput, Modal, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { useAtom } from 'jotai';
import { isModalGift } from '../val/isModalGift';
import ModalEditGift from '../components/modal_edit_gift';

export default function ViewEditGift() {
  const [openModal, setOpenModal] = useAtom(isModalGift)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>EDIT GIFT</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Create Name' label="Name" />
            <FileInput placeholder='Create Image' label="Image" />
            <NumberInput placeholder='Create Harga' label="Harga" />
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
        <ModalEditGift />
      </Modal>
    </>
  );
}

