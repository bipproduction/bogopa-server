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
              <Group pl={11} pt={10}>
                <Text fw={"bold"} fz={20} c={"dark"}>BG</Text>
                <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
              </Group>
              <Group
                pt={30}
              >
                <Stack align="center" p={"xs"}>
                  {DataNavbarTertutup.map((v, i) => (
                    <Box key={i}>
                      <Tooltip label={v.label}>
                        <ActionIcon
                          c={v.link === active ? "#6073e3" : Warna.abuAbu}
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
              <Group
                style={{
                  position: "absolute",
                  bottom: 30,
                }}
                pl={10}
              >
                <Group pb={40}>
                  <ActionIcon onClick={() => {
                    setNavOpt({ width: 250, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                    setOpenNavbar(false)
                  }} variant='subtle' c={Warna.abuAbu}>
                    <MdArrowForwardIos size={30} />
                  </ActionIcon>
                </Group>
                <Group justify='center' >
                  <ActionIcon variant='subtle' 
                //   onClick={() => setOpenModal(true)}
                  >
                    <RiLogoutCircleRLine size={30} color={Warna.abuAbu} />
                  </ActionIcon>
                </Group>
              </Group>
            </AppShellNavbar>
          )
        }
        {!isOpenNavbar &&
          <AppShellNavbar   bg={Warna.bgNavbarBesar} style={{
            border: "none"
          }} pt={10}>
            {DataNavbarBuka.map((item) => {
              return (
                <Box key={item.key} m={5} mt={5} pl={10} pr={10}>
                  <NavLink
                    active
                    style={{borderRadius: 10,}}
                    label={active === item.link ? (
                      <Box>
                        <Text fw={'bold'} onClick={() => router.push(item.link)} c={"#6073e3"}>
                          {item.label}
                        </Text>
                      </Box>
                    ) : (
                      <Box>
                        <Text onClick={() => router.push(item.link)} c={Warna.abuAbu}>
                          {item.label}
                        </Text>

                      </Box>
                    )
                    }
                    onClick={() => {
                      router.push(item.link);
                    }}
                    c={"pink"}
                    variant={active == item.link ?'light' : 'subtle'}
                  />
                </Box>
              )
            })}
            <Group
              style={{
                position: "absolute",
                bottom: 30,
                cursor: 'pointer',
              }}
            >
              <Group justify='center' pl={20} pb={40}
            //   onClick={() => setOpenModal(true)}
            onClick={() => {
              setNavOpt({ width: 100, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
              setOpenNavbar(true)
            }}
              >
                <ActionIcon  variant='subtle' c={Warna.abuAbu}>
                <MdArrowBackIos size={30} />
              </ActionIcon>
                <Text c={Warna.abuAbu}>MINIMIZE</Text>
              </Group>
              <Group justify='center' pl={20} 
            //   onClick={() => setOpenModal(true)}
              >
                <ActionIcon variant='subtle'>
                  <RiLogoutCircleRLine size={30} color={Warna.abuAbu} />
                </ActionIcon>
                <Text c={Warna.abuAbu}>LOGOUT</Text>
              </Group>
            </Group>
            
          </AppShellNavbar>
        }
        <AppShell.Main 
        bg={Warna.bgDashboard}
        >
          <Box pt={10} pr={10} pb={10} >
            <Box style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.15)",
            }}
            mih={"97vh"}
            >
            {children}
            </Box>
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

