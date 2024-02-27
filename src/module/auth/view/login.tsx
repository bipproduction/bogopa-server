"use client"
import { Box, Button, Flex, Grid, Group, PasswordInput, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import React from 'react';
import ViewUser from '../../user/view/view_user';
import { LuShieldCheck } from 'react-icons/lu'
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
          mih={"90vh"}
          w={"80%"}
        >
          <SimpleGrid cols={2} spacing="sm">
            <div>1</div>
            <div>
              <Box>
                <Text fw={"bold"} fz={30}>EXISTING MEMBER</Text>
                <Text fz={20}>Welcome Back!</Text>
              </Box>
              <Stack pt={25}>
                <TextInput
                  label={<Text fz={14}>Email</Text>}
                // onChange={(val) => { setEmail(val.target.value) }}
                />
                <PasswordInput
                  label={<Text fz={14}>Password</Text>}
                // onChange={(val) => { setPassword(val.target.value) }}
                />
                <Group pt={10} justify='space-between'>
                  <Group>
                    <LuShieldCheck size={20} color={"white"} />
                    <Text>Secure Access</Text>
                  </Group>
                  <Text>Secure Access</Text>
                </Group>
                <Button
                  mt={10}
                  mb={10}
                  fullWidth
                  bg={"white"}
                  c={"#005B41"}
                  onClick={() => {
                    router.push('/dashboard')
                  }}
                >
                  Login
                </Button>
              </Stack>
            </div>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
