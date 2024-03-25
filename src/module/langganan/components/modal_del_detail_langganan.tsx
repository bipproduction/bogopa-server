'use client'
import { Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { isModalDetailLangganan } from '../val/isModalLangganan';
import funDeleteDetailLangganan from '../fun/del_detail_langganan';
import _ from 'lodash';

export default function ModalDeleteDetailLangganan({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
   const [valOpenModal, setOpenModal] = useAtom(isModalDetailLangganan)

   async function AddVip() {
      if (!_.isUndefined(data.id)) {
         const insert = await funDeleteDetailLangganan({ id: data.id })
      }
      setOpenModal(false)
      onSuccess(data.index)
   }
   return (
      <>
         <Box p={20}>
            <Group justify="center">
               <Avatar color="red" style={{ borderRadius: 100 }} size={80}>
                  <IoWarningOutline size={50} />
               </Avatar>
            </Group>
            <Text fw={700} ta={"center"} mb={20} mt={20}>
               ARE YOU SURE YOU WANT TO DELETE?
            </Text>
            <Group justify="space-between" pt={10}>
               <Button
                  radius={10}
                  color="red"
                  w={150}
                  onClick={() => setOpenModal(false)}
               >
                  NO
               </Button>
               <Button radius={10} color="green" w={150} onClick={() => AddVip()}>
                  YES
               </Button>
            </Group>
         </Box>
      </>
   );
}

