"use client"
import { ButtonBack, Warna } from '@/module/_global';
import { Box, Button, FileInput, Modal, MultiSelect, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { useAtom } from 'jotai';
import { isModalRole } from '../val/isModalRole';
import ModalAddRole from '../components/modal_add_role';
import ModalEditRole from '../components/modal_edit_role';

export default function ViewEditRole() {
  const [openModal, setOpenModal] = useAtom(isModalRole)

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={30} c={Warna.biruTua}>EDIT ROLE</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Create Name' label="Name" />
            <MultiSelect
              checkIconPosition="right"
              data={['Home', 'User', 'VIP', 'Transaksi', 'Admin']}
              label="Component"
              placeholder="Create Component"
              defaultValue={["Home"]}
            />
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
        <ModalEditRole />
      </Modal>
    </>
  );
}

