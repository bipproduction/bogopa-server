"use client"
import { ButtonBack, Warna } from '@/module/_global';
import { Box, Button, Modal, MultiSelect, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { isModalRole } from '../val/isModalRole';
import ModalAddRole from '../components/modal_add_role';
import { notifications } from '@mantine/notifications';

export default function ViewAddRole({ komponen }: { komponen: any }) {
  const [openModal, setOpenModal] = useAtom(isModalRole)
  const [isBody, setBody] = useState<any>({
    name: '',
    komponen: []
  })

  function onConfirmation() {
    if (isBody.name == '' || isBody.komponen.length == 0)
      return notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "red",
        title: 'WARNING!',
        message: 'Please fill out the form completely.',
      })

    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>CREATE ROLE</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Role Name' label="Name"
              value={isBody.name}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  name: val.target.value
                })
              }}
            />
            <MultiSelect
              checkIconPosition="right"
              data={komponen}
              label="Component"
              placeholder="Choose Component"
              value={isBody.komponen}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  komponen: val
                })
              }}
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
        <ModalAddRole data={isBody} onSuccess={() => {
          setBody({
            ...isBody,
            name: '',
            komponen: []
          })
        }} />
      </Modal>
    </>
  );
}

