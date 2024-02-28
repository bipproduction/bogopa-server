"use client"
import { Warna } from '@/module/_global';
import ButtonBack from '@/module/_global/components/button_back';
import { Box, Button, Modal, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { DateInput } from '@mantine/dates';
import { useAtom } from 'jotai';
import { isModalVip } from '../val/isModalVip';
import ModalAddVip from '../components/modal_add_vip';

export default function ViewAddVip() {
  const [openModal, setOpenModal] = useAtom(isModalVip)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={30} c={Warna.biruTua}>CREATE VIP</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Create Name' label="Name" />
            <NumberInput placeholder='Create Harga' label="Harga" />
            <Textarea placeholder='Create Detail' label="Detail" />
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
        <ModalAddVip />
      </Modal>
    </>
  );
}

