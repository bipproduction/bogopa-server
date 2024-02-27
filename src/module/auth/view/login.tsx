"use client"
import { Avatar, Box, Button, Center, Container, Flex, Grid, Group, Image, PasswordInput, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import React from 'react';
import ViewUser from '../../user/view/view_user';
import { LuShieldCheck } from 'react-icons/lu'
import { RiUserHeartLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';
import { Warna } from '@/module/_global';

export default function Login() {
  const focusTrapRef = useFocusTrap()
  const router = useRouter()
  return (
    <>
      <Flex justify={"center"} align={"center"} style={{
        height: "100vh",
        background: Warna.bgDashboard
      }} >
        <Box style={{
          backgroundColor: "white",
          padding: '15px 30px',
          borderRadius: 10,
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.10)",
        }}

          w={"80%"}
        >
          <SimpleGrid cols={2} spacing="sm">
            <Box >
              <Image src={"/web/logo.png"} alt='Logo' />
            </Box>
            <Box m={50}>
              <Center>
                <Avatar color="pink" radius="sm" style={{ borderRadius: 100 }} size={100}>
                  <RiUserHeartLine size="50" />
                </Avatar>
              </Center>
              <Box pt={15}>
                <Text ta={"center"} fw={"bold"} c={'pink'} fz={30}>WELCOME BACK!</Text>
                <Text ta={"center"} fz={20}>SIGN IN</Text>
              </Box>
              <Stack pt={25}>
                <TextInput
                  placeholder='Email Address'
                  // onChange={(val) => { setEmail(val.target.value) }}
                  radius={'lg'}
                />
                <PasswordInput
                  placeholder='Password'
                  radius={'lg'}
                // onChange={(val) => { setPassword(val.target.value) }}
                />
                <Group pt={10} justify='space-between'>
                  <Group>
                    <LuShieldCheck size={20} color={"#E64980"} />
                    <Text>Secure Access</Text>
                  </Group>
                  <Group>
                    <LuShieldCheck size={20} color={"#E64980"} />
                    <Text>Secure Access</Text>
                  </Group>
                </Group>
                <Button
                  mt={10}
                  mb={10}
                  radius={"lg"}
                  fullWidth
                  bg={"pink"}
                  c={"white"}
                  onClick={() => {
                    router.push('/dashboard')
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
