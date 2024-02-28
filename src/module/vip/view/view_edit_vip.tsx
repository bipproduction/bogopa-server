'use client'
import { useAtom } from 'jotai';
import React from 'react';
import { isModalVip } from '../val/isModalVip';
import ButtonBack from '@/module/_global/components/button_back';
import { Box, Button, Modal, Stack, Text, TextInput } from '@mantine/core';
import { Warna } from '@/module/_global';
import ModalEditVip from '../components/modal_edit_vip';

export default function ViewEditVip({id}: {id: string}) {
  const [openModal, setOpenModal] = useAtom(isModalVip)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={30} c={Warna.biruTua}>EDIT VIP</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Create Name' label="Name" />
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
        <ModalEditVip/>
      </Modal>
    </>
  );
}

