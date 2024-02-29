'use client'
import { Warna } from '@/module/_global';
import ButtonBack from '@/module/_global/components/button_back';
import { Avatar, Box, Divider, Grid, Group, Text } from '@mantine/core';
import React from 'react';
import { MdOutlineMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import TabUser from '../components/tab_user';

export default function ViewDetailUser({ id }: { id: string }) {
  return (
    <>
      <ButtonBack />
      <Box pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>DETAIL USER</Text>
      </Box>
      <Box pt={20}>
        <Box style={{
          border: `1px solid ${Warna.warnaBorder}`,
          borderRadius: 10,
          boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
        }}>
          <Box p={30}>
            <Avatar style={{ cursor: "pointer" }} src={"https://i.pravatar.cc/200?img=4"} size={70} mr={2} />
            <Text pt={10} fz={20}>Doni Setiawan</Text>
            <Text fz={14} c={"gray"}>Software Developer</Text>
            <Box pt={30} pb={30}>
              <Divider />
            </Box>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <MdOutlineMailOutline size={25} color={Warna.pink} />
                  <Text c={"pink"}>Email</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  donisetiawan@gmail.com</Text>
              </Grid.Col>
            </Grid>
            <Grid pb={20}>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <MdOutlinePhoneIphone size={25} color={Warna.pink} />
                  <Text c={"pink"}>Phone</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  +62 877 0179 0942</Text>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={3}>
                <Group gap={8} >
                  <LiaBirthdayCakeSolid size={25} color={Warna.pink} />
                  <Text c={"pink"}>Birth</Text>
                </Group>
                <Text c={"pink"}></Text>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text >:  12 Desember 1999</Text>
              </Grid.Col>
            </Grid>
            <Box pt={30} pb={30}>
              <Divider />
            </Box>
            <TabUser/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

