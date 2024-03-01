'use client'
import { useAtom } from 'jotai';
import React from 'react';
import { Box, Button, Modal, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import { ButtonBack, Warna } from '@/module/_global';
import { isModalLangganan } from '../val/isModalLangganan';
import ModalEditLangganan from '../components/modal_edit_langganan';

export default function ViewEditLangganan({ id }: { id: string }) {
  const [openModal, setOpenModal] = useAtom(isModalLangganan)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>EDIT LANGGANAN</Text>
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
        <ModalEditLangganan />
      </Modal>
    </>
  );
}

