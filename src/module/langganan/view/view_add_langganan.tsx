"use client"
import { ButtonBack, Warna } from '@/module/_global';
import { Box, Button, Grid, Group, Modal, MultiSelect, NumberInput, SimpleGrid, Stack, Text, TextInput, Textarea } from '@mantine/core';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { isModalLangganan } from '../val/isModalLangganan';
import ModalAddLangganan from '../components/modal_add_langganan';
import { Link, RichTextEditor } from "@mantine/tiptap"
import { CiPickerEmpty } from "react-icons/ci"
import { useEditor } from "@tiptap/react"
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { notifications } from '@mantine/notifications';

export default function ViewAddLangganan({ komponen }: { komponen: any }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: "",
  })
  const [openModal, setOpenModal] = useAtom(isModalLangganan)
  const [isBody, setBody] = useState<any>({
    name: '',
    desc: '',
    fitur: []
  })
  const newListHarga = {
    name: '',
    duration: 0,
    price: 0,
  }
  const [isNewListHarga, setNewListHarga] = useState<any>([{
    name: '',
    duration: 0,
    price: 0,
  }])

  function onUpdateListHarga(key: string, index: number, value: any) {
    let newArr = [...isNewListHarga]
    newArr[index][key] = value
    setNewListHarga(newArr)
  }

  function onDeleteListHarga(index: number) {
    let newArr = [...isNewListHarga]
    newArr.splice(index, 1)
    setNewListHarga(newArr)
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
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>CREATE LANGGANAN</Text>
      </Box>
      <Box style={{
        border: `1px solid ${Warna.warnaBorder}`,
        borderRadius: 10,
        boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
      }}>
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
            {/* <Box pt={5}>
              <Text fz={15}>Description</Text>
              <RichTextEditor editor={editor}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ColorPicker
                    colors={[
                      '#25262b',
                      '#868e96',
                      '#fa5252',
                      '#e64980',
                      '#be4bdb',
                      '#7950f2',
                      '#4c6ef5',
                      '#228be6',
                      '#15aabf',
                      '#12b886',
                      '#40c057',
                      '#82c91e',
                      '#fab005',
                      '#fd7e14',
                    ]}
                  />

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Control interactive={false}>
                      <CiPickerEmpty size="1rem" />
                    </RichTextEditor.Control>
                    <RichTextEditor.Color color="#F03E3E" />
                    <RichTextEditor.Color color="#7048E8" />
                    <RichTextEditor.Color color="#1098AD" />
                    <RichTextEditor.Color color="#37B24D" />
                    <RichTextEditor.Color color="#F59F00" />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.UnsetColor />
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
              </RichTextEditor>
            </Box> */}
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
                      value={v.duration}
                      onChange={(val) => {
                        onUpdateListHarga('duration', i, val)
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={3}>
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
                  <Grid.Col span={2} pt={32}>
                    <Group justify='space-between'>
                      <Button>edit</Button>
                      {(isNewListHarga.length == 1)
                        ?
                        <Button disabled>delete</Button>
                        : <Button onClick={() => onDeleteListHarga(i)}>delete</Button>
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
      </Box >
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalAddLangganan data={isBody} listHarga={isNewListHarga}
          onSuccess={() => {
            setBody({
              ...isBody,
              name: '',
              desc: '',
              fitur: []
            })
            setNewListHarga([{
              name: '',
              duration: 0,
              price: 0,
            }])
          }}
        />
      </Modal>
    </>
  );
}

