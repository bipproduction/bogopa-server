"use client"
import { ButtonBack, Warna } from '@/module/_global';
import { Avatar, Box, Button, Center, FileInput, Group, Modal, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { isModalGift } from '../val/isModalGift';
import ModalAddGift from '../components/modal_add_gift';
import _ from 'lodash';
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { notifications } from '@mantine/notifications';

export default function ViewAddGift() {
  const [openModal, setOpenModal] = useAtom(isModalGift)
  const openRef = useRef<() => void>(null)
  const [img, setIMG] = useState<any | null>()
  const [imgForm, setImgForm] = useState<FormData>()
  const [isBody, setBody] = useState<any>({
    name: '',
    price: '',
  })

  function onConfirmation() {
    setOpenModal(true)
  }
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}> CREATE GIFT</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
        <Box p={30}>
          <Stack>
            <Center>
              <Avatar
                src={img}
                size={130}
                radius={100}
                alt="kandidat"
                color="dark"
              />
            </Center>
            <Group justify="center">
              <Center pt={10}>
                <Dropzone
                  openRef={openRef}
                  onDrop={async (files) => {
                    if (!files || _.isEmpty(files))
                      return notifications.show({
                        withCloseButton: false,
                        withBorder: true,
                        color: "yellow",
                        title: 'WARNING!',
                        message: 'No file selected',
                      })
                    const fd = new FormData();
                    fd.append("file", files[0]);
                    setImgForm(fd)
                    const buffer = URL.createObjectURL(new Blob([new Uint8Array(await files[0].arrayBuffer())]))
                    setIMG(buffer)
                  }}
                  onReject={(files) => {
                    return notifications.show({
                      withCloseButton: false,
                      withBorder: true,
                      color: "red",
                      title: 'WARNING!',
                      message: 'Unsupported or too large files',
                    })
                  }}
                  maxSize={3 * 1024 ** 2}
                  accept={IMAGE_MIME_TYPE}
                  activateOnClick={false}
                  styles={{ inner: { pointerEvents: "all" } }}
                >
                  <Group justify="center">
                    <Button
                      color="gray.5"
                      radius="xl"
                      onClick={() => openRef.current?.()}
                    >
                      UPLOAD
                    </Button>
                  </Group>
                </Dropzone>
              </Center>
            </Group>
            <TextInput placeholder='Name Gift' label="Name"
              onChange={(val) => {
                setBody({
                  ...isBody,
                  name: val.target.value
                })
              }} />
            <NumberInput placeholder='Price' label="Price"
              onChange={(val) => {
                setBody({
                  ...isBody,
                  price: val
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
        <ModalAddGift data={isBody} img={imgForm}/>
      </Modal>
    </>
  );
}

