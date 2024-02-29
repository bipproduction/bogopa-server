'use client'
import { ButtonBack, Warna } from '@/module/_global';
import { Avatar, Box, Divider, Grid, Group, Text } from '@mantine/core';
import React from 'react';
import { MdOutlineAccessTimeFilled, MdOutlineMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaUserTag } from 'react-icons/fa';
import { TbReportMoney } from 'react-icons/tb';

export default function ViewDetailGift({ id }: { id: string }) {
  return (
    <>
      <ButtonBack />
      <Box pb={20} pt={20}>
        <Text fz={25} c={Warna.biruTua} fw={'bold'}>DETAIL GIFT</Text>
      </Box>
      <Box>
        <Box style={{
          border: `1px solid ${Warna.warnaBorder}`,
          borderRadius: 10,
          boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.10)",
        }}>
          <Box p={30}>
            <Avatar style={{ cursor: "pointer" }} src={"https://i.pravatar.cc/200?img=4"} size={70} mr={2} />
            <Text pt={10} fz={20}>GIFT SINGA</Text>
            <Text fz={14} c={"gray"}>Status Aktif</Text>
            <Box pt={30} pb={30}>
              <Divider />
            </Box>
            <Box pt={10}>
              <Grid>
                <Grid.Col span={3}>
                  <Box>
                    <Box style={{
                      backgroundColor: '#E5E9F1',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                      <Text c={"grey"} pl={10} >Total Terbeli</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <FaUserTag size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>429 PEMBELI</Text>
                      </Group>
                    </Box>
                  </Box>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Box>
                    <Box style={{
                      backgroundColor: '#E5E9F1',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                      <Text c={"grey"} pl={10} >Harga</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <TbReportMoney size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>Rp.1.050.000</Text>
                      </Group>
                    </Box>
                  </Box>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Box>
                    <Box style={{
                      backgroundColor: '#E5E9F1',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                      <Text c={"grey"} pl={10} >Time Update</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <MdOutlineAccessTimeFilled size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>3 BULAN</Text>
                      </Group>
                    </Box>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

