"use client"
import { ButtonBack, Warna, funValidationEmail } from '@/module/_global';
import { Box, Button, Modal, NumberInput, Select, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { isModalAdmin } from '../val/isModalAdmin';
import ModalAddAdmin from '../components/modal_add_admin';
import _ from 'lodash';
import { notifications } from '@mantine/notifications';

export default function ViewAddAdmin({ role }: { role: any }) {
  const [openModal, setOpenModal] = useAtom(isModalAdmin)
  const [isBody, setBody] = useState<any>({
    idAdminRole: null,
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  async function onConfirmation() {
    if (Object.values(isBody).includes("") || Object.values(isBody).includes(null))
      return notifications.show({
        withCloseButton: false,
        withBorder: true,
        color: "red",
        title: 'WARNING!',
        message: 'Please fill out the form completely.',
      })

    if (await funValidationEmail({ email: isBody.email }))
      return setOpenModal(true)

    notifications.show({
      withCloseButton: false,
      withBorder: true,
      color: "red",
      title: 'WARNING!',
      message: 'Invalid email address',
    })
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>CREATE ADMIN</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <TextInput placeholder='Name Admin' label="Name"
              value={isBody.name}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  name: val.target.value
                })
              }}
            />
            <Select placeholder='Choose Role' label="Role Admin"
              data={role.map((pro: any) => ({
                value: String(pro.id),
                label: pro.name
              }))}
              value={_.toString(isBody.idAdminRole)}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  idAdminRole: Number(val)
                })
              }}
            />
            <NumberInput placeholder='Phone Number' label="Phone"
              value={isBody.phone}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  phone: String(val)
                })
              }} />
            <TextInput placeholder='Email Address' label="Email"
              value={isBody.email}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  email: val.target.value
                })
              }} />
            <TextInput placeholder='Password' label="Password"
              value={isBody.password}
              onChange={(val) => {
                setBody({
                  ...isBody,
                  password: val.target.value
                })
              }} />
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
        <ModalAddAdmin data={isBody}
          onSuccess={(val) => {
            if (val)
              setBody({
                ...isBody,
                idAdminRole: null,
                name: '',
                email: '',
                phone: '',
                password: ''
              })
          }}
        />
      </Modal>
    </>
  );
}

