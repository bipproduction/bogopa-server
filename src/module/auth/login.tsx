"use client"
import { Box, Button, Flex, Group, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import React from 'react';
import ViewUser from '../user/view/view_user';
import { LuShieldCheck } from 'react-icons/lu'
import { useRouter } from 'next/navigation';

export default function Login() {
  const focusTrapRef = useFocusTrap()
  const router =useRouter()
  return (
    <>
      <Flex justify={"center"} align={"center"} style={{
        height: "100vh"
      }} >
        <Box
          style={{
            backgroundColor: "#000000",
            border: `2px solid ${"#280B4F"}`,
            padding: 30,
            borderRadius: 10,
          }}
          w={{ base: 300, sm: 400 }}
          ref={focusTrapRef}
        >
          <Box>
            <Text fw={"bold"} fz={30} c={"white"}>EXISTING MEMBER</Text>
            <Text fz={20} c={"white"}>Welcome Back!</Text>
          </Box>
          <Stack pt={25}>
            <TextInput
              label={<Text fz={14} c={"white"}>Email</Text>}
            // onChange={(val) => { setEmail(val.target.value) }}
            />
            <PasswordInput
              label={<Text fz={14} c={"white"}>Password</Text>}
            // onChange={(val) => { setPassword(val.target.value) }}
            />
            <Group pt={10} justify='space-between'>
              <Group>
                <LuShieldCheck size={20} color={"white"} />
                <Text c={"white"}>Secure Access</Text>
              </Group>
              <Text c={"white"}>Secure Access</Text>
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
        </Box>

      </Flex>
    </>
  );
}
