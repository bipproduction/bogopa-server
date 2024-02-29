"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, AppShellNavbar, AppShellSection, Box, Burger, Divider, Grid, Group, Modal, NavLink, Skeleton, Stack, Text, Title, Tooltip } from '@mantine/core';
import { DataNavbarBuka } from '../components/data_navbar_buka';
import { DataNavbarTertutup } from '../components/data_navbar_tertutup';
import { Warna } from '../../bin/WARNA';
import { Avatar } from '@mantine/core'

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  //   const [valOpenModal, setOpenModal] = useAtom(isModalLayout)
  const [opened, { toggle }] = useDisclosure();
  const [isOpenNavbar, setOpenNavbar] = useState(false)
  const [isNavOpt, setNavOpt] = useState({ width: 250, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })

  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  return (
    <>
      <AppShell
        navbar={isNavOpt}
      >
        {isOpenNavbar &&
          (
            <AppShellNavbar pl={23} pt={20} bg={Warna.bgNavbarKecil} style={{
              border: "none"
            }}>
              <Group>
                <Avatar color="pink" radius="xl" size={'lg'}>MA</Avatar>
                <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
              </Group>
              <Divider my={'md'} size={'xs'} mr={15} color={Warna.warnaBorder} />
              <Group>
                <Stack align="center" p={"xs"}>
                  {DataNavbarTertutup.map((v, i) => (
                    <Box key={i}>
                      <Tooltip label={v.label} color={v.link === active ? "#E64980" : Warna.ungu} position="right-start">
                        <ActionIcon
                          c={v.link === active ? "#E64980" : Warna.ungu}
                          size={30}
                          variant="subtle"
                          onClick={() => {
                            router.push(v.link);
                          }}
                        >
                          <v.icon size={32} />
                        </ActionIcon>
                      </Tooltip>
                    </Box>
                  ))}

                </Stack>
              </Group>
              <Group style={{
                position: "absolute",
                bottom: 30,
              }}
              >
                <Box>
                  <Divider my={'md'} size={'xs'} mr={15} color={Warna.warnaBorder} />
                  <Group pl={15} >
                    <Group pb={9}>
                      <ActionIcon onClick={() => {
                        setNavOpt({ width: 250, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                        setOpenNavbar(false)
                      }} variant='subtle' c={Warna.ungu}>
                        <MdArrowForwardIos size={30} />
                      </ActionIcon>
                    </Group>
                    <Group justify='center' >
                      <ActionIcon variant='subtle'
                      //   onClick={() => setOpenModal(true)}
                      >
                        <RiLogoutCircleRLine size={30} color={Warna.ungu} />
                      </ActionIcon>
                    </Group>
                  </Group>
                </Box>
              </Group>
            </AppShellNavbar>
          )
        }
        {!isOpenNavbar &&
          <AppShellNavbar bg={Warna.bgNavbarBesar} style={{
            border: "none"
          }} pt={10}>
            <Group pl={15} pt={10}>
              <Avatar color="pink" radius="xl" size={'lg'}>MA</Avatar>
              <Box>
                <Text fw={"bold"}>WIBUDEV</Text>
                <Text>Admin</Text>
              </Box>
            </Group>
            <Divider my={'md'} mx={'md'} size={'xs'} color={Warna.warnaBorder} />
            {DataNavbarBuka.map((item) => {
              return (
                <Box key={item.key} m={5} mt={5} pl={10} pr={10}>
                  <NavLink
                    active
                    style={{ borderRadius: 10, }}
                    label={active === item.link ? (
                      <Group>
                        <item.icon size={25} color='#E64980' />
                        <Box>
                          <Text onClick={() => router.push(item.link)} c={"#E64980"}>
                            {item.label}
                          </Text>
                        </Box>
                      </Group>
                    ) : (
                      <Group>
                        <item.icon size={25} color={Warna.ungu} />
                        <Box>
                          <Text onClick={() => router.push(item.link)} c={Warna.ungu}>
                            {item.label}
                          </Text>
                        </Box>
                      </Group>
                    )
                    }
                    onClick={() => {
                      router.push(item.link);
                    }}
                    color='pink'
                    variant={active == item.link ? 'light' : 'subtle'}
                  />
                </Box>
              )
            })}
            {/* style={{
                position: "absolute",
                bottom: 30,
                cursor: 'pointer',
              }} */}

            <Group style={{
              position: "absolute",
              bottom: 30,
              cursor: 'pointer',
            }} >
              <Box>
                <Box>
                  <Divider my={'md'} mx={'md'} size={'xs'} color={Warna.warnaBorder} />
                </Box>
                <Group>
                  <Group justify='center' pl={20} pb={10}
                    //   onClick={() => setOpenModal(true)}
                    onClick={() => {
                      setNavOpt({ width: 100, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                      setOpenNavbar(true)
                    }}
                  >
                    <ActionIcon variant='subtle' c={Warna.ungu}>
                      <MdArrowBackIos size={30} />
                    </ActionIcon>
                    <Text c={Warna.ungu}>MINIMIZE</Text>
                  </Group>
                  <Group justify='center' pl={20}
                  //   onClick={() => setOpenModal(true)}
                  >
                    <ActionIcon variant='subtle'>
                      <RiLogoutCircleRLine size={30} color={Warna.ungu} />
                    </ActionIcon>
                    <Text c={Warna.ungu}>LOGOUT</Text>
                  </Group>
                </Group>
              </Box>
            </Group>


          </AppShellNavbar>
        }
        <AppShell.Main
          bg={Warna.bgDashboard}
        >
          <Box pt={20} pr={20} pb={20} >
            <Box style={{
              backgroundColor: "white",
              padding: '15px 30px',
              border: `1px solid ${Warna.warnaBorder}`,
              borderRadius: 10,
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.10)",
            }}
              mih={"95vh"}
            >
              {children}
            </Box>
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

