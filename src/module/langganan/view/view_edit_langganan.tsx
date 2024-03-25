'use client'
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { ActionIcon, Box, Button, Grid, Group, Modal, MultiSelect, NumberInput, Stack, Text, TextInput, Textarea } from '@mantine/core';
import { ButtonBack, Warna } from '@/module/_global';
import { isModalDetailLangganan, isModalLangganan } from '../val/isModalLangganan';
import ModalEditLangganan from '../components/modal_edit_langganan';
import ModalDeleteDetailLangganan from '../components/modal_del_detail_langganan';
import { notifications } from '@mantine/notifications';
import { GoTrash } from 'react-icons/go';

export default function ViewEditLangganan({ data, komponen }: { data: any, komponen: any }) {
  const [openModal, setOpenModal] = useAtom(isModalLangganan)
  const [openModalDetail, setOpenModalDetail] = useAtom(isModalDetailLangganan)
  const [isNewListHarga, setNewListHarga] = useState<any>(data.harga)
  const [isBody, setBody] = useState<any>({
    id: data.langganan.id,
    name: data.langganan.name,
    desc: data.langganan.description,
    fitur: data.fitur
  })
  const [isDelete, setDelete] = useState<any>({
    index: undefined,
    id: undefined
  })
  const newListHarga = {
    id: undefined,
    name: '',
    rangeTime: 0,
    price: 0,
  }

  function onUpdateListHarga(key: string, index: number, value: any) {
    let newArr = [...isNewListHarga]
    newArr[index][key] = value
    setNewListHarga(newArr)
  }

  function onDeleteListHarga(index: number, id: any) {
    setDelete({
      ...isDelete,
      index: index,
      id: id
    })
    setOpenModalDetail(true)
  }



  function onConfirmation() {
    if (Object.values(isBody).includes("") || isBody.fitur.length == 0 || Object.values(isNewListHarga[0]).includes(""))
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
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>EDIT LANGGANAN</Text>
      </Box>
      <Box p={30}>
        <Stack>
          <TextInput label="Name"
            value={isBody.name}
            onChange={(val) => {
              setBody({
                ...isBody,
                name: val.target.value
              })
            }}
          />

          <TextInput label="Description"
            value={isBody.desc}
            onChange={(val) => {
              setBody({
                ...isBody,
                desc: val.target.value
              })
            }}
          />
          <MultiSelect
            checkIconPosition="right"
            data={komponen}
            label="Features"
            placeholder="Choose Features"
            value={isBody.fitur}
            onChange={(val) => {
              setBody({
                ...isBody,
                fitur: val
              })
            }}
          />
          <Box pt={10}>
            <Group justify='space-between' pb={10}>
              <Text>Daftar Harga</Text>
              <Button onClick={() => {
                setNewListHarga([...isNewListHarga, newListHarga])
              }}>Tambah</Button>
            </Group>
            {isNewListHarga.map((v: any, i: any) => (
              <Grid key={i}>
                <Grid.Col span={4}>
                  <TextInput label='Name'
                    value={v.name}
                    onChange={(val) => {
                      onUpdateListHarga('name', i, val.target.value)
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <NumberInput placeholder='0' label="Duration"
                    rightSection={<Text mr={20}>days</Text>}
                    thousandSeparator={'.'}
                    decimalSeparator=','
                    allowDecimal={false}
                    value={v.rangeTime}
                    onChange={(val) => {
                      onUpdateListHarga('rangeTime', i, val)
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <NumberInput placeholder='000' label="Price"
                    leftSection={'Rp.'}
                    thousandSeparator={'.'}
                    decimalSeparator=','
                    allowDecimal={false}
                    value={v.price}
                    onChange={(val) => {
                      onUpdateListHarga('price', i, val)
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={1} pt={32}>
                  <Group justify='space-between'>
                    {(isNewListHarga.length == 1)
                      ?
                      <ActionIcon variant="outline" color='red' disabled size="input-sm" aria-label="Settings">
                        <GoTrash />
                      </ActionIcon>
                      :
                      <ActionIcon variant="outline" color='red' size="input-sm" aria-label="Settings"
                        onClick={() => onDeleteListHarga(i, v.id)}>
                        <GoTrash />
                      </ActionIcon>
                    }
                  </Group>
                </Grid.Col>
              </Grid>
            ))}

          </Box>
          <Box pt={10}>
            <Button fullWidth onClick={onConfirmation}>Submit</Button>
          </Box>
        </Stack>
      </Box >
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalEditLangganan data={isBody} harga={isNewListHarga} />
      </Modal>

      <Modal
        opened={openModalDetail}
        onClose={() => setOpenModalDetail(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalDeleteDetailLangganan data={isDelete}
          onSuccess={(val) => {
            let newArr = [...isNewListHarga]
            newArr.splice(val, 1)
            setNewListHarga(newArr)
          }} />
      </Modal>
    </>
  );
}

