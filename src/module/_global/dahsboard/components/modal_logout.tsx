'use client'
import { Avatar, Box, Button, Group, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { isModalDashboard } from '../val/val_dashboard';
import { funLogout } from '@/module/auth';

export default function ModalLogoutAdmin() {
   const [valOpenModal, setOpenModal] = useAtom(isModalDashboard)

   async function onLogout() {
      setOpenModal(false)
      await funLogout()
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
               Are you sure you want to logout?
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
               <Button radius={10} color="green" w={150} onClick={() => onLogout()}>
                  YES
               </Button>
            </Group>
         </Box>
      </>
   );
}

