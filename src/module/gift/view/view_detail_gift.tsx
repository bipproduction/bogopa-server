'use client'
import { ButtonBack, Warna } from '@/module/_global';
import { Avatar, Box, Divider, Grid, Group, Text } from '@mantine/core';
import React from 'react';
import { MdOutlineAccessTimeFilled, MdOutlineMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { FaUserTag } from 'react-icons/fa';
import { TbReportMoney } from 'react-icons/tb';
import moment from 'moment';

export default function ViewDetailGift({ data, terbeli }: { data: any, terbeli: any }) {
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
            <Avatar style={{ cursor: "pointer" }} src={`/api/img/gift/${data.img}`} size={70} mr={2} />
            <Text pt={10} fz={20}>{data.name}</Text>
            <Text fz={14} c={"gray"}>{(data.isActive) ? 'Active' : 'Non Active'}</Text>
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
                      <Text c={"grey"} pl={10}>Amount Sold</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <FaUserTag size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>{terbeli}</Text>
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
                      <Text c={"grey"} pl={10}>Price</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <TbReportMoney size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>Rp. {Intl.NumberFormat("id-ID").format(Number(data.price))}</Text>
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
                      <Text c={"grey"} pl={10}>Last Updated</Text>
                      <Group gap={8} pt={20} pb={20} justify='center'>
                        <MdOutlineAccessTimeFilled size={25} color={Warna.pink} />
                        <Text c={"pink"} pt={5}>{moment(data.updatedAt).format('Do MMMM YYYY, h:mm')}</Text>
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

